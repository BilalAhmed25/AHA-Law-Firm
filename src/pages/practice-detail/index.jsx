import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "../../layout/header";
import Footer from "../../layout/footer";
import FloatingInput from "../../componenet/floating-input";
import { getPracticeBySlug, getPracticesByCategory, practicesData } from "../../constant/practicesData";
import "../../assets/css/practice-detail.css";

function PracticeDetailPage() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [openFaqIdx, setOpenFaqIdx] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const [submitSuccess, setSubmitSuccess] = useState(false);

    // Find the practice area
    const practice = getPracticeBySlug(slug) || practicesData[0];

    // Scroll to top on slug change
    useEffect(() => {
        window.scrollTo(0, 0);
        setSubmitSuccess(false);
        setOpenFaqIdx(0);
        document.title = `${practice.title} | AHA Law Firm UAE`;
    }, [slug, practice]);

    const categoryPractices = getPracticesByCategory(practice.categoryId);
    const relatedPractices = (practice.relatedSlugs || [])
        .map((s) => getPracticeBySlug(s))
        .filter(Boolean)
        .slice(0, 4);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Construct WhatsApp / Inquiry message
        const waMsg = `Hello AHA Law Firm, I would like to consult regarding *${practice.title}*.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nDetails: ${formData.message}`;
        window.open(`https://wa.me/971566856365?text=${encodeURIComponent(waMsg)}`, "_blank");
        setSubmitSuccess(true);
    };

    const toggleFaq = (idx) => {
        setOpenFaqIdx((prev) => (prev === idx ? null : idx));
    };

    return (
        <>
            <Header />

            {/* ── HERO BANNER ── */}
            <section className="practice-detail-hero">
                <div className="container">
                    <div className="practice-breadcrumbs">
                        <Link to="/">Home</Link>
                        <i className="fa-solid fa-chevron-right" style={{ fontSize: '10px' }} />
                        <Link to="/services">Practice Areas</Link>
                        <i className="fa-solid fa-chevron-right" style={{ fontSize: '10px' }} />
                        <span>{practice.category}</span>
                        <i className="fa-solid fa-chevron-right" style={{ fontSize: '10px' }} />
                        <span style={{ color: 'var(--theme-colour)', fontWeight: '600' }}>{practice.title}</span>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-9">
                            <span className="practice-hero-badge">
                                <i className={practice.icon} />
                                {practice.category}
                            </span>

                            <h1 className="practice-hero-title">{practice.title}</h1>

                            <p className="practice-hero-summary">{practice.heroSummary}</p>

                            <div className="practice-hero-actions">
                                <a href="#consultation-card" className="practice-btn-primary">
                                    <span>Request Strategic Consultation</span>
                                    <i className="fa-solid fa-arrow-right" />
                                </a>

                                <a
                                    href={`https://wa.me/971566856365?text=${encodeURIComponent(`Hello, I would like to consult with a senior advocate regarding ${practice.title}.`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="practice-btn-whatsapp"
                                >
                                    <i className="fa-brands fa-whatsapp" style={{ fontSize: '18px' }} />
                                    <span>Direct WhatsApp Counsel</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── MAIN CONTENT AREA & SIDEBAR ── */}
            <section className="practice-detail-section">
                <div className="container">
                    <div className="row g-5">
                        {/* Main Body */}
                        <div className="col-lg-8">
                            {/* Detailed Overview */}
                            <div className="practice-content-card">
                                <h3 className="practice-section-heading">
                                    <i className="fa-solid fa-gavel" />
                                    <span>Strategic Practice Overview</span>
                                </h3>
                                <p className="practice-text-paragraph">
                                    {practice.detailedOverview}
                                </p>
                                {practice.regulatoryFramework && (
                                    <div style={{
                                        background: '#FAF8F5',
                                        borderLeft: '4px solid var(--theme-colour)',
                                        padding: '16px 20px',
                                        borderRadius: '0 12px 12px 0',
                                        marginTop: '20px',
                                        fontSize: '14px',
                                        color: '#334155',
                                        lineHeight: '22px'
                                    }}>
                                        <strong>Regulatory & Procedural Context:</strong> {practice.regulatoryFramework}
                                    </div>
                                )}
                            </div>

                            {/* Capabilities & Core Services */}
                            <div className="practice-content-card">
                                <h3 className="practice-section-heading">
                                    <i className="fa-solid fa-list-check" />
                                    <span>Scope of Capabilities & Legal Services</span>
                                </h3>
                                <p className="practice-text-paragraph">
                                    Our multidisciplinary advocates handle complex matters across the entire lifecycle of {practice.title.toLowerCase()}, delivering proactive risk mitigation and rigorous representation.
                                </p>

                                <div className="practice-capability-grid">
                                    {practice.keyServices && practice.keyServices.map((svc, sIdx) => (
                                        <div className="practice-capability-card" key={sIdx}>
                                            <div className="practice-capability-icon">
                                                <i className="fa-solid fa-check" />
                                            </div>
                                            <h4 className="practice-capability-title">{svc.title}</h4>
                                            <p className="practice-capability-desc">{svc.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Strategic Advantages / Why AHA */}
                            {practice.strategicAdvantages && (
                                <div className="practice-advantages-box">
                                    <h4 className="practice-advantages-title">
                                        <i className="fa-solid fa-award" />
                                        <span>Why AHA Law Firm for {practice.title}</span>
                                    </h4>
                                    <ul className="practice-advantages-list">
                                        {practice.strategicAdvantages.map((adv, aIdx) => (
                                            <li className="practice-advantages-item" key={aIdx}>
                                                <i className="fa-solid fa-circle-check" />
                                                <span>{adv}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Practice Specific FAQs */}
                            {practice.faqList && practice.faqList.length > 0 && (
                                <div className="practice-content-card" style={{ marginTop: '35px' }}>
                                    <h3 className="practice-section-heading">
                                        <i className="fa-solid fa-circle-question" />
                                        <span>Frequently Asked Questions</span>
                                    </h3>
                                    <div className="practice-faq-accordion">
                                        {practice.faqList.map((faq, fIdx) => (
                                            <div
                                                className={`practice-faq-item ${openFaqIdx === fIdx ? 'active' : ''}`}
                                                key={fIdx}
                                            >
                                                <div className="practice-faq-header" onClick={() => toggleFaq(fIdx)}>
                                                    <span>{faq.q}</span>
                                                    <div className="practice-faq-icon-badge">
                                                        <i className="fa-solid fa-chevron-down" />
                                                    </div>
                                                </div>
                                                <div className="practice-faq-collapse">
                                                    <div className="practice-faq-body">
                                                        {faq.a}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="col-lg-4 practice-sidebar-col">
                            <div className="practice-sidebar-sticky">
                                {/* Consultation Form */}
                                <div className="practice-sidebar-card" id="consultation-card">
                                    <h4 className="practice-sidebar-heading">
                                        <i className="fa-solid fa-calendar-check" />
                                        <span>Inquire on {practice.title}</span>
                                    </h4>
                                    <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '20px', marginBottom: '18px' }}>
                                        Schedule a confidential case review with our senior legal department in Dubai.
                                    </p>

                                    {submitSuccess ? (
                                        <div style={{
                                            background: '#ECFDF5',
                                            border: '1px solid #10B981',
                                            borderRadius: '12px',
                                            padding: '16px',
                                            textAlign: 'center',
                                            color: '#065F46'
                                        }}>
                                            <i className="fa-solid fa-circle-check" style={{ fontSize: '24px', marginBottom: '8px', display: 'block' }} />
                                            <strong>Inquiry Transmitted!</strong>
                                            <p style={{ fontSize: '12.5px', marginTop: '4px', marginBottom: 0 }}>
                                                Opening WhatsApp consultation channel...
                                            </p>
                                        </div>
                                    ) : (
                                        <form className="practice-inquiry-form" onSubmit={handleFormSubmit}>
                                            <FloatingInput
                                                id="inquiry-name"
                                                name="name"
                                                label="Full Name"
                                                icon="fa-solid fa-user"
                                                required
                                                value={formData.name}
                                                onChange={handleInputChange}
                                            />

                                            <FloatingInput
                                                id="inquiry-email"
                                                name="email"
                                                type="email"
                                                label="Email Address"
                                                icon="fa-solid fa-envelope"
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange}
                                            />

                                            <FloatingInput
                                                id="inquiry-phone"
                                                name="phone"
                                                type="tel"
                                                label="Phone / WhatsApp"
                                                icon="fa-solid fa-phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                            />

                                            <FloatingInput
                                                id="inquiry-message"
                                                name="message"
                                                type="textarea"
                                                label="Brief Case Summary"
                                                icon="fa-solid fa-file-lines"
                                                rows={3}
                                                value={formData.message}
                                                onChange={handleInputChange}
                                            />

                                            <button type="submit" className="practice-inquiry-btn">
                                                <span>Request Legal Consultation</span>
                                                <i className="fa-solid fa-paper-plane" />
                                            </button>
                                        </form>
                                    )}
                                </div>

                                {/* Category Navigation */}
                                <div className="practice-sidebar-card">
                                    <h4 className="practice-sidebar-heading">
                                        <i className="fa-solid fa-folder-tree" />
                                        <span>{practice.category} Practices</span>
                                    </h4>
                                    <ul className="practice-nav-list">
                                        {categoryPractices.map((catP, cIdx) => (
                                            <li key={cIdx}>
                                                <Link
                                                    to={`/practice-areas/${catP.slug}`}
                                                    className={`practice-nav-link ${catP.slug === practice.slug ? 'active' : ''}`}
                                                >
                                                    <span>{catP.title}</span>
                                                    <i className="fa-solid fa-chevron-right" />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Emergency Helpline / Contact Card (Last & Sticky on Scroll) */}
                                <div className="practice-helpline-card">
                                    <i className="fa-solid fa-phone-volume" style={{ fontSize: '32px', color: '#dfb679' }} />
                                    <h5>Emergency Legal Hotline</h5>
                                    <p>Direct access to our senior Emirati advocates for urgent court injunctions or police matters.</p>
                                    <a href="tel:+971566856365" className="practice-helpline-phone">
                                        <i className="fa-solid fa-phone" /> +971 56 685 6365
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── RELATED PRACTICE AREAS ── */}
            {relatedPractices.length > 0 && (
                <section className="related-practices-section">
                    <div className="container">
                        <div className="row align-items-center mb-4">
                            <div className="col-lg-8">
                                <span style={{ color: 'var(--theme-colour)', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                                    Comprehensive Counsel
                                </span>
                                <h3 style={{ fontSize: '28px', fontWeight: '800', color: '#0A1628', marginTop: '4px' }}>
                                    Related Legal Practices
                                </h3>
                            </div>
                            <div className="col-lg-4 text-lg-end">
                                <Link to="/services" style={{ color: 'var(--theme-colour)', fontWeight: '700', textDecoration: 'none' }}>
                                    View All 36 Practice Areas <i className="fa-solid fa-arrow-right" style={{ marginLeft: '6px' }} />
                                </Link>
                            </div>
                        </div>

                        <div className="row g-4">
                            {relatedPractices.map((rp, rIdx) => (
                                <div className="col-md-6 col-lg-3" key={rIdx}>
                                    <Link
                                        to={`/practice-areas/${rp.slug}`}
                                        style={{ textDecoration: 'none', display: 'block', height: '100%' }}
                                    >
                                        <div style={{
                                            background: '#FAF8F5',
                                            border: '1px solid rgba(143, 99, 41, 0.18)',
                                            borderRadius: '16px',
                                            padding: '24px 20px',
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                            transition: 'all 0.3s ease',
                                            boxShadow: '0 4px 12px rgba(10, 22, 40, 0.02)'
                                        }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateY(-4px)';
                                                e.currentTarget.style.borderColor = 'var(--theme-colour)';
                                                e.currentTarget.style.boxShadow = '0 12px 24px rgba(10, 22, 40, 0.08)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.borderColor = 'rgba(143, 99, 41, 0.18)';
                                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(10, 22, 40, 0.02)';
                                            }}
                                        >
                                            <div>
                                                <div style={{
                                                    width: '40px',
                                                    height: '40px',
                                                    borderRadius: '10px',
                                                    background: 'rgba(143, 99, 41, 0.12)',
                                                    color: 'var(--theme-colour)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '17px',
                                                    marginBottom: '14px'
                                                }}>
                                                    <i className={rp.icon} />
                                                </div>
                                                <h5 style={{ fontSize: '15.5px', fontWeight: '700', color: '#0A1628', marginBottom: '8px' }}>
                                                    {rp.title}
                                                </h5>
                                                <p style={{ fontSize: '12.5px', color: '#64748B', lineHeight: '18px', margin: 0 }}>
                                                    {rp.heroSummary.slice(0, 85)}...
                                                </p>
                                            </div>

                                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--theme-colour)', fontWeight: '700', fontSize: '12.5px', marginTop: '16px' }}>
                                                <span>Explore Practice</span>
                                                <i className="fa-solid fa-arrow-right" style={{ fontSize: '10px' }} />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <Footer />
        </>
    );
}

export default PracticeDetailPage;
