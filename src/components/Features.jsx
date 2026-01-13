import React from 'react';
import { ShieldCheck, Wallet, Sun, Zap } from 'lucide-react';
import './Features.css';

const featuresList = [
    {
        icon: <Wallet size={40} />,
        title: "Zero Cost EMI",
        desc: "Go solar without breaking the bank. Flexible financing options available."
    },
    {
        icon: <ShieldCheck size={40} />,
        title: "25+ Years Warranty",
        desc: "Peace of mind with our industry-leading performance warranty."
    },
    {
        icon: <Sun size={40} />,
        title: "Gen-3 Technology",
        desc: "Using the latest bifacial panels for up to 30% more energy generation."
    },
    {
        icon: <Zap size={40} />,
        title: "5-Year Maintenance",
        desc: "Comprehensive maintenance support to keep your system at peak efficiency."
    }
];

const Features = () => {
    return (
        <section id="benefits" className="features-section">
            <div className="container">
                <div className="section-header">
                    <h2>Why Choose <span className="text-gradient">SolarSquare?</span></h2>
                    <p>We make switching to solar simple, affordable, and reliable.</p>
                </div>

                <div className="features-grid">
                    {featuresList.map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <div className="icon-box">
                                {feature.icon}
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
