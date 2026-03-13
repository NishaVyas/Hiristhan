import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './HireSalesforcePage.css';

const HireSalesforcePage = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const skillCategories = [
        {
            name: "Salesforce Platforms & Core Technologies",
            skills: [
                "Customer 360 Platform", "Force.com", "Heroku", "Salesforce Mobile App", "Lightning Experience",
                "Salesforce Data Cloud", "Industries Cloud like Vlocity/Omnistudio", "Hyperforce (Infrastructure knowledge)", "Tableau", "Agentforce vibes"
            ]
        },
        {
            name: "Integration & API Tools",
            skills: ["MuleSoft", "REST/SOAP APIs", "Platform Events", "Change Data Capture", "Data Loader"]
        },
        {
            name: "AI, Automation & Advanced Capabilities",
            skills: ["Einstein AI", "Flow Builder", "Apex Triggers", "Next Best Action", "OmniStudio"]
        },
        {
            name: "Development Tools",
            skills: ["Salesforce CLI", "VS Code", "GitHub Actions", "Scratch Orgs", "SFDX"]
        }
    ];

    return (
        <div className="salesforce-page">
            <Navbar />
            
            {/* Unique Hero Section */}
            <section className="unique-hero-section">
                {/* Background animated elements */}
                <div className="hero-bg-elements">
                    <div className="hero-blob blob-1"></div>
                    <div className="hero-blob blob-2"></div>
                    <div className="hero-grid"></div>
                </div>

                <div className="container unique-hero-container">
                    <div className="hero-content">
                        <div className="hero-badge animate-up">
                            <span className="badge-icon">✨</span>
                            <span className="badge-text">Premium Salesforce Talent Network</span>
                        </div>
                        
                        <h1 className="hero-heading animate-up" style={{ animationDelay: '0.1s' }}>
                            Transform Your Vision Into Reality With <br/>
                            <span className="hero-highlight">
                                Elite Salesforce <br/> Developers
                                <svg className="highlight-underline" viewBox="0 0 400 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M 0 15 Q 100 0, 200 10 T 400 15" fill="none" stroke="#2D6A4F" strokeWidth="4" strokeLinecap="round"/>
                                </svg>
                            </span>
                        </h1>

                        <p className="hero-description animate-up" style={{ animationDelay: '0.2s' }}>
                            Bridge the gap between your ambitious goals and technical execution. We provide pre-vetted, certified professionals ready to integrate into your team.
                        </p>

                        <div className="hero-cta-group animate-up" style={{ animationDelay: '0.3s' }}>
                            <button className="btn-primary-glow">
                                <span>Start Hiring Now</span>
                                <div className="btn-arrow">→</div>
                            </button>
                            <button className="btn-outline">
                                View Engagement Models
                            </button>
                        </div>
                        
                        <div className="hero-social-proof animate-up" style={{ animationDelay: '0.4s' }}>
                            <div className="proof-avatars">
                                <img src={`https://i.pravatar.cc/100?img=1`} alt="User" />
                                <img src={`https://i.pravatar.cc/100?img=2`} alt="User" />
                                <img src={`https://i.pravatar.cc/100?img=3`} alt="User" />
                                <img src={`https://i.pravatar.cc/100?img=4`} alt="User" />
                                <div className="proof-count">+100</div>
                            </div>
                            <div className="proof-text">
                                <div className="stars">★★★★★</div>
                                <span>Trusted by innovative companies</span>
                            </div>
                        </div>
                    </div>

                    <div className="hero-visual animate-up" style={{ animationDelay: '0.5s' }}>
                        <div className="orbit-system">
                            <div className="center-planet">
                                <div className="sf-icon-wrapper">
                                    ☁️
                                </div>
                                <div className="pulse-ring"></div>
                                <div className="pulse-ring delay-1"></div>
                            </div>

                            <div className="orbit orbit-1">
                                <div className="satellite sat-1">
                                    <span className="sat-icon">⚡</span>
                                    <span className="sat-label">Lightning</span>
                                </div>
                            </div>

                            <div className="orbit orbit-2">
                                <div className="satellite sat-2">
                                    <span className="sat-icon">📊</span>
                                    <span className="sat-label">Sales Cloud</span>
                                </div>
                                <div className="satellite sat-3">
                                    <span className="sat-icon">⚙️</span>
                                    <span className="sat-label">Apex</span>
                                </div>
                            </div>

                            <div className="orbit orbit-3">
                                <div className="satellite sat-4">
                                    <span className="sat-icon">🔗</span>
                                    <span className="sat-label">MuleSoft</span>
                                </div>
                                <div className="satellite sat-5">
                                    <span className="sat-icon">🤖</span>
                                    <span className="sat-label">Einstein</span>
                                </div>
                            </div>
                            
                            {/* Floating Glass Panels */}
                            <div className="glass-panel panel-left float-slow">
                                <div className="panel-header">Performance</div>
                                <div className="panel-value">↑ 3x ROI</div>
                                <div className="panel-chart"></div>
                            </div>
                            
                            <div className="glass-panel panel-right float-fast">
                                <div className="panel-header">Efficiency</div>
                                <div className="panel-value">+ 45%</div>
                                <div className="panel-progress">
                                    <div className="progress-fill"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Logos Section */}
            <section className="logos-section">
                <div className="logos-text animate-up">
                    LOGOS OF CLIENTS (WE HAVE WORKED WITH IN STRIPE)
                </div>
                <div className="marquee-container animate-up">
                    <div className="logos-marquee">
                        {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((num, i) => (
                            <div key={i} className="logo-item">
                                CLIENT LOGO {num}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Briefing Section */}
            <section className="services-section-unique">
                <div className="container">
                    <div className="services-unique-header animate-up">
                        <div className="unique-badge pulse-glow">What We Do Best</div>
                        <h2 className="unique-heading">Detailed Briefing of the Services We Offer</h2>
                        <p className="unique-sub">Explore our comprehensive suite of Salesforce solutions, engineered to transform your business operations.</p>
                    </div>

                    <div className="services-accordion-container">
                        {[
                            { title: "Custom CRM Solutions", icon: "💎", desc: "We architect tailored Salesforce instances designed specifically around your unique business workflows, ensuring every feature aligns perfectly with your goals for maximum efficiency and adoption.", tags: ["Architecture", "Workflow Optimization", "Custom Builds"] },
                            { title: "Lightning Web Components", icon: "⚡", desc: "Enhance user experience with fast, responsive, and intuitive UX/UI built entirely on the modern Lightning Web Components (LWC) framework, replacing clunky legacy interfaces.", tags: ["UX/UI Design", "LWC", "Performance Tuning"] },
                            { title: "AppExchange Development", icon: "🚀", desc: "From ideation to deployment, we handle the end-to-end development of robust AppExchange products that pass security reviews and are ready for the global Salesforce ecosystem.", tags: ["Product Engineering", "Security Review", "Publishing"] },
                            { title: "Enterprise Integration", icon: "🔗", desc: "Break down data silos through seamless, secure connectivity between Salesforce and your entire enterprise tech stack using MuleSoft, REST/SOAP APIs, and intelligent middleware.", tags: ["MuleSoft", "API Hub", "Middleware"] },
                            { title: "Migration & Data Upgrades", icon: "📤", desc: "Execute risk-free, compliant, and zero-downtime data transitions from legacy CRM systems or older Salesforce Classic platforms directly into modern Lightning environments.", tags: ["Classic to Lightning", "Data Cleansing", "Zero Downtime"] },
                            { title: "Consulting & Strategy", icon: "📊", desc: "Our certified architects provide strategic roadmaps, comprehensive environment audits, and actionable execution plans to maximize your expected Salesforce ROI.", tags: ["Audits", "Roadmaps", "ROI Analysis"] }
                        ].map((service, i) => (
                            <div key={i} className={`service-accordion-item animate-up`} style={{ animationDelay: `${i * 0.15}s` }}>
                                <div className="accordion-visible-bar">
                                    <div className="accordion-icon-box">{service.icon}</div>
                                    <h3 className="accordion-title">{service.title}</h3>
                                    <div className="accordion-toggle-btn">
                                        <span className="plus-line horizontal"></span>
                                        <span className="plus-line vertical"></span>
                                    </div>
                                </div>
                                <div className="accordion-hidden-content">
                                    <div className="accordion-content-inner">
                                        <p className="accordion-desc">{service.desc}</p>
                                        <div className="accordion-tags">
                                            {service.tags.map((tag, tagIndex) => (
                                                <span key={tagIndex} className="service-tag">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Salesforce Technologies Section */}
            <section className="tech-section">
                <div className="container">
                    <h2 className="animate-up gradient-heading">Salesforce Technologies we specialize</h2>
                    <div className="tech-grid">
                        {[
                            "Apex & Visualforce",
                            "Lightning Web Components",
                            "Salesforce Shield",
                            "Marketing Cloud",
                            "Sales Cloud",
                            "Service Cloud"
                        ].map((tech, i) => (
                            <div key={i} className="tech-card animate-stagger" style={{ animationDelay: `${i * 0.15}s` }}>
                                <div className="tech-card-content">
                                    <h4>{tech}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Engagement Models Section */}
            <section className="engagement-section">
                <div className="container">
                    <h2 className="animate-up gradient-heading">Engagement Models we offer</h2>
                    <div className="engagement-grid">
                        <div className="engagement-card animate-stagger glass-card">
                            <h3>Full-time</h3>
                            <ul>
                                <li>Dedicated Salesforce Expert</li>
                                <li>160 Hours/Month Guarantee</li>
                                <li>Direct Communication</li>
                                <li>Ideal for Long-term Projects</li>
                            </ul>
                        </div>
                        <div className="engagement-card animate-stagger glass-card" style={{ animationDelay: '0.2s' }}>
                            <h3>Hourly</h3>
                            <ul>
                                <li>Pay as You Go</li>
                                <li>Flexible Scaling</li>
                                <li>Perfect for Small Tasks</li>
                                <li>Quick Bug Fixes & Support</li>
                            </ul>
                        </div>
                    </div>
                    <div className="engagement-cta animate-up">
                        <button className="secondary-button">Select Your Model</button>
                    </div>
                </div>
            </section>

            {/* Hiring Steps Section */}
            <section className="steps-section">
                <div className="container">
                    <h2 className="animate-up gradient-heading">Hire Best Salesforce Developer in 4 Easy Steps</h2>
                    <div className="steps-grid">
                        {[
                            { step: "01", title: "Requirement Discovery", text: "We sit down to understand your specific Salesforce needs, project scope, and technical requirements in detail." },
                            { step: "02", title: "Expert Matching", text: "Our team selects the best-fit developers from our pool of certified Salesforce experts based on your needs." },
                            { step: "03", title: "Interview & Vetting", text: "You interview the shortlisted candidates to ensure they align with your company culture and technical standards." },
                            { step: "04", title: "Seamless Onboarding", text: "Once selected, we handle the integration process, ensuring the developer starts contributing to your project immediately." }
                        ].map((item, i) => (
                            <div key={i} className="step-card animate-stagger" style={{ animationDelay: `${i * 0.1}s` }}>
                                <div className="step-number">{item.step}</div>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Skills Section */}
            <section className="skills-section">
                <div className="container">
                    <h2 className="animate-up gradient-heading">Key skills</h2>
                    <div className="skills-tabs animate-up">
                        {skillCategories.map((category, i) => (
                            <button 
                                key={i} 
                                className={`tab-btn ${activeTab === i ? 'active' : ''}`}
                                onClick={() => setActiveTab(i)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                    <div className="skills-content">
                        <div className="skills-grid-new">
                            {skillCategories[activeTab].skills.map((skill, i) => (
                                <div key={i} className="skill-card-new animate-stagger" style={{ animationDelay: `${i * 0.05}s` }}>
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <div className="container">
                    <h2 className="animate-up gradient-heading">Testimonials</h2>
                    <div className="testimonials-grid">
                        {[1, 2, 3].map((num) => (
                            <div key={num} className="testimonial-card animate-stagger" style={{ animationDelay: `${num * 0.1}s` }}>
                                <p>Testimonial {num}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-banner-section">
                <div className="container">
                    <h2 className="animate-up gradient-heading">CTA</h2>
                    <div className="cta-content animate-up">
                        <h3>Access Our Pool of Verified Salesforce Experts Ready to Join Your Team</h3>
                        <p>Meet pre-screened Salesforce experts with comprehensive platform knowledge, verified experience, and relevant certifications.</p>
                        <button className="cta-button-green">Contact Us</button>
                    </div>
                </div>
            </section>

            {/* Other Salesforce Resources Section */}
            <section className="resources-section">
                <div className="container">
                    <h2 className="animate-up gradient-heading">Other Salesforce Resources</h2>
                    <div className="resources-grid">
                        {["SF QA", "SF BA", "SF Admin"].map((resource, i) => (
                            <div key={i} className="resource-card-box animate-stagger" style={{ animationDelay: `${i * 0.1}s` }}>
                                <p>{resource}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            <section className="faqs-section">
                <div className="container">
                    <h2 className="animate-up gradient-heading">FAQs</h2>
                    <div className="faq-list animate-up">
                        {[
                            { q: "What is the typical experience level of your Salesforce developers?", a: "Our developers typically have 5+ years of experience and hold multiple Salesforce certifications including Platform Developer I & II." },
                            { q: "How quickly can I onboard a developer?", a: "Depending on your requirements, we can typically have a developer ready to start within 3-5 business days." },
                            { q: "Do you offer post-implementation support?", a: "Yes, we provide flexible support packages to ensure your Salesforce environment remains optimized and up-to-date." },
                            { q: "Can I interview the developers before hiring?", a: "Absolutely! We encourage interviews to ensure there is a perfect match both technically and culturally." }
                        ].map((faq, i) => (
                            <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`} onClick={() => toggleFaq(i)}>
                                <div className="faq-question">
                                    <h4>{faq.q}</h4>
                                    <span className="faq-icon">{openFaq === i ? '−' : '+'}</span>
                                </div>
                                {openFaq === i && (
                                    <div className="faq-answer">
                                        <p>{faq.a}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="divider-full"></div>
                </div>
            </section>

            {/* Blogs Section */}
            <section className="blogs-section">
                <div className="container">
                    <h2 className="animate-up gradient-heading">Blogs</h2>
                    <div className="blogs-grid">
                        {[
                            { title: "The Future of Salesforce AI with Agentforce", date: "Oct 12, 2025", desc: "Exploring how autonomous agents are transforming customer service and sales workflows." },
                            { title: "Migrating to Lightning Web Components", date: "Sep 28, 2025", desc: "A comprehensive guide for businesses looking to modernize their legacy Visualforce pages." },
                            { title: "Salesforce Integration Best Practices", date: "Aug 15, 2025", desc: "Top 5 strategies for seamless data flow between Salesforce and your external enterprise systems." }
                        ].map((blog, i) => (
                            <div key={i} className="blog-card animate-stagger" style={{ animationDelay: `${i * 0.1}s` }}>
                                <div className="blog-image-placeholder"></div>
                                <div className="blog-content">
                                    <span className="blog-date">{blog.date}</span>
                                    <h4>{blog.title}</h4>
                                    <p>{blog.desc}</p>
                                    <button className="read-more">Read More →</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default HireSalesforcePage;
