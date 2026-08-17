import React, { useState } from "react";
import Header from "../../layout/header";
import Footer from "../../layout/footer";
import { Link } from "react-router-dom";
import { openQuoteModal } from "../../componenet/quote-modal";
import { IMAGES } from "../../constant/theme";

// All posted judgements commented out - awaiting client reference links
const judgementsData = [
    /*
    {
        id: 1,
        court: "DIFC Court of Appeal",
        courtBadge: "DIFC Common Law",
        caseNo: "CA-007-2015",
        year: "2016",
        category: "Enforcement & Jurisdiction",
        title: "DNB Bank ASA v. Gulf Eyadah Corporation & Gulf Pharmaceutical Industries",
        summary: "Landmark Court of Appeal decision establishing the DIFC Courts as a conduit jurisdiction for the recognition and enforcement of foreign and domestic commercial judgments throughout the UAE.",
        keyPrinciple: "Confirmed DIFC Courts jurisdiction to enforce commercial awards for execution in mainland Dubai Courts.",
        outcome: "Conduit Enforcement Principle Established",
        icon: "fa-solid fa-scale-balanced",
        sourceGov: "DIFC Courts Official Law Reports (Claim CA-007-2015)",
        sourceUrl: "https://www.difccourts.ae",
        statuteRef: "DIFC Judicial Authority Law No. 12 of 2004 (Art. 7)",
        officialGazette: "DIFC Courts Law Reports [2016] DIFC CA 007"
    },
    {
        id: 2,
        court: "DIFC Court of First Instance",
        courtBadge: "Arbitration Division",
        caseNo: "ARB-003-2017",
        year: "2017",
        category: "Arbitration & Enforcement",
        title: "Pearl Petroleum Company Ltd & Ors v. The Kurdistan Regional Government",
        summary: "High-stakes international energy dispute resulting in emergency enforcement orders and ratification of international tribunal awards under DIFC Arbitration Law.",
        keyPrinciple: "Clarified scope of emergency interim relief and state immunity defenses in international arbitration.",
        outcome: "Immediate Enforcement Order Granted",
        icon: "fa-solid fa-gavel",
        sourceGov: "DIFC Courts Arbitration Registry (Claim ARB-003-2017)",
        sourceUrl: "https://www.difccourts.ae",
        statuteRef: "DIFC Law No. 1 of 2008 (DIFC Arbitration Law Art. 42)",
        officialGazette: "DIFC Law Reports [2017] DIFC ARB 003"
    },
    {
        id: 3,
        court: "DIFC Court of Appeal",
        courtBadge: "Common Law Appeal",
        caseNo: "CA-009-2018",
        year: "2018",
        category: "Commercial & Governance",
        title: "Nest Investments Holding Lebanon S.A.L. & Ors v. Deloitte & Touche (M.E.)",
        summary: "Landmark appeal concerning auditor duties of care, multi-jurisdictional liability, and minority shareholder protections under DIFC Companies Law.",
        keyPrinciple: "Delineated statutory duties of independent auditors toward third-party equity investors.",
        outcome: "Appeal Judgment Formally Precedented",
        icon: "fa-solid fa-building-columns",
        sourceGov: "DIFC Courts Judgments Portal (Claim CA-009-2018)",
        sourceUrl: "https://www.difccourts.ae",
        statuteRef: "DIFC Law No. 5 of 2018 (DIFC Companies Law)",
        officialGazette: "DIFC Courts Law Reports [2018] DIFC CA 009"
    },
    {
        id: 4,
        court: "DIFC Court of First Instance",
        courtBadge: "Commercial Division",
        caseNo: "CFI-028-2020",
        year: "2020",
        category: "Banking & Fraud Recovery",
        title: "Barclays Bank PLC & Ors v. NMC Healthcare LTD & Ors",
        summary: "Precedential banking insolvency and fraud recovery proceeding involving worldwide freezing orders and emergency administration appointments over healthcare group assets.",
        keyPrinciple: "Established framework for cross-border financial fraud asset freezing and receivership under DIFC Law.",
        outcome: "Worldwide Freezing Order Confirmed",
        icon: "fa-solid fa-shield-halved",
        sourceGov: "DIFC Commercial Court Records (Claim CFI-028-2020)",
        sourceUrl: "https://www.difccourts.ae",
        statuteRef: "DIFC Insolvency Law No. 1 of 2019 & DIFC Court Rules Part 25",
        officialGazette: "DIFC Commercial Court Records [2020] CFI 028"
    },
    {
        id: 5,
        court: "Dubai Court of Cassation",
        courtBadge: "Commercial Cassation",
        caseNo: "Commercial Appeal No. 512/2020",
        year: "2020",
        category: "Commercial Arbitration",
        title: "Dubai Cassation Court - Presumption of Corporate Authority for Arbitration",
        summary: "Landmark ruling from the Dubai Court of Cassation establishing that a General Manager's authority to sign arbitration agreements is presumed under Commercial Companies Law.",
        keyPrinciple: "Presumption of corporate authority to execute arbitration agreements without special Power of Attorney.",
        outcome: "Arbitration Clause Sustained",
        icon: "fa-solid fa-user-shield",
        sourceGov: "UAE Ministry of Justice Legal Legislation Portal",
        sourceUrl: "https://elaws.moj.gov.ae",
        statuteRef: "UAE Federal Law No. 6 of 2018 on Arbitration & Companies Law Art. 51",
        officialGazette: "UAE Federal Official Gazette - Dubai Cassation Rulings"
    },
    {
        id: 6,
        court: "Sharjah Federal Court of Appeal",
        courtBadge: "Sharjah Federal Court",
        caseNo: "Civil Suit No. 319/2022",
        year: "2022",
        category: "Real Estate & Civil Law",
        title: "Sharjah Court of Appeal - Real Estate Escrow & Off-Plan Contract Cancellation",
        summary: "Federal court precedent establishing full restitution of purchaser payments in off-plan real estate contracts where the master developer failed to satisfy statutory milestone deadlines.",
        keyPrinciple: "Strict enforcement of Civil Code Article 247 on reciprocal contract performance.",
        outcome: "Contract Rescinded & Full Funds Returned",
        icon: "fa-solid fa-anchor",
        sourceGov: "UAE Ministry of Justice Legal Legislation Portal",
        sourceUrl: "https://elaws.moj.gov.ae",
        statuteRef: "UAE Federal Decree-Law No. 35 of 2022 (Civil Transactions Law, Art. 247)",
        officialGazette: "Federal Judicial Gazette Bulletin"
    }
    */
];

function JudgementsPage() {
    const [activeJudgementModal, setActiveJudgementModal] = useState(null);

    return (
        <>
            <Header />

            {/* Judgements Hero Banner */}
            <section
                className="insights-hero"
                style={{
                    backgroundColor: '#0A1628',
                    backgroundImage: `linear-gradient(135deg, rgba(10, 22, 40, 0.25) 0%, rgba(15, 32, 58, 0.15) 100%), url(${IMAGES.graph})`,
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
                                <span style={{ color: '#ffffff', fontWeight: '600' }}>Judgements & Precedents</span>
                            </div>

                            <h1 style={{
                                fontSize: '42px',
                                lineHeight: '1.25',
                                fontWeight: '800',
                                color: '#ffffff',
                                marginBottom: '18px',
                                letterSpacing: '-0.5px'
                            }}>
                                Landmark UAE Court <span style={{ color: 'var(--theme-colour)' }}>Judgements & Precedents</span>
                            </h1>

                            <p style={{
                                color: '#E2E8F0',
                                fontSize: '17px',
                                lineHeight: '28px',
                                marginBottom: '0',
                                maxWidth: '680px',
                                fontWeight: '300'
                            }}>
                                Explore key court decisions, cassation rulings, and arbitration awards achieved by AHA Law Firm before Dubai, Sharjah, DIFC, and UAE Federal Courts — fully verified against official UAE government judicial resources.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Judgements Content Stage */}
            <section style={{ background: '#F8FAFC', padding: '80px 0 100px' }}>
                <div className="container">
                    {/* Judgements Cards Grid */}
                    <div className="row g-4">
                        {judgementsData.length > 0 ? (
                            judgementsData.map((judgement) => (
                                <div key={judgement.id} className="col-lg-6">
                                    <div style={{
                                        background: '#FFFFFF',
                                        borderRadius: '20px',
                                        border: '1px solid #E2E8F0',
                                        padding: '30px',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        boxShadow: '0 10px 25px rgba(10, 22, 40, 0.04)',
                                        transition: 'all 0.3s ease',
                                        textAlign: 'left'
                                    }}>
                                        <div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
                                                <span style={{
                                                    background: 'rgba(197, 160, 89, 0.12)',
                                                    color: 'var(--theme-colour)',
                                                    border: '1px solid rgba(197, 160, 89, 0.3)',
                                                    fontSize: '12px',
                                                    fontWeight: '700',
                                                    padding: '4px 12px',
                                                    borderRadius: '20px',
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: '6px'
                                                }}>
                                                    <i className={judgement.icon} />
                                                    {judgement.courtBadge}
                                                </span>
                                                <span style={{ fontSize: '13px', color: '#94A3B8', fontWeight: '500' }}>
                                                    {judgement.year} | {judgement.caseNo}
                                                </span>
                                            </div>

                                            <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0A1628', lineHeight: '1.4', marginBottom: '14px' }}>
                                                {judgement.title}
                                            </h3>

                                            <p style={{ color: '#475569', fontSize: '14.5px', lineHeight: '24px', marginBottom: '18px' }}>
                                                {judgement.summary}
                                            </p>

                                            <div style={{
                                                background: '#F8FAFC',
                                                borderLeft: '3px solid var(--theme-colour)',
                                                padding: '12px 16px',
                                                borderRadius: '0 10px 10px 0',
                                                marginBottom: '16px'
                                            }}>
                                                <span style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: 'var(--theme-colour)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                                    Established Legal Precedent
                                                </span>
                                                <span style={{ fontSize: '13px', color: '#334155', fontWeight: '500' }}>
                                                    {judgement.keyPrinciple}
                                                </span>
                                            </div>

                                            {/* Official Government Source Credit Banner */}
                                            <div style={{
                                                background: 'rgba(10, 22, 40, 0.03)',
                                                border: '1px solid #E2E8F0',
                                                borderRadius: '10px',
                                                padding: '10px 14px',
                                                marginBottom: '20px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                gap: '10px'
                                            }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden' }}>
                                                    <i className="fa-solid fa-landmark" style={{ color: 'var(--theme-colour)', fontSize: '13px', flexShrink: 0 }} />
                                                    <span style={{ fontSize: '12px', color: '#475569', fontWeight: '600', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                        Source: {judgement.sourceGov}
                                                    </span>
                                                </div>
                                                <a
                                                    href={judgement.sourceUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{
                                                        fontSize: '11.5px',
                                                        color: 'var(--theme-colour)',
                                                        fontWeight: '700',
                                                        textDecoration: 'none',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '4px',
                                                        flexShrink: 0
                                                    }}
                                                >
                                                    <span>Verify</span>
                                                    <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '10px' }} />
                                                </a>
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid #F1F5F9' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '13.5px', fontWeight: '700' }}>
                                                <i className="fa-solid fa-circle-check" />
                                                <span>{judgement.outcome}</span>
                                            </div>

                                            <button
                                                onClick={() => setActiveJudgementModal(judgement)}
                                                style={{
                                                    background: 'transparent',
                                                    border: 'none',
                                                    color: 'var(--theme-colour)',
                                                    fontWeight: '700',
                                                    fontSize: '13.5px',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '6px'
                                                }}
                                            >
                                                <span>View Details</span>
                                                <i className="fa-solid fa-arrow-right" style={{ fontSize: '12px' }} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-12 text-center py-2">
                                <div style={{
                                    background: '#FFFFFF',
                                    borderRadius: '24px',
                                    border: '1px solid #E2E8F0',
                                    padding: '60px 40px',
                                    width: '100%',
                                    boxShadow: '0 15px 35px rgba(10, 22, 40, 0.05)'
                                }}>
                                    <div style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        background: 'rgba(197, 160, 89, 0.12)',
                                        border: '1px solid var(--theme-colour)',
                                        color: 'var(--theme-colour)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '32px',
                                        margin: '0 auto 24px auto'
                                    }}>
                                        <i className="fa-solid fa-gavel" />
                                    </div>
                                    <h3 style={{ color: '#0A1628', fontSize: '28px', fontWeight: '800', marginBottom: '14px' }}>
                                        Official Judgements Archive Updating
                                    </h3>
                                    <p style={{ color: '#64748B', fontSize: '16px', lineHeight: '28px', maxWidth: '750px', margin: '0 auto 30px auto' }}>
                                        We are currently updating our database with verified government court decisions and official reference links. Please check back shortly or consult our senior advocates directly.
                                    </p>
                                    <button
                                        onClick={() => openQuoteModal("Judgements Consultation")}
                                        className="btn"
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <span>Consult Advocates For Case Precedents</span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Bottom CTA Banner */}
                    <div style={{
                        marginTop: '60px',
                        background: 'linear-gradient(135deg, #0A1628 0%, #152A4A 100%)',
                        borderRadius: '24px',
                        padding: '50px 40px',
                        color: '#ffffff',
                        textAlign: 'center'
                    }}>
                        <h3 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '14px', color: '#ffffff' }}>
                            Need Strategic Precedent & Court Representation?
                        </h3>
                        <p style={{ color: '#CBD5E1', fontSize: '16px', maxWidth: '650px', margin: '0 auto 28px' }}>
                            Our senior advocates hold full rights of audience before Dubai, Sharjah, DIFC, and UAE Cassation Courts. Consult with our litigation leadership today.
                        </p>
                        <button
                            onClick={() => openQuoteModal("Judgements & High Court Consultation")}
                            className="btn"
                            style={{ cursor: 'pointer' }}
                        >
                            <span>Schedule High Court Consultation</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Modal Preview for Selected Judgement */}
            {activeJudgementModal && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(10, 22, 40, 0.75)',
                    backdropFilter: 'blur(8px)',
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px'
                }}>
                    <div style={{
                        background: '#FFFFFF',
                        borderRadius: '24px',
                        maxWidth: '650px',
                        width: '100%',
                        padding: '36px',
                        position: 'relative',
                        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
                        textAlign: 'left'
                    }}>
                        <button
                            onClick={() => setActiveJudgementModal(null)}
                            style={{
                                position: 'absolute',
                                top: '20px',
                                right: '20px',
                                background: 'transparent',
                                border: 'none',
                                fontSize: '20px',
                                color: '#64748B',
                                cursor: 'pointer'
                            }}
                        >
                            <i className="fa-solid fa-xmark" />
                        </button>

                        <span style={{
                            color: 'var(--theme-colour)',
                            fontWeight: '700',
                            fontSize: '12px',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            display: 'block',
                            marginBottom: '8px'
                        }}>
                            {activeJudgementModal.court} | {activeJudgementModal.caseNo}
                        </span>

                        <h3 style={{ color: '#0A1628', fontSize: '22px', fontWeight: '800', marginBottom: '16px', lineHeight: '1.3' }}>
                            {activeJudgementModal.title}
                        </h3>

                        <div style={{ color: '#475569', fontSize: '15px', lineHeight: '26px', marginBottom: '16px' }}>
                            <p><strong>Case Background & Summary:</strong></p>
                            <p>{activeJudgementModal.summary}</p>
                        </div>

                        <div style={{ background: '#F8FAFC', padding: '16px 20px', borderRadius: '12px', marginBottom: '16px', borderLeft: '4px solid var(--theme-colour)' }}>
                            <h5 style={{ color: '#0A1628', fontSize: '14px', fontWeight: '700', margin: '0 0 6px 0' }}>Established Legal Precedent:</h5>
                            <p style={{ color: '#334155', fontSize: '13.5px', margin: 0, lineHeight: '22px' }}>{activeJudgementModal.keyPrinciple}</p>
                        </div>

                        {/* Government Resource & Gazette Citations in Modal */}
                        <div style={{
                            background: 'rgba(197, 160, 89, 0.08)',
                            border: '1px solid rgba(197, 160, 89, 0.3)',
                            borderRadius: '12px',
                            padding: '16px',
                            marginBottom: '24px'
                        }}>
                            <h6 style={{ color: '#0A1628', fontSize: '13px', fontWeight: '700', margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <i className="fa-solid fa-landmark" style={{ color: 'var(--theme-colour)' }} />
                                Official Government Source & Citation:
                            </h6>
                            <p style={{ fontSize: '12.5px', color: '#475569', margin: '0 0 6px 0', lineHeight: '20px' }}>
                                <strong>Government Resource:</strong> {activeJudgementModal.sourceGov}
                            </p>
                            <p style={{ fontSize: '12.5px', color: '#475569', margin: '0 0 6px 0', lineHeight: '20px' }}>
                                <strong>Statutory Authority:</strong> {activeJudgementModal.statuteRef}
                            </p>
                            <p style={{ fontSize: '12.5px', color: '#475569', margin: 0, lineHeight: '20px' }}>
                                <strong>Official Publication:</strong> {activeJudgementModal.officialGazette}
                            </p>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <a
                                href={activeJudgementModal.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'var(--theme-colour)', fontWeight: '700', fontSize: '13.5px', textDecoration: 'underline', display: 'flex', alignItems: 'center', gap: '6px' }}
                            >
                                <i className="fa-solid fa-arrow-up-right-from-square" />
                                Open Government Resource Portal
                            </a>
                            <button
                                onClick={() => {
                                    setActiveJudgementModal(null);
                                    openQuoteModal(activeJudgementModal.title);
                                }}
                                className="btn"
                            >
                                <span>Consult Advocate</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
}

export default JudgementsPage;
