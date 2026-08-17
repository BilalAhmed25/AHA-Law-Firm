import React, { useState } from "react";
import { Link } from "react-router-dom";
import FloatingInput from "./floating-input";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../config/emailjs";

function FreeCaseReview() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        whatsHappened: ""
    });
    const [loading, setLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");

        const fullName = `${formData.firstName} ${formData.lastName}`.trim();

        const templateParams = {
            from_name: fullName,
            first_name: formData.firstName,
            last_name: formData.lastName,
            user_email: formData.email,
            contact_info: formData.phone || formData.email,
            phone_number: formData.phone,
            user_message: formData.whatsHappened,
            service: "Free Case Review & Eligibility Evaluation",
            title: `Free Case Review Request from ${fullName}`,
            subject: `Free Case Review Request: ${fullName}`,
            message: `Free Case Review Submission:\n\nName: ${fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nCase Details / What Happened:\n${formData.whatsHappened}`
        };

        emailjs
            .send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                templateParams,
                EMAILJS_CONFIG.PUBLIC_KEY
            )
            .then(() => {
                setLoading(false);
                setIsSubmitted(true);
            })
            .catch((err) => {
                console.error("EmailJS Error:", err);
                setLoading(false);
                const text = err?.text || err?.message || "Failed to submit request. Please try again or contact us directly via WhatsApp.";
                setErrorMessage(text);
            });
    };

    return (
        <section
            style={{
                position: 'relative',
                background: 'linear-gradient(135deg, #F8FAFC 0%, #EDF2F7 100%)',
                padding: '90px 0',
                color: '#0A1628',
                overflow: 'hidden',
                borderTop: '1px solid #E2E8F0',
                borderBottom: '1px solid #E2E8F0'
            }}
        >
            {/* Background Decorative Circles */}
            <div style={{
                position: 'absolute',
                top: '-150px',
                right: '-150px',
                width: '450px',
                height: '450px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(197, 160, 89, 0.08) 0%, rgba(0,0,0,0) 70%)',
                pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-150px',
                left: '-150px',
                width: '450px',
                height: '450px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(10, 22, 40, 0.04) 0%, rgba(0,0,0,0) 70%)',
                pointerEvents: 'none'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="row align-items-center g-5">
                    {/* Left Column: Heading & Information */}
                    <div className="col-lg-6 text-start">
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'rgba(197, 160, 89, 0.12)',
                            border: '1px solid rgba(197, 160, 89, 0.35)',
                            padding: '6px 18px',
                            borderRadius: '30px',
                            marginBottom: '20px'
                        }}>
                            <i className="fa-solid fa-scale-balanced" style={{ color: 'var(--theme-colour)', fontSize: '13px' }} />
                            <span style={{ color: 'var(--theme-colour)', fontSize: '13px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>
                                We’ll Review Your Case for FREE
                            </span>
                        </div>

                        <h2 style={{
                            fontSize: '38px',
                            lineHeight: '1.25',
                            fontWeight: '800',
                            color: '#0A1628',
                            marginBottom: '20px',
                            letterSpacing: '-0.5px'
                        }}>
                            See If You’re Eligible <br />
                            <span style={{ color: 'var(--theme-colour)' }}>for Legal Representation</span>
                        </h2>

                        <p style={{
                            color: '#475569',
                            fontSize: '16.5px',
                            lineHeight: '28px',
                            marginBottom: '32px',
                            fontWeight: '400'
                        }}>
                            No one should have to bear complex legal burdens alone. Having a dedicated legal team by your side helps maximize your protection and ensure your rights are fully safeguarded under UAE law. Contact us today to evaluate your case and see if you are eligible for legal representation.
                        </p>

                        {/* Key Benefits List */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '36px' }}>
                            {[
                                "100% Free & Confidential Case Review",
                                "Rapid Evaluation by Senior UAE Advocates",
                                "Zero Obligation Strategic Guidance"
                            ].map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{
                                        width: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        background: 'rgba(197, 160, 89, 0.15)',
                                        border: '1px solid var(--theme-colour)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--theme-colour)',
                                        fontSize: '12px',
                                        flexShrink: 0
                                    }}>
                                        <i className="fa-solid fa-check" />
                                    </div>
                                    <span style={{ color: '#1E293B', fontSize: '15px', fontWeight: '600' }}>{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Direct Contact Links */}
                        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                            <a
                                href="https://wa.me/971566856365?text=Hello%2C%20I%20would%20like%20a%20free%20case%20evaluation."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                                style={{
                                    backgroundColor: '#25D366',
                                    borderColor: '#25D366',
                                    color: '#ffffff',
                                    boxShadow: 'none',
                                    textDecoration: 'none'
                                }}
                            >
                                <span>
                                    <i className="fa-brands fa-whatsapp" style={{ marginRight: '8px', fontSize: '18px' }} />
                                    WhatsApp Direct
                                </span>
                            </a>
                            <a
                                href="tel:+971566856365"
                                className="btn"
                                style={{
                                    background: '#FFFFFF',
                                    border: '1px solid #CBD5E1',
                                    color: '#0A1628',
                                    textDecoration: 'none',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.04)'
                                }}
                            >
                                <span>
                                    <i className="fa-solid fa-phone" style={{ marginRight: '8px', color: '#0A1628', fontSize: '15px' }} />
                                    +971 56 685 6365
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Case Review Form */}
                    <div className="col-lg-6">
                        <div style={{
                            background: '#FFFFFF',
                            border: '1px solid #E2E8F0',
                            borderRadius: '24px',
                            padding: '36px 32px',
                            boxShadow: '0 20px 45px rgba(10, 22, 40, 0.07)'
                        }}>
                            {isSubmitted ? (
                                <div style={{ textAlign: 'center', padding: '40px 10px' }}>
                                    <div style={{
                                        width: '70px',
                                        height: '70px',
                                        borderRadius: '50%',
                                        background: 'rgba(197, 160, 89, 0.12)',
                                        border: '1px solid var(--theme-colour)',
                                        color: 'var(--theme-colour)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '32px',
                                        margin: '0 auto 20px auto'
                                    }}>
                                        <i className="fa-solid fa-circle-check" />
                                    </div>
                                    <h3 style={{ color: '#0A1628', fontSize: '24px', fontWeight: '700', marginBottom: '12px' }}>
                                        Case Review Request Received
                                    </h3>
                                    <p style={{ color: '#475569', fontSize: '15px', lineHeight: '24px', marginBottom: '28px' }}>
                                        Thank you, <strong>{formData.firstName}</strong>. Our senior legal team will review your case details confidentially and contact you shortly.
                                    </p>
                                    <button
                                        type="button"
                                        className="btn"
                                        onClick={() => {
                                            setIsSubmitted(false);
                                            setFormData({ firstName: "", lastName: "", email: "", phone: "", whatsHappened: "" });
                                        }}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <span>Submit Another Inquiry</span>
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div style={{ marginBottom: '24px' }} className="text-start">
                                        <h3 style={{ color: '#0A1628', fontSize: '22px', fontWeight: '700', marginBottom: '6px' }}>
                                            Confidential Case Eligibility Form
                                        </h3>
                                        <p style={{ color: '#64748B', fontSize: '13.5px', margin: 0 }}>
                                            Fill out your details below to request a free case evaluation.
                                        </p>
                                    </div>

                                    {errorMessage && (
                                        <div style={{
                                            padding: "12px 16px",
                                            borderRadius: "8px",
                                            background: "#FEF2F2",
                                            border: "1px solid #FCA5A5",
                                            color: "#991B1B",
                                            fontSize: "13.5px",
                                            marginBottom: "20px"
                                        }}>
                                            <i className="fa-solid fa-triangle-exclamation" style={{ marginRight: "8px" }} />
                                            {errorMessage}
                                        </div>
                                    )}

                                    <div className="row g-3">
                                        <div className="col-md-6 text-start">
                                            <FloatingInput
                                                id="free-firstName"
                                                name="firstName"
                                                label="First Name"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                icon="fa-solid fa-user"
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6 text-start">
                                            <FloatingInput
                                                id="free-lastName"
                                                name="lastName"
                                                label="Last Name"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                icon="fa-solid fa-user"
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6 text-start">
                                            <FloatingInput
                                                id="free-email"
                                                name="email"
                                                type="email"
                                                label="Email Address"
                                                value={formData.email}
                                                onChange={handleChange}
                                                icon="fa-solid fa-envelope"
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6 text-start">
                                            <FloatingInput
                                                id="free-phone"
                                                name="phone"
                                                type="tel"
                                                label="Phone / WhatsApp Number"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                icon="fa-solid fa-phone"
                                                required
                                            />
                                        </div>

                                        <div className="col-12 text-start">
                                            <FloatingInput
                                                id="free-whatsHappened"
                                                name="whatsHappened"
                                                type="textarea"
                                                label="What’s Happened (Brief Case Details)"
                                                value={formData.whatsHappened}
                                                onChange={handleChange}
                                                icon="fa-solid fa-comment-dots"
                                                rows={4}
                                                required
                                            />
                                        </div>

                                        <div className="col-12 text-start mt-2">
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: '10px',
                                                marginBottom: '10px'
                                            }}>
                                                <input
                                                    type="checkbox"
                                                    id="free-agreeTerms"
                                                    name="agreeTerms"
                                                    checked={formData.agreeTerms || false}
                                                    onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                                                    required
                                                    style={{
                                                        marginTop: '3px',
                                                        accentColor: 'var(--theme-colour)',
                                                        width: '16px',
                                                        height: '16px',
                                                        cursor: 'pointer'
                                                    }}
                                                />
                                                <label htmlFor="free-agreeTerms" style={{ fontSize: '13px', color: '#475569', lineHeight: '20px', cursor: 'pointer', margin: 0 }}>
                                                    I have read the <Link to="/terms-conditions" style={{ color: 'var(--theme-colour)', textDecoration: 'underline', fontWeight: '600' }}>Terms of Use</Link> and <Link to="/privacy-policy" style={{ color: 'var(--theme-colour)', textDecoration: 'underline', fontWeight: '600' }}>Privacy Policy</Link>.
                                                </label>
                                            </div>

                                            <p style={{
                                                fontSize: '11.5px',
                                                color: '#64748B',
                                                lineHeight: '17px',
                                                margin: 0
                                            }}>
                                                By clicking 'Submit', you agree to receive text messages from AHA Law Firm regarding your inquiry. Message frequency may vary. Message and Data Rates may apply. Reply STOP to stop receiving messages from us. Reply HELP for more information.
                                            </p>
                                        </div>

                                        <div className="col-12 mt-3">
                                            <button
                                                type="submit"
                                                className="btn"
                                                style={{ width: '100%', justifyContent: 'center', cursor: 'pointer' }}
                                                disabled={loading}
                                            >
                                                <span>
                                                    {loading ? "Transmitting..." : "Evaluate My Case For Free"}
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FreeCaseReview;
