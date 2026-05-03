import os

files = [
    r"c:\Users\WIN 11\Desktop\dhwada\Hiristhan\src\Pages\HireCommerceCloudPage.css",
    r"c:\Users\WIN 11\Desktop\dhwada\Hiristhan\src\Pages\HireSalesforcePage.css",
    r"c:\Users\WIN 11\Desktop\dhwada\Hiristhan\src\Pages\HireServiceNowITSMPage.css",
    r"c:\Users\WIN 11\Desktop\dhwada\Hiristhan\src\Pages\HireServiceNowPage.css"
]

def update_css(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Remove blur from fadeInUp
    content = content.replace('filter: blur(10px);', '')
    content = content.replace('filter: blur(0);', '')
    
    # 2. Ensure bento-grid is 1 column at 768px and below
    # We'll just force it in the media query
    if '@media (max-width: 768px)' in content:
        # Find the bento-grid block inside this media query
        # This is a bit complex with regex, let's just append an override at the end
        pass

    # 3. Add the nowrap fix for bento-tags if missing
    if '.bento-tags {' in content:
        # Replace the block
        import re
        content = re.sub(r'\.bento-tags\s*\{[^}]*\}', 
                         '.bento-tags {\n    display: flex;\n    flex-wrap: nowrap !important;\n    gap: 4px;\n    overflow: hidden;\n}', 
                         content)
    
    # 4. Force 1 column grid at the end of the file to be sure
    content += """
/* Global Responsive Overrides */
@media (max-width: 850px) {
    .bento-grid {
        grid-template-columns: 1fr !important;
    }
    .bento-featured {
        grid-column: span 1 !important;
    }
    .bento-grid .bento-card.bento-featured:last-child {
        grid-column: span 1 !important;
    }
    .hero-heading {
        font-size: 1.6rem !important;
        line-height: 1.2 !important;
        white-space: normal !important;
    }
    .hero-heading-line {
        display: inline !important;
    }
}
"""
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for f in files:
    if os.path.exists(f):
        update_css(f)
        print(f"Updated {f}")
    else:
        print(f"File not found: {f}")
