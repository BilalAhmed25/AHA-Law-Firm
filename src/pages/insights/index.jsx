import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../layout/header";
import Footer from "../../layout/footer";
import { blogsData } from "../../constant/blogsdata";
import { IMAGES } from "../../constant/theme";
import "../../assets/css/insights.css";

const categories = [
    "All",
    "Corporate Law",
    "Real Estate Law",
    "Litigation & Disputes",
    "Intellectual Property",
    "Labor & Employment",
    "Family Law",
    "Banking & Finance",
    "Criminal Law",
    "Tax & Compliance",
    "Maritime Law",
    "Contracts",
    "Immigration Law"
];

function InsightsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredBlogs = selectedCategory === "All"
        ? blogsData
        : blogsData.filter((b) => b.category.toLowerCase() === selectedCategory.toLowerCase());

    return (
        <>
            <Header />

            {/* Insights Hero Banner */}
            <section
                className="insights-hero"
                style={{
                    backgroundColor: '#0A1628',
                    backgroundImage: `linear-gradient(135deg, rgba(10, 22, 40, 0.25) 0%, rgba(15, 32, 58, 0.15) 100%), url(${IMAGES.graph})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    paddingTop: '160px',
                    paddingBottom: '90px',
                    color: '#ffffff',
                    overflow: 'hidden'
                }}
            >
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="row align-items-center">
                        <div className="col-lg-8 text-start">
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                background: 'rgba(255, 255, 255, 0.08)',
                                backdropFilter: 'blur(10px)',
                                padding: '6px 16px',
                                borderRadius: '30px',
                                border: '1px solid rgba(255, 255, 255, 0.15)',
                                marginBottom: '24px',
                                fontSize: '14px',
                                fontWeight: '500'
                            }}>
                                <Link to="/" style={{ color: '#D1D5DB', textDecoration: 'none' }}>Home</Link>
                                <span style={{ color: 'var(--theme-colour)' }}>/</span>
                                <span style={{ color: '#ffffff', fontWeight: '600' }}>Legal Insights</span>
                            </div>

                            <h1 style={{
                                fontSize: '42px',
                                lineHeight: '1.25',
                                fontWeight: '800',
                                color: '#ffffff',
                                marginBottom: '18px',
                                letterSpacing: '-0.5px'
                            }}>
                                Legal Insights, Regulatory Analysis & UAE Precedents
                            </h1>

                            <p style={{
                                color: '#E2E8F0',
                                fontSize: '17px',
                                lineHeight: '28px',
                                marginBottom: '0',
                                maxWidth: '680px',
                                fontWeight: '300'
                            }}>
                                Authoritative publications, legal breakdowns, and regulatory updates from AHA Law Firm's senior advocates and legal advisory partners.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Insights Content Grid Section */}
            <section className="insights-section">
                <div className="container">
                    {/* Category Filter Bar */}
                    <div className="insights-filter-bar">
                        {categories.map((cat, idx) => (
                            <button
                                key={idx}
                                className={`insights-filter-pill ${selectedCategory === cat ? "active" : ""}`}
                                onClick={() => setSelectedCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Blog Card Grid */}
                    <div className="row g-4">
                        {filteredBlogs.length > 0 ? (
                            filteredBlogs.map((blog) => (
                                <div className="col-md-6 col-lg-4" key={blog.id}>
                                    <div className="blog-card">
                                        <div className="blog-card-img-wrapper">
                                            <img src={blog.image} alt={blog.title} className="blog-card-img" />
                                            <span className="blog-card-category-badge">{blog.category}</span>
                                        </div>

                                        <div className="blog-card-content">
                                            <div className="blog-card-meta">
                                                <span><i className="fa-solid fa-calendar-days" /> {blog.date}</span>
                                                <span><i className="fa-solid fa-clock" /> {blog.readTime}</span>
                                            </div>

                                            <h3 className="blog-card-title">
                                                <Link to={`/our-blog/${blog.id}`}>
                                                    {blog.title}
                                                </Link>
                                            </h3>

                                            <p className="blog-card-excerpt">
                                                {blog.excerpt}
                                            </p>

                                            <div className="blog-card-footer">
                                                <span style={{ fontSize: '13px', color: '#64748B', fontWeight: '500' }}>
                                                    By {blog.author}
                                                </span>
                                                <Link to={`/our-blog/${blog.id}`} className="blog-card-read-link">
                                                    <span>Read Article</span>
                                                    <i className="fa-solid fa-arrow-right" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-12 text-center py-5">
                                <h3 style={{ color: '#0A1628', fontWeight: '700' }}>No articles found for "{selectedCategory}"</h3>
                                <p style={{ color: '#64748B' }}>Try selecting a different legal category filter above.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default InsightsPage;
