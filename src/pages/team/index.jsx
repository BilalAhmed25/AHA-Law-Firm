import React from "react";
import Header from "../../layout/header";
import Footer from "../../layout/footer";
import { Link } from "react-router-dom";
import { openQuoteModal } from "../../componenet/quote-modal";
import { IMAGES } from "../../constant/theme";
import Cta from "../../componenet/cta";
import Faq from "../../componenet/faq";

const teamMembers = [
    {
        id: 1,
        name: "Adv. Bilal Ahmed",
        role: "Founder & Senior Managing Partner",
        license: "UAE Supreme Court & DIFC Rights of Audience",
        experience: "20+ Years Experience",
        specialties: ["UAE Court Litigation", "Cassation Appeals", "High-Stakes Disputes"],
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
        languages: "Arabic, English"
    },
    {
        id: 2,
        name: "Dr. Tariq Al Mansoori",
        role: "Partner & Head of International Arbitration",
        license: "DIAC & ICC Certified Arbitrator",
        experience: "16+ Years Experience",
        specialties: ["DIAC & ICC Arbitration", "Award Enforcement", "Energy Disputes"],
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
        languages: "English, French, Arabic"
    },
    {
        id: 3,
        name: "Sarah Al Hashimi",
        role: "Partner - Corporate Governance & M&A",
        license: "Ministry of Justice & DIFC Registered",
        experience: "15+ Years Experience",
        specialties: ["Mergers & Acquisitions", "Joint Ventures", "Corporate Structuring"],
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
        languages: "English, Arabic"
    },
    {
        id: 4,
        name: "Omar Al Zaabi",
        role: "Head of Banking & Financial Crime Defense",
        license: "UAE Ministry of Justice Licensed Advocate",
        experience: "14+ Years Experience",
        specialties: ["Financial Crime Defense", "Asset Freezing Orders", "Debt Restructuring"],
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
        languages: "Arabic, English"
    },
    {
        id: 5,
        name: "Layla Al Suwaidi",
        role: "Head of Real Estate & Construction",
        license: "RERA Certified Legal Advisor",
        experience: "13+ Years Experience",
        specialties: ["RERA & DLD Disputes", "FIDIC Contracts", "Off-Plan Project Claims"],
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
        languages: "English, Arabic"
    },
    {
        id: 6,
        name: "Farhan Al Qasimi",
        role: "Head of Intellectual Property & Tech (3IP)",
        license: "Registered Patent & IP Practitioner",
        experience: "12+ Years Experience",
        specialties: ["Trademarks & Patents", "TMT & Data Privacy", "AI & Tech Licensing"],
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
        languages: "English, Arabic"
    },
    {
        id: 7,
        name: "Adv. Rashid Al Nuaimi",
        role: "Senior Criminal & Extradition Counsel",
        license: "Federal Public Prosecution Licensed",
        experience: "15+ Years Experience",
        specialties: ["Interpol Red Notice Defense", "Extradition Treaties", "Police Bail & Defense"],
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
        languages: "Arabic, English, Russian"
    },
    {
        id: 8,
        name: "Nour Al Kaabi",
        role: "Head of Family Wealth & Private Client",
        license: "DIFC Wills Registered Specialist",
        experience: "11+ Years Experience",
        specialties: ["DIFC Wills Registration", "Estate Succession", "Golden Visa Structuring"],
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
        languages: "English, Arabic"
    }
];

function TeamPage() {
    return (
        <>
            <Header />

            {/* Hero Section */}
            <section
                className="team-hero"
                style={{
                    backgroundColor: '#0A1628',
                    backgroundImage: `linear-gradient(135deg, rgba(10, 22, 40, 0.45) 0%, rgba(15, 32, 58, 0.35) 100%), url(${IMAGES.graph})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    paddingTop: '160px',
                    paddingBottom: '90px',
                    color: '#ffffff',
                    overflow: 'hidden'
                }}
            >
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="row align-items-center">
                        <div className="col-lg-8 text-start">
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
                                <span style={{ color: '#ffffff', fontWeight: '600' }}>Our Team</span>
                            </div>

                            <h1 style={{
                                fontSize: '42px',
                                lineHeight: '1.25',
                                fontWeight: '800',
                                color: '#ffffff',
                                marginBottom: '18px',
                                letterSpacing: '-0.5px'
                            }}>
                                Our Legal Team & <span style={{ color: 'var(--theme-colour)' }}>Leadership</span>
                            </h1>

                            <p style={{
                                color: '#E2E8F0',
                                fontSize: '17px',
                                lineHeight: '28px',
                                marginBottom: '0',
                                maxWidth: '680px',
                                fontWeight: '300'
                            }}>
                                Meet our distinguished advocates, arbitration specialists, and senior legal consultants holding full rights of audience before Dubai, Sharjah, DIFC, ADGM, and UAE Supreme Courts.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Overview & Stats Strip */}
            <section style={{ background: '#FAF8F5', padding: '50px 0', borderBottom: '1px solid rgba(143, 99, 41, 0.15)' }}>
                <div className="container">
                    <div className="row g-4 text-center">
                        <div className="col-lg-3 col-6">
                            <div style={{ padding: '10px' }}>
                                <h3 style={{ fontSize: '38px', fontWeight: '800', color: 'var(--theme-colour)', margin: '0 0 4px 0' }}>15+</h3>
                                <p style={{ fontSize: '14px', fontWeight: '600', color: '#0A1628', margin: 0 }}>Years UAE Experience</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div style={{ padding: '10px' }}>
                                <h3 style={{ fontSize: '38px', fontWeight: '800', color: 'var(--theme-colour)', margin: '0 0 4px 0' }}>500+</h3>
                                <p style={{ fontSize: '14px', fontWeight: '600', color: '#0A1628', margin: 0 }}>Cases Litigated & Won</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div style={{ padding: '10px' }}>
                                <h3 style={{ fontSize: '38px', fontWeight: '800', color: 'var(--theme-colour)', margin: '0 0 4px 0' }}>7</h3>
                                <p style={{ fontSize: '14px', fontWeight: '600', color: '#0A1628', margin: 0 }}>Emirates Court Jurisdiction</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div style={{ padding: '10px' }}>
                                <h3 style={{ fontSize: '38px', fontWeight: '800', color: 'var(--theme-colour)', margin: '0 0 4px 0' }}>100%</h3>
                                <p style={{ fontSize: '14px', fontWeight: '600', color: '#0A1628', margin: 0 }}>Confidential Consultation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Grid Section */}
            <section style={{ background: '#FFFFFF', padding: '90px 0 110px' }}>
                <div className="container">
                    <div className="row g-4">
                        {teamMembers.map((member) => (
                            <div className="col-lg-3 col-md-6" key={member.id}>
                                <div
                                    style={{
                                        background: '#FAF8F5',
                                        borderRadius: '18px',
                                        border: '1px solid rgba(143, 99, 41, 0.18)',
                                        overflow: 'hidden',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        boxShadow: '0 8px 24px rgba(10, 22, 40, 0.05)',
                                        transition: 'all 0.35s ease',
                                        textAlign: 'left'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-6px)';
                                        e.currentTarget.style.boxShadow = '0 16px 36px rgba(10, 22, 40, 0.12)';
                                        e.currentTarget.style.borderColor = 'var(--theme-colour)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(10, 22, 40, 0.05)';
                                        e.currentTarget.style.borderColor = 'rgba(143, 99, 41, 0.18)';
                                    }}
                                >
                                    <div>
                                        {/* Lawyer Image with Overlay Experience Badge */}
                                        <div style={{ position: 'relative', width: '100%', height: '280px', overflow: 'hidden' }}>
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    objectPosition: 'top center',
                                                    transition: 'transform 0.5s ease'
                                                }}
                                                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.06)'; }}
                                                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                                            />
                                            {/* Gradient Shade on Image Bottom */}
                                            <div style={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                height: '60px',
                                                background: 'linear-gradient(to top, rgba(10, 22, 40, 0.6) 0%, transparent 100%)',
                                                pointerEvents: 'none'
                                            }} />
                                            {/* Experience Pill */}
                                            <span style={{
                                                position: 'absolute',
                                                top: '14px',
                                                right: '14px',
                                                background: 'rgba(10, 22, 40, 0.85)',
                                                backdropFilter: 'blur(8px)',
                                                color: '#ffffff',
                                                border: '1px solid rgba(197, 160, 89, 0.5)',
                                                fontSize: '11px',
                                                fontWeight: '700',
                                                padding: '4px 10px',
                                                borderRadius: '20px',
                                                letterSpacing: '0.4px'
                                            }}>
                                                {member.experience}
                                            </span>
                                        </div>

                                        {/* Card Body */}
                                        <div style={{ padding: '22px 20px 14px' }}>
                                            <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#0A1628', margin: '0 0 5px 0' }}>
                                                {member.name}
                                            </h4>

                                            <h6 style={{ fontSize: '13px', fontWeight: '700', color: 'var(--theme-colour)', margin: '0 0 12px 0', minHeight: '36px', lineHeight: '1.35' }}>
                                                {member.role}
                                            </h6>

                                            {/* Credentials Badge */}
                                            <div style={{
                                                background: '#ffffff',
                                                border: '1px solid rgba(10, 22, 40, 0.08)',
                                                padding: '7px 10px',
                                                borderRadius: '8px',
                                                fontSize: '11.5px',
                                                color: '#475569',
                                                marginBottom: '14px',
                                                lineHeight: '1.35'
                                            }}>
                                                <strong style={{ color: '#0A1628' }}>Credentials:</strong> {member.license}
                                            </div>

                                            {/* Specialties Pills */}
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '14px' }}>
                                                {member.specialties.map((spec, sIdx) => (
                                                    <span key={sIdx} style={{
                                                        background: 'rgba(143, 99, 41, 0.08)',
                                                        border: '1px solid rgba(143, 99, 41, 0.2)',
                                                        padding: '3px 8px',
                                                        borderRadius: '5px',
                                                        fontSize: '11px',
                                                        color: '#0A1628',
                                                        fontWeight: '600'
                                                    }}>
                                                        {spec}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Footer */}
                                    <div style={{ padding: '0 20px 20px 20px' }}>
                                        <button
                                            onClick={() => openQuoteModal(`Consultation with ${member.name} (${member.role})`)}
                                            className="btn"
                                            style={{
                                                width: '100%',
                                                padding: '10px 14px',
                                                fontSize: '12.5px',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            <span>Consult Advocate</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Cta />
            <Faq />
            <Footer />
        </>
    );
}

export default TeamPage;
