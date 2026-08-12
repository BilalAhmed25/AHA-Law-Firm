import React from "react";
import { IMAGES } from "../constant/theme";

function AboutTwo() {
    return (
        <section className="gap" style={{ paddingTop: '50px' }}>
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Column Text */}
                    <div className="col-lg-6">
                        <div style={{ paddingRight: '35px', marginBottom: '30px' }}>
                            <span style={{ color: 'var(--theme-colour)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '14px' }}>
                                Comprehensive Legal Mastery
                            </span>
                            <h2 style={{ marginTop: '10px', marginBottom: '22px', fontWeight: '700', fontSize: '36px', color: '#0A1628', lineHeight: '1.3' }}>
                                Strategic Representation Tailored to Your Success
                            </h2>
                            <p style={{ color: '#555555', fontSize: '16px', lineHeight: '28px', marginBottom: '16px' }}>
                                At AHA Law Firm, we combine rigorous UAE statutory legal analysis with agile dispute resolution strategies. Whether representing multinational corporations, financial institutions, or private individuals, our legal advocates deliver unmatched clarity, discretion, and high-stakes advocacy across every level of the legal system.
                            </p>
                            <p style={{ color: '#555555', fontSize: '16px', lineHeight: '28px', marginBottom: '0' }}>
                                With full rights of audience before Dubai, Ajman, and UAE Federal Courts as well as DIFC and DIAC arbitration tribunals, we provide proactive legal defense, corporate structuring, and strategic advisory designed to secure your long-term success and safeguard your commercial interests.
                            </p>

                            <div style={{ marginTop: '32px' }}>
                                <a
                                    href="https://wa.me/971566856365?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20free%20consultation."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn"
                                >
                                    <span>Get Free Consultation</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column Image (Without 15+ Years Badge) */}
                    <div className="col-lg-6">
                        <div style={{ position: 'relative' }}>
                            <img
                                src={IMAGES.about2}
                                alt="AHA Law Firm Legal Team"
                                style={{
                                    borderRadius: '20px',
                                    width: '100%',
                                    boxShadow: '0 15px 40px rgba(10, 22, 40, 0.1)',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutTwo;
