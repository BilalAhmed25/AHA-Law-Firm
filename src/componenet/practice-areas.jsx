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
            <style>{`
                .practice-flip-card {
                    perspective: 1000px;
                    height: 195px;
                    margin-bottom: 24px;
                    cursor: pointer;
                }
                .practice-flip-card-inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    text-align: left;
                    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                    transform-style: preserve-3d;
                }
                .practice-flip-card:hover .practice-flip-card-inner {
                    transform: rotateY(180deg);
                }
                .practice-flip-card-front, .practice-flip-card-back {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    -webkit-backface-visibility: hidden;
                    backface-visibility: hidden;
                    border-radius: 18px;
                    box-sizing: border-box;
                }
                .practice-flip-card-front {
                    background: #ffffff;
                    padding: 24px 22px;
                    border: 1px solid #e9e4da;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.03);
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .practice-flip-card-back {
                    background: linear-gradient(135deg, #0A1628 0%, #152A4A 100%);
                    border: 1px solid var(--theme-colour);
                    box-shadow: 0 15px 35px rgba(10, 22, 40, 0.4);
                    transform: rotateY(180deg);
                    padding: 24px 22px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    overflow: hidden;
                    color: #ffffff;
                }
                .practice-flip-card-back .watermark-icon {
                    position: absolute;
                    bottom: -15px;
                    right: -15px;
                    font-size: 85px;
                    color: var(--theme-colour);
                    opacity: 0.15;
                    pointer-events: none;
                    transform: rotate(-10deg);
                    transition: all 0.5s ease;
                }
                .practice-flip-card:hover .practice-flip-card-back .watermark-icon {
                    opacity: 0.22;
                    transform: rotate(0deg) scale(1.05);
                }
                .practice-flip-card-back .cta-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    color: var(--theme-colour);
                    font-weight: 600;
                    font-size: 13px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    transition: all 0.3s ease;
                }
                .practice-flip-card:hover .practice-flip-card-back .cta-link i {
                    transform: translateX(4px);
                }
            `}</style>
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
                        <div className="col-lg-3 col-md-6" key={idx}>
                            <div
                                className="practice-flip-card"
                                onClick={() => openQuoteModal(item.title)}
                            >
                                <div className="practice-flip-card-inner">
                                    {/* Front Side */}
                                    <div className="practice-flip-card-front">
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
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

                                    {/* Back Side */}
                                    <div className="practice-flip-card-back">
                                        <i className={`${item.icon} watermark-icon`} />
                                        <div>
                                            <h5 style={{ fontSize: '16px', fontWeight: '700', color: '#ffffff', margin: '0 0 6px 0' }}>{item.title}</h5>
                                            <p style={{ fontSize: '12.5px', lineHeight: '18px', color: '#94A3B8', margin: 0 }}>{item.desc}</p>
                                        </div>

                                        <div className="cta-link">
                                            <span>Contact for Consultation</span>
                                            <i className="fa-solid fa-arrow-right" style={{ fontSize: '12px' }} />
                                        </div>
                                    </div>
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
