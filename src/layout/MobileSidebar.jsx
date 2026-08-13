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
    "Our Team": "fa-solid fa-user-tie",
    "Insights": "fa-solid fa-newspaper",
    "Contact": "fa-solid fa-envelope-open-text"
};

function MobileSidebar({ show, setShow }) {
    const [mobilePracticeOpen, setMobilePracticeOpen] = useState(false);

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
                                                    <span style={{ fontSize: '12.5px', fontWeight: '700', color: 'var(--theme-colour)', textTransform: 'uppercase', letterSpacing: '1.2px', display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '10px' }}>
                                                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--theme-colour)', display: 'inline-block', flexShrink: 0 }} />
                                                        <span>{cat.category}</span>
                                                    </span>
                                                    {cat.items.map((sub, subIdx) => (
                                                        <Link
                                                            key={subIdx}
                                                            to={sub.link}
                                                            onClick={() => setShow(false)}
                                                            style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '7px 0', color: '#3A4556', fontSize: '14.5px', fontWeight: '500', textDecoration: 'none' }}
                                                        >
                                                            <i className={sub.icon} style={{ fontSize: '14px', color: 'var(--theme-colour)', width: '18px' }} />
                                                            <span>{sub.title}</span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            ))}
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
