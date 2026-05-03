import os
import re

files = [
    r"c:\Users\WIN 11\Desktop\dhwada\Hiristhan\src\Pages\HireCommerceCloudPage.css",
    r"c:\Users\WIN 11\Desktop\dhwada\Hiristhan\src\Pages\HireSalesforcePage.css",
    r"c:\Users\WIN 11\Desktop\dhwada\Hiristhan\src\Pages\HireServiceNowITSMPage.css",
    r"c:\Users\WIN 11\Desktop\dhwada\Hiristhan\src\Pages\HireServiceNowPage.css"
]

def fix_last_child_grid(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove the problematic full-width span for the last featured card
    pattern1 = r'\.bento-grid \.bento-card\.bento-featured:last-child\s*\{\s*grid-column:\s*1\s*/\s*-1;\s*\}'
    content = re.sub(pattern1, '', content)
    
    pattern2 = r'\.bento-grid \.bento-card\.bento-featured:last-child\s*\{\s*grid-column:\s*span 1 !important;\s*\}'
    content = re.sub(pattern2, '', content)

    # In case there's a version without !important in media queries
    pattern3 = r'\.bento-grid \.bento-card\.bento-featured:last-child\s*\{\s*grid-column:\s*span 1;\s*\}'
    content = re.sub(pattern3, '', content)

    # In case there's a version with span 2 in media queries (for 1024px)
    pattern4 = r'\.bento-grid \.bento-card\.bento-featured:last-child\s*\{\s*grid-column:\s*span 2;\s*\}'
    content = re.sub(pattern4, '', content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    return True

for f in files:
    if os.path.exists(f):
        fix_last_child_grid(f)
        print(f"Fixed grid in {f}")
