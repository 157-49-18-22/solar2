import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

const faqData = {
    general: [
        {
            question: "How does solar power work?",
            answer: "Solar panels convert sunlight into direct current (DC) electricity, which is then converted to alternating current (AC) by an inverter for use in your home."
        },
        {
            question: "What happens during a power cut?",
            answer: "On-grid solar systems shut down during power cuts for safety. Hybrid systems can continue to provide power if they have battery backup."
        },
        {
            question: "Do I need a battery with my solar system?",
            answer: "Not necessarily. For on-grid systems, you can export excess power to the grid. Batteries are only needed for off-grid or hybrid systems."
        },
    ],
    maintenance: [
        {
            question: "What is the life of a rooftop solar system?",
            answer: "A well-maintained solar system typically lasts for 25+ years. Grid Zero provides warranties to ensure long-term performance."
        },
        {
            question: "Do Solar Rooftop projects have a high maintenance cost?",
            answer: "No, solar systems require very low maintenance. Occasional cleaning and regular check-ups (which we provide) are usually sufficient."
        },
        {
            question: "Can Solar projects damage my roof?",
            answer: "No. Our installation process is non-intrusive and ensures your roof's integrity is maintained. We use specialized mounting structures."
        },
        {
            question: "Do I need to clean my Solar plant?",
            answer: "Yes, keeping panels clean ensures maximum efficiency. We offer professional cleaning services as part of our maintenance packages."
        },
        {
            question: "My roof is not made of concrete; can I still install a Solar Project?",
            answer: "Yes, we have specialized mounting solutions for metal sheds, tiles, and other roof types."
        }
    ],
    economics: [
        {
            question: "What is the ROI on a solar system?",
            answer: "Most homeowners recover their investment in 3-5 years, after which the electricity generated is effectively free for the next 20 years."
        },
        {
            question: "Are there any government subsidies available?",
            answer: "Yes, the PM Surya Ghar scheme offers significant subsidies for residential rooftop solar installations."
        },
        {
            question: "Can I get a loan for solar installation?",
            answer: "Absolutely. We offer Zero Cost EMI options and partner with leading banks to provide easy financing."
        }
    ]
};

const FAQ = () => {
    const [activeTab, setActiveTab] = useState('maintenance');
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="container">
                <h2 className="section-title">Frequently Asked <span className="highlight">Questions</span></h2>

                <div className="faq-content">
                    <div className="faq-left">
                        <div className="faq-tabs">
                            <button
                                className={`tab-btn ${activeTab === 'general' ? 'active' : ''}`}
                                onClick={() => { setActiveTab('general'); setOpenIndex(null); }}
                            >
                                General
                            </button>
                            <button
                                className={`tab-btn ${activeTab === 'maintenance' ? 'active' : ''}`}
                                onClick={() => { setActiveTab('maintenance'); setOpenIndex(null); }}
                            >
                                Solar Maintenance
                            </button>
                            <button
                                className={`tab-btn ${activeTab === 'economics' ? 'active' : ''}`}
                                onClick={() => { setActiveTab('economics'); setOpenIndex(null); }}
                            >
                                Solar Economics
                            </button>
                        </div>

                        <div className="faq-list">
                            {faqData[activeTab].map((item, index) => (
                                <div key={index} className="faq-item">
                                    <button
                                        className="faq-question"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <span>{item.question}</span>
                                        {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                    </button>
                                    <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="faq-right">
                        <div className="image-circle">
                            <img
                                src="https://images.pexels.com/photos/8853504/pexels-photo-8853504.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Solar Technician"
                            />
                            <div className="circle-bg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
