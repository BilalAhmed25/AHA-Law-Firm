import React from "react";
import { Link } from "react-router-dom";
import Header from "../../layout/header";
import Footer from "../../layout/footer";
import "../../assets/css/legal-pages.css";

function NotFoundPage() {
    return (
        <>
            <Header />

            {/* 404 Error Main Section */}
            <section className="error-404-section">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            {/* Stylized Badge */}
                            <div className="error-404-badge">
                                <i className="fa-solid fa-scale-balanced" />
                            </div>

                            <div className="error-404-code">404</div>

                            <h1 className="error-404-title">
                                Page or Legal Resource Not Found
                            </h1>

                            <p className="error-404-text">
                                The page, legal article, or resource you are looking for might have been moved, renamed, or is temporarily unavailable. Please return to our homepage or select a practice area below.
                            </p>

                            {/* CTA Action Buttons */}
                            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
                                <Link to="/" className="btn">
                                    <i className="fa-solid fa-house" />
                                    <span>Return to Home</span>
                                </Link>

                                <Link to="/services" className="btn">
                                    <i className="fa-solid fa-gavel" />
                                    <span>Practice Areas</span>
                                </Link>

                                <Link to="/contact" className="btn">
                                    <i className="fa-solid fa-envelope" />
                                    <span>Contact Advocates</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default NotFoundPage;
