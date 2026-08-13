import React from "react";
import { openQuoteModal } from "./quote-modal";
import "../assets/css/services-grid.css";

const practiceGroups = [
    {
        groupTitle: "Corporate, Commercial & Tax Advisory",
        groupTag: "Group 01 — Business & Tax Law",
        groupIcon: "fa-solid fa-briefcase",
        practices: [
            {
                icon: "fa-solid fa-building-flag",
                title: "Corporate & Commercial Law",
                statute: "UAE Federal Decree-Law No. 32 of 2021",
                description: "Strategic corporate structuring, joint venture governance, UBO regulatory compliance, and cross-border commercial transactions.",
                bullets: [
                    "Onshore & Free Zone LLC/PJSC Entity Setup",
                    "Corporate Governance & Compliance Audits",
                    "M&A Due Diligence & Share Purchase Agreements"
                ]
            },
            {
                icon: "fa-solid fa-file-contract",
                title: "Contracts & Transactions",
                statute: "UAE Civil Code (Federal Law No. 5 of 1985)",
                description: "Drafting, negotiating, and enforcing high-stakes commercial agreements, supply contracts, non-competes, and distribution terms.",
                bullets: [
                    "Bilingual Arabic-English Contract Drafting",
                    "Limitation of Liability & Indemnity Protection",
                    "Commercial Breach & Liquidated Damages Claims"
                ]
            },
            {
                icon: "fa-solid fa-calculator",
                title: "Tax & Regulatory Compliance",
                statute: "UAE Corporate Tax Decree-Law No. 47 of 2022",
                description: "Navigating 9% Corporate Tax compliance, Federal Tax Authority (FTA) registrations, Economic Substance (ESR), and Transfer Pricing.",
                bullets: [
                    "FTA Registration & Tax Return Filing Support",
                    "Qualifying Free Zone Person (QFZP) 0% Incentives",
                    "Transfer Pricing Documentation & OECD Compliance"
                ]
            },
            {
                icon: "fa-solid fa-chart-line-down",
                title: "Bankruptcy & Restructuring",
                statute: "UAE Bankruptcy Law (Decree-Law No. 51 of 2023)",
                description: "Court-supervised insolvency restructuring, preventive composition procedures, asset protection, and debt settlement workouts.",
                bullets: [
                    "Preventive Composition & Creditor Stay Orders",
                    "Director Liability Defense & Cheque Relief",
                    "Corporate Liquidation & Asset Distribution"
                ]
            }
        ]
    },
    {
        groupTitle: "Dispute Resolution, Litigation & Arbitration",
        groupTag: "Group 02 — High-Stakes Advocacy",
        groupIcon: "fa-solid fa-gavel",
        practices: [
            {
                icon: "fa-solid fa-scale-balanced",
                title: "Litigation & Dispute Resolution",
                statute: "UAE Civil Procedure Law (Federal Law No. 42 of 2022)",
                description: "Rigorous representation before Dubai, Ajman, and UAE Federal First Instance, Appeal, and Cassation Courts in commercial disputes.",
                bullets: [
                    "Rights of Audience Before All UAE Courts",
                    "Precautionary Asset Freezing & Attachment Orders",
                    "Execution & Asset Recovery Proceedings"
                ]
            },
            {
                icon: "fa-solid fa-handshake-simple",
                title: "Arbitration & ADR",
                statute: "UAE Arbitration Law (Federal Law No. 6 of 2018)",
                description: "Representation in international and domestic arbitration under DIAC, ICC, DIFC-LCIA, and ADGM arbitration tribunal rules.",
                bullets: [
                    "Arbitration Clause Drafting & Seat Selection",
                    "DIFC & ADGM Common Law Tribunal Representation",
                    "Enforcement of Foreign & Arbitral Awards"
                ]
            },
            {
                icon: "fa-solid fa-ship",
                title: "Maritime & Shipping Law",
                statute: "UAE Commercial Maritime Code",
                description: "Specialized advocacy in vessel arrest applications, charterparty breach claims, marine insurance disputes, and port authority liens.",
                bullets: [
                    "Precautionary Vessel Arrest Orders",
                    "Bill of Lading & Cargo Loss Litigation",
                    "Collision, Towage & Bunker Debt Claims"
                ]
            }
        ]
    },
    {
        groupTitle: "Banking, Real Estate & Property Law",
        groupTag: "Group 03 — Financial & Real Estate Assets",
        groupIcon: "fa-solid fa-landmark",
        practices: [
            {
                icon: "fa-solid fa-building-user",
                title: "Real Estate & Property Law",
                statute: "Dubai Land Department & RERA Regulations",
                description: "Legal conveyancing, off-plan Sale & Purchase Agreement (SPA) review, escrow protection, and real estate dispute litigation.",
                bullets: [
                    "DLD Property Transfer & NOC Due Diligence",
                    "Off-Plan Project Delay & Escrow Remedies",
                    "Commercial Lease & Rental Dispute Center Representation"
                ]
            },
            {
                icon: "fa-solid fa-vault",
                title: "Banking & Financial Law",
                statute: "CBUAE Banking & Central Bank Directives",
                description: "Legal representation in loan restructuring, commercial mortgage disputes, letter of credit (LC) claims, and CBUAE regulatory defense.",
                bullets: [
                    "Syndicated Loan & Debt Financing Advisory",
                    "Central Bank Regulatory & KYC Compliance",
                    "Bounced Cheque & Financial Dispute Conciliation"
                ]
            },
            {
                icon: "fa-solid fa-copyright",
                title: "Intellectual Property",
                statute: "UAE Trademark Law (Federal Law No. 36 of 2021)",
                description: "Securing multi-jurisdictional trademark registrations, patent filings, trade secret non-disclosure agreements, and anti-counterfeiting.",
                bullets: [
                    "GCC Trademark & Patent Registrations",
                    "Customs Anti-Counterfeiting Seizure Recordals",
                    "IP Infringement Litigation & NDA Enforcement"
                ]
            }
        ]
    },
    {
        groupTitle: "Criminal Defense, Extradition & Personal Status",
        groupTag: "Group 04 — Defense & Personal Status Law",
        groupIcon: "fa-solid fa-shield-cat",
        practices: [
            {
                icon: "fa-solid fa-user-ninja",
                title: "Criminal Defense & Penal Law",
                statute: "UAE Penal Code (Federal Decree-Law No. 31 of 2021)",
                description: "Pre-trial interrogation defense, Public Prosecution advocacy, bail application filings, and criminal trial representation.",
                bullets: [
                    "Financial & White-Collar Crime Defense",
                    "Police Custody & Prosecution Rights of Audience",
                    "Bail Approvals & Passport Guarantee Release"
                ]
            },
            {
                icon: "fa-solid fa-globe",
                title: "Interpol & Extradition Defense",
                statute: "UAE International Judicial Cooperation Codes",
                description: "Challenging international Interpol Red Notices before Lyon CCF and defending against cross-border extradition requests.",
                bullets: [
                    "Interpol Red Notice Deletion Applications",
                    "Bilateral Extradition Treaty Defense Before UAE Courts",
                    "Human Rights & Due Process Safeguards"
                ]
            },
            {
                icon: "fa-solid fa-passport",
                title: "Immigration & Golden Visa",
                statute: "Federal Authority for Identity & Citizenship (ICP)",
                description: "Legal advisory for 10-year Golden Visa eligibility, real estate investor residency, specialized talent sponsorship, and appeals.",
                bullets: [
                    "AED 2M Real Estate Investor Golden Visa Filing",
                    "Specialized Executive & Entrepreneur Sponsorship",
                    "Residency Rejection Review & Appeals"
                ]
            },
            {
                icon: "fa-solid fa-heart-pulse",
                title: "Family & Personal Status Law",
                statute: "Civil Personal Status Law (Decree-Law No. 41 of 2022)",
                description: "Advocacy for non-Muslim civil divorce, child custody arrangements, alimony claims, and DIFC registered Will executions.",
                bullets: [
                    "Civil Divorce & Financial Settlement Representation",
                    "Joint Child Custody & Guardianship Orders",
                    "DIFC Will Registration & Legacy Asset Protection"
                ]
            }
        ]
    }
];

function ServicesGrid() {
    return (
        <section className="services-grid-section">
            <div className="container">
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-lg-8">
                        <span style={{
                            color: 'var(--theme-colour)',
                            fontWeight: '700',
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            fontSize: '14px',
                            display: 'block',
                            marginBottom: '10px'
                        }}>
                            Detailed Practice Overview
                        </span>
                        <h2 style={{
                            color: '#0A1628',
                            fontWeight: '800',
                            fontSize: '36px',
                            lineHeight: '1.3'
                        }}>
                            Tailored Legal Counsel Designed for Your Commercial & Individual Success
                        </h2>
                        <p style={{
                            color: '#64748B',
                            fontSize: '16px',
                            marginTop: '15px',
                            lineHeight: '26px'
                        }}>
                            Explore our comprehensive legal practice groups below, structured around mandatory UAE statutory codes and international best practices.
                        </p>
                    </div>
                </div>

                {practiceGroups.map((group, groupIdx) => (
                    <div className="services-group-wrapper" key={groupIdx}>
                        <div className="services-group-header text-start">
                            <span className="services-group-tag">{group.groupTag}</span>
                            <h3 className="services-group-title">
                                <i className={group.groupIcon} />
                                <span>{group.groupTitle}</span>
                            </h3>
                        </div>

                        <div className="row g-4">
                            {group.practices.map((practice, pIdx) => (
                                <div className="col-md-6 col-lg-4" key={pIdx}>
                                    <div className="services-practice-card">
                                        <div>
                                            <div className="services-card-icon">
                                                <i className={practice.icon} />
                                            </div>

                                            <span className="services-card-statute">{practice.statute}</span>

                                            <h4 className="services-card-title">{practice.title}</h4>

                                            <p className="services-card-description">{practice.description}</p>

                                            <ul className="services-card-bullets">
                                                {practice.bullets.map((b, bIdx) => (
                                                    <li key={bIdx}>{b}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="services-card-footer">
                                            <button
                                                type="button"
                                                className="services-card-action"
                                                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                                                onClick={() => openQuoteModal(practice.title)}
                                            >
                                                <span>Consult Legal Advocate</span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ServicesGrid;
