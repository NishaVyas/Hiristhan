import os

files = [
    r"c:\Users\WIN 11\Desktop\dhwada\Hiristhan\src\Pages\HireCommerceCloudPage.css",
    r"c:\Users\WIN 11\Desktop\dhwada\Hiristhan\src\Pages\HireSalesforcePage.css",
    r"c:\Users\WIN 11\Desktop\dhwada\Hiristhan\src\Pages\HireServiceNowITSMPage.css",
    r"c:\Users\WIN 11\Desktop\dhwada\Hiristhan\src\Pages\HireServiceNowPage.css"
]

def fix_css(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    new_lines = []
    for line in lines:
        # Fix the corrupted backdrop-filter
        if 'backdrop- !important;' in line:
            new_lines.append(line.replace('backdrop- !important;', 'backdrop-filter: blur(10px) !important;'))
        elif 'backdrop-' in line and ';' not in line:
            # Check next line for !important;
            new_lines.append(line.replace('backdrop-', 'backdrop-filter: blur(10px) !important;'))
        else:
            new_lines.append(line)
            
    with open(filepath, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)

for f in files:
    if os.path.exists(f):
        fix_css(f)
        print(f"Fixed {f}")
