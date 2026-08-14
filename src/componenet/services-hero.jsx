import React from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../constant/theme";
import "../assets/css/services-hero.css";

function ServicesHero() {
    return (
        <section
            className="services-hero-banner"
            style={{
                backgroundColor: '#0A1628',
                backgroundImage: `linear-gradient(135deg, rgba(10, 22, 40, 0.25) 0%, rgba(15, 32, 58, 0.15) 100%), url(${IMAGES.graph})`
            }}
        >
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-8 text-start">
                        {/* Breadcrumbs */}
                        <div className="services-hero-breadcrumb">
                            <Link to="/" style={{ color: '#D1D5DB', textDecoration: 'none' }}>Home</Link>
                            <span style={{ color: 'var(--theme-colour)' }}>/</span>
                            <span style={{ color: '#ffffff', fontWeight: '600' }}>Practice Areas</span>
                        </div>

                        <h1 className="services-hero-title">
                            Comprehensive Legal Practice Specializations Across the UAE
                        </h1>

                        <p className="services-hero-subtitle">
                            Full-spectrum legal representation, statutory advisory, and litigation advocacy before Dubai, Ajman, and UAE Federal Courts as well as DIFC & ADGM Common Law Tribunals.
                        </p>

                        {/* Accreditation Badges */}
                        <div className="services-hero-badges">
                            {[
                                { icon: "fa-gavel", label: "15 Legal Practice Specializations" },
                                { icon: "fa-building-columns", label: "UAE Onshore & Free Zone Audiences" },
                                { icon: "fa-shield-halved", label: "DIFC & ADGM Accredited Advocates" }
                            ].map((item, idx) => (
                                <div key={idx} className="services-hero-badge-item">
                                    <i className={`fa-solid ${item.icon}`} />
                                    <span>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Practice Consultation Box */}
                    <div className="col-lg-4 mt-4 mt-lg-0">
                        <div className="services-hero-cta-card">
                            <div className="services-hero-cta-icon">
                                <i className="fa-solid fa-scale-balanced" />
                            </div>
                            <h4 style={{ color: '#ffffff', fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>
                                Require Practice Area Counsel?
                            </h4>
                            <p style={{ color: '#CBD5E1', fontSize: '13.5px', marginBottom: '20px', lineHeight: '20px' }}>
                                Schedule a direct legal assessment with our managing partners for your commercial or litigation matter.
                            </p>
                            <a
                                href="https://wa.me/971566856365?text=Hello%2C%20I%20would%20like%20to%20consult%20regarding%20AHA%20Law%20Firm%20Practice%20Areas."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                                style={{ width: '100%', justifyContent: 'center' }}
                            >
                                <span>Schedule Practice Counsel</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesHero;
