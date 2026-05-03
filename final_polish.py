import os

files = [
    r"c:\Users\WIN 11\Desktop\dhwada\Hiristhan\src\Pages\HireCommerceCloudPage.css",
    r"c:\Users\WIN 11\Desktop\dhwada\Hiristhan\src\Pages\HireSalesforcePage.css",
    r"c:\Users\WIN 11\Desktop\dhwada\Hiristhan\src\Pages\HireServiceNowITSMPage.css",
    r"c:\Users\WIN 11\Desktop\dhwada\Hiristhan\src\Pages\HireServiceNowPage.css"
]

def final_polish(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Ensure bento-tags NEVER wrap
    content = content.replace('.bento-tags {', '.bento-tags {\n    flex-wrap: nowrap !important;')
    
    # Improve mobile responsiveness further
    if '/* Global Responsive Overrides */' not in content:
        content += """
/* Final Responsive Polish */
@media (max-width: 600px) {
    .hero-heading {
        font-size: 1.4rem !important;
        white-space: normal !important;
        text-align: center;
    }
    .bento-tags {
        overflow-x: auto !important;
        scrollbar-width: none;
    }
    .bento-tags::-webkit-scrollbar {
        display: none;
    }
    .bento-card-inner {
        padding: 15px !important;
    }
}
"""
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for f in files:
    if os.path.exists(f):
        final_polish(f)
        print(f"Polished {f}")
