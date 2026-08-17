import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/mega-dropdown.css";

export const megaNavigationData = [
    {
        id: "practices",
        title: "Practices",
        type: "grouped-links",
        icon: "fa-solid fa-gavel",
        groups: [
            {
                heading: "Corporate & Transactional",
                icon: "fa-solid fa-building",
                items: [
                    { title: "Corporate / Mergers & Acquisitions", slug: "corporate-mergers-acquisitions" },
                    { title: "Capital Markets", slug: "capital-markets" },
                    { title: "Private Equity", slug: "private-equity" },
                    { title: "Venture Capital & Emerging Companies", slug: "venture-capital" },
                    { title: "Corporate Services", slug: "corporate-services" },
                    { title: "Corporate Structuring", slug: "corporate-structuring" },
                    { title: "Banking & Finance", slug: "banking-finance" },
                    { title: "Insurance Law", slug: "insurance" },
                    { title: "Corporate Tax & VAT", slug: "tax" }
                ]
            },
            {
                heading: "Disputes & Resolution",
                icon: "fa-solid fa-scale-balanced",
                items: [
                    { title: "Arbitration & ADR", slug: "arbitration" },
                    { title: "Litigation & Court Advocacy", slug: "litigation" },
                    { title: "Dispute Resolution", slug: "dispute-resolution" },
                    { title: "International Litigation", slug: "international-litigation" },
                    { title: "Commercial Mediation", slug: "mediation" },
                    { title: "Turnaround & Insolvency", slug: "restructuring-insolvency" }
                ]
            },
            {
                heading: "Industry & Specialist",
                icon: "fa-solid fa-briefcase",
                items: [
                    { title: "Commercial Law & Contracts", slug: "commercial-law" },
                    { title: "Construction & Infrastructure", slug: "construction-infrastructure" },
                    { title: "Real Estate & Property", slug: "real-estate" },
                    { title: "Shipping, Aviation & Logistics", slug: "shipping-logistics" },
                    { title: "Projects & Energy Law", slug: "projects-energy" },
                    { title: "Employment & Incentives", slug: "employment-labor" },
                    { title: "Intellectual Property", slug: "intellectual-property" },
                    { title: "Patents & Industrial Property (3IP)", slug: "patents-innovation" },
                    { title: "Digital & Data Privacy", slug: "digital-data-privacy" }
                ]
            },
            {
                heading: "Regulatory & Advisory",
                icon: "fa-solid fa-shield-halved",
                items: [
                    { title: "Competition & Antitrust", slug: "competition-antitrust" },
                    { title: "Compliance & Investigations", slug: "compliance-investigations" },
                    { title: "Regulatory Compliance", slug: "regulatory-compliance" },
                    { title: "Legislative Drafting & Policy", slug: "legislative-drafting" },
                    { title: "Sustainable Business (ESG)", slug: "sustainable-business-esg" },
                    { title: "Private Notary Services", slug: "private-notary" },
                    { title: "Family Business & Wealth", slug: "family-business-wealth" },
                    { title: "Criminal Defense & Police Matters", slug: "criminal-defense" },
                    { title: "Interpol & Extradition Defense", slug: "interpol-extradition" },
                    { title: "Immigration & Golden Visa", slug: "immigration-golden-visa" },
                    { title: "Family & Personal Status", slug: "family-personal-status" },
                    { title: "Wills, Probate & Legacy", slug: "wills-probate" }
                ]
            }
        ]
    },
    {
        id: "sectors",
        title: "Sectors",
        type: "flip-cards",
        icon: "fa-solid fa-industry",
        items: [
            { icon: "fa-solid fa-jet-fighter", title: "Defence & Aerospace", desc: "Government procurement & defense contracts.", link: "/practice-areas/commercial-law" },
            { icon: "fa-solid fa-graduation-cap", title: "Education Sector", desc: "School & university regulatory compliance.", link: "/practice-areas/regulatory-compliance" },
            { icon: "fa-solid fa-solar-panel", title: "Energy & Resources", desc: "Oil, gas, solar & mining legal advisory.", link: "/practice-areas/projects-energy" },
            { icon: "fa-solid fa-piggy-bank", title: "Financial Services", desc: "Banks, fintechs & investment funds advisory.", link: "/practice-areas/banking-finance" },
            { icon: "fa-solid fa-user-doctor", title: "Healthcare & Life Sciences", desc: "Pharma, medical devices & hospital advisory.", link: "/practice-areas/regulatory-compliance" },
            { icon: "fa-solid fa-hotel", title: "Hotels & Leisure", desc: "Hospitality agreements & resort management.", link: "/practice-areas/commercial-law" },
            { icon: "fa-solid fa-city", title: "Real Estate & Construction", desc: "Master developments & mega infrastructure.", link: "/practice-areas/real-estate" },
            { icon: "fa-solid fa-cart-shopping", title: "Retail & Consumer", desc: "Franchising, e-commerce & consumer rights.", link: "/practice-areas/commercial-law" },
            { icon: "fa-solid fa-trophy", title: "Entertainment & Sports", desc: "Sponsorships, media rights & sports law.", link: "/practice-areas/intellectual-property" },
            { icon: "fa-solid fa-tower-cell", title: "TMT & Telecom", desc: "Telecom licensing, cloud & media regulation.", link: "/practice-areas/digital-data-privacy" }
        ]
    },
    {
        id: "client-solutions",
        title: "Client Solutions",
        type: "flip-cards",
        icon: "fa-solid fa-handshake-angle",
        items: [
            { icon: "fa-solid fa-file-circle-check", title: "Free Case Review", desc: "100% confidential & zero-obligation evaluation.", link: "/contact" },
            { icon: "fa-solid fa-lock", title: "Emergency Asset Freezing", desc: "Ex-parte bank account freezing & injunctions.", link: "/practice-areas/litigation" },
            { icon: "fa-solid fa-user-tie", title: "Corporate Retainer", desc: "Dedicated general counsel & legal department.", link: "/practice-areas/corporate-services" },
            { icon: "fa-solid fa-building-columns", title: "Supreme Court Appeals", desc: "Senior Emirati advocates before Supreme Court.", link: "/practice-areas/litigation" },
            { icon: "fa-solid fa-scale-balanced", title: "Arbitration Defense", desc: "DIAC, ICC & LCIA arbitration representation.", link: "/practice-areas/arbitration" },
            { icon: "fa-solid fa-passport", title: "Interpol Notice Defense", desc: "Defense against international arrest warrants.", link: "/practice-areas/interpol-extradition" }
        ]
    }
];

export const megaPracticeCategories = megaNavigationData;

function MegaDropdown() {
    const [activeTabIdx, setActiveTabIdx] = useState(0);
    const activeTab = megaNavigationData[activeTabIdx] || megaNavigationData[0];

    return (
        <div className="mega-dropdown-menu tamimi-style-dropdown">
            <div className="row g-4 align-items-stretch">
                {/* Left Sidebar Tabs */}
                <div className="col-lg-3 col-md-3 mega-sidebar-col">
                    <div className="mega-sidebar-heading">
                        <span>PRACTICE CATEGORIES</span>
                    </div>
                    <div className="mega-category-list">
                        {megaNavigationData.map((tab, idx) => (
                            <div
                                key={tab.id}
                                className={`mega-category-tab ${activeTabIdx === idx ? 'active' : ''}`}
                                onMouseEnter={() => setActiveTabIdx(idx)}
                                onClick={() => setActiveTabIdx(idx)}
                            >
                                <div className="mega-tab-content">
                                    <i className={tab.icon} />
                                    <span>{tab.title}</span>
                                </div>
                                <div className="mega-tab-badge">
                                    <i className="fa-solid fa-chevron-right" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Content Panel */}
                <div className="col-lg-9 col-md-9 mega-content-col">

                    {/* ── PRACTICES: Grouped 4-Column Layout with Direct Page Links ── */}
                    {activeTab.type === "grouped-links" ? (
                        <div className="row g-4">
                            {activeTab.groups.map((group, gIdx) => (
                                <div className="col-lg-3 col-md-6 mega-group-col" key={gIdx}>
                                    <div className="mega-group-header">
                                        <i className={group.icon} />
                                        <span>{group.heading}</span>
                                    </div>
                                    <ul className="mega-group-links">
                                        {group.items.map((item, itemIdx) => (
                                            <li key={itemIdx}>
                                                <Link
                                                    to={`/practice-areas/${item.slug}`}
                                                    className="mega-group-link-item"
                                                >
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ) : (
                        /* ── SECTORS & CLIENT SOLUTIONS: 3D Flip Cards with Direct Navigation ── */
                        <div className="row g-3 align-items-stretch">
                            <div className="col-lg-8">
                                <div className="row g-3">
                                    {activeTab.items.map((sub, subIdx) => (
                                        <div className="col-lg-6" key={subIdx}>
                                            <Link
                                                to={sub.link || "/services"}
                                                style={{ textDecoration: 'none', display: 'block' }}
                                            >
                                                <div className="mega-flip-card">
                                                    <div className="mega-flip-card-inner">
                                                        <div className="mega-flip-card-front">
                                                            <div className="mega-item-icon">
                                                                <i className={sub.icon} />
                                                            </div>
                                                            <span className="mega-item-title">{sub.title}</span>
                                                        </div>
                                                        <div className="mega-flip-card-back">
                                                            <div className="mega-flip-back-content">
                                                                <h6 className="mega-flip-title">{sub.title}</h6>
                                                                <p className="mega-flip-desc">{sub.desc}</p>
                                                            </div>
                                                            <i className={`${sub.icon} mega-flip-watermark-icon`} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="mega-cta-card">
                                    <div>
                                        <span className="mega-cta-badge">
                                            <i className="fa-solid fa-star" style={{ fontSize: '8px' }} />
                                            Legal Excellence
                                        </span>
                                        <h5 className="mega-cta-title">Need Urgent Legal Counsel?</h5>
                                        <p className="mega-cta-text">Speak directly with our senior UAE advocates for strategic dispute evaluation.</p>
                                        <div className="mega-cta-stats">
                                            <div className="mega-cta-stat">
                                                <strong>15+</strong>
                                                <span>Years</span>
                                            </div>
                                            <div className="mega-cta-stat-divider" />
                                            <div className="mega-cta-stat">
                                                <strong>500+</strong>
                                                <span>Cases Won</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mega-cta-btn">
                                        <a
                                            href="https://wa.me/971566856365?text=Hello%2C%20I%20would%20like%20to%20consult%20on%20legal%20services."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span>Free Consultation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MegaDropdown;
