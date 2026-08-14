import React, { useState } from "react";
import "../assets/css/overview-cards.css";

function OverviewCards() {
    const [flippedCards, setFlippedCards] = useState({});

    const toggleFlip = (index) => {
        setFlippedCards((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <section className="overview-cards-section">
            <div className="container">
                {/* Header Row */}
                <div className="overview-cards-header">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h2 className="overview-cards-title">What is AHA Law Firm?</h2>
                            <a
                                href="https://wa.me/971566856365?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20free%20consultation."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="overview-cards-pill-btn"
                            >
                                Explore now <i className="fa-solid fa-arrow-right" style={{ fontSize: '12px' }} />
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <p className="overview-cards-subtext">
                                AHA Law Firm is a premier full-service legal practice delivering strategic, yield-driven legal solutions that protect your commercial interests, assets, and reputation across the UAE.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3 Cards Grid Row */}
                <div className="row g-4">
                    {/* Card 1: Wide Card (#F6F0E9) */}
                    <div className="col-lg-6">
                        <div
                            className={`overview-card-flip-container ${flippedCards[0] ? 'flipped' : ''}`}
                            onClick={() => toggleFlip(0)}
                        >
                            <div className="overview-card-inner">
                                {/* FRONT SIDE */}
                                <div className="overview-card-front overview-card-wide">
                                    <div>
                                        <div className="card-badge-top">
                                            <span>✦ COURT ADVOCACY</span>
                                            <span className="flip-hint-badge"><i className="fa-solid fa-rotate"></i> Flip</span>
                                        </div>
                                        <h3 className="overview-card-wide-title">Unrivaled UAE Court Advocacy</h3>
                                        <p className="overview-card-wide-desc" style={{ marginTop: '14px' }}>
                                            Full rights of audience across all UAE Federal & Local Courts, DIFC, and international arbitration centers.
                                        </p>
                                    </div>
                                    <div className="card-front-footer">
                                        <span className="overview-card-circle-btn">
                                            <i className="fa-solid fa-arrow-up-right-from-square" />
                                        </span>
                                        <span className="card-hover-prompt">Hover or tap card to view details ↺</span>
                                    </div>
                                </div>

                                {/* BACK SIDE */}
                                <div className="overview-card-back overview-card-back-dark">
                                    <div>
                                        <div className="card-back-header">
                                            <span className="card-back-badge">🏛️ LITIGATION & ARBITRATION</span>
                                            <span className="card-back-flip-icon"><i className="fa-solid fa-rotate-left"></i></span>
                                        </div>
                                        <h4 className="card-back-title">Multilingual Defense & Representation</h4>
                                        <p className="card-back-desc">
                                            Our licensed Emirati Advocates & Legal Consultants handle complex civil, commercial, criminal, and corporate litigation.
                                        </p>
                                        <ul className="card-back-list">
                                            <li><i className="fa-solid fa-circle-check"></i> Federal & Local UAE Courts (Dubai, Abu Dhabi, Ajman)</li>
                                            <li><i className="fa-solid fa-circle-check"></i> DIFC & ADGM Common Law Courts</li>
                                            <li><i className="fa-solid fa-circle-check"></i> DIAC, ICC & International Arbitration</li>
                                        </ul>
                                    </div>
                                    <a
                                        href="https://wa.me/971566856365?text=Hello%2C%20I%20would%20like%20to%20consult%20on%20court%20advocacy."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="card-back-btn"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        Consult Litigation Team <i className="fa-solid fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Dark Card 1 */}
                    <div className="col-lg-3 col-md-6">
                        <div
                            className={`overview-card-flip-container ${flippedCards[1] ? 'flipped' : ''}`}
                            onClick={() => toggleFlip(1)}
                        >
                            <div className="overview-card-inner">
                                {/* FRONT SIDE */}
                                <div className="overview-card-front overview-card-dark">
                                    <div>
                                        <div className="card-badge-top">
                                            <span>🛡️ PROTECTION</span>
                                            <span className="flip-hint-badge"><i className="fa-solid fa-rotate"></i> Flip</span>
                                        </div>
                                        <h3 className="overview-card-dark-title">Always Strategic, Always Protected</h3>
                                        <p className="overview-card-dark-desc" style={{ marginTop: '14px' }}>
                                            Personalized legal strategies tailored to safeguard your commercial assets, reputation, and long-term future.
                                        </p>
                                    </div>
                                    <div className="card-front-footer">
                                        <span className="card-hover-prompt">Hover or tap to flip ↺</span>
                                    </div>
                                </div>

                                {/* BACK SIDE */}
                                <div className="overview-card-back overview-card-back-gold">
                                    <div>
                                        <div className="card-back-header">
                                            <span className="card-back-badge">🛡️ RISK MANAGEMENT</span>
                                            <span className="card-back-flip-icon"><i className="fa-solid fa-rotate-left"></i></span>
                                        </div>
                                        <h4 className="card-back-title">Proactive Asset & Risk Defense</h4>
                                        <p className="card-back-desc">
                                            Preventative auditing, contract negotiation, and crisis mitigation tailored for corporate entities & high-net-worth clients.
                                        </p>
                                        <ul className="card-back-list">
                                            <li><i className="fa-solid fa-shield-halved"></i> Corporate Asset Structuring</li>
                                            <li><i className="fa-solid fa-shield-halved"></i> Commercial Contract Drafting</li>
                                            <li><i className="fa-solid fa-shield-halved"></i> Brand & IP Defense</li>
                                        </ul>
                                    </div>
                                    <a
                                        href="https://wa.me/971566856365?text=Hello%2C%20I%20would%20like%20to%20protect%20my%20assets."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="card-back-btn"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        Protect Assets <i className="fa-solid fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Dark Card 2 */}
                    <div className="col-lg-3 col-md-6">
                        <div
                            className={`overview-card-flip-container ${flippedCards[2] ? 'flipped' : ''}`}
                            onClick={() => toggleFlip(2)}
                        >
                            <div className="overview-card-inner">
                                {/* FRONT SIDE */}
                                <div className="overview-card-front overview-card-dark">
                                    <div>
                                        <div className="card-badge-top">
                                            <span>⚡ HANDS-FREE</span>
                                            <span className="flip-hint-badge"><i className="fa-solid fa-rotate"></i> Flip</span>
                                        </div>
                                        <h3 className="overview-card-dark-title">100% Hands-Free Advisory</h3>
                                        <p className="overview-card-dark-desc" style={{ marginTop: '14px' }}>
                                            No need to manage complexities manually. AHA Law Firm handles every legal procedure seamlessly in the background for you.
                                        </p>
                                    </div>
                                    <div className="card-front-footer">
                                        <span className="card-hover-prompt">Hover or tap to flip ↺</span>
                                    </div>
                                </div>

                                {/* BACK SIDE */}
                                <div className="overview-card-back overview-card-back-blue">
                                    <div>
                                        <div className="card-back-header">
                                            <span className="card-back-badge">⚡ LEGAL CONCIERGE</span>
                                            <span className="card-back-flip-icon"><i className="fa-solid fa-rotate-left"></i></span>
                                        </div>
                                        <h4 className="card-back-title">End-to-End Execution</h4>
                                        <p className="card-back-desc">
                                            Complete legal management from government filings to corporate retainer advisory so you focus purely on growth.
                                        </p>
                                        <ul className="card-back-list">
                                            <li><i className="fa-solid fa-bolt"></i> Dedicated Legal Retainers</li>
                                            <li><i className="fa-solid fa-bolt"></i> Government & Licensing Compliance</li>
                                            <li><i className="fa-solid fa-bolt"></i> 24/7 Priority Legal Support</li>
                                        </ul>
                                    </div>
                                    <a
                                        href="https://wa.me/971566856365?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20legal%20retainer%20plans."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="card-back-btn"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        Get Retainer Plan <i className="fa-solid fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OverviewCards;
