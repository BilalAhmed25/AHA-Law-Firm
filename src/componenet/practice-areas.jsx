import React from "react";
import { openQuoteModal } from "./quote-modal";

const practiceData = [
    { icon: "fa-solid fa-gavel", title: "Litigation & Disputes", desc: "Representation in courts & tribunals" },
    { icon: "fa-solid fa-scale-balanced", title: "Arbitration & ADR", desc: "Alternative dispute resolution" },
    { icon: "fa-solid fa-building", title: "Corporate & Commercial", desc: "Strategic counsel & governance" },
    { icon: "fa-solid fa-file-contract", title: "Contracts & Agreements", desc: "Drafting, negotiation & review" },
    { icon: "fa-solid fa-landmark", title: "Banking & Finance", desc: "Financial regulation & advisory" },
    { icon: "fa-solid fa-chart-line", title: "Bankruptcy & Insolvency", desc: "Restructuring & insolvency law" },
    { icon: "fa-solid fa-receipt", title: "Tax & Compliance", desc: "Corporate tax & compliance" },
    { icon: "fa-solid fa-house-chimney", title: "Real Estate & Property", desc: "Property transactions & tenancy" },
    { icon: "fa-solid fa-ship", title: "Maritime & Transport", desc: "Maritime claims & logistics law" },
    { icon: "fa-solid fa-lightbulb", title: "Intellectual Property", desc: "Trademarks, patents & copyright" },
    { icon: "fa-solid fa-shield-halved", title: "Criminal Defense", desc: "Criminal defense proceedings" },
    { icon: "fa-solid fa-globe", title: "Interpol & Extradition", desc: "Red Notice & global defense" },
    { icon: "fa-solid fa-passport", title: "Immigration & Golden Visa", desc: "Residency & visa solutions" },
    { icon: "fa-solid fa-people-roof", title: "Family & Personal Status", desc: "Custody, divorce & family law" },
    { icon: "fa-solid fa-scroll", title: "Wills & Legacy Planning", desc: "Estate planning & inheritance" },
    { icon: "fa-solid fa-handshake", title: "Employment & Labor", desc: "Workplace disputes & compliance" },
];

function PracticeAreas() {
    return (
        <section className="gap" style={{ background: 'rgba(143, 99, 41, 0.04)', padding: '90px 0' }}>
            <div className="container">
                <div className="row align-items-end" style={{ marginBottom: '45px' }}>
                    <div className="col-lg-8">
                        <span style={{ color: 'var(--theme-colour)', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '13px' }}>
                            Which Services We Provide
                        </span>
                        <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#0A1628', marginTop: '6px', marginBottom: '0' }}>
                            Areas of <span style={{ color: 'var(--theme-colour)' }}>Practice</span>
                        </h2>
                    </div>
                    <div className="col-lg-4 text-lg-end" style={{ marginTop: '15px' }}>
                        <a
                            href="https://wa.me/971566856365?text=Hello%2C%20I%20would%20like%20to%20consult%20on%20legal%20services."
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#0A1628', fontWeight: '600', fontSize: '15px', textDecoration: 'none', borderBottom: '2px solid var(--theme-colour)', paddingBottom: '4px', transition: 'all 0.3s ease' }}
                            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--theme-colour)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.color = '#0A1628'; }}
                        >
                            View All Services <i className="fa-solid fa-arrow-right" style={{ marginLeft: '6px' }} />
                        </a>
                    </div>
                </div>
                <div className="row">
                    {practiceData.map((item, idx) => (
                        <div className="col-lg-3 col-md-6" key={idx} style={{ marginBottom: '24px' }}>
                            <div
                                onClick={() => openQuoteModal(item.title)}
                                style={{
                                    background: '#ffffff',
                                    borderRadius: '18px',
                                    padding: '26px 24px',
                                    border: '1px solid #e9e4da',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                                    transition: 'all 0.35s cubic-bezier(0.165, 0.84, 0.44, 1)',
                                    cursor: 'pointer',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    position: 'relative',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-6px)';
                                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(143, 99, 41, 0.15)';
                                    e.currentTarget.style.borderColor = 'var(--theme-colour)';
                                    const badge = e.currentTarget.querySelector('.arrow-badge');
                                    if (badge) {
                                        badge.style.background = 'var(--theme-colour)';
                                        badge.style.color = '#ffffff';
                                        badge.style.transform = 'rotate(45deg)';
                                    }
                                    const iconBox = e.currentTarget.querySelector('.icon-box');
                                    if (iconBox) {
                                        iconBox.style.color = 'var(--theme-colour)';
                                        iconBox.style.transform = 'scale(1.1)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.03)';
                                    e.currentTarget.style.borderColor = '#e9e4da';
                                    const badge = e.currentTarget.querySelector('.arrow-badge');
                                    if (badge) {
                                        badge.style.background = 'rgba(143, 99, 41, 0.08)';
                                        badge.style.color = 'var(--theme-colour)';
                                        badge.style.transform = 'rotate(0deg)';
                                    }
                                    const iconBox = e.currentTarget.querySelector('.icon-box');
                                    if (iconBox) {
                                        iconBox.style.color = '#0A1628';
                                        iconBox.style.transform = 'scale(1)';
                                    }
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                                    <div className="icon-box" style={{
                                        fontSize: '22px',
                                        color: '#0A1628',
                                        transition: 'all 0.3s ease',
                                        width: '42px',
                                        height: '42px',
                                        borderRadius: '10px',
                                        background: 'rgba(143, 99, 41, 0.08)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <i className={item.icon} />
                                    </div>
                                    <div className="arrow-badge" style={{
                                        width: '36px',
                                        height: '36px',
                                        borderRadius: '50%',
                                        background: 'rgba(143, 99, 41, 0.08)',
                                        color: 'var(--theme-colour)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '13px',
                                        transition: 'all 0.3s ease',
                                    }}>
                                        <i className="fa-solid fa-arrow-up-right-from-square" />
                                    </div>
                                </div>

                                <div>
                                    <h5 style={{ fontSize: '16px', fontWeight: '700', color: '#0A1628', margin: '0 0 6px 0' }}>{item.title}</h5>
                                    <p style={{ fontSize: '13px', lineHeight: '20px', color: '#777777', margin: 0 }}>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PracticeAreas;
