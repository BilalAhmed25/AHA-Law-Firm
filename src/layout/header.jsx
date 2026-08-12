import { Link, useLocation } from "react-router-dom";
import { IMAGES } from "../constant/theme";
import { menudata } from "../constant/alldata";
import { useState, useEffect } from "react";
import "../assets/css/header.css";

const megaPracticeCategories = [
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

const navIcons = {
    "Home": "fa-solid fa-house-chimney",
    "About": "fa-solid fa-building-columns",
    "Practice Areas": "fa-solid fa-gavel",
    "Our Team": "fa-solid fa-user-tie",
    "Insights": "fa-solid fa-newspaper",
    "Contact": "fa-solid fa-envelope-open-text"
};

function Header() {
    const [show, setShow] = useState(false);
    const [mobilePracticeOpen, setMobilePracticeOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleclick = () => {
        setShow(!show);
    };

    const isPathActive = (link) => {
        if (!link || link === '#' || link === '') return false;
        if (link === '/' && location.pathname === '/') return true;
        if (link !== '/' && location.pathname === link) return true;
        return false;
    };

    return (
        <header className={`sticky-header main-bar-wraper ${isSticky ? 'is-fixed' : ''}`}>
            <div className="main-bar">
                <div className="container">
                    <div className="bottom-bar">
                        <div className="logo">
                            <Link to="/"> <img alt="AHA Law Firm" src={IMAGES.logo} style={{ maxHeight: '70px', width: 'auto', transform: 'translateY(-8px)', transition: 'transform 0.3s ease' }} /> </Link>
                        </div>
                        <nav className="navbar" style={{ marginLeft: 'auto', marginRight: '25px' }}>
                            <ul className="navbar-links">
                                {menudata.map((item, i) => {
                                    const activeClass = isPathActive(item.link) ? 'active' : '';

                                    // Render WOW Mega Dropdown for Practice Areas
                                    if (item.title === 'Practice Areas') {
                                        return (
                                            <li key={i} className={`navbar-dropdown mega-dropdown-container ${activeClass}`}>
                                                <Link
                                                    to={item.link}
                                                    className={isPathActive(item.link) ? 'nav-active' : ''}
                                                    style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                                                >
                                                    {item.title} <i className="fa-solid fa-chevron-down" style={{ fontSize: '10px' }} />
                                                </Link>

                                                {/* WOW Mega Dropdown Menu Panel */}
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
                                            </li>
                                        );
                                    }

                                    let menuClassName = item.classChange;
                                    if (menuClassName === 'navbar-dropdown menu-item-children') {
                                        return (
                                            <li key={i} className={`${menuClassName} ${activeClass}`}>
                                                <Link
                                                    to={item.link}
                                                    className={isPathActive(item.link) ? 'nav-active' : ''}
                                                >{item.title}</Link>
                                                {item.subMenu && (
                                                    <ul className="sub-menu">
                                                        {item.subMenu.map((subItem, subIndex) => (
                                                            <li key={subIndex}>
                                                                <Link to={subItem.link}>{subItem.title}</Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        );
                                    } else {
                                        return (
                                            <li key={i} className={`navbar-dropdown ${activeClass}`}>
                                                <Link
                                                    to={item.link}
                                                    className={isPathActive(item.link) ? 'nav-active' : ''}
                                                >{item.title}</Link>
                                            </li>
                                        );
                                    }
                                })}
                            </ul>
                        </nav>
                        <div className="header-menu-right" style={{ display: 'flex', alignItems: 'center', transform: 'translateY(-5px)' }}>
                            <div style={{
                                height: '24px',
                                width: '1px',
                                background: 'rgba(10, 22, 40, 0.2)',
                                marginRight: '22px',
                                marginLeft: '5px'
                            }} />
                            <Link
                                to={"https://wa.me/971566856365?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20free%20consultation."}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: 'var(--theme-colour)',
                                    fontWeight: '700',
                                    fontSize: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s ease'
                                }}
                            >
                                <i className="fa-solid fa-file-signature" style={{ fontSize: '18px' }} />
                                <span>Get a quote</span>
                            </Link>
                        </div>
                        <Link to={"#"} id="mobile-menu" className="menu-start" onClick={() => setShow(!show)}>
                            <i className="fa-solid fa-bars" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Backdrop Overlay (Click outside to close) */}
            <div
                className={`mobile-nav-backdrop ${show ? "active" : ""}`}
                onClick={() => setShow(false)}
            />

            {/* Mobile Menu Drawer */}
            <div className={`mobile-nav ${show ? "open" : ""}`}>
                <div className="logo" style={{ marginBottom: '28px' }}>
                    <Link to="/" onClick={() => setShow(false)}> <img alt="AHA Law Firm" src={IMAGES.logo} style={{ maxHeight: '48px', width: 'auto' }} /> </Link>
                </div>
                <div>
                    <ul className="navbar-links" style={{ flexDirection: 'column', gap: '4px', paddingLeft: 0, listStyle: 'none' }}>
                        {menudata.map((item, i) => {
                            const iconClass = navIcons[item.title] || "fa-solid fa-angle-right";

                            if (item.title === 'Practice Areas') {
                                return (
                                    <li key={i} style={{ borderBottom: '1px solid rgba(10, 22, 40, 0.06)', paddingBottom: '6px' }}>
                                        <div
                                            className="d-flex align-items-center justify-content-between"
                                            onClick={() => setMobilePracticeOpen(!mobilePracticeOpen)}
                                            style={{ cursor: 'pointer', padding: '10px 0', color: '#0A1628', fontWeight: '600', fontSize: '15px' }}
                                        >
                                            <span className="d-flex align-items-center gap-2">
                                                <i className={iconClass} style={{ color: 'var(--theme-colour)', width: '20px' }} />
                                                <span>{item.title}</span>
                                            </span>
                                            <i className={`fa-solid ${mobilePracticeOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} style={{ fontSize: '12px', color: '#707070' }} />
                                        </div>

                                        {/* Practice Areas Collapsible Accordion Dropdown */}
                                        {mobilePracticeOpen && (
                                            <div style={{ paddingLeft: '14px', marginTop: '4px', marginBottom: '10px', borderLeft: '2px solid rgba(143, 99, 41, 0.3)' }}>
                                                {megaPracticeCategories.map((cat, catIdx) => (
                                                    <div key={catIdx} style={{ marginTop: '10px' }}>
                                                        <span style={{ fontSize: '10.5px', fontWeight: '700', color: 'var(--theme-colour)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '6px' }}>
                                                            {cat.category}
                                                        </span>
                                                        {cat.items.map((sub, subIdx) => (
                                                            <Link
                                                                key={subIdx}
                                                                to={sub.link}
                                                                onClick={() => setShow(false)}
                                                                style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 0', color: '#4A5568', fontSize: '13px', textDecoration: 'none' }}
                                                            >
                                                                <i className={sub.icon} style={{ fontSize: '12px', color: 'var(--theme-colour)', width: '16px' }} />
                                                                <span>{sub.title}</span>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </li>
                                );
                            }

                            return (
                                <li key={i} style={{ borderBottom: '1px solid rgba(10, 22, 40, 0.06)' }}>
                                    <Link
                                        to={item.link}
                                        onClick={() => setShow(false)}
                                        style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 0', color: '#0A1628', fontWeight: '600', fontSize: '15px', textDecoration: 'none' }}
                                    >
                                        <i className={iconClass} style={{ color: 'var(--theme-colour)', width: '20px' }} />
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;