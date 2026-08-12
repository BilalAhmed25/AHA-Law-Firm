import React from "react";
import "../assets/css/founder-message.css";
import founderImg from "../assets/img/founder-image.jpg";

function FounderMessage() {
    return (
        <section className="founder-section">
            <div className="container">
                <div className="founder-main-card">
                    {/* Background watermark quote */}
                    <div className="founder-watermark">“</div>

                    <div className="row align-items-center">
                        {/* Left Column: Founder Portrait */}
                        <div className="col-lg-5" style={{ marginBottom: '30px' }}>
                            <div className="founder-img-wrapper">
                                <img
                                    src={founderImg}
                                    alt="Ahmed Humaid Al Blooshi - Founder & CEO"
                                    className="founder-img"
                                />
                                <div className="founder-img-badge">
                                    <i className="fa-solid fa-scale-balanced" style={{ marginRight: '8px', color: 'var(--fm-accent-gold)' }} />
                                    Integrity • Excellence • Trust
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Founder's Message */}
                        <div className="col-lg-7">
                            <div style={{ paddingLeft: '15px' }}>
                                <span className="founder-badge-tag">Founder's Message</span>
                                <h2 className="founder-title">
                                    Welcome to Ahmed Humaid Al Blooshi Advocates & Legal Consultants.
                                </h2>

                                <div className="founder-quote-symbol">“</div>

                                <p className="founder-quote-text">
                                    Since the establishment of our firm, our mission has remained clear: to provide legal services that meet the highest standards of quality and professionalism while delivering practical and effective legal solutions tailored to the needs of individuals, corporations, and institutions both within the United Arab Emirates and internationally. We firmly believe that the legal profession is a noble responsibility before it is a profession, and that the trust our clients place in us carries a commitment that we honor through integrity, transparency, excellence, and unwavering dedication. As we continue to grow, we remain committed to expanding our services and strengthening our international partnerships to become the trusted legal partner of choice across diverse industries.
                                </p>

                                <div className="founder-profile-footer">
                                    <div>
                                        <h4 className="founder-name">Ahmed Humaid Al Blooshi</h4>
                                        <p className="founder-role">Founder & Chief Executive Officer</p>
                                    </div>

                                    <div className="founder-seal">
                                        <i className="fa-solid fa-award founder-seal-icon" />
                                        <span className="founder-seal-text">Official Executive Statement</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FounderMessage;
