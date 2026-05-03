import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './HireServiceNowPage.css';
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

const HireServiceNowITSMPage = () => {
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
            name: "Core ITSM",
            skills: [
                "Incident Management", "Request Management", "Problem Management", "Change Management",
                "Cost Management", "Major Incident Management", "On-Call Management", "Walk-Up Experience",
                "Service Catalog", "Service Level Management"
            ]
        },
        {
            name: "Advanced ITSM",
            skills: [
                "Knowledge Management", "CMDB Integration for ITSM", "ITIL Process Alignment",
                "Digital Portfolio Management", "Digital Product Release", "DevOps Change Velocity",
                "ITSM Reporting and Performance Analytics"
            ]
        },
        {
            name: "AI & Automation",
            skills: [
                "Virtual Agent and Now Assist for ITSM", "AI Agents for ITSM", "Predictive Intelligence",
                "Flow Designer Automation", "Automated Incident Triage", "Knowledge Suggestions"
            ]
        },
        {
            name: "Integrations",
            skills: [
                "Splunk Integration", "Datadog Integration", "SolarWinds Integration", "Dynatrace Integration",
                "PagerDuty Integration", "Jira Integration", "Microsoft Teams Integration", "Slack Integration",
                "Email Gateway Integration", "New Relic Integration"
            ]
        },
        {
            name: "SLA & Reporting",
            skills: [
                "SLA Configuration", "OLA Management", "Underpinning Contracts", "Business Schedules",
                "Breach Notifications", "Escalation Rules", "Performance Analytics Dashboards",
                "MTTR Tracking", "First-Call Resolution", "Change Success Rate"
            ]
        },
        {
            name: "CMDB & Discovery",
            skills: [
                "CI Relationship Mapping", "Discovery Configuration", "Service Mapping",
                "CMDB Health Dashboards", "Reconciliation Rules", "CSDM Alignment",
                "Impact Analysis", "Change Risk Scoring"
            ]
        }
    ];

    const blogPosts = [
        {
            title: "Future of Now Assist AI",
            date: "Oct 12, 2025",
            desc: "Exploring how generative AI is transforming ServiceNow workflows.",
            category: "AI",
            image: projectImage
        },
        {
            title: "Service Portal Modernization",
            date: "Sep 28, 2025",
            desc: "Redesign your employee experience with modern ServiceNow Portals.",
            category: "Development",
            image: teamImage
        },
        {
            title: "Integration Hub Best Practices",
            date: "Aug 15, 2025",
            desc: "Seamless data flow between ServiceNow and your enterprise systems.",
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
        "IT Service Management (ITSM)": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>,
        "Customer Service Management (CSM)": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L4 14h6l-1 8 9-12h-6z"/></svg>,
        "App Engine": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="3"/><path d="M9 10l6-4"/><path d="M9 14h6"/></svg>,
        "IntegrationHub": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"/><circle cx="12" cy="18" r="1"/></svg>,
        "Now Assist for Creator": <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L4 14h6l-1 8 9-12h-6z"/></svg>
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
                            <span className="badge-text">Hire ServiceNow ITSM Developers | Onboard in 48–72 Hours</span>
                        </div>
                        
                        <h1 className="hero-heading animate-up" style={{ animationDelay: '0.1s' }}>
                            Hire a ServiceNow ITSM Developer <span className="hero-highlight hero-highlight-final">Within 7 Days</span>
                        </h1>

                        <p className="hero-description animate-up" style={{ animationDelay: '0.2s' }}>
                            Hiristan gives you direct access to pre-vetted, ServiceNow CIS-ITSM developers. They have expertise working on configuring and customizing the full ITSM suite, including but not limited to ticket workflows, SLA definitions, service catalog items, and approval chains. Hire a ServiceNow ITSM developer on C2C, C2H, ODC, MSP, or freelance terms, productive on your project in 7 days.
                        </p>

                        <div className="hero-cta-group animate-up" style={{ animationDelay: '0.3s' }}>
                            <button className="btn-primary-glow">
                                <span>Hire ServiceNow ITSM Developers</span>
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
                            <img src={serviceImage} alt="ServiceNow development service" className="hero-side-image" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Logos Section */}
            {/* Logos Section - Continuous Slider */}


            {/* ===== BENTO SERVICES SECTION ===== */}
            <section className="bento-section">
                <div className="bento-container">
                    {/* Header */}
                    <div className="bento-header">
                        <span className="bento-label">✦ Core ITSM Capabilities</span>
                        <h2 className="bento-heading">
                            Hire a Certified ServiceNow ITSM Developer<br/>
                            <span className="bento-heading-accent">Specialized in the Capability You Need</span>
                        </h2>
                        <p className="bento-sub">IT Service Management (ITSM) refers to several connected practices,<br/>each with its own workflows, data models, and edge cases.<br/>Every ServiceNow ITSM developer in Hiristan's network specializes in specific capabilities within the module, so you get someone who's built exactly what you need, not someone learning on your instance.</p>
                    </div>

                    {/* Bento Grid */}
                    <div className="bento-grid">
                        {[
                            { title: "Incident Management", icon: "crm", num: "01", desc: "Our developers have experience configuring incident categorization, priority matrices, assignment rules, and Major Incident Management workflows. They build auto-routing logic based on CI relationships, set up parent-child incident linking, and integrate incident creation with monitoring tools so alerts turn into tickets automatically.", tags: ["Categorization", "Auto-Routing", "Major Incidents"], featured: true },
                            { title: "Problem Management", icon: "lwc", num: "02", desc: "Hire ServiceNow developers who configure problem investigation workflows, root cause analysis templates, known error databases, and problem-to-incident linkage. They set up post-incident review processes and build dashboards that surface recurring issues before they become outages.", tags: ["Root Cause Analysis", "Known Errors", "Dashboards"], featured: false },
                            { title: "Change Management", icon: "appx", num: "03", desc: "From standard, normal, and emergency change workflows to CAB approval chains, risk and impact assessments, and change calendars with conflict detection. Our developers build change management that audit teams actually approve of. They also configure integrations with DevOps pipelines for automated change ticket creation.", tags: ["CAB Approvals", "Risk Assessment", "DevOps"], featured: false },
                            { title: "Request Management", icon: "integration", num: "04", desc: "Our developers design service catalog items, record producers, and order guides that make requesting services feel effortless. They configure variable sets, multi-level approval chains, fulfillment workflows, and SLA-driven escalations across IT, HR, and facilities requests.", tags: ["Catalog Items", "Approval Chains", "Fulfillment"], featured: false },
                            { title: "Service Catalog", icon: "migration", num: "05", desc: "Hire developers to build and maintain your service catalog end-to-end. They design catalog taxonomy, create dynamic catalog items with conditional variables, configure order guides for bundled requests, and optimize the Service Portal experience so employees actually find what they need.", tags: ["Taxonomy", "Dynamic Items", "Service Portal"], featured: false },
                            { title: "Knowledge Management", icon: "strategy", num: "06", desc: "Our developers configure knowledge bases, article templates, and approval workflows for knowledge publishing. They set up knowledge-centered service (KCS) practices, integrate knowledge suggestions into incident and request workflows, and build analytics to track article usage and gaps.", tags: ["KCS Practices", "Article Templates", "Analytics"], featured: false },
                            { title: "SLA and OLA Management", icon: "crm", num: "07", desc: "From defining SLA conditions and business schedules to configuring OLAs between internal teams and UCs with external vendors, our developers build SLA frameworks that actually hold up. They also set up breach notifications, escalation rules, and SLA performance dashboards.", tags: ["SLA Frameworks", "Breach Alerts", "Escalation Rules"], featured: false },
                            { title: "CMDB Integration for ITSM", icon: "lwc", num: "08", desc: "ITSM is as good as CMDB behind it. Our developers configure CI relationships that drive incident impact analysis, change risk scoring, and problem root cause mapping. They also set up Discovery and Service Mapping integrations so your CMDB stays current without manual upkeep.", tags: ["CI Relationships", "Discovery", "Service Mapping"], featured: false },
                            { title: "ITIL Process Alignment", icon: "appx", num: "09", desc: "Our developers align ITSM configurations with ITIL 5 practices, not by the book, but in ways that fit how your organization actually works. They translate ITIL guidance into ServiceNow workflows, configurations, and reporting without over-engineering.", tags: ["ITIL 5", "Best Practices", "Workflows"], featured: false },
                            { title: "Third-Party Integrations", icon: "integration", num: "10", desc: "Hire developers experienced in integrating ServiceNow ITSM with Splunk, Datadog, SolarWinds, Dynatrace, New Relic, PagerDuty, Jira, Microsoft Teams, Slack, and email gateways. They build bi-directional syncs, handle authentication, and manage retry and error-handling logic.", tags: ["Monitoring Tools", "Bi-Directional Sync", "Error Handling"], featured: false },
                            { title: "Virtual Agent & Now Assist", icon: "migration", num: "11", desc: "Our developers configure Virtual Agent conversations for incident creation, request fulfillment, and knowledge lookup. They also enable Now Assist for ITSM, tune prompts for ticket summarization and resolution suggestions, and measure deflection rates before and after rollout.", tags: ["Virtual Agent", "Now Assist", "Deflection Rates"], featured: false },
                            { title: "ITSM Reporting & Analytics", icon: "strategy", num: "12", desc: "From operational dashboards to executive scorecards, our developers build reports and Performance Analytics widgets tied to what leadership actually asks about — MTTR, change success rate, first-call resolution, and SLA adherence trends.", tags: ["MTTR", "Performance Analytics", "Scorecards"], featured: false },
                            { title: "AI Agents for ITSM", icon: "crm", num: "13", desc: "ServiceNow's AI Agents are changing how incidents get triaged, changes get risk-scored, and requests get fulfilled. Our developers deploy AI agents across ITSM workflows, define agent skills for incident classification, auto-resolution, and knowledge retrieval, and set guardrails so agents take the right actions.", tags: ["AI Triage", "Auto-Resolution", "Guardrails"], featured: true },
                            { title: "Major Incident Management", icon: "lwc", num: "14", desc: "Our developers configure dedicated Major Incident Management workflows with war room coordination, stakeholder communications, and post-incident reviews. They build escalation paths, set up bridge call integrations, and create executive dashboards for real-time incident visibility.", tags: ["War Rooms", "Escalation Paths", "Executive Dashboards"], featured: false }
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
                        <h2 className="engagement-heading">Flexible Engagement Models to Hire a ServiceNow ITSM Developer</h2>
                        <p className="engagement-sub">Choose the engagement model to hire ServiceNow ITSM developers, aligning with your project scope, timeline, and budget, with the freedom to scale or downscale whenever needed.</p>
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
                            <button className="engagement-btn">Hire a ServiceNow ITSM Developer on C2C →</button>
                        </div>
                        
                        <div className="engagement-card animate-stagger" style={{ animationDelay: '0.1s' }}>
                            <div className="engagement-media">
                                <img src={serviceImage} alt="C2H Engagement Model" />
                                <span className="engagement-tag">Evaluate before commitment</span>
                            </div>
                            <h3>C2H (Contract-to-Hire)</h3>
                            <div className="engagement-price">Typical evaluation window: 3 to 6 months</div>
                            <ul className="engagement-features">
                                <li>Start with a contract engagement, convert to full-time when ready</li>
                                <li>Reduces hiring risk on senior and specialized roles</li>
                                <li>Transparent conversion terms agreed upfront</li>
                                <li>Developer remains fully productive from day one</li>
                            </ul>
                            <button className="engagement-btn">Hire a ServiceNow ITSM Developer on C2H →</button>
                        </div>
                        <div className="engagement-card animate-stagger" style={{ animationDelay: '0.2s' }}>
                            <div className="engagement-media">
                                <img src={teamImage} alt="ODC Engagement Model" />
                                <span className="engagement-tag">Long-term, dedicated team</span>
                            </div>
                            <h3>Offshore ServiceNow Development Center (ODC)</h3>
                            <div className="engagement-price">Predictable monthly cost per resource</div>
                            <ul className="engagement-features">
                                <li>A dedicated team working exclusively on your projects</li>
                                <li>Scale from 2 developers to a full pod (devs, QA, admin, architect)</li>
                                <li>Direct reporting to your engineering or delivery leadership</li>
                                <li>Hiristan handles infrastructure, HR, and operations</li>
                            </ul>
                            <button className="engagement-btn">Build Offshore ServiceNow ITSM Development Center →</button>
                        </div>
                        <div className="engagement-card animate-stagger" style={{ animationDelay: '0.3s' }}>
                            <div className="engagement-media">
                                <img src={projectImage} alt="MSP Engagement Model" />
                                <span className="engagement-tag">End-to-end ServiceNow delivery</span>
                            </div>
                            <h3>Managed Services Provider (MSP)</h3>
                            <div className="engagement-price">Outcome-based engagement</div>
                            <ul className="engagement-features">
                                <li>Full-service ownership of your ServiceNow environment or project</li>
                                <li>Includes development, administration, support, and ongoing optimization</li>
                                <li>Dedicated delivery manager and defined SLAs</li>
                                <li>Ideal for org maintenance, AMS, and continuous enhancement programs</li>
                            </ul>
                            <button className="engagement-btn">ServiceNow ITSM Managed Services Provider →</button>
                        </div>
                        <div className="engagement-card animate-stagger" style={{ animationDelay: '0.4s' }}>
                            <div className="engagement-media">
                                <img src={hourlyImage} alt="Freelance Engagement Model" />
                                <span className="engagement-tag">Short-term, project-scoped work</span>
                            </div>
                            <h3>Freelance ServiceNow Developer</h3>
                            <div className="engagement-price">Pay per project milestone or hourly</div>
                            <ul className="engagement-features">
                                <li>Engage a developer for a specific deliverable or sprint</li>
                                <li>Fastest onboarding, often within 48 hours</li>
                                <li>Ideal for fixes, migrations, integrations, or one-off builds</li>
                                <li>No long-term commitment</li>
                            </ul>
                            <button className="engagement-btn">Hire Freelance ServiceNow ITSM Developer →</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Unique Interlocking Path Grid - Hiring Steps */}
            <section className="steps-grid-section">
                <div className="container">
                    <div className="steps-grid-header animate-up">
                        <span className="steps-grid-label">Our Process</span>
                        <h2 className="steps-grid-heading">Hire ServiceNow ITSM Developers<br/><span className="steps-heading-accent">in 4 Simple Steps</span></h2>
                        <p className="steps-grid-sub">From your first conversation with Hiristan to your developer's first day of working, every step is organized to onboard the right certified ServiceNow ITSM developer on your project within 7 days.</p>
                    </div>
                    
                    <div className="steps-timeline">
                        <div className="timeline-track"></div>
                        {[
                            { step: "01", title: "Resource Selection", icon: "discovery", text: "Our network of pre-screened developers means you get a shortlist of 2-3 vetted candidates in 48 hours. No wading through hundreds of irrelevant resumes." },
                            { step: "02", title: "Technical Interview", icon: "matching", text: "You interview the candidates directly to assess technical fit and soft skills. Our developers are technical and can articulate the 'why' behind their approach." },
                            { step: "03", title: "Deployment", icon: "vetting", text: "Once you approve the candidate, we handle the contracting and onboarding. Your selected developer is ready to start contributing to your project within 7 days." },
                            { step: "04", title: "Final Onboarding", icon: "onboarding", text: "Once you've selected your ServiceNow IT Service Management developer, we move ahead with contract finalization and onboarding. Within 7 days, your selected developer will be integrated into your team, ready to contribute from day one." }
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
                        <h2 className="expertise-heading">Hire a ServiceNow ITSM Developer With <span className="text-gradient">Experience Working on</span></h2>
                        <p className="expertise-sub">Our ITSM developers bring deep, hands-on expertise across the entire ServiceNow ITSM ecosystem.</p>
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
                        <p className="section-sub testimonials-sub">Hear from industry leaders who scaled their ServiceNow teams with us.</p>
                    </div>
                    <div className="testimonials-grid">
                        {[
                            { 
                                name: "Sarah Jenkins", 
                                role: "VP of Engineering, CloudScale", 
                                text: "The expertise Hiristhan brought to our project was transformative. We onboarded a Senior ServiceNow Developer in just 4 days, and his integration was seamless.",
                                image: "https://i.pravatar.cc/150?u=sarah"
                            },
                            { 
                                name: "Michael Cheng", 
                                role: "Product Owner, FinTech Solutions", 
                                text: "Finding certified ServiceNow talent was a bottleneck for us. Hiristhan's vetting process is top-notch – the developer surpassed our expectations.",
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
)}

            {/* CTA Section */}
{false && (
            <section className="cta-banner-section">
                <div className="container">
                    <div className="cta-inner">
                        <div className="cta-text-col animate-up">
                            <span className="bento-label">Get Started</span>
                            <h2 className="cta-main-heading">Your Next ServiceNow Developer is Already Vetted.<br/><span className="cta-heading-accent">Ready to Deploy</span></h2>
                            <p className="cta-desc">Tell us what you're building and the engagement model you prefer. You'll have profiles of pre-vetted, certified ServiceNow developers within 24-48 hours, and the one you choose will be productive on your instance within 7 days.</p>
                            <div className="cta-actions">
                                <button className="cta-button-primary">Hire a ServiceNow Developer &rarr;</button>
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
                                <img src={serviceImage} alt="ServiceNow experts collaborating" className="cta-img" />
                                <div className="cta-img-badge">
                                    <span className="cta-badge-num">500+</span>
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
                            <span className="resources-heading-line">Hire More ServiceNow</span>
                            <span className="resources-heading-accent">Experts</span>
                        </h2>
                        <p className="section-sub resources-sub-alt">Beyond developers, we provide specialized talent to optimize every aspect of your ServiceNow ecosystem.</p>
                    </div>
                    <div className="resources-premium-grid">
                        {[
                            { 
                                title: "ServiceNow QA Engineers", 
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
                            { q: "How fast can I hire a ServiceNow ITSM developer?", a: "Typically, we provide candidate profiles within 48 hours, and a developer can be onboarded and active on your project within 7 to 10 days. For freelance roles, this can be as fast as 48-72 hours." },
                            { q: "Do your ITSM developers have experience in specific industries like banking, healthcare, or telecom?", a: "Yes. Our network includes ITSM developers with hands-on delivery experience in banking and financial services, healthcare, telecom, public sector, manufacturing, and retail. Industry context matters in ITSM as regulated industries need more rigorous audit trails, field-heavy industries need mobile-first workflows. We prioritize industry matches when it's relevant to your project." },
                            { q: "Can I start with one ITSM developer and scale to a full ITSM team later?", a: "Yes, many engagements start with a single C2C or C2H developer and grow into full ODC teams with additional developers, admins, QA, and architects as the project expands. Scaling up takes 7-10 days from request with no renegotiation of the base contract, just an addendum for the new resources." }
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

export default HireServiceNowITSMPage;
