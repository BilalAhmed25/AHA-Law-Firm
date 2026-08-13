import { Link, useLocation } from "react-router-dom";
import { IMAGES } from "../constant/theme";
import { menudata } from "../constant/alldata";
import { useState, useEffect } from "react";
import MegaDropdown from "./MegaDropdown";
import MobileSidebar from "./MobileSidebar";
import "../assets/css/header.css";

function Header() {
    const [show, setShow] = useState(false);
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

    const isPathActive = (link) => {
        if (!link || link === '#' || link === '') return false;
        if (link === '/' && location.pathname === '/') return true;
        if (link !== '/' && location.pathname === link) return true;
        return false;
    };

    return (
        <>
            <header className={`sticky-header main-bar-wraper ${isSticky ? 'is-fixed' : ''}`}>
                <div className="main-bar">
                    <div className="container">
                        <div className="bottom-bar">
                            <div className="logo">
                                <Link to="/">
                                    <img alt="AHA Law Firm" src={IMAGES.logo} style={{ maxHeight: '70px', width: 'auto', transform: 'translateY(-8px)', transition: 'transform 0.3s ease' }} />
                                </Link>
                            </div>
                            <nav className="navbar" style={{ marginLeft: 'auto', marginRight: '25px' }}>
                                <ul className="navbar-links">
                                    {menudata.map((item, i) => {
                                        const activeClass = isPathActive(item.link) ? 'active' : '';

                                        // Render Mega Dropdown for Practice Areas
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

                                                    <MegaDropdown />
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
            </header>

            {/* Mobile Sidebar Component (rendered outside header so position: fixed works 100% on sticky scroll) */}
            <MobileSidebar show={show} setShow={setShow} />
        </>
    );
}

export default Header;