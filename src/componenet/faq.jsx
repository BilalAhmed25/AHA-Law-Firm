import React, { useState } from "react";
import "../assets/css/faq.css";

const faqData = [
    {
        question: "What types of legal matters does AHA Law Firm handle?",
        answer: "AHA Law Firm is a full-service legal practice headquartered in Dubai and Ajman, UAE. We represent corporate entities, financial institutions, global investors, and individual clients across Litigation, Commercial Law, Real Estate, Criminal Defense, Family Law, Arbitration, Tax, and Intellectual Property."
    },
    {
        question: "How do I schedule an initial consultation with your legal team?",
        answer: "You can schedule a consultation directly by calling us at +971 56 685 6365, emailing info@ahalawfirmdxb.com, or contacting us on WhatsApp. Our team will arrange a meeting with a specialized legal advisor at your convenience."
    },
    {
        question: "Do you represent clients in both Dubai and Ajman courts?",
        answer: "Yes, our advocacy team holds full rights of audience before all UAE Federal and Local Courts in Dubai, Ajman, Abu Dhabi, and across all Emirates, as well as international arbitration centers including DIAC and DIFC Courts."
    },
    {
        question: "What are your fee structures and retainer options?",
        answer: "We offer transparent, competitive fee structures tailored to your case requirements, including fixed-fee initial consultations, milestone-based litigation retainers, and ongoing monthly corporate advisory packages."
    },
    {
        question: "Can you assist with Interpol Red Notices and extradition defense?",
        answer: "Yes, our practice includes dedicated specialists in Interpol Red Notice removal, international extradition defense, cross-border commercial disputes, and Golden Visa residency solutions."
    }
];

function Faq() {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="container">
                <div className="faq-main-wrapper">
                    <div className="row">
                        {/* Left Column */}
                        <div className="col-lg-5 d-flex flex-column justify-content-between" style={{ paddingBottom: '10px' }}>
                            <div>
                                <span className="faq-badge">Got Questions?</span>
                                <h2 className="faq-left-title" style={{ marginBottom: '30px' }}>Frequently asked questions</h2>
                            </div>

                            <div className="faq-cta-card">
                                <h3 className="faq-cta-title">Still have questions?</h3>
                                <p className="faq-cta-text">
                                    Can't find the answer to your question? Send us an email or message and our legal team will get back to you as soon as possible!
                                </p>
                                <a href="mailto:info@ahalawfirmdxb.com" className="faq-cta-btn">
                                    <i className="fa-solid fa-paper-plane" style={{ marginRight: '8px' }} /> Send Email
                                </a>
                            </div>
                        </div>

                        {/* Right Column Accordion */}
                        <div className="col-lg-7">
                            <div className="faq-accordion-list">
                                {faqData.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={`faq-item ${activeIndex === idx ? "active" : ""}`}
                                        onClick={() => toggleAccordion(idx)}
                                    >
                                        <div className="faq-item-header">
                                            <h4 className="faq-item-question">{item.question}</h4>
                                            <div className="faq-item-toggle-badge">
                                                <i className="fa-solid fa-chevron-down" />
                                            </div>
                                        </div>
                                        <div className="faq-item-answer">
                                            <p className="faq-item-answer-text">{item.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
