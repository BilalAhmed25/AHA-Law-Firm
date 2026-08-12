import React from "react";
import "../assets/css/overview-cards.css";

function OverviewCards() {
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
                    {/* Card 1: Wide Card (#F6F0E9) with Circle Button */}
                    <div className="col-lg-6">
                        <div className="overview-card-wide">
                            <div>
                                <h3 className="overview-card-wide-title">Unrivaled UAE Court Advocacy</h3>
                                <p className="overview-card-wide-desc" style={{ marginTop: '14px' }}>
                                    Full rights of audience across all UAE Federal & Local Courts, DIFC, and international arbitration centers.
                                </p>
                            </div>
                            <a
                                href="https://wa.me/971566856365?text=Hello%2C%20I%20would%20like%20to%20consult%20on%20court%20advocacy."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="overview-card-circle-btn"
                                title="Contact Us"
                            >
                                <i className="fa-solid fa-arrow-up-right-from-square" />
                            </a>
                        </div>
                    </div>

                    {/* Card 2: Dark Card 1 */}
                    <div className="col-lg-3 col-md-6">
                        <div className="overview-card-dark">
                            <h3 className="overview-card-dark-title">Always Strategic, Always Protected</h3>
                            <p className="overview-card-dark-desc">
                                Personalized legal strategies tailored to safeguard your commercial assets, reputation, and long-term future.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Dark Card 2 */}
                    <div className="col-lg-3 col-md-6">
                        <div className="overview-card-dark">
                            <h3 className="overview-card-dark-title">100% Hands-Free Advisory</h3>
                            <p className="overview-card-dark-desc">
                                No need to manage complexities manually. AHA Law Firm handles every legal procedure seamlessly in the background for you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OverviewCards;
