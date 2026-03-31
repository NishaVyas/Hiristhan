import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './HireSalesforcePage.css';
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

const HireSalesforcePage = () => {
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
            name: "Sales",
            skills: [
                "Sales Force Automation", "Sales Team Productivity", "Partner Relationship Management", "Channel Revenue Management",
                "Conversation Intelligence", "Revenue Lifecycle Management", "Configure, Price, Quote (CPQ)", "Revenue Cloud Billing",
                "Incentive Compensation Management", "Revenue Intelligence", "Sales Engagement", "Sales Planning",
                "Sales Programs", "Salesforce Maps", "Buyer Engagement", "Sales AI"
            ]
        },
        {
            name: "Service",
            skills: ["Customer Service AI", "Field Service", "Contact Center", "Agentforce IT Service", "Service Portal", "Digital Channels", "Asset Service Lifecycle Management", "Visual Remote Assistance", "Customer Service Incident Management", "Service Analytics"]
        },
        {
            name: "Marketing",
            skills: ["Data 360 for Marketing", "Salesforce Personalization", "Marketing Cloud Engagement", "Marketing Cloud Account Engagement", "Marketing Intelligence", "Loyalty Management", "Referral Marketing", "Marketing AI", "Marketing Cloud Growth Edition"]
        },
        {
            name: "Commerce",
            skills: ["B2C Commerce", "B2B Commerce", "Order Management", "Payments", "Point of Sales", "Commerce AI"]
        },
        {
            name: "Salesforce Analytics",
            skills: ["Tableau Next", "Tableau Semantics", "Tableau", "CRM Analytics", "Embedded Analytics", "Tableau Pulse", "Tableau Exchange", "Marketing Analytics"]
        },
        {
            name: "Data",
            skills: ["Data 360 for Snowflake", "Data 360 for Databricks", "Data 360 for Google", "Data 360 for AWS", "Data 360 for IBM"]
        },
        {
            name: "Agentforce",
            skills: ["Agentforce Builder", "Agentforce Script", "Agentforce Voice", "Agentforce Dev Tools", "Agentforce Observability", "AgentExchange"]
        },
        {
            name: "Integration & API Tools",
            skills: ["MuleSoft Anypoint Platform", "REST & SOAP APIs", "Salesforce Connect & External Objects", "DataWeave Transformation", "Heroku Connect", "ETL Tools (Informatica, Talend)", "Platform Events & Streaming API", "Bulk API & Metadata API", "AWS, Azure & GCP Connectors"]
        },
        {
            name: "Development & Platform",
            skills: ["Force.com Platform", "Heroku", "Salesforce DX (SFDX)", "Lightning Web Components (LWC)", "Apex Programming Language", "Visualforce", "Salesforce Functions", "AppExchange", "Salesforce CLI", "Hyperforce (Cloud Infrastructure)"]
        },
        {
            name: "DevOps & Release Management",
            skills: ["Copado", "Gearset", "AutoRABIT", "Salesforce DevOps Center", "Change Sets", "Sandboxes (Developer, Partial, Full)", "Scratch Orgs", "CI/CD Pipeline Integration", "Version Control (Git-Based)"]
        },
        {
            name: "Security & Compliance",
            skills: ["Salesforce Shield", "Identity & Access Management (IAM)", "Multi-Factor Authentication (MFA)", "Salesforce Authenticator", "Privacy Center (GDPR & CCPA)", "Data Mask", "Health Check & Security Score", "Audit Trail", "Named Credentials", "Connected Apps & OAuth"]
        },
        {
            name: "Testing & QA",
            skills: ["Apex Test Classes", "Jest (LWC Unit Testing)", "Provar (Salesforce Test Automation)", "Selenium (UI Testing)", "Copado Robotic Testing", "Scratch Org-Based Testing", "UAT Sandboxes", "Code Coverage Frameworks", "Static Code Analysis (PMD, Clayton)"]
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
        // Salesforce Platforms
        "Customer 360 Platform": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>,
        "Force.com": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L4 14h6l-1 8 9-12h-6z"/></svg>,
        "Heroku": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="3"/><path d="M9 10l6-4"/><path d="M9 14h6"/></svg>,
        "Salesforce Mobile App": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"/><circle cx="12" cy="18" r="1"/></svg>,
        "Lightning Experience": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L4 14h6l-1 8 9-12h-6z"/></svg>,
        "Salesforce Data Cloud": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10a6 6 0 0 0-12 0"/><path d="M6 10a6 6 0 0 0 6 6 6 6 0 0 0 6-6"/><path d="M8 14h8"/><path d="M12 6v4"/></svg>,
        "Industries Cloud like Vlocity/Omnistudio": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="5" height="14" rx="1"/><rect x="9.5" y="3" width="5" height="18" rx="1"/><rect x="17" y="10" width="5" height="11" rx="1"/></svg>,
        "Hyperforce (Infrastructure knowledge)": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="5" rx="1.5"/><rect x="2" y="10" width="20" height="5" rx="1.5"/><rect x="2" y="17" width="20" height="4" rx="1.5"/><circle cx="18" cy="5.5" r="0.8" fill="currentColor"/><circle cx="18" cy="12.5" r="0.8" fill="currentColor"/></svg>,
        "Tableau": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V10"/><path d="M8 20V4"/><path d="M12 20v-7"/><path d="M16 20V8"/><path d="M20 20v-4"/></svg>,
        "Agentforce vibes": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="8" width="16" height="11" rx="3"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/><circle cx="9.5" cy="13.5" r="1.2" fill="currentColor" stroke="none"/><circle cx="14.5" cy="13.5" r="1.2" fill="currentColor" stroke="none"/><path d="M9 17h6"/></svg>,
        // Integration & API
        "MuleSoft": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="5" cy="12" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><path d="M7 12h4l2-5h2"/><path d="M13 12l2 5h2"/></svg>,
        "REST/SOAP APIs": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13l4-4"/><path d="M8 17l-2 1a3 3 0 01-4-4l1-2"/><path d="M16 7l2-1a3 3 0 114 4l-1 2"/></svg>,
        "Platform Events": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
        "Change Data Capture": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/></svg>,
        "Data Loader": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v11"/><path d="M8 10l4 4 4-4"/><rect x="4" y="17" width="16" height="4" rx="1.5"/></svg>,
        // AI & Automation
        "Einstein AI": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A7 7 0 0 0 3 9c0 3.2 2.1 5.9 5 6.7V18h8v-2.3c2.9-.8 5-3.5 5-6.7A7 7 0 0 0 14.5 2z"/><path d="M9 18v3"/><path d="M15 18v3"/><path d="M9 21h6"/><circle cx="9.5" cy="9" r="1" fill="currentColor" stroke="none"/><circle cx="14.5" cy="9" r="1" fill="currentColor" stroke="none"/></svg>,
        "Flow Builder": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="5" height="4" rx="1"/><rect x="16" y="9" width="5" height="4" rx="1"/><rect x="3" y="17" width="5" height="4" rx="1"/><path d="M8 5h5a3 3 0 0 1 3 3v1"/><path d="M8 19h5a3 3 0 0 0 3-3v-1"/></svg>,
        "Apex Triggers": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
        "Next Best Action": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="3" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="21"/><line x1="3" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="21" y2="12"/></svg>,
        "OmniStudio": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="5" rx="1.5"/><rect x="2" y="10" width="20" height="5" rx="1.5"/><rect x="2" y="17" width="20" height="4" rx="1.5"/></svg>,
        // Dev Tools
        "Salesforce CLI": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 9l3 3-3 3"/><path d="M13 15h4"/></svg>,
        "VS Code": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3L8 12l9 9"/><path d="M3 6l5 6-5 6"/></svg>,
        "GitHub Actions": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><line x1="12" y1="3" x2="12" y2="9"/><line x1="12" y1="15" x2="12" y2="21"/><line x1="3" y1="12" x2="9" y2="12"/><line x1="15" y1="12" x2="21" y2="12"/></svg>,
        "Scratch Orgs": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>,
        "SFDX": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 17l6-6-6-6"/><path d="M12 19h8"/></svg>,
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
                            <span className="badge-text">Hire Salesforce Developers Within 7 Days</span>
                        </div>
                        
                        <h1 className="hero-heading animate-up" style={{ animationDelay: '0.1s' }}>
                            <span className="hero-heading-line">Hire Salesforce</span>
                            <span className="hero-heading-line">Developers <span className="hero-highlight-inline">Within</span></span>
                            <span className="hero-highlight hero-highlight-final">7 Days</span>
                        </h1>

                        <p className="hero-description animate-up" style={{ animationDelay: '0.2s' }}>
                            Skip job posting, multiple interviews, and a long period. With Hiristan, you will have instant access to pre-vetted, certified Salesforce developers ready for onboarding within 7 days. Our talent pool includes Salesforce developers across junior, mid-level, and senior experience levels.
                        </p>

                        <div className="hero-cta-group animate-up" style={{ animationDelay: '0.3s' }}>
                            <button className="btn-primary-glow">
                                <span>Hire Salesforce Developers Now</span>
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
                            <img src={serviceImage} alt="Salesforce development service" className="hero-side-image" />
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
                                    <img src={cert} alt={`Salesforce Certification ${index + 1}`} className="cert-logo-img" />
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
                        <span className="bento-label">✦ Cloud Specializations</span>
                        <h2 className="bento-heading">
                            Hire a Certified Salesforce Developer<br/>
                            <span className="bento-heading-accent">Specialized in the Cloud You Need</span>
                        </h2>
                        <p className="bento-sub">Our business is built on one principle: never place a developer we wouldn't stake our name on. Every professional in the Hiristan network holds active Salesforce certifications and verified, cloud-specific hands-on experience.</p>
                    </div>

                    {/* Bento Grid */}
                    <div className="bento-grid">
                        {[
                            { title: "Sales Cloud (Agentforce Sales)", icon: "crm", num: "01", desc: "Hire Sales Cloud developers with expertise to build and optimize sales processes using Apex, Flow, and CPQ.", tags: ["Apex", "Flow", "CPQ"], featured: true },
                            { title: "Service Cloud (Agentforce Service)", icon: "lwc", num: "02", desc: "Certified Service Cloud developers proficient in building scalable support systems with case automation, Omni-Channel routing, SLA management, and CTI/chat integrations.", tags: ["Omni-Channel", "Case Automation", "CTI"], featured: false },
                            { title: "Marketing Cloud (Agentforce Marketing)", icon: "appx", num: "03", desc: "From developing personalized journeys using AMPscript, Journey Builder, data extensions, and API integrations with other Salesforce Cloud, hire Marketing Cloud developers serving all needs.", tags: ["AMPscript", "Journey Builder", "Data Extensions"], featured: false },
                            { title: "Commerce Cloud (Agentforce Commerce)", icon: "integration", num: "04", desc: "Hire Commerce Cloud developers having expertise in building FRA cartridges and PWA kits for B2C, account-based pricing for B2B, and subscription commerce with CRM-connected data pipelines for D2C.", tags: ["B2C", "B2B", "D2C"], featured: false },
                            { title: "Agentforce", icon: "migration", num: "05", desc: "From Agentforce Builder, Voice, DevTools, to AgentExchange, hire Agentforce developers with the experience and expertise you need to leverage the power of autonomous AI agents.", tags: ["Builder", "Voice", "AgentExchange"], featured: false },
                            { title: "Tableau", icon: "strategy", num: "06", desc: "Hire Tableau developers experienced in building data models, dashboards, implementing predictive analytics, and integrating multiple data sources.", tags: ["Dashboards", "Predictive Analytics", "Data Models"], featured: true }
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


            {/* Elegant Tech Stack Section */}
            <section className="tech-stack-section" ref={techStackSectionRef}>
                <div className="tech-stack-bg">
                    <div className="tech-glow glow-1"></div>
                    <div className="tech-glow glow-2"></div>
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="tech-stack-layout">
                        <div className="tech-stack-header tech-stack-sticky">
                            <span className="tech-stack-label">More Cloud Expertise</span>
                            <h2 className="tech-stack-heading">
                                <span className="tech-stack-heading-main">Also Hire Developers For</span>
                                <span className="tech-stack-heading-accent">These Salesforce Clouds</span>
                            </h2>
                            <p className="tech-stack-intro">Beyond the major clouds, our network includes certified developers for MuleSoft, Slack, Loyalty Cloud, Data Cloud, Nonprofit Cloud, and Revenue Cloud.</p>
                        </div>

                        <div className="tech-stack-scroll-area" ref={techStackScrollAreaRef}>
                        <div className="tech-stack-viewport" ref={techStackViewportRef}>
                        <div className="tech-stack-rail" ref={techStackRailRef}>
                        {[
                            { name: "MuleSoft (Agentforce MuleSoft)", icon: "salesCloud", desc: "Whether your project needs expertise in MuleSoft AnyPoint Platform, Connectors, IDP, RPA, or Salesforce Flow, Hiristan can help you hire MuleSoft developers." },
                            { name: "Slack", icon: "serviceCloud", desc: "Hire Slack developers to create workflow automations, bots, event-driven notifications, and collaboration tools, or a custom Slack from scratch." },
                            { name: "Loyalty Cloud", icon: "marketingCloud", desc: "Hire Loyalty Cloud developers with expertise in creating & setting up loyalty programs, tracking members' activities across any industry, catering to both B2B and B2C businesses." },
                            { name: "Data Cloud (Data 360)", icon: "lwc", desc: "From designing unified data model schemes, configuring real-time data streaming, writing segmentation logics, or activating data across any of Salesforce Clouds." },
                            { name: "Nonprofit Cloud", icon: "apex", desc: "Hire Nonprofit Cloud developers experienced in building solutions for donor management, fundraising automation, grant tracking, and program operations." },
                            { name: "Revenue Cloud", icon: "shield", desc: "From configuring CPQ pricing rules and discount approval workflows to automating contract amendments and renewal cycles and setting up billing schedules." }
                        ].map((tech, i) => (
                            <div key={i} className="tech-stack-card animate-stagger" style={{ animationDelay: `${i * 0.15}s` }}>
                                <div className="tech-stack-card-num">0{i + 1}</div>
                                <div className="tech-stack-icon">{renderTechStackIcon(tech.icon)}</div>
                                <div className="tech-stack-copy">
                                    <h3 className="tech-stack-title">{tech.name}</h3>
                                    <p className="tech-stack-desc">{tech.desc}</p>
                                </div>
                            </div>
                        ))}
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Engagement Models Section */}
            <section className="engagement-section">
                <div className="container">
                    <div className="engagement-header animate-up">
                        <span className="engagement-label">How We Work</span>
                        <h2 className="engagement-heading">Flexible Engagement Models</h2>
                        <p className="engagement-sub">Choose the engagement model to hire remote Salesforce developers, aligning with your project scope, timeline, and budget, with the freedom to scale or downscale whenever needed.</p>
                    </div>
                    
                    <div className="engagement-grid">
                        <div className="engagement-card animate-stagger">
                            <div className="engagement-media">
                                <img src={salesforceImage} alt="Hourly Salesforce developer engagement" />
                                <span className="engagement-tag">Short-term projects with variable requirements</span>
                            </div>
                            <h3>Hourly Engagement Model</h3>
                            <div className="engagement-price">Pay as You Go</div>
                            <ul className="engagement-features">
                                <li>Pay only for hours worked</li>
                                <li>Scale hours up and down based on needs</li>
                                <li>Detailed timesheets and progress reports</li>
                                <li>Direct access to the developer</li>
                            </ul>
                            <button className="engagement-btn">Hire Hourly →</button>
                        </div>
                        
                        <div className="engagement-card animate-stagger" style={{ animationDelay: '0.2s' }}>
                            <div className="engagement-media">
                                <img src={serviceImage} alt="Dedicated Salesforce developer" />
                                <span className="engagement-tag">Ongoing Salesforce development needs</span>
                            </div>
                            <h3>Dedicated Salesforce Developer</h3>
                            <div className="engagement-price">Monthly Fixed Contract</div>
                            <ul className="engagement-features">
                                <li>A developer exclusively dedicated to your project</li>
                                <li>Directly integrated into your team</li>
                                <li>Daily standups, sprint planning, and progress reporting</li>
                                <li>Monthly fixed contract fee</li>
                            </ul>
                            <button className="engagement-btn">Hire a Dedicated Salesforce Developer →</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Unique Interlocking Path Grid - Hiring Steps */}
            <section className="steps-grid-section">
                <div className="container">
                    <div className="steps-grid-header animate-up">
                        <span className="steps-grid-label">Our Process</span>
                        <h2 className="steps-grid-heading">Hire Salesforce Developers<br/><span className="steps-heading-accent">in 4 Simple Steps</span></h2>
                        <p className="steps-grid-sub">From your first conversation with Hiristan to your developer's first day of working, every step is organized to onboard the right certified Salesforce developer on your project within 7 days.</p>
                    </div>
                    
                    <div className="steps-timeline">
                        <div className="timeline-track"></div>
                        {[
                            { step: "01", title: "Share Job Description (JD)", icon: "discovery", text: "Share your requirement that mentions the specialization, preferred experience level, certifications, engagement model, contract duration, and timezone. The more specific the job description, the more suited our match will be." },
                            { step: "02", title: "Developer Shortlisting", icon: "matching", text: "Within 24-48 hours, you will have the profiles of pre-vetted Salesforce developers with an above 90% match to your job description. Each profile we share will be backed by hands-on experience and certifications." },
                            { step: "03", title: "Interview and Selection", icon: "vetting", text: "Although every developer is pre-vetted against your job description, we welcome you to interview the profiles submitted. All developers will be available for screening or a further round of interview as per your requirement immediately." },
                            { step: "04", title: "Onboard Salesforce Developer", icon: "onboarding", text: "Once the Salesforce developer is selected, the Hiristan team will handle everything from onboarding documentation, contractual setup, to integrating the developer into your team." }
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
                        <h2 className="expertise-heading">Hire Salesforce Developers with <span className="text-gradient">Experience Working on</span></h2>
                        <p className="expertise-sub">Our developers bring deep, hands-on expertise across the entire Salesforce ecosystem.</p>
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
            <section className="testimonials-section">
                <div className="container">
                    <div className="section-header testimonials-header animate-up">
                        <span className="bento-label">Testimonials</span>
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
                    <div className="cta-inner">
                        <div className="cta-text-col animate-up">
                            <span className="bento-label">Get Started</span>
                            <h2 className="cta-main-heading">Your Salesforce Developer is Already Vetted.<br/><span className="cta-heading-accent">You Just Need to Pick One</span></h2>
                            <p className="cta-desc">Pre-vetted, certified Salesforce developers ready to work productively on your project within 7 days. Tell us what you need, and we'll share the profiles with you within 24-48 hours.</p>
                            <div className="cta-actions">
                                <button className="cta-button-primary">Start Hiring Today &rarr;</button>
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
                                <img src={serviceImage} alt="Salesforce experts collaborating" className="cta-img" />
                                <div className="cta-img-badge">
                                    <span className="cta-badge-num">500+</span>
                                    <span className="cta-badge-text">Vetted Experts</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium Resources Section */}
            <section className="resources-section">
                <div className="container">
                    <div className="section-header resources-header-alt animate-up">
                        <h2 className="resources-heading-alt">
                            <span className="resources-heading-line">Hire More Salesforce</span>
                            <span className="resources-heading-accent">Experts</span>
                        </h2>
                        <p className="section-sub resources-sub-alt">Beyond developers, we provide specialized talent to optimize every aspect of your Salesforce ecosystem.</p>
                    </div>
                    <div className="resources-premium-grid">
                        {[
                            { 
                                title: "SF QA Engineers", 
                                desc: "Rigorous testing and quality assurance to ensure bug-free, scalable deployments.",
                                image: serviceImage
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

            {/* Premium FAQs Section */}
            <section className="faqs-section">
                <div className="container">
                    <div className="faq-header animate-up">
                        <span className="badge-outline">FAQs</span>
                        <h2 className="gradient-heading">Frequently Asked Questions</h2>
                    </div>
                    <div className="faq-list animate-up">
                        {[
                            { q: "Is there any minimum contract duration for hiring remote Salesforce developers from Hiristan?", a: "Yes, for hourly engagement, we ask for a minimum engagement of 20 hours with no fixed contract duration. For full-time hiring, we work on monthly contracts, with no long-term commitment needed to make." },
                            { q: "Are there any hidden costs beyond the hourly or monthly rate of a Salesforce developer?", a: "No, we believe in transparency. All the costs involved with your engagement will be shared with you upfront. Put simply, what you see is what you pay." },
                            { q: "How much does it cost to hire a remote Salesforce developer?", a: "Salesforce developer hiring cost varies depending on multiple factors, such as experience, specialization, and contract duration. Longer contract duration typically has lower prices. Additionally, you can connect with us to structure the cost that works best for you." },
                            { q: "Do you charge separately for the Salesforce developer replacement if they don't meet expectations?", a: "No, with Hiristan, our clients' interests are put first. So, if a developer failed to meet your expectations, we will replace them at no additional cost to ensure the project continuity." },
                            { q: "Who owns the code and intellectual property developed by your Salesforce developers?", a: "You do. All code, configurations, and intellectual property produced during the engagement belong entirely to your organization. This is explicitly covered in the NDA and contract signed at the start of the contract duration." },
                            { q: "Can your developers work within our existing Salesforce development and deployment process?", a: "Yes. Our developers integrate into your existing DevOps workflow — whether you use Copado, Gearset, AutoRABIT, or a Git-based CI/CD pipeline. They adapt to your process, not the other way around." },
                            { q: "Will we communicate directly with our developer or through a project manager?", a: "You communicate directly with your developer through your preferred tools such as Slack, Teams, Zoom, or Jira. A Hiristan account manager remains available in the background for escalations, but your developer is your primary point of contact." },
                            { q: "What timezone will our dedicated Salesforce developer be working in?", a: "We match developers to your timezone or preferred overlap window during the requirement stage. Most of our developers offer a minimum 4-hour overlap with your core business hours, regardless of their location." },
                            { q: "Can we include the Hiristan developer in our internal team meetings and sprint cycles?", a: "Yes, our developers are embedded into your team; they attend standups, sprint planning, retrospectives, and any other meetings you include them in. They operate as a direct extension of your internal team." },
                            { q: "How do you vet Salesforce developers before adding them to your network?", a: "Every developer goes through a multi-stage vetting process that includes active certification verification against Salesforce's official database, cloud-specific technical assessment, live coding evaluation, communication screening, and reference checks from previous Salesforce project deliveries." }
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

            <Footer />
        </div>
    );
};

export default HireSalesforcePage;
