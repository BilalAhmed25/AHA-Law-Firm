import React from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../constant/theme";

function AboutHero() {
    return (
        <section
            className="about-banner"
            style={{
                backgroundColor: '#0A1628',
                backgroundImage: `linear-gradient(135deg, rgba(10, 22, 40, 0.25) 0%, rgba(15, 32, 58, 0.15) 100%), url(${IMAGES.bannerbg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                paddingTop: '160px',
                paddingBottom: '100px',
                color: '#ffffff',
                overflow: 'hidden'
            }}
        >
            {/* Background Decorative Accents */}
            <div style={{
                position: 'absolute',
                top: '-100px',
                right: '-100px',
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(197, 160, 89, 0.15) 0%, rgba(0,0,0,0) 70%)',
                pointerEvents: 'none'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="row align-items-center">
                    {/* Hero Main Content */}
                    <div className="col-lg-7 text-start">
                        {/* Breadcrumbs */}
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'rgba(255, 255, 255, 0.08)',
                            backdropFilter: 'blur(10px)',
                            padding: '6px 16px',
                            borderRadius: '30px',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            marginBottom: '24px',
                            fontSize: '14px',
                            fontWeight: '500'
                        }}>
                            <Link to="/" style={{ color: '#D1D5DB', textDecoration: 'none', transition: 'color 0.3s' }}>Home</Link>
                            <span style={{ color: 'var(--theme-colour)' }}>/</span>
                            <span style={{ color: '#ffffff', fontWeight: '600' }}>About Us</span>
                        </div>

                        <h1 style={{
                            fontSize: '44px',
                            lineHeight: '1.25',
                            fontWeight: '800',
                            color: '#ffffff',
                            marginBottom: '20px',
                            letterSpacing: '-0.5px'
                        }}>
                            Architects of Superior Legal Representation Across the UAE
                        </h1>

                        <p style={{
                            color: '#E2E8F0',
                            fontSize: '18px',
                            lineHeight: '30px',
                            marginBottom: '32px',
                            maxWidth: '620px',
                            fontWeight: '300'
                        }}>
                            Founded on principles of absolute integrity, strategic foresight, and advocacy excellence, AHA Law Firm delivers trusted legal counsel to corporations, high-net-worth individuals, and international entities across Dubai, Sharjah, and global jurisdictions.
                        </p>

                        {/* Credential Badges */}
                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '35px' }}>
                            {[
                                "UAE Licensed",
                                "UAE Federal Court Rights",
                                "DIFC & ADGM Tribunals",
                                "International Legal Advisory"
                            ].map((badge, idx) => (
                                <div key={idx} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    background: 'rgba(10, 22, 40, 0.6)',
                                    border: '1px solid rgba(197, 160, 89, 0.4)',
                                    padding: '8px 16px',
                                    borderRadius: '8px',
                                    fontSize: '13px',
                                    fontWeight: '600',
                                    color: '#F8FAFC'
                                }}>
                                    <i className="fa-solid fa-shield-halved" style={{ color: 'var(--theme-colour)', fontSize: '13px' }} />
                                    <span>{badge}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                            <a
                                href="https://wa.me/971566856365?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20consultation%20with%20AHA%20Law%20Firm."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                            >
                                <span>Schedule Consultation</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Side Visual Showcase */}
                    <div className="col-lg-5 mt-5 mt-lg-0">
                        <div style={{ position: 'relative' }}>
                            <div style={{
                                position: 'relative',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
                                border: '2px solid rgba(255, 255, 255, 0.1)'
                            }}>
                                <img
                                    src={IMAGES.about2 || IMAGES.about1}
                                    alt="AHA Law Firm Leadership & Defense"
                                    style={{ width: '100%', display: 'block', height: '420px', objectFit: 'cover' }}
                                />
                            </div>

                            {/* Floating Glassmorphic Metric Box */}
                            <div className="about-hero-metric-box" style={{
                                background: 'rgba(10, 22, 40, 0.95)',
                                backdropFilter: 'blur(16px)',
                                border: '1px solid rgba(197, 160, 89, 0.5)',
                                padding: '20px 24px',
                                borderRadius: '16px',
                                boxShadow: '0 15px 35px rgba(0,0,0,0.4)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px',
                                maxWidth: '300px'
                            }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '12px',
                                    background: 'var(--theme-colour)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#ffffff',
                                    fontSize: '22px',
                                    flexShrink: 0
                                }}>
                                    <i className="fa-solid fa-scale-balanced" />
                                </div>
                                <div>
                                    <h4 style={{ color: '#ffffff', margin: 0, fontSize: '28px', fontWeight: '800' }}>20+</h4>
                                    <span style={{ color: '#94A3B8', fontSize: '13px', fontWeight: '500', lineHeight: '1.35', display: 'block' }}>Practice Areas Covered Across UAE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutHero;
