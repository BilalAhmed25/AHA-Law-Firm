import React from "react";
import { IMAGES } from "../constant/theme";

function AboutThree() {
    return (
        <section className="gap">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Column Image */}
                    <div className="col-lg-6">
                        <div style={{ position: 'relative', marginBottom: '35px' }}>
                            <img
                                src={IMAGES.abouttwoimg || IMAGES.about1}
                                alt="AHA Law Firm Legal Excellence"
                                style={{
                                    borderRadius: '20px',
                                    width: '100%',
                                    boxShadow: '0 15px 40px rgba(10, 22, 40, 0.1)',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                    </div>

                    {/* Right Column Text */}
                    <div className="col-lg-6">
                        <div className="about-text-wrapper" style={{ marginBottom: '30px' }}>
                            <span style={{ color: 'var(--theme-colour)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '14px' }}>
                                Unmatched Legal Commitment
                            </span>
                            <h2 style={{ marginTop: '10px', marginBottom: '22px', fontWeight: '700', fontSize: '36px', color: '#0A1628', lineHeight: '1.3' }}>
                                Proactive Counsel & Result-Oriented Advocacy
                            </h2>
                            <p style={{ color: '#555555', fontSize: '16px', lineHeight: '28px', marginBottom: '16px', marginTop: '20px' }}>
                                Navigating complex legal landscapes requires more than statutory knowledge; it demands foresight, strategic positioning, and ruthless attention to detail. At AHA Law Firm, we align our legal strategies with your commercial objectives to achieve decisive outcomes.
                            </p>
                            <p style={{ color: '#555555', fontSize: '16px', lineHeight: '28px', marginBottom: '0', marginTop: '16px' }}>
                                From complex multi-jurisdictional disputes and asset recovery to corporate governance and private wealth preservation, our legal team stands by your side with transparent advice, rapid response times, and relentless dedication to protecting your rights.
                            </p>

                            <div style={{ marginTop: '32px' }}>
                                <a
                                    href="https://wa.me/971566856365?text=Hello%2C%20I%20would%20like%20to%20consult%20with%20a%20legal%20expert."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn"
                                >
                                    <span>Contact Our Legal Experts</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutThree;
