import os

files = [
    r"c:\Users\WIN 11\Desktop\dhwada\Hiristhan\src\Pages\HireCommerceCloudPage.css",
    r"c:\Users\WIN 11\Desktop\dhwada\Hiristhan\src\Pages\HireSalesforcePage.css",
    r"c:\Users\WIN 11\Desktop\dhwada\Hiristhan\src\Pages\HireServiceNowITSMPage.css",
    r"c:\Users\WIN 11\Desktop\dhwada\Hiristhan\src\Pages\HireServiceNowPage.css"
]

responsive_css = """

/* Additional Mobile Responsiveness Fixes */
@media (max-width: 768px) {
    /* Fix for '4 Simple Steps' section */
    .steps-timeline {
        grid-template-columns: 1fr !important;
        overflow-x: hidden !important;
        padding-bottom: 0 !important;
        gap: 30px !important;
    }
    .timeline-track {
        display: none !important;
    }
    .timeline-step {
        width: 100% !important;
    }
    .timeline-card {
        min-height: auto !important;
    }
    
    /* Fix for Tech Expertise Tabs */
    .expertise-sidebar {
        flex-wrap: wrap !important;
        white-space: normal !important;
        overflow-x: visible !important;
        justify-content: center !important;
    }
    .expertise-tab {
        flex: 1 1 auto !important;
        justify-content: center !important;
    }
}

@media (max-width: 480px) {
    .expertise-tab {
        width: 100% !important;
        flex: 0 0 100% !important;
    }
}
"""

def fix_responsiveness(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if we already added this
    if "/* Additional Mobile Responsiveness Fixes */" not in content:
        content += responsive_css
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

for f in files:
    if os.path.exists(f):
        changed = fix_responsiveness(f)
        if changed:
            print(f"Fixed {f}")
        else:
            print(f"Already fixed {f}")
