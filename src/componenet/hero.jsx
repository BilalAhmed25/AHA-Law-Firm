import React, { useState } from "react";
import { IMAGES } from "../constant/theme";
import FloatingInput from "./floating-input";
import PracticeDropdown from "./practice-dropdown";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../config/emailjs";

function Hero() {
    const [formData, setFormData] = useState({
        fullName: "",
        contactInfo: "",
        practiceArea: "",
        message: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
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

        const templateParams = {
            from_name: formData.fullName,
            contact_info: formData.contactInfo,
            practice_area: formData.practiceArea || "General Consultation",
            user_message: formData.message || "Requesting legal consultation.",
            service: formData.practiceArea || "General Legal Consultation",
            title: `Legal Quote Request: ${formData.practiceArea || "General Consultation"}`,
            subject: `Legal Quote Request: ${formData.practiceArea || "General Consultation"}`,
            message: `Subject: Legal Quote Request (${formData.practiceArea || "General Consultation"})\nClient Contact / Email: ${formData.contactInfo}\nPractice Area: ${formData.practiceArea || "General Consultation"}\n\nInquiry Details:\n${formData.message || "Requesting legal consultation."}`
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
                const text = err?.text || err?.message || "Failed to send request. Please try again.";
                setErrorMessage(text);
            });
    };

    return (
        <section
            className="banner"
            style={{
                position: 'relative',
                paddingTop: '160px',
                paddingBottom: '110px',
                overflow: 'hidden',
                color: '#ffffff'
            }}
        >
            {/* Full-Screen Video Background */}
            <video
                src={IMAGES.heroBannerVideo || IMAGES.mobileVideo}
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0
                }}
            />

            {/* Dark Luxury Gradient Overlay over Video - Tuned for video clarity */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, rgba(10, 22, 40, 0.58) 0%, rgba(15, 32, 58, 0.48) 100%)',
                    zIndex: 1,
                    pointerEvents: 'none'
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="row align-items-center">
                    {/* Left Column: Hero Copy */}
                    <div className="col-lg-6 mb-5 mb-lg-0 text-start">
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'rgba(197, 160, 89, 0.18)',
                            border: '1px solid rgba(197, 160, 89, 0.45)',
                            padding: '6px 18px',
                            borderRadius: '30px',
                            marginBottom: '24px'
                        }}>
                            <i className="fa-solid fa-scale-balanced" style={{ color: 'var(--theme-colour)', fontSize: '13px' }} />
                            <span style={{ color: 'var(--theme-colour)', fontSize: '13px', fontWeight: '600', letterSpacing: '0.8px', textTransform: 'uppercase' }}>
                                Top-Tier UAE Advocates & Legal Consultants
                            </span>
                        </div>

                        <h1 style={{
                            fontSize: '44px',
                            lineHeight: '1.25',
                            fontWeight: '800',
                            color: '#ffffff',
                            marginBottom: '20px',
                            letterSpacing: '-0.5px'
                        }}>
                            Empowering Your Rights & <span style={{ color: 'var(--theme-colour)' }}>Protecting Your Future</span> Across the UAE
                        </h1>

                        <p style={{
                            color: '#E2E8F0',
                            fontSize: '17.5px',
                            lineHeight: '29px',
                            marginBottom: '32px',
                            fontWeight: '300',
                            maxWidth: '560px'
                        }}>
                            AHA Law Firm is a distinguished full-service legal practice headquartered in Dubai and Ajman, UAE. We deliver strategic counsel, courtroom advocacy, and corporate protection for corporations, high-net-worth individuals, and international entities.
                        </p>

                        {/* Credential Badges */}
                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                            {[
                                "Dubai & Ajman Licensed",
                                "UAE High Court Rights",
                                "DIFC & ADGM Tribunals"
                            ].map((item, idx) => (
                                <div key={idx} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    background: 'rgba(255, 255, 255, 0.08)',
                                    backdropFilter: 'blur(10px)',
                                    WebkitBackdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.15)',
                                    padding: '8px 16px',
                                    borderRadius: '8px',
                                    fontSize: '13px',
                                    color: '#F8FAFC',
                                    fontWeight: '500'
                                }}>
                                    <i className="fa-solid fa-shield-halved" style={{ color: 'var(--theme-colour)' }} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Glassmorphism Consultation Form */}
                    <div className="col-lg-6">
                        <div style={{
                            background: 'rgba(10, 22, 40, 0.68)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            border: '1px solid rgba(197, 160, 89, 0.4)',
                            borderRadius: '24px',
                            padding: '36px 32px',
                            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
                            position: 'relative'
                        }}>
                            {isSubmitted ? (
                                <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                                    <div style={{
                                        width: '64px',
                                        height: '64px',
                                        borderRadius: '50%',
                                        background: 'rgba(197, 160, 89, 0.15)',
                                        color: 'var(--theme-colour)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '28px',
                                        margin: '0 auto 20px auto'
                                    }}>
                                        <i className="fa-solid fa-circle-check" />
                                    </div>
                                    <h3 style={{ color: '#ffffff', fontSize: '24px', fontWeight: '700', marginBottom: '10px' }}>
                                        Consultation Request Sent
                                    </h3>
                                    <p style={{ color: '#CBD5E1', fontSize: '14.5px', lineHeight: '24px', marginBottom: '24px' }}>
                                        Thank you, <strong>{formData.fullName}</strong>. Our senior legal team will review your inquiry regarding <strong>{formData.practiceArea || "Legal Consultation"}</strong> and reach out shortly.
                                    </p>
                                    <button
                                        type="button"
                                        className="btn"
                                        onClick={() => {
                                            setIsSubmitted(false);
                                            setFormData({ fullName: "", contactInfo: "", practiceArea: "", message: "" });
                                        }}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <span>Submit Another Inquiry</span>
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div style={{ marginBottom: '20px' }}>
                                        <span style={{
                                            color: 'var(--theme-colour)',
                                            fontSize: '12px',
                                            fontWeight: '700',
                                            letterSpacing: '1px',
                                            textTransform: 'uppercase',
                                            display: 'block',
                                            marginBottom: '4px'
                                        }}>
                                            Confidential Legal Inquiry
                                        </span>
                                        <h3 style={{ color: '#ffffff', fontSize: '22px', fontWeight: '700', margin: 0 }}>
                                            Request Case Evaluation
                                        </h3>
                                    </div>

                                    {errorMessage && (
                                        <div style={{
                                            padding: "12px 16px",
                                            borderRadius: "8px",
                                            background: "rgba(239, 68, 68, 0.15)",
                                            border: "1px solid rgba(239, 68, 68, 0.4)",
                                            color: "#FCA5A5",
                                            fontSize: "13.5px",
                                            marginBottom: "18px"
                                        }}>
                                            <i className="fa-solid fa-triangle-exclamation" style={{ marginRight: "8px" }} />
                                            {errorMessage}
                                        </div>
                                    )}

                                    <FloatingInput
                                        id="hero-fullName"
                                        name="fullName"
                                        label="Your Full Name"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        icon="fa-solid fa-user"
                                        required
                                    />

                                    <FloatingInput
                                        id="hero-contactInfo"
                                        name="contactInfo"
                                        label="Phone Number or Email"
                                        value={formData.contactInfo}
                                        onChange={handleChange}
                                        icon="fa-solid fa-phone-flip"
                                        required
                                    />

                                    <PracticeDropdown
                                        id="hero-practiceArea"
                                        name="practiceArea"
                                        label="Practice Area / Legal Service"
                                        value={formData.practiceArea}
                                        onChange={handleChange}
                                        required
                                    />

                                    <FloatingInput
                                        id="hero-message"
                                        name="message"
                                        type="textarea"
                                        rows={3}
                                        label="Brief Case Details (Optional)"
                                        value={formData.message}
                                        onChange={handleChange}
                                        icon="fa-solid fa-pen-to-square"
                                    />

                                    <button
                                        type="submit"
                                        className="btn"
                                        style={{ width: '100%', justifyContent: 'center', marginTop: '8px', cursor: 'pointer' }}
                                        disabled={loading}
                                    >
                                        <span>{loading ? "Transmitting..." : "Request Free Case Evaluation"}</span>
                                        <i className="fa-solid fa-paper-plane" />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
