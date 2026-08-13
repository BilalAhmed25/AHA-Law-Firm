import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../../layout/header";
import Footer from "../../layout/footer";
import { blogsData } from "../../constant/blogsdata";
import { IMAGES } from "../../constant/theme";
import "../../assets/css/insights.css";

function InsightDetailsPage() {
    const { id } = useParams();

    // Find blog by ID or fallback to the first blog
    const currentBlog = blogsData.find((b) => b.id === id || b.slug === id) || blogsData[0];

    // Recent blogs (excluding current article)
    const recentBlogs = blogsData.filter((b) => b.id !== currentBlog.id).slice(0, 4);

    return (
        <>
            <Header />

            {/* Article Details Hero Header */}
            <section
                className="blog-details-hero"
                style={{
                    position: 'relative',
                    backgroundImage: `linear-gradient(135deg, rgba(10, 22, 40, 0.94) 0%, rgba(15, 32, 58, 0.90) 100%), url(${IMAGES.bannerbg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    paddingTop: '160px',
                    paddingBottom: '80px',
                    color: '#ffffff',
                    overflow: 'hidden'
                }}
            >
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="row align-items-center">
                        <div className="col-lg-9 text-start">
                            {/* Breadcrumbs */}
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                background: 'rgba(255, 255, 255, 0.08)',
                                backdropFilter: 'blur(10px)',
                                padding: '6px 16px',
                                borderRadius: '30px',
                                border: '1px solid rgba(255, 255, 255, 0.15)',
                                marginBottom: '20px',
                                fontSize: '14px',
                                fontWeight: '500'
                            }}>
                                <Link to="/" style={{ color: '#D1D5DB', textDecoration: 'none' }}>Home</Link>
                                <span style={{ color: 'var(--theme-colour)' }}>/</span>
                                <Link to="/our-blog" style={{ color: '#D1D5DB', textDecoration: 'none' }}>Insights</Link>
                                <span style={{ color: 'var(--theme-colour)' }}>/</span>
                                <span style={{ color: '#ffffff', fontWeight: '600' }}>Article Details</span>
                            </div>

                            <span style={{
                                display: 'inline-block',
                                background: 'var(--theme-colour)',
                                color: '#ffffff',
                                fontSize: '12px',
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                padding: '4px 14px',
                                borderRadius: '20px',
                                marginLeft: '12px',
                                marginBottom: '16px'
                            }}>
                                {currentBlog.category}
                            </span>

                            <h1 style={{
                                fontSize: '38px',
                                lineHeight: '1.3',
                                fontWeight: '800',
                                color: '#ffffff',
                                marginBottom: '20px',
                                letterSpacing: '-0.5px'
                            }}>
                                {currentBlog.title}
                            </h1>

                            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: '14px', color: '#CBD5E1' }}>
                                <span><i className="fa-solid fa-user-tie" style={{ color: 'var(--theme-colour)', marginRight: '6px' }} /> {currentBlog.author}</span>
                                <span><i className="fa-solid fa-calendar-days" style={{ color: 'var(--theme-colour)', marginRight: '6px' }} /> {currentBlog.date}</span>
                                <span><i className="fa-solid fa-clock" style={{ color: 'var(--theme-colour)', marginRight: '6px' }} /> {currentBlog.readTime}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Article Content & Sidebar Section */}
            <section className="blog-details-section">
                <div className="container">
                    <div className="row g-5">
                        {/* Left Main Article Column */}
                        <div className="col-lg-8 text-start">
                            {/* Main Featured Thumbnail */}
                            <img
                                src={currentBlog.image}
                                alt={currentBlog.title}
                                className="blog-details-main-img"
                            />

                            {/* Excerpt Lead Paragraph */}
                            <div style={{
                                fontSize: '19px',
                                lineHeight: '32px',
                                color: '#0A1628',
                                fontWeight: '600',
                                marginBottom: '30px',
                                paddingLeft: '20px',
                                borderLeft: '4px solid var(--theme-colour)'
                            }}>
                                {currentBlog.excerpt}
                            </div>

                            {/* Article Body Content Paragraphs */}
                            <div className="blog-details-body">
                                {currentBlog.content.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>

                            {/* Key Legal Takeaways Box */}
                            {currentBlog.takeaways && currentBlog.takeaways.length > 0 && (
                                <div className="blog-takeaways-card">
                                    <h4 className="blog-takeaways-title">
                                        <i className="fa-solid fa-gavel" style={{ color: 'var(--theme-colour)' }} />
                                        <span>Key Legal Takeaways & Implications</span>
                                    </h4>
                                    <ul className="blog-takeaways-list">
                                        {currentBlog.takeaways.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Tags Bar */}
                            {currentBlog.tags && (
                                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center', margin: '35px 0 25px' }}>
                                    <span style={{ fontSize: '14px', fontWeight: '700', color: '#0A1628', marginRight: '6px' }}>Topics:</span>
                                    {currentBlog.tags.map((t, idx) => (
                                        <span key={idx} style={{
                                            background: '#F1F5F9',
                                            color: '#475569',
                                            fontSize: '13px',
                                            fontWeight: '600',
                                            padding: '6px 14px',
                                            borderRadius: '20px'
                                        }}>
                                            #{t}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Author Bio Box */}
                            <div style={{
                                background: '#F8FAFC',
                                border: '1px solid #E2E8F0',
                                borderRadius: '16px',
                                padding: '28px',
                                marginTop: '40px',
                                display: 'flex',
                                gap: '20px',
                                alignItems: 'center'
                            }}>
                                <div style={{
                                    width: '64px',
                                    height: '64px',
                                    borderRadius: '50%',
                                    background: 'var(--theme-colour)',
                                    color: '#ffffff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '26px',
                                    flexShrink: 0
                                }}>
                                    <i className="fa-solid fa-scale-balanced" />
                                </div>
                                <div>
                                    <h5 style={{ fontSize: '18px', fontWeight: '800', color: '#0A1628', marginBottom: '6px' }}>
                                        Written by {currentBlog.author}
                                    </h5>
                                    <p style={{ fontSize: '14px', color: '#64748B', margin: 0, lineHeight: '22px' }}>
                                        AHA Law Firm provides full-service legal advice and advocacy across Dubai and Ajman. Our lawyers specialize in commercial, litigation, and regulatory advisory.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar Column */}
                        <div className="col-lg-4">
                            {/* Search Widget */}
                            <div className="sidebar-widget">
                                <h4 className="sidebar-widget-title">Search Insights</h4>
                                <div style={{ position: 'relative' }}>
                                    <input
                                        type="text"
                                        placeholder="Search legal articles..."
                                        style={{
                                            width: '100%',
                                            padding: '12px 42px 12px 16px',
                                            borderRadius: '10px',
                                            border: '1px solid #CBD5E1',
                                            fontSize: '14px',
                                            outline: 'none'
                                        }}
                                    />
                                    <i className="fa-solid fa-magnifying-glass" style={{
                                        position: 'absolute',
                                        right: '16px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        color: '#94A3B8'
                                    }} />
                                </div>
                            </div>

                            {/* Recent Articles Widget */}
                            <div className="sidebar-widget">
                                <h4 className="sidebar-widget-title">Recent Publications</h4>
                                <div>
                                    {recentBlogs.map((b) => (
                                        <Link key={b.id} to={`/our-blog/${b.id}`} className="sidebar-recent-item">
                                            <img src={b.image} alt={b.title} className="sidebar-recent-img" />
                                            <div>
                                                <h5 className="sidebar-recent-title">{b.title}</h5>
                                                <span className="sidebar-recent-date">{b.date}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* WhatsApp Legal Assistance CTA Widget */}
                            <div className="sidebar-widget" style={{
                                background: 'linear-gradient(135deg, #0A1628 0%, #1E293B 100%)',
                                color: '#ffffff',
                                border: '1px solid rgba(197, 160, 89, 0.4)'
                            }}>
                                <h4 style={{ color: '#ffffff', fontSize: '20px', fontWeight: '800', marginBottom: '12px' }}>
                                    Have Legal Questions?
                                </h4>
                                <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: '22px', marginBottom: '22px' }}>
                                    Schedule a direct consultation with our UAE advocates to evaluate your case or commercial matter.
                                </p>
                                <a
                                    href="https://wa.me/971566856365?text=Hello%2C%20I%20read%20an%20article%20on%20AHA%20Law%20Firm%20Insights%20and%20would%20like%20to%20consult%20with%20a%20lawyer."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn"
                                    style={{ width: '100%', justifyContent: 'center' }}
                                >
                                    <span>WhatsApp Legal Consultation</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default InsightDetailsPage;
