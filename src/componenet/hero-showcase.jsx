import React from "react";
import { IMAGES } from "../constant/theme";
import { openQuoteModal } from "./quote-modal";

function HeroShowcase() {
    return (
        <section
            className="hero-showcase-section"
            style={{
                position: 'relative',
                background: 'linear-gradient(to right, #0A1628 0%, #152A4A 35%, #0A1629 65%, #0A1629 100%)',
                padding: '90px 0',
                color: '#ffffff',
                overflow: 'hidden',
                borderTop: '1px solid rgba(197, 160, 89, 0.2)',
                borderBottom: '1px solid rgba(197, 160, 89, 0.2)'
            }}
        >
            {/* Background Decorative Accents */}
            <div style={{
                position: 'absolute',
                top: '-150px',
                right: '-150px',
                width: '500px',
                height: '500px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(197, 160, 89, 0.12) 0%, rgba(0,0,0,0) 70%)',
                pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-120px',
                left: '-120px',
                width: '450px',
                height: '450px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(143, 99, 41, 0.1) 0%, rgba(0,0,0,0) 70%)',
                pointerEvents: 'none'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="row align-items-center g-4 g-lg-5">
                    {/* Left Column - Content & Features */}
                    <div className="col-lg-6 mb-5 mb-lg-0 text-start">
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'rgba(197, 160, 89, 0.12)',
                            border: '1px solid rgba(197, 160, 89, 0.35)',
                            padding: '6px 18px',
                            borderRadius: '30px',
                            marginBottom: '20px'
                        }}>
                            <i className="fa-solid fa-shield-halved" style={{ color: 'var(--theme-colour)', fontSize: '13px' }} />
                            <span style={{ color: 'var(--theme-colour)', fontSize: '13px', fontWeight: '600', letterSpacing: '0.8px', textTransform: 'uppercase' }}>
                                UAE Legal Advocacy Excellence
                            </span>
                        </div>

                        <h2 style={{
                            fontSize: '38px',
                            lineHeight: '1.3',
                            fontWeight: '800',
                            color: '#ffffff',
                            marginBottom: '20px',
                            letterSpacing: '-0.5px'
                        }}>
                            Strategic Legal Precision & <span style={{ color: 'var(--theme-colour)' }}>Unwavering Advocacy</span>
                        </h2>

                        <p style={{
                            color: '#CBD5E1',
                            fontSize: '16.5px',
                            lineHeight: '28px',
                            marginBottom: '32px',
                            fontWeight: '300'
                        }}>
                            AHA Law Firm combines localized judicial expertise in Dubai and Sharjah with global legal standards. We represent corporate leaders, international investors, and private individuals in complex disputes, commercial transactions, and high-stakes courtroom representation.
                        </p>

                        {/* Credential & Court Jurisdiction Badges */}
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '32px' }}>
                            {[
                                { name: "UAE Licensed", icon: "fa-solid fa-certificate" },
                                { name: "UAE Fedral Courts", icon: "fa-solid fa-building-columns" },
                                { name: "DIFC & ADGM Tribunals", icon: "fa-solid fa-scale-balanced" },
                                { name: "DIAC Arbitration", icon: "fa-solid fa-gavel" },
                                { name: "Labour / Mohre", icon: "fa-solid fa-briefcase" },
                                { name: "Rera / DLD", icon: "fa-solid fa-building" },
                                { name: "Personal Status Courts", icon: "fa-solid fa-user-shield" }
                            ].map((item, idx) => (
                                <div key={idx} style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(10px)',
                                    WebkitBackdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(197, 160, 89, 0.3)',
                                    padding: '9px 16px',
                                    borderRadius: '10px',
                                    fontSize: '13.5px',
                                    color: '#F8FAFC',
                                    fontWeight: '600',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <i className={item.icon} style={{ color: 'var(--theme-colour)', fontSize: '14px' }} />
                                    <span>{item.name}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                            <button
                                onClick={() => openQuoteModal("General Legal Consultation")}
                                className="btn"
                                style={{ cursor: 'pointer' }}
                            >
                                <span>Schedule Consultation</span>
                            </button>
                            <a
                                href="https://wa.me/971566856365?text=Hello%2C%20I%20would%20like%20to%20consult%20with%20AHA%20Law%20Firm."
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    color: '#ffffff',
                                    fontWeight: '600',
                                    fontSize: '14.5px',
                                    textDecoration: 'none',
                                    padding: '12px 20px',
                                    borderRadius: '30px',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <i className="fa-brands fa-whatsapp" style={{ color: '#25D366', fontSize: '18px' }} />
                                <span>WhatsApp Direct Counsel</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Hero GIF Showcase */}
                    <div className="col-lg-6">
                        <div style={{ position: 'relative' }}>
                            {/* Glassmorphic Frame around the GIF */}
                            <div style={{
                                position: 'relative',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                background: 'transparent',
                                boxShadow: 'none'
                            }}>
                                <video
                                    src={IMAGES.mobileVideo}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    style={{
                                        width: '100%',
                                        display: 'block',
                                        height: 'auto',
                                        maxHeight: '480px',
                                        objectFit: 'cover',
                                        borderRadius: '24px',
                                        mixBlendMode: 'lighten',
                                        WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
                                        maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)'
                                    }}
                                />

                                {/* Subtle Overlay Gradient */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    height: '140px',
                                    background: 'linear-gradient(to top, #0A1629 0%, rgba(10, 22, 41, 0) 100%)',
                                    pointerEvents: 'none'
                                }} />
                            </div>

                            {/* Floating Overlay Badge Top Left */}
                            <div style={{
                                position: 'absolute',
                                top: '4px',
                                left: '-24px',
                                background: 'rgba(10, 22, 41, 0.75)',
                                backdropFilter: 'blur(16px)',
                                WebkitBackdropFilter: 'blur(16px)',
                                border: '1px solid rgba(197, 160, 89, 0.45)',
                                padding: '12px 20px',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.45)',
                                zIndex: 3
                            }}>
                                <i className="fa-solid fa-certificate" style={{ color: 'var(--theme-colour)', fontSize: '20px' }} />
                                <div>
                                    <h6 style={{ color: '#ffffff', fontSize: '13.5px', margin: 0, fontWeight: '700' }}>Licensed UAE Advocates</h6>
                                    {/* <span style={{ color: '#CBD5E1', fontSize: '11.5px', fontWeight: '500' }}>Dubai & Sharjah Bar</span> */}
                                </div>
                            </div>

                            {/* Floating Overlay Badge Bottom Right */}
                            <div style={{
                                position: 'absolute',
                                bottom: '4px',
                                right: '-24px',
                                background: 'rgba(10, 22, 41, 0.75)',
                                backdropFilter: 'blur(16px)',
                                WebkitBackdropFilter: 'blur(16px)',
                                border: '1px solid rgba(197, 160, 89, 0.45)',
                                padding: '14px 22px',
                                borderRadius: '18px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '14px',
                                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.45)',
                                zIndex: 3
                            }}>
                                <div style={{
                                    width: '42px',
                                    height: '42px',
                                    borderRadius: '12px',
                                    background: 'var(--theme-colour)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#ffffff',
                                    fontSize: '19px',
                                    flexShrink: 0
                                }}>
                                    <i className="fa-solid fa-scale-balanced" />
                                </div>
                                <div>
                                    <h5 style={{ color: '#ffffff', fontSize: '16px', margin: 0, fontWeight: '800' }}>20+ Practice Areas</h5>
                                    <span style={{ color: '#CBD5E1', fontSize: '11.5px', fontWeight: '500' }}>Covered Across All UAE Courts</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroShowcase;
