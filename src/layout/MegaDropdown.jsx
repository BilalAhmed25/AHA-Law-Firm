import { Link } from "react-router-dom";
import "../assets/css/mega-dropdown.css";

export const megaPracticeCategories = [
    {
        category: "Corporate & Commercial",
        items: [
            { icon: "fa-solid fa-gavel", title: "Litigation & Disputes", desc: "Expert UAE court advocacy & commercial litigation.", link: "/services" },
            { icon: "fa-solid fa-scale-balanced", title: "Arbitration & ADR", desc: "DIAC & international arbitration proceedings.", link: "/services" },
            { icon: "fa-solid fa-building", title: "Corporate Governance", desc: "Company formation, M&A & corporate compliance.", link: "/services" },
            { icon: "fa-solid fa-file-contract", title: "Contracts & Agreements", desc: "Commercial contract drafting & legal vetting.", link: "/services" },
            { icon: "fa-solid fa-landmark", title: "Banking & Financial Law", desc: "Financial dispute defense & debt restructuring.", link: "/services" },
            { icon: "fa-solid fa-receipt", title: "Tax & Compliance", desc: "UAE Corporate Tax & VAT advisory services.", link: "/services" }
        ]
    },
    {
        category: "Real Estate & Assets",
        items: [
            { icon: "fa-solid fa-house-chimney", title: "Real Estate & Property", desc: "RERA disputes, property sales & lease claims.", link: "/services" },
            { icon: "fa-solid fa-chart-line", title: "Bankruptcy & Insolvency", desc: "Corporate restructuring & debt protection.", link: "/services" },
            { icon: "fa-solid fa-lightbulb", title: "Intellectual Property", desc: "Trademark registration & copyright defense.", link: "/services" },
            { icon: "fa-solid fa-ship", title: "Maritime & Logistics", desc: "Vessel arrests & maritime shipping claims.", link: "/services" },
            { icon: "fa-solid fa-handshake", title: "Employment & Labor", desc: "MOHRE labor claims & executive contracts.", link: "/services" }
        ]
    },
    {
        category: "International & Defense",
        items: [
            { icon: "fa-solid fa-shield-halved", title: "Criminal Defense", desc: "White-collar defense & police representation.", link: "/services" },
            { icon: "fa-solid fa-globe", title: "Interpol & Extradition", desc: "Red Notice removal & extradition defense.", link: "/services" },
            { icon: "fa-solid fa-passport", title: "Immigration & Golden Visa", desc: "Golden Visa processing & residency solutions.", link: "/services" },
            { icon: "fa-solid fa-people-roof", title: "Family & Personal Status", desc: "Divorce, child custody & asset division.", link: "/services" },
            { icon: "fa-solid fa-scroll", title: "Wills & Legacy Planning", desc: "DIFC & ADGM wills & estate protection.", link: "/services" }
        ]
    }
];

function MegaDropdown() {
    return (
        <div className="mega-dropdown-menu">
            <div className="row g-4">
                {megaPracticeCategories.map((cat, catIdx) => (
                    <div className="col-lg-3" key={catIdx}>
                        <h6 className="mega-cat-heading">{cat.category}</h6>
                        {cat.items.map((sub, subIdx) => (
                            <div className="mega-flip-card" key={subIdx}>
                                <div className="mega-flip-card-inner">
                                    {/* Front Face */}
                                    <div className="mega-flip-card-front">
                                        <div className="mega-item-icon">
                                            <i className={sub.icon} />
                                        </div>
                                        <span className="mega-item-title">{sub.title}</span>
                                    </div>
                                    {/* Back Face (Flips on hover - Dark Navy & Top-Right Icon) */}
                                    <Link to={sub.link} className="mega-flip-card-back">
                                        <div className="mega-flip-back-content">
                                            <h6 className="mega-flip-title">{sub.title}</h6>
                                            <p className="mega-flip-desc">{sub.desc}</p>
                                        </div>
                                        <i className={`${sub.icon} mega-flip-watermark-icon`} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}

                {/* Column 4: Featured Consultation CTA */}
                <div className="col-lg-3">
                    <div className="mega-cta-card">
                        <div>
                            <span className="mega-cta-badge">
                                <i className="fa-solid fa-star" style={{ fontSize: '8px' }} />
                                Legal Excellence
                            </span>
                            <h5 className="mega-cta-title">Need Urgent Legal Counsel?</h5>
                            <p className="mega-cta-text">Speak directly with our senior UAE advocates for strategic dispute evaluation and guidance.</p>
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
                                <div className="mega-cta-stat-divider" />
                                <div className="mega-cta-stat">
                                    <strong>UAE</strong>
                                    <span>Courts</span>
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
        </div>
    );
}

export default MegaDropdown;
