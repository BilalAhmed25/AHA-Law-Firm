import React from "react";
import { IMAGES } from "../constant/theme";

function Hero() {
    return (
        <section
            className="banner"
            style={{
                position: 'relative',
                paddingTop: '160px',
                paddingBottom: '120px',
                overflow: 'hidden',
                color: '#ffffff'
            }}
        >
            {/* Full-Screen Video Background */}
            <video
                src={IMAGES.heroBannerVideo || IMAGES.mobileVideo}
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'none',
                    zIndex: 0
                }}
            />

            {/* Left-Side Dark Gradient Overlay for Crisp Text Readability; Right Side Clear for Video */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to right, rgba(10, 22, 40, 0.8) 0%, rgba(10, 22, 40, 0.7) 42%, rgba(10, 22, 40, 0.45) 65%, rgba(10, 22, 40, 0.05) 85%, transparent 100%)',
                    zIndex: 1,
                    pointerEvents: 'none'
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="row align-items-center">
                    {/* Left Column: Hero Copy & Actions */}
                    <div className="col-lg-8 col-xl-7 text-start">
                        <div className="d-none d-md-inline-flex" style={{
                            alignItems: 'center',
                            gap: '8px',
                            background: 'rgba(197, 160, 89, 0.18)',
                            border: '1px solid rgba(197, 160, 89, 0.45)',
                            padding: '6px 18px',
                            borderRadius: '30px',
                            marginBottom: '24px'
                        }}>
                            <i className="fa-solid fa-scale-balanced" style={{ color: '#ffffff', fontSize: '13px' }} />
                            <span style={{ color: '#ffffff', fontSize: '13px', fontWeight: '600', letterSpacing: '0.8px', textTransform: 'uppercase' }}>
                                Top-Tier UAE Advocates & Legal Consultants
                            </span>
                        </div>

                        <h1 style={{
                            fontSize: '48px',
                            lineHeight: '1.22',
                            fontWeight: '800',
                            color: '#ffffff',
                            marginBottom: '20px',
                            letterSpacing: '-0.5px'
                        }}>
                            Empowering Your Rights & <span style={{ color: 'var(--theme-colour)' }}>Protecting Your Future</span> Across the UAE
                        </h1>

                        <p style={{
                            color: '#E2E8F0',
                            fontSize: '18px',
                            lineHeight: '30px',
                            marginBottom: '32px',
                            fontWeight: '300',
                            maxWidth: '640px'
                        }}>
                            AHA Law Firm is a distinguished full service legal practice headquartered in UAE. We deliver strategic counsel, courtroom advocacy, and corporate protection for corporations, high-net-worth individuals, and international entities.
                        </p>

                        {/* Action Buttons: WhatsApp & Call Direct */}
                        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '36px' }}>
                            <a
                                href="https://wa.me/971566856365?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20free%20legal%20consultation."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                                style={{
                                    backgroundColor: '#25D366',
                                    borderColor: '#25D366',
                                    color: '#ffffff',
                                    boxShadow: 'none',
                                    textDecoration: 'none'
                                }}
                            >
                                <span>
                                    <i className="fa-brands fa-whatsapp" style={{ marginRight: '8px', fontSize: '18px' }} />
                                    WhatsApp
                                </span>
                            </a>

                            <a
                                href="tel:+971566856365"
                                className="btn"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    backdropFilter: 'blur(10px)',
                                    WebkitBackdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(197, 160, 89, 0.5)',
                                    color: '#ffffff',
                                    textDecoration: 'none'
                                }}
                            >
                                <span>
                                    <i className="fa-solid fa-phone" style={{ marginRight: '8px', color: '#ffffff' }} />
                                    +971 56 685 6365
                                </span>
                            </a>
                        </div>

                        {/* Credential Badges */}
                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                            {[
                                "UAE Licensed",
                                "UAE Fedral Courts",
                                "DIFC & ADGM Tribunals",
                                "DIAC Arbitration",
                                "Labour / Mohre",
                                "Rera / DLD",
                                "Personal Status Courts"
                            ].map((item, idx) => (
                                <div key={idx} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    background: 'rgba(255, 255, 255, 0.08)',
                                    backdropFilter: 'blur(10px)',
                                    WebkitBackdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.15)',
                                    padding: '8px 16px',
                                    borderRadius: '8px',
                                    fontSize: '13px',
                                    color: '#F8FAFC',
                                    fontWeight: '500'
                                }}>
                                    <i className="fa-solid fa-shield-halved" style={{ color: 'var(--theme-colour)' }} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;

