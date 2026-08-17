import React from "react";

function Cta() {
    return (
        <section
            className="gap cta-section"
            style={{
                background: 'linear-gradient(135deg, #0A1628 0%, #162844 60%, #0D1B30 100%)',
                position: 'relative',
                overflow: 'hidden',
                padding: '90px 0',
                color: '#ffffff'
            }}
        >
            {/* Glowing Gradient Orb on Right Side */}
            <div
                style={{
                    position: 'absolute',
                    top: '-60px',
                    right: '-60px',
                    width: '460px',
                    height: '460px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(197, 160, 89, 0.22) 0%, transparent 70%)',
                    pointerEvents: 'none',
                    zIndex: 0
                }}
            />

            {/* Half-Cut Giant Watermark Icon on Right Side */}
            <div
                style={{
                    position: 'absolute',
                    right: '-35px',
                    bottom: '-45px',
                    fontSize: '280px',
                    color: 'var(--theme-colour)',
                    opacity: 0.13,
                    transform: 'rotate(-12deg)',
                    pointerEvents: 'none',
                    lineHeight: 1,
                    zIndex: 1
                }}
            >
                <i className="fa-solid fa-scale-balanced" />
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="row align-items-center">
                    {/* Left-Aligned Copy & Actions */}
                    <div className="col-lg-8 col-xl-7 text-start">
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'rgba(197, 160, 89, 0.18)',
                            border: '1px solid rgba(197, 160, 89, 0.45)',
                            padding: '6px 16px',
                            borderRadius: '30px',
                            marginBottom: '20px'
                        }}>
                            <i className="fa-solid fa-gavel" style={{ color: 'var(--theme-colour)', fontSize: '13px' }} />
                            <span style={{ color: '#ffffff', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', fontSize: '12px' }}>
                                Get In Touch
                            </span>
                        </div>

                        <h2 style={{
                            color: '#ffffff',
                            marginTop: '0',
                            marginBottom: '18px',
                            fontWeight: '800',
                            fontSize: '38px',
                            lineHeight: '1.25',
                            letterSpacing: '-0.5px'
                        }}>
                            Ready to Discuss Your <span style={{ color: 'var(--theme-colour)' }}>Legal Needs?</span>
                        </h2>

                        <p style={{
                            color: '#CBD5E1',
                            fontSize: '17px',
                            lineHeight: '28px',
                            maxWidth: '640px',
                            marginBottom: '32px',
                            fontWeight: '300'
                        }}>
                            Schedule a free consultation with our experienced legal team. We are here to provide the strategic guidance and representation you need across UAE courts and tribunals.
                        </p>

                        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                            <a
                                href="https://wa.me/971566856365?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20free%20consultation."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                                style={{
                                    backgroundColor: '#25D366',
                                    borderColor: '#25D366',
                                    color: '#ffffff',
                                    textDecoration: 'none'
                                }}
                            >
                                <span>
                                    <i className="fa-brands fa-whatsapp" style={{ marginRight: '8px', fontSize: '18px' }} />
                                    WhatsApp Us
                                </span>
                            </a>

                            <a
                                href="tel:+971566856365"
                                className="btn"
                                style={{
                                    background: 'transparent',
                                    border: '2px solid var(--theme-colour)',
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
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cta;
