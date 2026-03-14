import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './HireSalesforcePage.css';
import salesforceImage from '../assets/images/Servicepage/salesforce.jpg';
import serviceImage from '../assets/images/Servicepage/service.jpg';
import projectImage from '../assets/images/Homepage/project.jpg';
import teamImage from '../assets/images/Homepage/team.jpg';
import hourlyImage from '../assets/images/Homepage/hourly.jpg';

const HireSalesforcePage = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [openFaq, setOpenFaq] = useState(null);
    const [activeBlogSlide, setActiveBlogSlide] = useState(0);
    const serviceCardsRef = useRef([]);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    // Scroll-triggered reveal for service cards
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('srv-revealed');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
        );

        serviceCardsRef.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

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

    const blogPosts = [
        {
            title: "Future of Agentforce AI",
            date: "Oct 12, 2025",
            desc: "Exploring how autonomous agents are transforming customer service.",
            category: "AI",
            image: projectImage
        },
        {
            title: "LWC Migration Guide",
            date: "Sep 28, 2025",
            desc: "Modernize legacy Visualforce pages with performance-driven LWC.",
            category: "Development",
            image: teamImage
        },
        {
            title: "Integration Best Practices",
            date: "Aug 15, 2025",
            desc: "Seamless data flow between Salesforce and your enterprise systems.",
            category: "Integration",
            image: hourlyImage
        }
    ];

    const handlePrevBlog = () => {
        setActiveBlogSlide((prev) => (prev === 0 ? blogPosts.length - 1 : prev - 1));
    };

    const handleNextBlog = () => {
        setActiveBlogSlide((prev) => (prev === blogPosts.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveBlogSlide((prev) => (prev === blogPosts.length - 1 ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(intervalId);
    }, [blogPosts.length]);

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
                <div className="logos-grid-static animate-up">
                    {/* Salesforce */}
                    <div className="logo-item-static">
                        <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" aria-label="Salesforce">
                            <path d="M49.8 21.5c3.2-3.3 7.6-5.4 12.5-5.4 6 0 11.3 3.2 14.3 8 2.5-1.1 5.2-1.7 8.1-1.7 11.2 0 20.3 9.1 20.3 20.4 0 11.2-9.1 20.3-20.3 20.3-.9 0-1.8-.1-2.6-.2-2.7 5-7.9 8.4-14 8.4-2.5 0-4.9-.6-7-1.7-2.7 6-8.7 10.2-15.7 10.2-6.6 0-12.3-3.7-15.2-9.2-1.3.3-2.6.4-4 .4-9.8 0-17.7-7.9-17.7-17.7 0-6.6 3.6-12.4 9-15.5-.6-1.7-.9-3.5-.9-5.4 0-9.1 7.4-16.5 16.5-16.5 5.3 0 10 2.5 13 6.4" fill="#00A1E0"/>
                            <text x="60" y="52" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="Arial, sans-serif" fontWeight="bold">Salesforce</text>
                        </svg>
                    </div>
                    {/* Slack */}
                    <div className="logo-item-static">
                        <svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg" aria-label="Slack">
                            <rect x="18" y="22" width="8" height="16" rx="4" fill="#E01E5A"/>
                            <rect x="30" y="22" width="16" height="8" rx="4" fill="#E01E5A"/>
                            <rect x="30" y="14" width="8" height="8" rx="4" fill="#ECB22E"/>
                            <rect x="42" y="30" width="8" height="16" rx="4" fill="#2EB67D"/>
                            <rect x="30" y="30" width="12" height="8" rx="4" fill="#2EB67D"/>
                            <rect x="42" y="22" width="8" height="8" rx="4" fill="#36C5F0"/>
                            <rect x="18" y="30" width="12" height="8" rx="4" fill="#36C5F0"/>
                            <text x="80" y="36" textAnchor="middle" fill="#1D1D1D" fontSize="16" fontFamily="'Lato', Arial, sans-serif" fontWeight="bold">Slack</text>
                        </svg>
                    </div>
                    {/* MuleSoft */}
                    <div className="logo-item-static">
                        <svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg" aria-label="MuleSoft">
                            <circle cx="30" cy="30" r="14" fill="#00A0DF"/>
                            <circle cx="30" cy="30" r="7" fill="#fff"/>
                            <text x="72" y="35" textAnchor="middle" fill="#333" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="bold">MuleSoft</text>
                        </svg>
                    </div>
                    {/* Tableau */}
                    <div className="logo-item-static">
                        <svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg" aria-label="Tableau">
                            <rect x="26" y="10" width="6" height="40" fill="#E8762D"/>
                            <rect x="19" y="20" width="20" height="6" fill="#E8762D"/>
                            <rect x="42" y="20" width="6" height="26" fill="#5B9BD5"/>
                            <rect x="36" y="26" width="18" height="6" fill="#5B9BD5"/>
                            <text x="84" y="35" textAnchor="middle" fill="#333" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="bold">Tableau</text>
                        </svg>
                    </div>
                    {/* Heroku */}
                    <div className="logo-item-static">
                        <svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg" aria-label="Heroku">
                            <rect x="16" y="8" width="24" height="44" rx="6" fill="#6762A6"/>
                            <path d="M24 42 L24 28 L33 36 Z" fill="#fff"/>
                            <path d="M28 20 Q32 16 36 20" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                            <text x="78" y="35" textAnchor="middle" fill="#333" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="bold">Heroku</text>
                        </svg>
                    </div>
                    {/* AWS */}
                    <div className="logo-item-static">
                        <svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg" aria-label="AWS">
                            <path d="M20 38 Q30 45 40 38 Q30 50 20 38Z" fill="#FF9900"/>
                            <path d="M18 36 L30 32 L42 36" stroke="#FF9900" strokeWidth="3" fill="none" strokeLinecap="round"/>
                            <text x="80" y="32" textAnchor="middle" fill="#232F3E" fontSize="14" fontFamily="Arial, sans-serif" fontWeight="bold">AWS</text>
                            <text x="80" y="45" textAnchor="middle" fill="#FF9900" fontSize="7" fontFamily="Arial, sans-serif" letterSpacing="1">AMAZON WEB SERVICES</text>
                        </svg>
                    </div>
                </div>
            </section>

            {/* ===== BENTO SERVICES SECTION ===== */}
            <section className="bento-section">
                <div className="bento-container">
                    {/* Header */}
                    <div className="bento-header">
                        <span className="bento-label">✦ What We Do Best</span>
                        <h2 className="bento-heading">
                            Services That Drive<br/>
                            <span className="bento-heading-accent">Real Growth</span>
                        </h2>
                        <p className="bento-sub">Our comprehensive Salesforce solutions, engineered to transform your business.</p>
                    </div>

                    {/* Bento Grid */}
                    <div className="bento-grid">
                        {[
                            { title: "Custom CRM Solutions", icon: "💎", num: "01", desc: "We architect tailored Salesforce instances designed around your unique business workflows for maximum efficiency.", tags: ["Architecture", "Workflow Optimization", "Custom Builds"], featured: true },
                            { title: "Lightning Web Components", icon: "⚡", num: "02", desc: "Fast, responsive UX/UI built on the modern LWC framework, replacing clunky legacy interfaces.", tags: ["UX/UI Design", "LWC", "Performance Tuning"], featured: false },
                            { title: "AppExchange Development", icon: "🚀", num: "03", desc: "End-to-end development of robust AppExchange products that pass security reviews.", tags: ["Product Engineering", "Security Review", "Publishing"], featured: false },
                            { title: "Enterprise Integration", icon: "🔗", num: "04", desc: "Seamless connectivity between Salesforce and your enterprise tech stack using MuleSoft and APIs.", tags: ["MuleSoft", "API Hub", "Middleware"], featured: false },
                            { title: "Migration & Data Upgrades", icon: "📤", num: "05", desc: "Risk-free, zero-downtime data transitions from legacy CRM systems into modern Lightning.", tags: ["Classic to Lightning", "Data Cleansing", "Zero Downtime"], featured: false },
                            { title: "Consulting & Strategy", icon: "📊", num: "06", desc: "Strategic roadmaps, environment audits, and execution plans to maximize your Salesforce ROI.", tags: ["Audits", "Roadmaps", "ROI Analysis"], featured: true }
                        ].map((service, i) => (
                            <div
                                key={i}
                                className={`bento-card ${service.featured ? 'bento-featured' : ''}`}
                                ref={(el) => (serviceCardsRef.current[i] = el)}
                                onMouseMove={(e) => {
                                    const card = e.currentTarget;
                                    const rect = card.getBoundingClientRect();
                                    const x = e.clientX - rect.left;
                                    const y = e.clientY - rect.top;
                                    const centerX = rect.width / 2;
                                    const centerY = rect.height / 2;
                                    const rotateX = ((y - centerY) / centerY) * -6;
                                    const rotateY = ((x - centerX) / centerX) * 6;
                                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
                                    card.querySelector('.bento-card-shine').style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.15), transparent 60%)`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
                                    e.currentTarget.querySelector('.bento-card-shine').style.background = 'transparent';
                                }}
                            >
                                <div className="bento-card-shine"></div>
                                <div className="bento-card-border"></div>
                                <div className="bento-card-inner">
                                    <span className="bento-num">{service.num}</span>
                                    <div className="bento-icon">{service.icon}</div>
                                    <h3 className="bento-card-title">{service.title}</h3>
                                    <p className="bento-card-desc">{service.desc}</p>
                                    <div className="bento-card-footer">
                                        <div className="bento-tags">
                                            {service.tags.map((tag, ti) => (
                                                <span key={ti} className="bento-tag">{tag}</span>
                                            ))}
                                        </div>
                                        <span className="bento-arrow">→</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Elegant Tech Stack Section */}
            <section className="tech-stack-section">
                <div className="tech-stack-bg">
                    <div className="tech-glow glow-1"></div>
                    <div className="tech-glow glow-2"></div>
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="tech-stack-header animate-up">
                        <span className="tech-stack-label">Our Expertise</span>
                        <h2 className="tech-stack-heading">Salesforce Technologies<br/>We Specialize In</h2>
                    </div>
                    
                    <div className="tech-stack-grid">
                        {[
                            { name: "Sales Cloud", icon: "📊", desc: "Drive growth with AI-powered sales automation and complete customer lifecycle management." },
                            { name: "Service Cloud", icon: "🎧", desc: "Deliver personalized, intelligent service experiences across every channel." },
                            { name: "Marketing Cloud", icon: "🎯", desc: "Create 1-to-1 customer journeys and optimize multi-channel campaigns." },
                            { name: "Lightning Web Components", icon: "⚡", desc: "Build lightning-fast, enterprise-grade custom UI with modern web standards." },
                            { name: "Apex & Visualforce", icon: "⚙️", desc: "Develop robust backend logic and complex server-side architectures." },
                            { name: "Salesforce Shield", icon: "🛡️", desc: "Enhance trust, compliance, and governance with premium platform encryption." }
                        ].map((tech, i) => (
                            <div key={i} className="tech-stack-card animate-stagger" style={{ animationDelay: `${i * 0.15}s` }}>
                                <div className="tech-stack-icon">{tech.icon}</div>
                                <h3 className="tech-stack-title">{tech.name}</h3>
                                <p className="tech-stack-desc">{tech.desc}</p>
                                <div className="tech-stack-border"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Engagement Models Section */}
            <section className="engagement-section">
                <div className="container">
                    <div className="engagement-header animate-up">
                        <span className="engagement-label">How We Work</span>
                        <h2 className="engagement-heading">Engagement Models</h2>
                        <p className="engagement-sub">Flexible hiring tailored to your project scope and timeline.</p>
                    </div>
                    
                    <div className="engagement-grid">
                        <div className="engagement-card animate-stagger">
                            <div className="engagement-media">
                                <img src={salesforceImage} alt="Full-time Salesforce developer collaboration" />
                                <span className="engagement-tag">Best for long-term projects</span>
                            </div>
                            <h3>Full-time Dedicated</h3>
                            <div className="engagement-price">160 Hours/Month</div>
                            <ul className="engagement-features">
                                <li>Dedicated Salesforce Expert</li>
                                <li>Direct Communication & Reporting</li>
                                <li>Long-term project continuity</li>
                                <li>Seamless team integration</li>
                            </ul>
                            <button className="engagement-btn">Hire Full-time →</button>
                        </div>
                        
                        <div className="engagement-card animate-stagger" style={{ animationDelay: '0.2s' }}>
                            <div className="engagement-media">
                                <img src={serviceImage} alt="Part-time Salesforce support and delivery" />
                                <span className="engagement-tag">Ideal for flexible workloads</span>
                            </div>
                            <h3>Hourly / Part-time</h3>
                            <div className="engagement-price">Pay as You Go</div>
                            <ul className="engagement-features">
                                <li>Flexible hours & scaling</li>
                                <li>Perfect for smaller tasks</li>
                                <li>Quick bug fixes & updates</li>
                                <li>Ongoing admin support</li>
                            </ul>
                            <button className="engagement-btn">Hire Hourly →</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Unique Interlocking Path Grid - Hiring Steps */}
            <section className="steps-grid-section">
                <div className="container">
                    <div className="steps-grid-header animate-up">
                        <span className="steps-grid-label">Our Process</span>
                        <h2 className="steps-grid-heading">Hire Salesforce Expertise<br/>in 4 Simple Steps</h2>
                    </div>
                    
                    <div className="steps-interlock-container">
                        <div className="steps-path-line"></div>
                        <div className="steps-interlock-grid">
                            {[
                                { step: "01", title: "Requirement Discovery", icon: "🔍", text: "We sit down to understand your specific Salesforce needs, project scope, and technical requirements in detail." },
                                { step: "02", title: "Expert Matching", icon: "🧩", text: "Our team selects the best-fit developers from our pool of certified Salesforce experts based on your needs." },
                                { step: "03", title: "Interview & Vetting", icon: "✅", text: "You interview the shortlisted candidates to ensure they align with your company culture and technical standards." },
                                { step: "04", title: "Seamless Onboarding", icon: "🚀", text: "Once selected, we handle the integration process, ensuring the developer starts contributing to your project immediately." }
                            ].map((item, i) => (
                                <div key={i} className={`interlock-card card-${i + 1} animate-up`} style={{ animationDelay: `${i * 0.15}s` }}>
                                    <div className="interlock-node">
                                        <div className="interlock-icon">{item.icon}</div>
                                        <div className="interlock-num">{item.step}</div>
                                    </div>
                                    <div className="interlock-content">
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Elegant Tech Expertise Section */}
            <section className="tech-expertise-section">
                <div className="expertise-bg-pattern"></div>
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div className="expertise-header animate-up">
                        <span className="expertise-label">Core Competencies</span>
                        <h2 className="expertise-heading">Our Salesforce <span className="text-gradient">Tech Stack</span></h2>
                        <p className="expertise-sub">Mastering the technologies that drive modern enterprise success.</p>
                    </div>

                    <div className="expertise-layout">
                        <div className="expertise-sidebar animate-up" style={{ animationDelay: '0.1s' }}>
                            {skillCategories.map((category, i) => (
                                <button 
                                    key={i} 
                                    className={`expertise-tab ${activeTab === i ? 'active' : ''}`}
                                    onClick={() => setActiveTab(i)}
                                >
                                    <span className="tab-indicator"></span>
                                    {category.name}
                                </button>
                            ))}
                        </div>
                        
                        <div className="expertise-content">
                            <div className="expertise-grid" key={activeTab}>
                                {skillCategories[activeTab].skills.map((skill, i) => (
                                    <div key={i} className="expertise-card" style={{ animationDelay: `${i * 0.05}s` }}>
                                        <div className="card-glare"></div>
                                        <div className="expertise-icon">
                                            {activeTab === 0 ? "☁️" : activeTab === 1 ? "🔗" : activeTab === 2 ? "🤖" : "⚙️"}
                                        </div>
                                        <span className="expertise-skill-name">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium Testimonials Section */}
            <section className="testimonials-section">
                <div className="container">
                    <div className="section-header testimonials-header animate-up">
                        <span className="testimonials-kicker">
                            <span className="kicker-dot"></span>
                            Testimonials
                        </span>
                        <h2 className="testimonials-title">Success Stories</h2>
                        <p className="section-sub testimonials-sub">Hear from industry leaders who scaled their Salesforce teams with us.</p>
                    </div>
                    <div className="testimonials-grid">
                        {[
                            { 
                                name: "Sarah Jenkins", 
                                role: "VP of Engineering, CloudScale", 
                                text: "The expertise Hiristhan brought to our project was transformative. We onboarded a Senior Developer in just 4 days, and his integration was seamless.",
                                image: "https://i.pravatar.cc/150?u=sarah"
                            },
                            { 
                                name: "Michael Cheng", 
                                role: "Product Owner, FinTech Solutions", 
                                text: "Finding certified Salesforce talent was a bottleneck for us. Hiristhan's vetting process is top-notch – the developer surpassed our expectations.",
                                image: "https://i.pravatar.cc/150?u=michael"
                            },
                            { 
                                name: "Elena Rodriguez", 
                                role: "CTO, Global Retail Group", 
                                text: "They don't just provide developers; they provide partners. The strategic approach to our CRM migration saved us months of rework.",
                                image: "https://i.pravatar.cc/150?u=elena"
                            }
                        ].map((t, i) => (
                            <div key={i} className="testimonial-card-premium animate-stagger" style={{ animationDelay: `${i * 0.15}s` }}>
                                <div className="test-quote">"</div>
                                <p className="test-text">{t.text}</p>
                                <div className="test-footer">
                                    <img src={t.image} alt={t.name} className="test-avatar" />
                                    <div className="test-info">
                                        <h4 className="test-name">{t.name}</h4>
                                        <span className="test-role">{t.role}</span>
                                    </div>
                                </div>
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

            {/* Premium Resources Section */}
            <section className="resources-section">
                <div className="container">
                    <div className="section-header animate-up">
                        <span className="badge-outline">Scale Further</span>
                        <h2 className="gradient-heading">Hire More Salesforce Experts</h2>
                        <p className="section-sub">Beyond developers, we provide specialized talent to optimize every aspect of your Salesforce ecosystem.</p>
                    </div>
                    <div className="resources-premium-grid">
                        {[
                            { 
                                title: "SF QA Engineers", 
                                desc: "Rigorous testing and quality assurance to ensure bug-free, scalable deployments.",
                                icon: "🛡️"
                            },
                            { 
                                title: "Business Analysts", 
                                desc: "Strategic thinkers who translate complex business needs into actionable technical requirements.",
                                icon: "📊"
                            },
                            { 
                                title: "Certified Admins", 
                                desc: "Dedicated support for user management, security, and daily platform optimization.",
                                icon: "⚙️"
                            }
                        ].map((resource, i) => (
                            <div key={i} className="resource-card-premium animate-stagger" style={{ animationDelay: `${i * 0.15}s` }}>
                                <div className="res-icon-box">{resource.icon}</div>
                                <h3 className="res-card-title">{resource.title}</h3>
                                <p className="res-card-desc">{resource.desc}</p>
                                <button className="res-card-btn">
                                    Learn More <span className="btn-icon">→</span>
                                </button>
                                <div className="res-card-bg-accent"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium FAQs Section */}
            <section className="faqs-section">
                <div className="container">
                    <div className="faq-header animate-up">
                        <span className="badge-outline">FAQs</span>
                        <h2 className="gradient-heading">Frequently Asked Questions</h2>
                    </div>
                    <div className="faq-list animate-up">
                        {[
                            { q: "What is the typical experience level of your developers?", a: "Our developers typically have 5+ years of experience and hold multiple Salesforce certifications including Platform Developer I & II." },
                            { q: "How quickly can I onboard a developer?", a: "Depending on your requirements, we can typically have a developer ready to start within 3-5 business days." },
                            { q: "Do you offer post-implementation support?", a: "Yes, we provide flexible support packages to ensure your Salesforce environment remains optimized and up-to-date." },
                            { q: "Can I interview the developers before hiring?", a: "Absolutely! We encourage interviews to ensure there is a perfect match both technically and culturally." }
                        ].map((faq, i) => (
                            <div key={i} className={`faq-item-premium ${openFaq === i ? 'open' : ''}`} onClick={() => toggleFaq(i)}>
                                <div className="faq-question">
                                    <h4>{faq.q}</h4>
                                    <div className={`faq-toggle ${openFaq === i ? 'active' : ''}`}>
                                        <span className="line1"></span>
                                        <span className="line2"></span>
                                    </div>
                                </div>
                                <div className={`faq-answer-wrapper ${openFaq === i ? 'active' : ''}`}>
                                    <div className="faq-answer">
                                        <p>{faq.a}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium Blogs Section */}
            <section className="blogs-section">
                <div className="container">
                    <div className="section-header blogs-header animate-up">
                        <h2 className="gradient-heading">Latest from Our Blog</h2>
                    </div>
                    <div className="blogs-carousel animate-up">
                        <button className="blog-nav-btn prev" onClick={handlePrevBlog} aria-label="Previous blog">
                            ←
                        </button>

                        <div className="blogs-viewport">
                            <div className="blogs-track" style={{ transform: `translateX(-${activeBlogSlide * 100}%)` }}>
                                {blogPosts.map((blog, i) => (
                                    <div key={i} className="blog-slide">
                                        <div className="blog-card-premium">
                                <div className="blog-img-container">
                                    <img src={blog.image} alt={blog.title} className="blog-img" />
                                    <span className="blog-category-label">{blog.category}</span>
                                </div>
                                <div className="blog-body">
                                    <span className="blog-date-premium">{blog.date}</span>
                                    <h4 className="blog-title-premium">{blog.title}</h4>
                                    <p className="blog-desc-premium">{blog.desc}</p>
                                    <button className="blog-cta-btn">
                                        Read Article <span className="btn-icon">→</span>
                                    </button>
                                </div>
                                        </div>
                            </div>
                                ))}
                            </div>
                        </div>

                        <button className="blog-nav-btn next" onClick={handleNextBlog} aria-label="Next blog">
                            →
                        </button>
                    </div>

                    <div className="blog-dots" aria-label="Blog slides">
                        {blogPosts.map((_, i) => (
                            <button
                                key={i}
                                className={`blog-dot ${activeBlogSlide === i ? 'active' : ''}`}
                                onClick={() => setActiveBlogSlide(i)}
                                aria-label={`Go to blog ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default HireSalesforcePage;
