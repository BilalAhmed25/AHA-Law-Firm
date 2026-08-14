import { Link } from "react-router-dom";
import { IMAGES } from "../constant/theme";
import { footerdata } from "../constant/alldata";
import SocialIcon from "../componenet/socialicon";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from "../config/emailjs";
import { useRef } from "react";

function Footer() {
    let year = new Date().getFullYear();
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.TEMPLATE_ID,
            form.current,
            { publicKey: EMAILJS_CONFIG.PUBLIC_KEY }
        )
            .then((result) => {
                console.log('SUCCESS!', result.text);
            }, (error) => {
                console.log('FAILED...', error.text);
            });
        e.target.reset();
    };
    return (
        <footer className="gap no-bottom" style={{ backgroundColor: '#0A1628' }}>
            <div className="container">
                <div className="subscribe">
                    <h2>Subscribe To Our Legal Updates.</h2>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="email" name="email" placeholder="Enter Your Email" />
                        <button className="btn"><span>Subscribe</span></button>
                    </form>
                </div>
                <div className="footer-bottom" style={{ paddingTop: '70px', paddingBottom: '30px' }}>
                    <div className="row">
                        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                            <div className="footre-logo">
                                <Link to={"/"}><img src={IMAGES.logo} alt="AHA Law Firm" style={{ maxHeight: '60px', width: 'auto' }} /></Link>
                                <p style={{ color: '#b0b0b0', fontSize: '15px', lineHeight: '26px', marginTop: '15px' }}>AHA Law Firm is a distinguished full-service legal practice headquartered in Dubai and Ajman, UAE. Committed to legal excellence, strategic insight, and unwavering dedication to client interests.</p>
                                <div style={{ marginTop: '20px' }}>
                                    <SocialIcon />
                                </div>
                            </div>
                        </div>
                        {footerdata.map((item, index) => (
                            <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0" key={index}>
                                <div className="footer-link">
                                    <h5>{item.title}</h5>
                                    <ul className="footer-link-list">
                                        {item.links.map((item2, index2) => (
                                            <li key={index2}><Link to={item2.url}><i className="fa-solid fa-angle-right" style={{ marginRight: '8px', fontSize: '12px', color: 'var(--theme-colour)' }} />{item2.title2}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Us Bar - Single Line Horizontal Row with Middle Dividers */}
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: '16px',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '24px 20px',
                        marginTop: '50px',
                        marginBottom: '30px',
                    }}>
                        <div className="row align-items-center">
                            {[
                                {
                                    icon: "fa-solid fa-location-dot",
                                    title: "Office Address",
                                    value: "Office 203, Westburry Tower, Business Bay, Dubai",
                                    link: null,
                                },
                                {
                                    icon: "fa-solid fa-phone",
                                    title: "Phone Number",
                                    value: "+971 56 685 6365",
                                    link: "tel:+971566856365",
                                },
                                {
                                    icon: "fa-solid fa-envelope",
                                    title: "Email Address",
                                    value: "info@ahalawfirmdxb.com",
                                    link: "mailto:info@ahalawfirmdxb.com",
                                },
                            ].map((item, idx) => (
                                <div
                                    className="col-lg-4 col-md-12 footer-contact-item"
                                    key={idx}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
                                        <div style={{
                                            width: '48px',
                                            height: '48px',
                                            minWidth: '48px',
                                            borderRadius: '12px',
                                            background: 'rgba(143, 99, 41, 0.15)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'var(--theme-colour)',
                                            fontSize: '18px'
                                        }}>
                                            <i className={item.icon} />
                                        </div>
                                        <div>
                                            <h6 style={{ color: '#ffffff', fontSize: '14px', fontWeight: '600', margin: '0 0 4px 0', textTransform: 'capitalize', fontFamily: 'Poppins, sans-serif' }}>{item.title}</h6>
                                            {item.link ? (
                                                <Link to={item.link} style={{ color: '#b0b0b0', fontSize: '13px', textDecoration: 'none', fontWeight: '500', fontFamily: 'Poppins, sans-serif' }}>{item.value}</Link>
                                            ) : (
                                                <span style={{ color: '#b0b0b0', fontSize: '13px', fontWeight: '500', fontFamily: 'Poppins, sans-serif' }}>{item.value}</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    <p>Copyright © {year} <span> <Link to={"https://www.ahalawfirmdxb.com"} target="_blank">AHA Law Firm.</Link> All Rights Reserved.</span></p>
                    <ul>
                        <li><Link to={"/terms-conditions"}>Terms & Conditions</Link></li>
                        <li><Link to={"/privacy-policy"}>Privacy Policy</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
export default Footer;