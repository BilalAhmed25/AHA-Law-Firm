import React from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../constant/theme";

function ContactHero() {
    return (
        <section
            className="contact-banner"
            style={{
                position: 'relative',
                backgroundImage: `linear-gradient(135deg, rgba(10, 22, 40, 0.94) 0%, rgba(15, 32, 58, 0.90) 100%), url(${IMAGES.bannerbg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                paddingTop: '160px',
                paddingBottom: '90px',
                color: '#ffffff',
                overflow: 'hidden'
            }}
        >
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-8 text-start">
                        {/* Breadcrumb Pill */}
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
                            <Link to="/" style={{ color: '#D1D5DB', textDecoration: 'none' }}>Home</Link>
                            <span style={{ color: 'var(--theme-colour)' }}>/</span>
                            <span style={{ color: '#ffffff', fontWeight: '600' }}>Contact Us</span>
                        </div>

                        <h1 style={{
                            fontSize: '42px',
                            lineHeight: '1.25',
                            fontWeight: '800',
                            color: '#ffffff',
                            marginBottom: '18px',
                            letterSpacing: '-0.5px'
                        }}>
                            We Are Here to Protect Your Rights & Secure Your Future
                        </h1>

                        <p style={{
                            color: '#E2E8F0',
                            fontSize: '17px',
                            lineHeight: '28px',
                            marginBottom: '30px',
                            maxWidth: '680px',
                            fontWeight: '300'
                        }}>
                            Connect directly with our managing partners and senior legal advocates in Dubai and Ajman. Whether scheduling an in-person consultation or seeking emergency counsel, our firm guarantees rapid, discrete, and strategic assistance.
                        </p>

                        {/* Status Badges */}
                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                            {[
                                { icon: "fa-location-dot", label: "Dubai & Ajman Offices" },
                                { icon: "fa-whatsapp", label: "24/7 Urgent Response" },
                                { icon: "fa-clock", label: "Mon - Sat: 9:00 AM - 7:00 PM" }
                            ].map((item, idx) => (
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
                                    <i className={`fa-solid ${item.icon}`} style={{ color: 'var(--theme-colour)' }} />
                                    <span>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick WhatsApp Action Box */}
                    <div className="col-lg-4 mt-4 mt-lg-0">
                        <div style={{
                            background: 'rgba(255, 255, 255, 0.06)',
                            backdropFilter: 'blur(16px)',
                            border: '1px solid rgba(197, 160, 89, 0.4)',
                            borderRadius: '20px',
                            padding: '30px',
                            textAlign: 'center'
                        }}>
                            <div style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '50%',
                                background: '#25D366',
                                color: '#ffffff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '28px',
                                margin: '0 auto 16px'
                            }}>
                                <i className="fa-brands fa-whatsapp" />
                            </div>
                            <h4 style={{ color: '#ffffff', fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>Need Immediate Counsel?</h4>
                            <p style={{ color: '#CBD5E1', fontSize: '13.5px', marginBottom: '20px', lineHeight: '20px' }}>
                                Connect directly with an AHA Law Firm legal representative via WhatsApp for urgent case assessments.
                            </p>
                            <a
                                href="https://wa.me/971566856365?text=Hello%2C%20I%20need%20urgent%20legal%20consultation%20from%20AHA%20Law%20Firm."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                                style={{ width: '100%', justifyContent: 'center' }}
                            >
                                <span>Start WhatsApp Chat</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactHero;
