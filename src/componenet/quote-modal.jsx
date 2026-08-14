import React, { useState, useEffect } from "react";
import FloatingInput from "./floating-input";
import PracticeDropdown from "./practice-dropdown";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../config/emailjs";
import "../assets/css/quote-modal.css";

function QuoteModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        contactInfo: "",
        practiceArea: "",
        message: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const handleOpenModal = (event) => {
            const preselectedService = event?.detail?.service || "";
            setFormData({
                fullName: "",
                contactInfo: "",
                practiceArea: preselectedService,
                message: ""
            });
            setIsSubmitted(false);
            setErrorMessage("");
            setIsOpen(true);
        };

        window.addEventListener("open-quote-modal", handleOpenModal);

        const handleKeyDown = (e) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("open-quote-modal", handleOpenModal);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errorMessage) setErrorMessage("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");

        // Send consultation lead via EmailJS
        const templateParams = {
            name: formData.fullName,
            from_name: formData.fullName,
            email: formData.contactInfo,
            reply_to: formData.contactInfo,
            contact_info: formData.contactInfo,
            service: formData.practiceArea || "General Legal Consultation",
            title: `Legal Quote Request: ${formData.practiceArea || "General Consultation"}`,
            subject: `Legal Quote Request: ${formData.practiceArea || "General Consultation"}`,
            message: `Subject: Legal Quote Request (${formData.practiceArea || "General Consultation"})\nClient Contact / Email: ${formData.contactInfo}\nPractice Area: ${formData.practiceArea || "General Consultation"}\n\nInquiry Details:\n${formData.message || "Requesting legal consultation."}`,
            time: new Date().toLocaleString("en-US", { timeZone: "Asia/Dubai" })
        };

        emailjs.send(
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
                const text = err?.text || err?.message || "Failed to send. Please check your EmailJS Public Key.";
                setErrorMessage(text);
            });
    };

    if (!isOpen) return null;

    return (
        <div
            className={`quote-modal-backdrop ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen(false)}
        >
            <div
                className="quote-modal-container"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    type="button"
                    className="quote-modal-close-btn"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close modal"
                >
                    <i className="fa-solid fa-xmark" />
                </button>

                {/* Left Column Legal Brand Banner */}
                <div className="quote-modal-left">
                    <i className="fa-solid fa-scale-balanced quote-modal-left-bg-icon" />

                    <div>
                        <span className="quote-modal-left-tag">
                            <i className="fa-solid fa-shield-halved" />
                            <span>Legal Consultation</span>
                        </span>

                        <h3 className="quote-modal-left-title">
                            Protecting Your Commercial & Personal Rights in the UAE
                        </h3>

                        <p className="quote-modal-left-subtitle">
                            Request a confidential case evaluation with AHA Law Firm's senior advocates in Dubai & Ajman.
                        </p>
                    </div>

                    <div className="quote-modal-contact-badge">
                        <div className="quote-modal-contact-icon">
                            <i className="fa-solid fa-phone" />
                        </div>
                        <div>
                            <span style={{ fontSize: '12px', color: '#94A3B8', display: 'block', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                Urgent Legal Hotline
                            </span>
                            <a
                                href="tel:+971566856365"
                                style={{ color: '#ffffff', fontWeight: '700', fontSize: '15px', textDecoration: 'none' }}
                            >
                                +971 56 685 6365
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Column Lead Generation Form */}
                <div className="quote-modal-right">
                    {isSubmitted ? (
                        <div className="text-center py-4">
                            <div style={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '50%',
                                background: '#10B981',
                                color: '#ffffff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyCenter: 'center',
                                fontSize: '28px',
                                margin: '0 auto 16px'
                            }}>
                                ✓
                            </div>
                            <h3 style={{ color: '#0A1628', fontWeight: '800', fontSize: '22px' }}>
                                Consultation Request Received
                            </h3>
                            <p style={{ color: '#64748B', fontSize: '14.5px', lineHeight: '22px', margin: '10px 0 24px' }}>
                                Thank you, <strong>{formData.fullName}</strong>. Our legal practice leads will review your inquiry regarding <strong>{formData.practiceArea || "Legal Counsel"}</strong> and contact you shortly.
                            </p>
                            <button
                                type="button"
                                className="btn"
                                onClick={() => setIsOpen(false)}
                            >
                                <span>Close Window</span>
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <h3 className="quote-modal-form-title">Request Legal Consultation</h3>
                            <p className="quote-modal-form-subtitle">
                                Fill out the short form below to receive a legal assessment from our advocates.
                            </p>

                            {errorMessage && (
                                <div style={{
                                    padding: "12px 16px",
                                    borderRadius: "8px",
                                    background: "#FEF2F2",
                                    border: "1px solid #FECACA",
                                    color: "#991B1B",
                                    fontSize: "13.5px",
                                    marginBottom: "16px"
                                }}>
                                    <i className="fa-solid fa-triangle-exclamation" style={{ marginRight: "8px" }} />
                                    {errorMessage}
                                </div>
                            )}

                            <FloatingInput
                                id="modal-fullName"
                                name="fullName"
                                label="Your Full Name"
                                value={formData.fullName}
                                onChange={handleChange}
                                icon="fa-solid fa-user"
                                required
                            />

                            <FloatingInput
                                id="modal-contactInfo"
                                name="contactInfo"
                                label="Phone Number or Email"
                                value={formData.contactInfo}
                                onChange={handleChange}
                                icon="fa-solid fa-phone-flip"
                                required
                            />

                            <PracticeDropdown
                                id="modal-practiceArea"
                                name="practiceArea"
                                label="Practice Area / Legal Service"
                                value={formData.practiceArea}
                                onChange={handleChange}
                                required
                            />

                            <FloatingInput
                                id="modal-message"
                                name="message"
                                type="textarea"
                                rows={3}
                                label="Brief Summary of Inquiry (Optional)"
                                value={formData.message}
                                onChange={handleChange}
                                icon="fa-solid fa-pen-to-square"
                            />

                            <button
                                type="submit"
                                className="btn"
                                style={{ width: '100%', justifyContent: 'center', marginTop: '6px' }}
                                disabled={loading}
                            >
                                <span>{loading ? "Transmitting Request..." : "Submit Legal Request"}</span>
                                <i className="fa-solid fa-paper-plane" />
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

// Global Trigger Helper Function
export const openQuoteModal = (serviceName = "") => {
    window.dispatchEvent(
        new CustomEvent("open-quote-modal", { detail: { service: serviceName } })
    );
};

export default QuoteModal;
