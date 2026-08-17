import { Link } from "react-router-dom";
import { useState } from "react";
import { IMAGES } from "../constant/theme";
import { menudata } from "../constant/alldata";
import { megaPracticeCategories } from "./MegaDropdown";
import "../assets/css/mobile-sidebar.css";

const navIcons = {
    "Home": "fa-solid fa-house-chimney",
    "About": "fa-solid fa-building-columns",
    "Practice Areas": "fa-solid fa-gavel",
    "Blogs & Judgements": "fa-solid fa-newspaper",
    "Contact": "fa-solid fa-envelope-open-text"
};

function MobileSidebar({ show, setShow }) {
    const [mobilePracticeOpen, setMobilePracticeOpen] = useState(false);
    const [openSubMenus, setOpenSubMenus] = useState({});

    const toggleSubMenu = (idx) => {
        setOpenSubMenus(prev => ({
            ...prev,
            [idx]: !prev[idx]
        }));
    };

    return (
        <>
            {/* Mobile Menu Backdrop Overlay (Click outside to close) */}
            <div
                className={`mobile-nav-backdrop ${show ? "active" : ""}`}
                onClick={() => setShow(false)}
            />

            {/* Mobile Menu Drawer */}
            <div className={`mobile-nav ${show ? "open" : ""}`}>
                <div className="logo" style={{ marginBottom: '24px' }}>
                    <Link to="/" onClick={() => setShow(false)}>
                        <img alt="AHA Law Firm" src={IMAGES.logo} style={{ maxHeight: '60px', maxWidth: '220px', width: 'auto', display: 'block' }} />
                    </Link>
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
                                            <i className={`fa-solid ${mobilePracticeOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} style={{ fontSize: '12px', color: '#707070', transition: 'transform 0.3s ease' }} />
                                        </div>

                                        {/* Smooth Animated Accordion Dropdown */}
                                        <div className={`mobile-practice-accordion ${mobilePracticeOpen ? 'open' : ''}`}>
                                            {megaPracticeCategories.map((cat, catIdx) => (
                                                <div
                                                    key={catIdx}
                                                    style={{
                                                        marginTop: catIdx === 0 ? '12px' : '22px',
                                                        paddingTop: catIdx === 0 ? '0' : '14px',
                                                        borderTop: catIdx === 0 ? 'none' : '1px solid rgba(143, 99, 41, 0.16)'
                                                    }}
                                                >
                                                    {cat.title !== 'Practices' && (
                                                        <span style={{ fontSize: '12.5px', fontWeight: '700', color: 'var(--theme-colour)', textTransform: 'uppercase', letterSpacing: '1.2px', display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '10px' }}>
                                                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--theme-colour)', display: 'inline-block', flexShrink: 0 }} />
                                                            <span>{cat.title}</span>
                                                        </span>
                                                    )}
                                                    {cat.groups ? (
                                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '6px' }}>
                                                            {cat.groups.map((group, gIdx) => (
                                                                <div key={gIdx} style={{ paddingLeft: '8px' }}>
                                                                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#0A1628', textTransform: 'uppercase', letterSpacing: '0.6px', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                                                                        <i className={group.icon} style={{ fontSize: '11px', color: 'var(--theme-colour)' }} />
                                                                        <span>{group.heading}</span>
                                                                    </span>
                                                                    <div style={{ paddingLeft: '14px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                                                                        {group.items.map((sub, subIdx) => (
                                                                            <Link
                                                                                key={subIdx}
                                                                                to={sub.slug ? `/practice-areas/${sub.slug}` : "/services"}
                                                                                onClick={() => setShow(false)}
                                                                                style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 0', color: '#475569', fontSize: '13px', fontWeight: '500', textDecoration: 'none' }}
                                                                            >
                                                                                <i className="fa-solid fa-angle-right" style={{ fontSize: '10px', color: 'var(--theme-colour)' }} />
                                                                                <span>{sub.title}</span>
                                                                            </Link>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    ) : cat.columns ? (
                                                        cat.columns.flat().map((sub, subIdx) => (
                                                            <Link
                                                                key={subIdx}
                                                                to="/services"
                                                                onClick={() => setShow(false)}
                                                                style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '7px 0', color: '#3A4556', fontSize: '14px', fontWeight: '500', textDecoration: 'none' }}
                                                            >
                                                                <i className="fa-solid fa-chevron-right" style={{ fontSize: '10px', color: 'var(--theme-colour)' }} />
                                                                <span>{sub.title}</span>
                                                            </Link>
                                                        ))
                                                    ) : (
                                                        cat.items && cat.items.map((sub, subIdx) => (
                                                            <Link
                                                                key={subIdx}
                                                                to={sub.link || "/services"}
                                                                onClick={() => setShow(false)}
                                                                style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '7px 0', color: '#3A4556', fontSize: '14px', fontWeight: '500', textDecoration: 'none' }}
                                                            >
                                                                <i className={sub.icon || "fa-solid fa-chevron-right"} style={{ fontSize: '12px', color: 'var(--theme-colour)' }} />
                                                                <span>{sub.title}</span>
                                                            </Link>
                                                        ))
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </li>
                                );
                            }

                            if (item.subMenu) {
                                const isSubOpen = !!openSubMenus[i];
                                return (
                                    <li key={i} style={{ borderBottom: '1px solid rgba(10, 22, 40, 0.06)', paddingBottom: '6px' }}>
                                        <div
                                            className="d-flex align-items-center justify-content-between"
                                            onClick={() => toggleSubMenu(i)}
                                            style={{ cursor: 'pointer', padding: '10px 0', color: '#0A1628', fontWeight: '600', fontSize: '15px' }}
                                        >
                                            <span className="d-flex align-items-center gap-2">
                                                <i className={iconClass} style={{ color: 'var(--theme-colour)', width: '20px' }} />
                                                <span>{item.title}</span>
                                            </span>
                                            <i className={`fa-solid ${isSubOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} style={{ fontSize: '12px', color: '#707070', transition: 'transform 0.3s ease' }} />
                                        </div>

                                        <div className={`mobile-practice-accordion ${isSubOpen ? 'open' : ''}`}>
                                            <div style={{ paddingLeft: '28px', paddingTop: '6px' }}>
                                                {item.subMenu.map((sub, subIdx) => (
                                                    <Link
                                                        key={subIdx}
                                                        to={sub.link}
                                                        onClick={() => setShow(false)}
                                                        style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', color: '#3A4556', fontSize: '14.5px', fontWeight: '500', textDecoration: 'none' }}
                                                    >
                                                        <i className="fa-solid fa-angle-right" style={{ fontSize: '12px', color: 'var(--theme-colour)' }} />
                                                        <span>{sub.title}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
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
        </>
    );
}

export default MobileSidebar;
