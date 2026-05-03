import re
import json

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


jsx_file = 'src/Pages/HireServiceNowPage.jsx'
with open(jsx_file, 'r', encoding='utf-8') as f:
    jsx = f.read()

jsx = jsx.replace('{false && (\n            <section className=\"tech-stack-section\"', '            <section className=\"tech-stack-section\"')
jsx = jsx.replace('            </section>\n)}\n\n            {/* Engagement Models Section */}', '            </section>\n\n            {/* Engagement Models Section */}')

items = [
    { "name": "ServiceNow App Engine", "icon": "salesCloud", "desc": "Need a custom app on the Now Platform that doesn't fit any out-of-the-box module? Hire App Engine developers who build scoped applications from scratch using App Engine Studio. So, let us know your requirements, and we'll match you with the right developer." },
    { "name": "ServiceNow EAM", "icon": "serviceCloud", "desc": "Our pool of certified ServiceNow EAM developers has experience working on configuring preventive maintenance schedules, downtime tracking, spare parts management, and asset hierarchies. We'll map your requirements with the skills of ServiceNow developers to ensure your project progresses." },
    { "name": "ServiceNow AI Agents", "icon": "marketingCloud", "desc": "Agentic AI is the biggest shift ServiceNow has made in years. Hire developers who already know how to build it. From deploying AI agents across IT, HR, and customer service workflows, defining agent skills, and setting guardrails, we've got you covered." },
    { "name": "ServiceNow AI Control Tower", "icon": "lwc", "desc": "From setting up the model inventories, defining governance policies, and building compliance guardrails, hire ServiceNow developers on contract having experience across all. Additionally, they monitor usage, flag risk, and bring third-party AI models under the same oversight as ServiceNow-native ones." },
    { "name": "ServiceNow SecOps", "icon": "apex", "desc": "ServiceNow SecOps developers have experience in configuring Security Incident Response, Vulnerability Response, and Threat Intelligence to ensure fewer steps between detection and response." },
    { "name": "ServiceNow GRC", "icon": "shield", "desc": "Hire GRC developers to configure Policy and Compliance, Risk Management, Audit Management, and Vendor Risk. Additionally, they map frameworks like SOX, ISO 27001, and NIST to your control libraries." },
    { "name": "ServiceNow Sales and Order Management", "icon": "salesCloud", "desc": "Our Sales and Order Management developers configure product catalogs, pricing rules, and quote-to-cash workflows. From handling order decomposition, orchestration across fulfillment systems, and contract renewals, they can help you with all your needs." },
    { "name": "ServiceNow Integration Hub", "icon": "serviceCloud", "desc": "Integration Hub is where most ServiceNow projects succeed or fall apart. Hire ServiceNow developers who can build custom spokes, configure connectors for Microsoft, AWS, Jira, and Slack, and design Flow Designer workflows that hold up under real load." },
    { "name": "ServiceNow Now Assist", "icon": "marketingCloud", "desc": "Now Assist is ServiceNow's generative AI layer, and getting real value out of it takes setup. Our developers enable Now Assist skills for ITSM, CSM, HRSD, and Creator. They tune prompts, apply guardrails, and track productivity metrics before and after rollout." },
    { "name": "ServiceNow AI Platform", "icon": "lwc", "desc": "AI Platform covers the full ServiceNow AI stack — Predictive Intelligence, machine learning, NLU, and generative AI. Hire developers who train classification and similarity models on your instance data, build Virtual Agent conversations, and tune recommendation engines." }
]

array_code = '[\n' + ',\n'.join([f'                            {{ name: {json.dumps(item["name"])}, icon: {json.dumps(item["icon"])}, desc: {json.dumps(item["desc"])} }}' for item in items]) + '\n                        ]'
jsx = re.sub(r'\{\[\s*\{\s*name:\s*"ServiceNow App Engine".*?\}\s*\]\.map', f'{{{array_code}.map', jsx, flags=re.DOTALL)

with open(jsx_file, 'w', encoding='utf-8') as f:
    f.write(jsx)

print('Updated!')
