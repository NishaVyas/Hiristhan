import re

css_file = 'src/Pages/HireServiceNowPage.css'
with open(css_file, 'r', encoding='utf-8') as f:
    css = f.read()

# Replace the grid definition to use flexbox (it's simpler and automatically handles centering on the last row without complex grid-column math that might break on intermediate breakpoints like tablets)
flex_grid = """
.engagement-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
}
"""
css = re.sub(r'\.engagement-grid\s*\{[^}]*\}', flex_grid.strip(), css, count=1)

# Modify the engagement-card to have width calc
card_match = re.search(r'\.engagement-card\s*\{([^}]*)\}', css)
if card_match:
    inner = card_match.group(1)
    if 'width:' not in inner:
        new_card = f".engagement-card {{{inner}    width: calc(33.333% - 14px);\n}}"
        css = css.replace(card_match.group(0), new_card)

# Remove all the last-child blocks
css = re.sub(r'\.engagement-grid \.engagement-card:last-child\s*\{[^}]*\}\s*', '', css)
css = re.sub(r'\.engagement-grid \.engagement-card:last-child h3,\s*\.engagement-grid \.engagement-card:last-child \.engagement-price,\s*\.engagement-grid \.engagement-card:last-child \.engagement-features li\s*\{[^}]*\}\s*', '', css)
css = re.sub(r'\.engagement-grid \.engagement-card:last-child \.engagement-price\s*\{[^}]*\}\s*', '', css)
css = re.sub(r'\.engagement-grid \.engagement-card:last-child \.engagement-btn\s*\{[^}]*\}\s*', '', css)
css = re.sub(r'\.engagement-grid \.engagement-card:last-child:hover \.engagement-btn\s*\{[^}]*\}\s*', '', css)

# Update mobile media query
# First, let's find the media query block
mobile_mq = re.search(r'@media \(max-width: 768px\) \{[^{}]*?\.engagement-grid[^}]*?\s*\}', css)
if mobile_mq:
    # Need to make sure cards take 100% width on mobile
    mq_text = mobile_mq.group(0)
    mq_text = mq_text.replace('.engagement-grid { grid-template-columns: 1fr; }', '.engagement-grid { flex-direction: column; }\n    .engagement-card { width: 100%; }')
    css = css.replace(mobile_mq.group(0), mq_text)
else:
    # If we couldn't easily replace it inside the media query, just append the fix at the end
    css += "\n@media (max-width: 768px) {\n    .engagement-grid { flex-direction: column; }\n    .engagement-card { width: 100% !important; }\n}\n"

with open(css_file, 'w', encoding='utf-8') as f:
    f.write(css)

print('CSS Updated successfully!')
