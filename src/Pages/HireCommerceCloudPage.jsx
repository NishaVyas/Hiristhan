import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './HireCommerceCloudPage.css';
import salesforceImage from '../assets/images/Servicepage/salesforce.jpg';
import serviceImage from '../assets/images/Servicepage/service.jpg';
import salesImage from '../assets/images/Servicepage/sales.png';
import projectImage from '../assets/images/Homepage/project.jpg';
import teamImage from '../assets/images/Homepage/team.jpg';
import hourlyImage from '../assets/images/Homepage/hourly.jpg';
import cert4 from '../assets/images/certs/download (4).png';
import cert5 from '../assets/images/certs/download (5).png';
import cert6 from '../assets/images/certs/download (6).png';
import cert7 from '../assets/images/certs/download (7).png';
import cert8 from '../assets/images/certs/download (8).png';
import cert9 from '../assets/images/certs/download (9).png';
import cert10 from '../assets/images/certs/download (10).png';
import cert11 from '../assets/images/certs/download (11).png';
import cert12 from '../assets/images/certs/download (12).png';
import cert13 from '../assets/images/certs/download (13).png';
import cert14 from '../assets/images/certs/download (14).png';
import cert15 from '../assets/images/certs/download (15).png';
import cert16 from '../assets/images/certs/download (16).png';
import cert17 from '../assets/images/certs/download (17).png';

const certImages = [
    cert4, cert5, cert6, cert7, cert8, cert9, cert10, 
    cert11, cert12, cert13, cert14, cert15, cert16, cert17
];

const HireCommerceCloudPage = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [openFaq, setOpenFaq] = useState(null);
    const [activeBlogSlide, setActiveBlogSlide] = useState(0);
    const serviceCardsRef = useRef([]);
    const techStackSectionRef = useRef(null);
    const techStackScrollAreaRef = useRef(null);
    const techStackViewportRef = useRef(null);
    const techStackRailRef = useRef(null);

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
            name: "B2C Commerce",
            skills: [
                "SFRA Development", "PWA Kit", "Cartridge Development", "OCAPI Integration",
                "SCAPI Integration", "Core Web Vitals", "SEO Optimization", "Storefront Customization",
                "Page Designer", "Content Slots"
            ]
        },
        {
            name: "B2B Commerce",
            skills: [
                "Account-Specific Pricing", "Complex Product Catalogs", "Punchout Integrations",
                "ERP Integration (SAP, Oracle, NetSuite)", "Inventory Sync", "Order Sync",
                "Lightning Commerce", "Buyer Experience"
            ]
        },
        {
            name: "D2C & Storefront",
            skills: [
                "Quick-Start Templates", "Localized Checkout", "Einstein Product Discovery",
                "CRM Integration", "Multi-Language Support", "Mobile Commerce",
                "Headless Commerce", "Composable Storefront"
            ]
        },
        {
            name: "Order Management",
            skills: [
                "Order Orchestration", "Routing & Splitting", "Allocation Logic",
                "Multi-Warehouse Fulfillment", "3PL Integration", "WMS Integration",
                "Shipping Systems", "Real-Time Status Updates"
            ]
        },
        {
            name: "Payments & PoS",
            skills: [
                "Stripe Integration", "Adyen Integration", "PayPal Integration", "Cybersource",
                "Tokenization", "PCI Compliance", "Multi-Currency Support",
                "PoS Configuration", "Hardware Integration", "Unified Commerce"
            ]
        },
        {
            name: "Commerce AI",
            skills: [
                "Einstein Recommendations", "Predictive Sort", "Personalized Promotions",
                "Commerce Insights", "Data Cloud Integration", "A/B Testing",
                "Conversion Optimization", "Revenue Analytics"
            ]
        }
    ];

    const blogPosts = [
        {
            title: "Future of Agentforce Commerce",
            date: "Oct 12, 2025",
            desc: "Exploring how generative AI is transforming Salesforce Commerce Cloud workflows.",
            category: "AI",
            image: projectImage
        },
        {
            title: "SFRA Storefront Modernization",
            date: "Sep 28, 2025",
            desc: "Redesign your shopping experience with modern SFRA and PWA Kit storefronts.",
            category: "Development",
            image: teamImage
        },
        {
            title: "Order Management Best Practices",
            date: "Aug 15, 2025",
            desc: "Seamless fulfillment and order orchestration between Salesforce and your ERP systems.",
            category: "Integration",
            image: hourlyImage
        }
    ];

    const renderedBlogPosts = [...blogPosts, ...blogPosts];
    const blogTranslate = activeBlogSlide * (100 / renderedBlogPosts.length);

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

    useEffect(() => {
        const section = techStackSectionRef.current;
        const scrollArea = techStackScrollAreaRef.current;
        const viewport = techStackViewportRef.current;
        const rail = techStackRailRef.current;

        if (!section || !scrollArea || !viewport || !rail) {
            return undefined;
        }

        let animationFrameId = null;

        const updateMetrics = () => {
            if (window.innerWidth <= 1024) {
                section.style.removeProperty('--tech-stack-scroll-distance');
                section.style.removeProperty('--tech-stack-scroll-progress');
                scrollArea.style.height = '';
                return;
            }

            const scrollDistance = Math.max(0, rail.scrollHeight - viewport.clientHeight);
            section.style.setProperty('--tech-stack-scroll-distance', `${scrollDistance}px`);
            scrollArea.style.height = `${viewport.clientHeight + scrollDistance}px`;
        };

        const updateScrollProgress = () => {
            if (window.innerWidth <= 1024) {
                section.style.removeProperty('--tech-stack-scroll-progress');
                return;
            }

            const scrollDistance = parseFloat(section.style.getPropertyValue('--tech-stack-scroll-distance')) || 0;
            if (!scrollDistance) {
                section.style.setProperty('--tech-stack-scroll-progress', '0');
                return;
            }

            const stickyTop = 108;
            const scrollAreaRect = scrollArea.getBoundingClientRect();
            const traveled = Math.min(Math.max(stickyTop - scrollAreaRect.top, 0), scrollDistance);
            section.style.setProperty('--tech-stack-scroll-progress', `${traveled / scrollDistance}`);
        };

        const requestUpdate = () => {
            if (animationFrameId !== null) {
                cancelAnimationFrame(animationFrameId);
            }

            animationFrameId = requestAnimationFrame(() => {
                updateMetrics();
                updateScrollProgress();
            });
        };

        requestUpdate();
        window.addEventListener('scroll', requestUpdate, { passive: true });
        window.addEventListener('resize', requestUpdate);

        return () => {
            if (animationFrameId !== null) {
                cancelAnimationFrame(animationFrameId);
            }
            window.removeEventListener('scroll', requestUpdate);
            window.removeEventListener('resize', requestUpdate);
        };
    }, []);

    const skillIconMap = {
        "SFRA Development": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
        "B2C Commerce": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>,
        "Order Management": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M7 20h10"/><path d="M9 16v4"/><path d="M15 16v4"/></svg>,
        "Commerce AI": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v8"/><path d="M12 14v8"/><path d="M4.93 4.93l5.66 5.66"/><path d="M13.41 13.41l5.66 5.66"/><path d="M2 12h8"/><path d="M14 12h8"/><path d="M4.93 19.07l5.66-5.66"/><path d="M13.41 10.59l5.66-5.66"/></svg>,
        "Payments & PoS": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
    };

    const renderBentoIcon = (iconName) => {
        switch (iconName) {
            case 'crm':
                return (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <rect x="3" y="4" width="8" height="7" rx="1.5"></rect>
                        <rect x="13" y="4" width="8" height="7" rx="1.5"></rect>
                        <rect x="3" y="13" width="8" height="7" rx="1.5"></rect>
                        <path d="M13 16h8"></path>
                        <path d="M17 13v7"></path>
                    </svg>
                );
            case 'lwc':
                return (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"></path>
                    </svg>
                );
            case 'appx':
                return (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M5 19c4-1 7-4 8-8 2-1 4-4 3-6-2-1-5 1-6 3-4 1-7 4-8 8l3 0 0 3z"></path>
                        <circle cx="15" cy="9" r="1.5"></circle>
                    </svg>
                );
            case 'integration':
                return (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M10 13l4-4"></path>
                        <path d="M8 16l-2 2a3 3 0 01-4-4l2-2"></path>
                        <path d="M16 8l2-2a3 3 0 114 4l-2 2"></path>
                    </svg>
                );
            case 'migration':
                return (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 3v11"></path>
                        <path d="M8 10l4 4 4-4"></path>
                        <rect x="4" y="16" width="16" height="5" rx="1.5"></rect>
                    </svg>
                );
            case 'strategy':
                return (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M4 19h16"></path>
                        <rect x="6" y="11" width="3" height="6" rx="0.8"></rect>
                        <rect x="11" y="8" width="3" height="9" rx="0.8"></rect>
                        <rect x="16" y="5" width="3" height="12" rx="0.8"></rect>
                    </svg>
                );
            default:
                return null;
        }
    };

    const renderTechStackIcon = (iconName) => {
        switch (iconName) {
            case 'salesCloud':
                return (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M4 20V10"></path>
                        <path d="M8 20V4"></path>
                        <path d="M12 20v-7"></path>
                        <path d="M16 20V8"></path>
                        <path d="M20 20v-4"></path>
                    </svg>
                );
            case 'serviceCloud':
                return (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                );
            case 'marketingCloud':
                return (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <circle cx="12" cy="12" r="9"></circle>
                        <circle cx="12" cy="12" r="3"></circle>
                        <line x1="12" y1="3" x2="12" y2="6"></line>
                        <line x1="12" y1="18" x2="12" y2="21"></line>
                        <line x1="3" y1="12" x2="6" y2="12"></line>
                        <line x1="18" y1="12" x2="21" y2="12"></line>
                    </svg>
                );
            case 'lwc':
                return (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M13 2L4 14h6l-1 8 9-12h-6z"></path>
                    </svg>
                );
            case 'apex':
                return (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                        <circle cx="12" cy="12" r="9"></circle>
                    </svg>
                );
            case 'shield':
                return (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z"></path>
                    </svg>
                );
            default:
                return null;
        }
    };

    const renderTimelineIcon = (iconName) => {
        switch (iconName) {
            case 'discovery':
                return (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <circle cx="11" cy="11" r="7"></circle>
                        <path d="M21 21l-4.3-4.3"></path>
                    </svg>
                );
            case 'matching':
                return (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8 8l4 4 4-4"></path>
                        <path d="M8 16l4-4 4 4"></path>
                    </svg>
                );
            case 'vetting':
                return (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M5 13l4 4L19 7"></path>
                    </svg>
                );
            case 'onboarding':
                return (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M5 12h14"></path>
                        <path d="M13 6l6 6-6 6"></path>
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <div className="salesforce-page">
            <Navbar />
            
            {/* Unique Hero Section */}
            <section className="unique-hero-section">
                {/* Background animated elements */}
                <div className="hero-bg-elements">
                    <div className="hero-blob blob-1"></div>
                    <div className="hero-blob blob-2"></div>
                </div>

                <div className="container unique-hero-container">
                    <div className="hero-content">
                        <div className="hero-badge animate-up">
                            <span className="badge-text">Hire Salesforce Commerce Cloud Developers | Vetted SFCC Experts</span>
                        </div>
                        
                        <h1 className="hero-heading animate-up" style={{ animationDelay: '0.1s' }}>
                            Hire Salesforce Commerce Cloud Developers <span className="hero-highlight hero-highlight-final">Within 7 Days</span>
                        </h1>

                        <p className="hero-description animate-up" style={{ animationDelay: '0.2s' }}>
                            Hiristan is one of the best places to hire Salesforce Commerce Cloud (Agentforce Commerce) developers on contract. Every developer in our network is Salesforce certified with verified storefront delivery experience across B2C Commerce, B2B Commerce, D2C Commerce, Order Management, and Payments. Tell us what you're building, pick your engagement model such as C2C, C2H, ODC, MSP, or freelance, and we'll send matched profiles within 24-48 hours.
                        </p>

                        <div className="hero-cta-group animate-up" style={{ animationDelay: '0.3s' }}>
                            <button className="btn-primary-glow">
                                <span>Hire Commerce Cloud Developer</span>
                                <div className="btn-arrow">→</div>
                            </button>
                            <button className="btn-outline">
                                See How It Works
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
                        <div className="hero-image-frame">
                            <img src={salesforceImage} alt="Salesforce Commerce Cloud development service" className="hero-side-image" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Logos Section */}
            {/* Logos Section - Continuous Slider */}
            <section className="logos-section">
                <div className="logos-slider">
                    <div className="logos-slider-track">
                        <div className="logos-slide-group">
                            {certImages.map((cert, index) => (
                                <div key={`cert-1-${index}`} className="logo-item-static cert-logo-item">
                                    <img src={cert} alt={`Salesforce Certification ${index + 1}`} className="cert-logo-img" />
                                </div>
                            ))}
                        </div>
                        <div className="logos-slide-group">
                            {certImages.map((cert, index) => (
                                <div key={`cert-2-${index}`} className="logo-item-static cert-logo-item">
                                    <img src={cert} alt={`ServiceNow Certification ${index + 1}`} className="cert-logo-img" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== BENTO SERVICES SECTION ===== */}
            <section className="bento-section">
                <div className="bento-container">
                    {/* Header */}
                    <div className="bento-header">
                        <span className="bento-label">✦ Core Commerce Capabilities</span>
                        <h2 className="bento-heading">
                            Hire a Salesforce Commerce Cloud Developer<br/>
                            <span className="bento-heading-accent">With Experience Working on</span>
                        </h2>
                        <p className="bento-sub">Every Commerce Cloud developer in Hiristan's network specializes in specific capabilities,<br/>so you get someone who's built exactly what you need,<br/>not someone learning on your storefront.</p>
                    </div>

                    {/* Bento Grid */}
                    <div className="bento-grid">
                        {[
                            { title: "B2C Commerce Cloud", icon: "crm", num: "01", desc: "Hire B2C Commerce Cloud developers who specialize in developing custom storefronts using Storefront Reference Architecture (SFRA) and PWA Kit. They are experts in cartridge development, OCAPI/SCAPI integrations, and frontend performance tuning to improve Core Web Vitals and SEO rankings.", tags: ["SFRA", "PWA Kit", "OCAPI/SCAPI"], featured: true },
                            { title: "B2B Commerce Cloud", icon: "lwc", num: "02", desc: "Modernize your wholesale operations with Salesforce B2B Commerce (on Lightning or Classic). Our developers excel at account-specific pricing, complex product catalogs, and punchout integrations. They can also integrate B2B Commerce with ERP systems like SAP, Oracle, or NetSuite for real-time inventory and order sync.", tags: ["Account Pricing", "ERP Integration", "Product Catalogs"], featured: false },
                            { title: "D2C Commerce Cloud", icon: "appx", num: "03", desc: "Our Salesforce D2C Commerce developers can help you launch a direct-to-consumer store with quick-start templates, localized checkout, and Einstein-powered product discovery. They specialize in building agile, high-converting storefronts that integrate seamlessly with your existing Salesforce CRM.", tags: ["D2C Storefronts", "Einstein Discovery", "CRM Integration"], featured: false },
                            { title: "Order Management", icon: "integration", num: "04", desc: "From configuring order orchestration workflows such as routing, splitting, allocation, and fulfillment across multiple warehouses, stores, and third-party logistics providers, our developers have experience across all. They also build integrations with ERP, WMS, and shipping systems so every order status update flows back to the customer in real time.", tags: ["Order Orchestration", "Fulfillment", "WMS Integration"], featured: false },
                            { title: "Payment Configuration", icon: "migration", num: "05", desc: "Our developers integrate payment processors like Stripe, Adyen, PayPal, and Cybersource. They can configure tokenization, PCI-compliant checkout flows, and stored payment methods. Additionally, they can also help you to set up multi-currency and multi-payment-method support for global storefronts.", tags: ["Stripe/Adyen/PayPal", "PCI Compliance", "Multi-Currency"], featured: false },
                            { title: "Point of Sale (PoS)", icon: "strategy", num: "06", desc: "Welcome a single unified experience by connecting in-store and online commerce. Our Commerce Cloud developers can configure Salesforce PoS to sync inventory, customer profiles, and order history across physical and digital channels, and they can also integrate PoS terminals with payment hardware, receipt printers, and barcode scanners.", tags: ["Unified Commerce", "Inventory Sync", "Hardware Integration"], featured: false },
                            { title: "Commerce AI", icon: "crm", num: "07", desc: "Our developers implement Einstein product recommendations, predictive sort on category and search pages, and personalized promotions based on browsing and purchase behavior. They configure Commerce Insights dashboards to surface revenue trends, conversion bottlenecks, and merchandising opportunities.", tags: ["Einstein AI", "Product Recommendations", "Commerce Insights"], featured: true }
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
                                    <div className="bento-icon">{renderBentoIcon(service.icon)}</div>
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

            {/* Tech Stack Section removed as requested */}

            {/* Engagement Models Section */}
            <section className="engagement-section">
                <div className="container">
                    <div className="engagement-header animate-up">
                        <span className="engagement-label">How We Work</span>
                        <h2 className="engagement-heading">Flexible Engagement Models to Hire a Commerce Cloud Developer</h2>
                        <p className="engagement-sub">Choose the engagement model to hire a Commerce Cloud developer aligning with your project scope, timeline, and budget, with the freedom to scale up or down whenever needed.</p>
                    </div>
                    
                    <div className="engagement-grid">
                        <div className="engagement-card animate-stagger">
                            <div className="engagement-media">
                                <img src={salesforceImage} alt="C2C Engagement Model" />
                                <span className="engagement-tag">Business-to-business contract</span>
                            </div>
                            <h3>C2C (Corp-to-Corp)</h3>
                            <div className="engagement-price">Contract signed between your company and Hiristan</div>
                            <ul className="engagement-features">
                                <li>Ideal for staffing firms, consultancies, and enterprises with B2B vendor policies</li>
                                <li>No payroll, tax, or compliance overhead on your side</li>
                                <li>Developers work as an extension of your delivery team</li>
                                <li>Flexible contract durations with monthly billing</li>
                            </ul>
                            <button className="engagement-btn">Hire a Salesforce Commerce Cloud Developer on C2C →</button>
                        </div>
                        
                        <div className="engagement-card animate-stagger" style={{ animationDelay: '0.1s' }}>
                            <div className="engagement-media">
                                <img src={salesImage} alt="C2H Engagement Model" />
                                <span className="engagement-tag">Evaluate before commitment</span>
                            </div>
                            <h3>C2H (Contract-to-Hire)</h3>
                            <div className="engagement-price">Typical evaluation window: 3 to 6 months</div>
                            <ul className="engagement-features">
                                <li>Start with a contract engagement, convert to full-time when ready</li>
                                <li>Reduces hiring risk on senior and specialized roles</li>
                                <li>Seamless transition with zero disruption to the ongoing project</li>
                                <li>Hiristan handles all initial recruitment and onboarding overhead</li>
                            </ul>
                            <button className="engagement-btn">Hire a Salesforce Commerce Cloud Developer on C2H →</button>
                        </div>
                        <div className="engagement-card animate-stagger" style={{ animationDelay: '0.2s' }}>
                            <div className="engagement-media">
                                <img src={teamImage} alt="ODC Engagement Model" />
                                <span className="engagement-tag">Long-term, dedicated team</span>
                            </div>
                            <h3>Offshore Salesforce Development Center (ODC)</h3>
                            <div className="engagement-price">Predictable monthly cost per resource</div>
                            <ul className="engagement-features">
                                <li>A dedicated team working exclusively on your projects</li>
                                <li>Scale from 2 developers to a full pod (devs, QA, admin, architect)</li>
                                <li>Direct reporting to your engineering or delivery leadership</li>
                                <li>Hiristan handles infrastructure, HR, and operations</li>
                            </ul>
                            <button className="engagement-btn">Build Offshore Salesforce Development Center →</button>
                        </div>
                        <div className="engagement-card animate-stagger" style={{ animationDelay: '0.3s' }}>
                            <div className="engagement-media">
                                <img src={projectImage} alt="MSP Engagement Model" />
                                <span className="engagement-tag">End-to-end ServiceNow delivery</span>
                            </div>
                            <h3>Managed Services Provider (MSP)</h3>
                            <div className="engagement-price">Outcome-based engagement</div>
                            <ul className="engagement-features">
                                <li>Full-service ownership of your Salesforce project</li>
                                <li>Includes development, administration, support, and ongoing optimization</li>
                                <li>Dedicated delivery manager and defined SLAs</li>
                                <li>Ideal for org maintenance, AMS, and continuous enhancement programs</li>
                            </ul>
                            <button className="engagement-btn">Hire Salesforce Managed Services Provider →</button>
                        </div>
                        <div className="engagement-card animate-stagger" style={{ animationDelay: '0.4s' }}>
                            <div className="engagement-media">
                                <img src={hourlyImage} alt="Freelance Engagement Model" />
                                <span className="engagement-tag">Short-term, project-scoped work</span>
                            </div>
                            <h3>Freelance Commerce Cloud Developer</h3>
                            <div className="engagement-price">Hourly or project-based billing</div>
                            <ul className="engagement-features">
                                <li>Immediate access to specialized Salesforce experts</li>
                                <li>Ideal for quick troubleshooting, audits, or small feature builds</li>
                                <li>No long-term contractual commitment</li>
                                <li>Rapid onboarding and execution</li>
                            </ul>
                            <button className="engagement-btn">Hire Salesforce Freelance Developer →</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Unique Interlocking Path Grid - Hiring Steps */}
            <section className="steps-grid-section">
                <div className="container">
                    <div className="steps-grid-header animate-up">
                        <span className="steps-grid-label">Our Process</span>
                        <h2 className="steps-grid-heading">Hire Salesforce Commerce Cloud Developers<br/><span className="steps-heading-accent">in 4 Simple Steps</span></h2>
                        <p className="steps-grid-sub">From your first conversation with Hiristan to your developer's first day of working, every step is organized to onboard the right certified Commerce Cloud developer on your project within 7 days.</p>
                    </div>
                    
                    <div className="steps-timeline">
                        <div className="timeline-track"></div>
                        {[
                            { step: "01", title: "Tell Us What You Need", icon: "discovery", text: "Start by filling out our simple inquiry form or booking a discovery call. Tell us about your project scope, the specific Salesforce products you're using (Sales, Service, Commerce, etc.), and the level of expertise you're looking for." },
                            { step: "02", title: "Resume and Developer Selection", icon: "matching", text: "Within 24-48 hours, Hiristan provides a curated list of developer profiles that match your specific requirements. Every profile shared is a certified Salesforce professional who has already cleared our internal technical vetting." },
                            { step: "03", title: "Interview and Selection", icon: "vetting", text: "Although every developer is pre-vetted against your job description, we welcome you to interview the profiles submitted. All developers will be available for screening or a further round of interview as per your requirement immediately." },
                            { step: "04", title: "Onboard Commerce Cloud Developer", icon: "onboarding", text: "Once the Commerce Cloud developer is selected, the Hiristan team will handle everything from onboarding documentation, contractual setup, to integrating the developer into your team." }
                        ].map((item, i) => (
                            <div key={i} className="timeline-step animate-up" style={{ animationDelay: `${i * 0.12}s` }}>
                                <div className="timeline-point">
                                    <span className="timeline-step-num">{item.step}</span>
                                </div>
                                <div className="timeline-card">
                                    <div className="timeline-icon">{renderTimelineIcon(item.icon)}</div>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Elegant Tech Expertise Section */}
            <section className="tech-expertise-section">
                <div className="expertise-bg-pattern"></div>
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div className="expertise-header animate-up">
                        <span className="expertise-label">Core Competencies</span>
                        <h2 className="expertise-heading">Hire Commerce Cloud Developers with <span className="text-gradient">Experience Working on</span></h2>
                        <p className="expertise-sub">Our Commerce Cloud developers bring deep, hands-on expertise across the entire Salesforce Commerce ecosystem.</p>
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
                                            {skillIconMap[skill] || <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 3"/></svg>}
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
{false && (
            <section className="testimonials-section">
                <div className="container">
                    <div className="section-header testimonials-header animate-up">
                        <span className="bento-label">Testimonials</span>
                        <h2 className="testimonials-title">Success Stories</h2>
                        <p className="section-sub testimonials-sub">Hear from industry leaders who scaled their Commerce Cloud teams with us.</p>
                    </div>
                    <div className="testimonials-grid">
                        {[
                            { 
                                name: "Sarah Jenkins", 
                                role: "VP of E-commerce, FashionBrand", 
                                text: "The expertise Hiristhan brought to our project was transformative. We onboarded a Senior SFCC Developer in just 4 days, and our storefront performance improved by 40%.",
                                image: "https://i.pravatar.cc/150?u=sarah"
                            },
                            { 
                                name: "Michael Cheng", 
                                role: "Head of Digital, RetailGiant", 
                                text: "Finding certified Commerce Cloud talent was a bottleneck for us. Hiristhan's vetting process is top-notch – the developer mastered our complex SFRA customizations instantly.",
                                image: "https://i.pravatar.cc/150?u=michael"
                            },
                            { 
                                name: "Elena Rodriguez", 
                                role: "CTO, Global Omni-Channel", 
                                text: "They don't just provide developers; they provide partners. The strategic approach to our Headless Commerce migration saved us months of rework.",
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
)}

            {/* CTA Section */}
{false && (
            <section className="cta-banner-section">
                <div className="container">
                    <div className="cta-inner">
                        <div className="cta-text-col animate-up">
                            <span className="bento-label">Get Started</span>
                            <h2 className="cta-main-heading">Certified Commerce Cloud Developers, Mapped to Your Requirements.<br/><span className="cta-heading-accent">Ready to Deploy</span></h2>
                            <p className="cta-desc">B2C, B2B, D2C, Order Management, Payments, or PoS — tell Hiristan what your Commerce Cloud project needs. You'll receive profiles of pre-vetted, certified developers within 24-48 hours, and the one you choose will be productive on your instance within 7 days.</p>
                            <div className="cta-actions">
                                <button className="cta-button-primary">Hire a Commerce Cloud Developer &rarr;</button>
                                <button className="cta-button-outline">View Talent Pool</button>
                            </div>
                            <div className="cta-trust">
                                <span className="cta-trust-item">✓ No long-term contracts</span>
                                <span className="cta-trust-item">✓ 7-day onboarding</span>
                                <span className="cta-trust-item">✓ Certified developers</span>
                            </div>
                        </div>
                        <div className="cta-img-col animate-up">
                            <div className="cta-img-frame">
                                <img src={salesforceImage} alt="Commerce Cloud experts collaborating" className="cta-img" />
                                <div className="cta-img-badge">
                                    <span className="cta-badge-num">100+</span>
                                    <span className="cta-badge-text">Vetted Experts</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
)}

            {/* Premium Resources Section */}
{false && (
            <section className="resources-section">
                <div className="container">
                    <div className="section-header resources-header-alt animate-up">
                        <h2 className="resources-heading-alt">
                            <span className="resources-heading-line">Hire More Commerce Cloud</span>
                            <span className="resources-heading-accent">Experts</span>
                        </h2>
                        <p className="section-sub resources-sub-alt">Beyond developers, we provide specialized talent to optimize every aspect of your Commerce Cloud ecosystem.</p>
                    </div>
                    <div className="resources-premium-grid">
                        {[
                            { 
                                title: "SFCC QA Engineers", 
                                desc: "Rigorous testing and quality assurance to ensure bug-free, scalable deployments.",
                                image: salesImage
                            },
                            { 
                                title: "Business Analysts", 
                                desc: "Strategic thinkers who translate complex business needs into actionable technical requirements.",
                                image: salesforceImage
                            },
                            { 
                                title: "Certified Admins", 
                                desc: "Dedicated support for user management, security, and daily platform optimization.",
                                image: salesImage
                            }
                        ].map((resource, i) => (
                            <div key={i} className="resource-card-premium animate-stagger" style={{ animationDelay: `${i * 0.15}s` }}>
                                <div className="res-image-wrap">
                                    <img src={resource.image} alt={resource.title} className="res-card-image" />
                                </div>
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
)}

            {/* Premium FAQs Section */}
            <section className="faqs-section">
                <div className="container">
                    <div className="faq-header animate-up">
                        <span className="badge-outline">FAQs</span>
                        <h2 className="gradient-heading">Frequently Asked Questions</h2>
                    </div>
                    <div className="faq-list animate-up">
                        {[
                            { q: "What's the typical contract duration for a Commerce Cloud developer engagement?", a: "It varies by project type. A storefront launch or replatforming typically runs 4 to 8 months. Ongoing optimization, A/B testing, and feature additions work well as rolling monthly contracts. Short-scoped work like payment gateway integration or PoS setup can be handled in 4 to 8 weeks on a freelance contract. Hiristan can help you estimate duration based on your scope." },
                            { q: "Can I hire Salesforce Commerce Cloud developers from Hiristan for a project based in the US while the developer works remotely from another country?", a: "Yes. Most Commerce Cloud developers on Hiristan work remotely across time zones. For US-based projects, we match developers with a minimum 4-hour overlap with your business hours. The engagement runs on C2C terms between your company and Hiristan, so there's no visa, payroll, or compliance complexity on your side. Direct communication with the developer through Slack, Teams, or Zoom — no middleman project manager layer unless you want one." }
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
{false && (
            <section className="blogs-section">
                <div className="container">
                    <div className="section-header blogs-header animate-up">
                        <span className="blogs-kicker">Knowledge Center</span>
                        <h2 className="blogs-heading">
                            <span className="blogs-heading-line">Expert Insights &</span>
                            <span className="blogs-heading-accent">Updates</span>
                        </h2>
                    </div>
                    <div className="blogs-carousel animate-up">
                        <button className="blog-nav-btn prev" onClick={handlePrevBlog} aria-label="Previous blog">
                            ←
                        </button>

                        <div className="blogs-viewport">
                            <div className="blogs-track" style={{ transform: `translateX(-${blogTranslate}%)` }}>
                                {renderedBlogPosts.map((blog, i) => (
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
)}

            <Footer />
        </div>
    );
};

export default HireCommerceCloudPage;
