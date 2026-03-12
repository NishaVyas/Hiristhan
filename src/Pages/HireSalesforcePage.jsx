import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './HireSalesforcePage.css';

const HireSalesforcePage = () => {
    return (
        <div className="salesforce-page">
            <Navbar />
            
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <h1>Hire a Salesforce Developer</h1>
                    <p className="intro-text">
                        Empower your business with top-tier Salesforce expertise. Our dedicated developers specialize in tailoring the world's leading CRM to your unique needs, driving growth and efficiency. Whether it's complex integrations, custom lightning components, or strategic implementation, we deliver solutions that transform your operations and maximize your ROI with Salesforce.
                    </p>
                    <button className="cta-button">Get Started Now</button>
                    <div className="divider"></div>
                </div>
            </section>

            {/* Logos Section */}
            <section className="logos-section">
                <div className="container">
                    <p className="logos-text">Logos of clients (we have worked with in stripe)</p>
                    <div className="logos-marquee">
                        {/* Placeholder for logos */}
                        <div className="logo-item">CLIENT LOGO 1</div>
                        <div className="logo-item">CLIENT LOGO 2</div>
                        <div className="logo-item">CLIENT LOGO 3</div>
                        <div className="logo-item">CLIENT LOGO 4</div>
                        <div className="logo-item">CLIENT LOGO 5</div>
                    </div>
                </div>
            </section>

            {/* Detailed Briefing Section */}
            <section className="services-section">
                <div className="container">
                    <h2>Detailed Briefing of the services that we offer</h2>
                    <h3>Salesforce development services we offer</h3>
                    
                    <div className="services-grid">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="service-card">
                                <h4>Salesforce Service {i}</h4>
                                <p>
                                    We provide comprehensive Salesforce solutions tailored to your business goals. Our developers excel in creating scalable, secure, and high-performance applications that enhance user experience and drive significant business growth through expert customization and strategic implementation.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Salesforce Technologies Section */}
            <section className="tech-section">
                <div className="container">
                    <h2>Salesforce Technologies we specialize</h2>
                    <div className="tech-grid">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="tech-card">
                                <h4>Salesforce Technology {i}</h4>
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
