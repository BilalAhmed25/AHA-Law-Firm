import React from "react";
import { IMAGES } from "../constant/theme";

function About() {
    return (
        <section className="gap">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div style={{ position: 'relative', marginBottom: '35px' }}>
                            <img src={IMAGES.about1} alt="AHA Law Firm Office" style={{ borderRadius: '16px', width: '100%' }} />
                            <div style={{
                                position: 'absolute',
                                bottom: '-20px',
                                right: '-20px',
                                background: 'var(--theme-colour)',
                                color: '#fff',
                                padding: '25px 30px',
                                borderRadius: '12px',
                                textAlign: 'center',
                            }}>
                                <h3 style={{ color: '#fff', fontSize: '36px', fontWeight: '700' }}>15+</h3>
                                <span style={{ color: '#fff', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Years of Excellence</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-text-wrapper" style={{ marginBottom: '30px' }}>
                            <span style={{ color: 'var(--theme-colour)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '14px' }}>Why Choose AHA</span>
                            <h2 style={{ marginTop: '10px', marginBottom: '20px', fontWeight: '700', fontSize: '36px', color: '#0A1628' }}>Your Trusted Legal Partner in the UAE</h2>
                            <p style={{ marginTop: '18px', marginBottom: '20px', color: '#555555', fontSize: '16px', lineHeight: '28px' }}>AHA Law Firm is recognized for its commitment to legal excellence, strategic insight, and unwavering dedication to client interests. Our multidisciplinary team combines deep UAE legal expertise with international best practices.</p>
                            <div style={{ marginTop: '30px' }}>
                                {[
                                    "Deep expertise in UAE Federal and Local Laws",
                                    "Multilingual legal team serving diverse clientele",
                                    "Proven track record across Dubai and Sharjah courts",
                                    "Tailored, practical, and results-focused solutions",
                                ].map((item, idx) => (
                                    <div key={idx} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        marginBottom: '15px',
                                    }}>
                                        <div style={{
                                            width: '28px',
                                            height: '28px',
                                            minWidth: '28px',
                                            borderRadius: '50%',
                                            background: 'var(--theme-colour)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#fff',
                                            fontSize: '12px',
                                        }}>
                                            <i className="fa-solid fa-check" />
                                        </div>
                                        <span style={{ fontSize: '16px', fontWeight: '500' }}>{item}</span>
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

export default About;
