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
            
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <h1 className="animate-up gradient-heading">Hire a Salesforce Developer</h1>
                    <p className="intro-text">
                        Empower your business with top-tier Salesforce expertise. Our dedicated developers specialize in tailoring the world's leading CRM to your unique needs, driving growth and efficiency. Whether it's complex integrations, custom lightning components, or strategic implementation, we deliver solutions that transform your operations and maximize your ROI with Salesforce.
                    </p>
                    <button className="cta-button">Get Started Now</button>
                    <div className="divider"></div>
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
            <section className="services-section">
                <div className="container">
                    <h2 className="animate-up gradient-heading">Detailed Briefing of the services that we offer</h2>
                    <h3 className="animate-up" style={{ animationDelay: '0.2s' }}>Salesforce development services we offer</h3>
                    
                    <div className="services-grid">
                        {[
                            { title: "Custom CRM Solutions", icon: "💎" },
                            { title: "Lightning Components", icon: "⚡" },
                            { title: "AppExchange Development", icon: "🚀" },
                            { title: "Salesforce Integration", icon: "🔗" },
                            { title: "Migration & Upgrades", icon: "📤" },
                            { title: "Consulting & Strategy", icon: "📊" }
                        ].map((service, i) => (
                            <div key={i} className="service-card animate-stagger" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                                <div className="card-icon">{service.icon}</div>
                                <h4>{service.title}</h4>
                                <p>
                                    We provide comprehensive Salesforce solutions tailored to your business goals. Our developers excel in creating scalable, secure, and high-performance applications.
                                </p>
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
                            "Salesforce Shield"
                        ].map((tech, i) => (
                            <div key={i} className="tech-card animate-float" style={{ animationDelay: `${i * 0.2}s` }}>
                                <div className="tech-orb"></div>
                                <h4>{tech}</h4>
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
