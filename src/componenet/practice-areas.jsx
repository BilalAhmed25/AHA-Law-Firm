import React from "react";
import { openQuoteModal } from "./quote-modal";

const practiceData = [
    { icon: "fa-solid fa-gavel", title: "Litigation & Disputes", desc: "Representation in UAE courts & tribunals" },
    { icon: "fa-solid fa-scale-balanced", title: "Arbitration & ADR", desc: "DIAC & international arbitration proceedings" },
    { icon: "fa-solid fa-building", title: "Corporate / M&A", desc: "M&A, joint ventures & corporate structuring" },
    { icon: "fa-solid fa-chart-pie", title: "Capital Markets & PE", desc: "IPO advisory, private equity & capital markets" },
    { icon: "fa-solid fa-file-contract", title: "Commercial Contracts", desc: "Drafting, negotiation & legal vetting" },
    { icon: "fa-solid fa-landmark", title: "Banking & Financial Law", desc: "Banking regulations, fintech & financial disputes" },
    { icon: "fa-solid fa-layer-group", title: "Competition & Antitrust", desc: "Fair trade compliance & merger clearance" },
    { icon: "fa-solid fa-user-shield", title: "Compliance & Audits", desc: "Corporate investigations & anti-corruption" },
    { icon: "fa-solid fa-helmet-safety", title: "Construction & Projects", desc: "FIDIC contracts, EPC projects & disputes" },
    { icon: "fa-solid fa-briefcase", title: "Corporate Entity Services", desc: "Business setup, licensing & corporate secretarial" },
    { icon: "fa-solid fa-sitemap", title: "Corporate Structuring", desc: "Holding structures, offshore setup & re-domiciliation" },
    { icon: "fa-solid fa-microchip", title: "Digital & Data Privacy", desc: "Cybersecurity, AI regulation & UAE Data Law" },
    { icon: "fa-solid fa-shield-halved", title: "Dispute Resolution", desc: "Strategic commercial & civil dispute defense" },
    { icon: "fa-solid fa-handshake", title: "Employment & Labor", desc: "MOHRE compliance, labor disputes & contracts" },
    { icon: "fa-solid fa-people-roof", title: "Family Business & Wealth", desc: "Succession planning, family office & wealth protection" },
    { icon: "fa-solid fa-lightbulb", title: "Innovation & Patents (3IP)", desc: "Patent filings, industrial property & tech licensing" },
    { icon: "fa-solid fa-shield-heart", title: "Insurance Law", desc: "Insurance coverage claims, policy drafting & disputes" },
    { icon: "fa-solid fa-copyright", title: "Intellectual Property", desc: "Trademarks, copyright protection & enforcement" },
    { icon: "fa-solid fa-globe", title: "International Litigation", desc: "Cross-border litigation & judgment enforcement" },
    { icon: "fa-solid fa-scroll", title: "Legislative Drafting", desc: "Government policy drafting & regulatory frameworks" },
    { icon: "fa-solid fa-handshake-angle", title: "Commercial Mediation", desc: "Pre-litigation mediation & settlement negotiations" },
    { icon: "fa-solid fa-chart-line", title: "Private Equity Advisory", desc: "Investment structuring, fund formation & buyouts" },
    { icon: "fa-solid fa-file-pen", title: "Private Notary Services", desc: "Document legalization, POA & notary services" },
    { icon: "fa-solid fa-bolt", title: "Projects & Energy Law", desc: "Oil & gas, renewable energy & infrastructure" },
    { icon: "fa-solid fa-house-chimney", title: "Real Estate & Property", desc: "RERA disputes, property sales, lease & conveyance" },
    { icon: "fa-solid fa-stamp", title: "Regulatory Compliance", desc: "Regulatory approvals & statutory compliance" },
    { icon: "fa-solid fa-ship", title: "Shipping & Logistics", desc: "Maritime claims, charter parties & logistics law" },
    { icon: "fa-solid fa-leaf", title: "Sustainable Business (ESG)", desc: "ESG reporting, carbon credits & green compliance" },
    { icon: "fa-solid fa-receipt", title: "Corporate Tax & VAT", desc: "UAE Corporate Tax, VAT advisory & audit defense" },
    { icon: "fa-solid fa-vault", title: "Restructuring & Insolvency", desc: "Bankruptcy proceedings & debt restructuring" },
    { icon: "fa-solid fa-rocket", title: "Venture Capital Advisory", desc: "Startup funding, term sheets & venture investments" },
    { icon: "fa-solid fa-user-ninja", title: "Criminal Defense & Police", desc: "White collar defense, police bail & trial defense" },
    { icon: "fa-solid fa-passport", title: "Interpol & Extradition", desc: "Red Notice removal & extradition defense" },
    { icon: "fa-solid fa-plane-arrival", title: "Immigration & Golden Visa", desc: "UAE Golden Visa, investor visas & residency" },
    { icon: "fa-solid fa-users", title: "Family & Personal Status", desc: "Custody, divorce & personal status court cases" },
    { icon: "fa-solid fa-file-signature", title: "Wills & Legacy Planning", desc: "DIFC/ADGM wills, probate & estate inheritance" }
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
