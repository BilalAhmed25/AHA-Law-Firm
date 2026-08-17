import React, { useState } from "react";
import { Link } from "react-router-dom";
import { openQuoteModal } from "../componenet/quote-modal";
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
                    { title: "Corporate / Mergers & Acquisitions", modalQuery: "Corporate & M&A" },
                    { title: "Capital Markets", modalQuery: "Capital Markets Advisory" },
                    { title: "Private Equity", modalQuery: "Private Equity Advisory" },
                    { title: "Venture Capital & Emerging Companies", modalQuery: "Venture Capital Advisory" },
                    { title: "Corporate Services", modalQuery: "Corporate Services" },
                    { title: "Corporate Structuring", modalQuery: "Corporate Structuring" },
                    { title: "Banking & Finance", modalQuery: "Banking & Financial Law" },
                    { title: "Insurance", modalQuery: "Insurance Law" },
                    { title: "Tax", modalQuery: "Corporate Tax & VAT Advisory" }
                ]
            },
            {
                heading: "Disputes & Resolution",
                icon: "fa-solid fa-scale-balanced",
                items: [
                    { title: "Arbitration", modalQuery: "Arbitration & ADR" },
                    { title: "Litigation", modalQuery: "Litigation & Court Advocacy" },
                    { title: "Dispute Resolution", modalQuery: "Dispute Resolution" },
                    { title: "International Litigation", modalQuery: "International Litigation" },
                    { title: "Mediation", modalQuery: "Commercial Mediation" },
                    { title: "Turnaround, Restructuring & Insolvency", modalQuery: "Restructuring & Insolvency" }
                ]
            },
            {
                heading: "Industry & Specialist",
                icon: "fa-solid fa-briefcase",
                items: [
                    { title: "Commercial", modalQuery: "Commercial Law" },
                    { title: "Construction & Infrastructure", modalQuery: "Construction & Infrastructure" },
                    { title: "Real Estate", modalQuery: "Real Estate & Property Law" },
                    { title: "Shipping, Aviation & Logistics", modalQuery: "Shipping & Logistics Law" },
                    { title: "Projects", modalQuery: "Projects & Energy Law" },
                    { title: "Employment & Incentives", modalQuery: "Employment & Labor Law" },
                    { title: "Intellectual Property", modalQuery: "Intellectual Property" },
                    { title: "Innovation, Patents & Industrial Property (3IP)", modalQuery: "Patents & Industrial Property" },
                    { title: "Digital & Data", modalQuery: "Digital & Data Privacy" }
                ]
            },
            {
                heading: "Regulatory & Advisory",
                icon: "fa-solid fa-shield-halved",
                items: [
                    { title: "Competition", modalQuery: "Competition & Antitrust" },
                    { title: "Compliance, Investigations & International Cooperation", modalQuery: "Compliance & Investigations" },
                    { title: "Regulatory", modalQuery: "Regulatory Compliance" },
                    { title: "Legislative Drafting", modalQuery: "Legislative Drafting & Policy" },
                    { title: "Sustainable Business", modalQuery: "ESG & Sustainable Business" },
                    { title: "Private Notary", modalQuery: "Private Notary Services" },
                    { title: "Family Business & Private Client", modalQuery: "Family Business & Private Wealth" },
                    { title: "Criminal Defense & Police Matters", modalQuery: "Criminal Defense" },
                    { title: "Interpol Red Notice & Extradition Defense", modalQuery: "Interpol Red Notice Defense" },
                    { title: "Immigration & Golden Visa Solutions", modalQuery: "Immigration & Golden Visa" },
                    { title: "Family & Personal Status Law", modalQuery: "Family & Personal Status" },
                    { title: "Wills, Probate & Legacy Planning", modalQuery: "Wills & Legacy Planning" }
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
            { icon: "fa-solid fa-jet-fighter", title: "Defence & Aerospace", desc: "Government procurement & defense contracts.", link: "/services" },
            { icon: "fa-solid fa-graduation-cap", title: "Education Sector", desc: "School & university regulatory compliance.", link: "/services" },
            { icon: "fa-solid fa-solar-panel", title: "Energy & Resources", desc: "Oil, gas, solar & mining legal advisory.", link: "/services" },
            { icon: "fa-solid fa-piggy-bank", title: "Financial Services", desc: "Banks, fintechs & investment funds advisory.", link: "/services" },
            { icon: "fa-solid fa-user-doctor", title: "Healthcare & Life Sciences", desc: "Pharma, medical devices & hospital advisory.", link: "/services" },
            { icon: "fa-solid fa-hotel", title: "Hotels & Leisure", desc: "Hospitality agreements & resort management.", link: "/services" },
            { icon: "fa-solid fa-city", title: "Real Estate & Construction", desc: "Master developments & mega infrastructure.", link: "/services" },
            { icon: "fa-solid fa-cart-shopping", title: "Retail & Consumer", desc: "Franchising, e-commerce & consumer rights.", link: "/services" },
            { icon: "fa-solid fa-trophy", title: "Entertainment & Sports", desc: "Sponsorships, media rights & sports law.", link: "/services" },
            { icon: "fa-solid fa-tower-cell", title: "TMT & Telecom", desc: "Telecom licensing, cloud & media regulation.", link: "/services" }
        ]
    },
    {
        id: "client-solutions",
        title: "Client Solutions",
        type: "flip-cards",
        icon: "fa-solid fa-handshake-angle",
        items: [
            { icon: "fa-solid fa-file-circle-check", title: "Free Case Review", desc: "100% confidential & zero-obligation evaluation.", link: "/services" },
            { icon: "fa-solid fa-lock", title: "Emergency Asset Freezing", desc: "Ex-parte bank account freezing & injunctions.", link: "/services" },
            { icon: "fa-solid fa-user-tie", title: "Corporate Retainer", desc: "Dedicated general counsel & legal department.", link: "/services" },
            { icon: "fa-solid fa-building-columns", title: "Supreme Court Appeals", desc: "Senior Emirati advocates before Supreme Court.", link: "/services" },
            { icon: "fa-solid fa-scale-balanced", title: "Arbitration Defense", desc: "DIAC, ICC & LCIA arbitration representation.", link: "/services" },
            { icon: "fa-solid fa-passport", title: "Interpol Notice Defense", desc: "Defense against international arrest warrants.", link: "/services" }
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

                    {/* ── PRACTICES: Grouped 4-Column Layout with Category Headers ── */}
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
                                                <a
                                                    href="#consultation"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        openQuoteModal(item.modalQuery || item.title);
                                                    }}
                                                    className="mega-group-link-item"
                                                >
                                                    {item.title}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ) : (
                        /* ── SECTORS & CLIENT SOLUTIONS: 3D Flip Cards + CTA ── */
                        <div className="row g-3 align-items-stretch">
                            <div className="col-lg-8">
                                <div className="row g-3">
                                    {activeTab.items.map((sub, subIdx) => (
                                        <div className="col-lg-6" key={subIdx}>
                                            <div className="mega-flip-card">
                                                <div className="mega-flip-card-inner">
                                                    <div className="mega-flip-card-front">
                                                        <div className="mega-item-icon">
                                                            <i className={sub.icon} />
                                                        </div>
                                                        <span className="mega-item-title">{sub.title}</span>
                                                    </div>
                                                    <div
                                                        className="mega-flip-card-back"
                                                        style={{ cursor: 'pointer' }}
                                                        onClick={() => openQuoteModal(sub.title)}
                                                    >
                                                        <div className="mega-flip-back-content">
                                                            <h6 className="mega-flip-title">{sub.title}</h6>
                                                            <p className="mega-flip-desc">{sub.desc}</p>
                                                        </div>
                                                        <i className={`${sub.icon} mega-flip-watermark-icon`} />
                                                    </div>
                                                </div>
                                            </div>
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
