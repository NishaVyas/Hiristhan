import re

css_file = 'src/Pages/HireServiceNowPage.css'
with open(css_file, 'r', encoding='utf-8') as f:
    css = f.read()

css = re.sub(
    r'\.engagement-grid\s*\{[^}]*\}',
    r'.engagement-grid {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 20px;\n    position: relative;\n    max-width: 1200px;\n    margin: 0 auto;\n}',
    css, count=1
)

css = re.sub(
    r'\.engagement-card\s*\{[^}]*\}',
    r'.engagement-card {\n    background: linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, #ffffff 100%);\n    border-radius: 22px;\n    padding: 16px 20px 20px;\n    border: 1px solid rgba(226, 232, 240, 0.95);\n    box-shadow: 0 14px 34px rgba(15, 23, 42, 0.06);\n    position: relative;\n    transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);\n    display: flex;\n    flex-direction: column;\n}',
    css, count=1
)

css = re.sub(
    r'\.engagement-media\s*\{[^}]*\}',
    r'.engagement-media {\n    position: relative;\n    border-radius: 16px;\n    overflow: hidden;\n    height: 150px;\n    margin-bottom: 20px;\n}',
    css, count=1
)

css = re.sub(
    r'\.engagement-card h3\s*\{[^}]*\}',
    r'.engagement-card h3 {\n    font-family: \'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif;\n    font-size: 1.4rem; font-weight: 600; color: #1a202c; margin-bottom: 8px;\n    line-height: 1.2;\n}',
    css, count=1
)
css = re.sub(
    r'\.engagement-price\s*\{[^}]*\}',
    r'.engagement-price {\n    font-size: 0.9rem; font-weight: 700; color: #0D4D3A;\n    margin-bottom: 16px; padding-bottom: 16px;\n    border-bottom: 1px dashed rgba(203, 213, 225, 0.9);\n}',
    css, count=1
)
css = re.sub(
    r'\.engagement-features li\s*\{[^}]*\}',
    r'.engagement-features li {\n    font-size: 0.85rem; color: #475569; margin-bottom: 10px;\n    padding-left: 28px; position: relative; line-height: 1.45;\n}',
    css, count=1
)
css = re.sub(
    r'\.engagement-btn\s*\{[^}]*\}',
    r'.engagement-btn {\n    width: 100%; padding: 12px 14px;\n    background: #f8fafc; color: #1a202c;\n    border: 1px solid #d9e2ec; border-radius: 12px;\n    font-size: 0.9rem; font-weight: 700;\n    cursor: pointer; transition: all 0.3s ease;\n}',
    css, count=1
)

with open(css_file, 'w', encoding='utf-8') as f:
    f.write(css)

print('CSS Updated!')
