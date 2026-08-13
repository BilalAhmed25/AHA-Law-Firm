import React, { useState } from "react";
import FloatingInput from "./floating-input";
import PracticeDropdown from "./practice-dropdown";
import "../assets/css/contact-form.css";

function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        practiceArea: "",
        subject: "",
        message: ""
    });

    const [status, setStatus] = useState({ type: "", message: "" });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (status.message) setStatus({ type: "", message: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate fast responsive processing
        setTimeout(() => {
            setLoading(false);
            setStatus({
                type: "success",
                message: "Thank you for reaching out to AHA Law Firm! Your inquiry has been submitted. Our legal team will review your details and contact you shortly."
            });
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                practiceArea: "",
                subject: "",
                message: ""
            });
        }, 800);
    };

    return (
        <section className="contact-form-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-9">
                        <div className="contact-form-card">
                            <div className="contact-form-header text-center">
                                <span className="contact-form-tag">Schedule A Confidential Consultation</span>
                                <h2 className="contact-form-title">Speak With Our Experienced Legal Team</h2>
                                <p className="contact-form-subtitle">
                                    Fill out the confidential form below, or reach us directly via WhatsApp for urgent statutory & litigation matters.
                                </p>
                            </div>

                            {status.message && (
                                <div className={`contact-form-alert ${status.type}`}>
                                    <i className={`fa-solid ${status.type === "success" ? "fa-circle-check" : "fa-triangle-exclamation"}`} />
                                    <span>{status.message}</span>
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <FloatingInput
                                            id="fullName"
                                            name="fullName"
                                            label="Full Name"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            icon="fa-solid fa-user"
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <FloatingInput
                                            id="email"
                                            name="email"
                                            type="email"
                                            label="Email Address"
                                            value={formData.email}
                                            onChange={handleChange}
                                            icon="fa-solid fa-envelope"
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <FloatingInput
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            label="Phone / WhatsApp Number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            icon="fa-solid fa-phone"
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <PracticeDropdown
                                            id="practiceArea"
                                            name="practiceArea"
                                            value={formData.practiceArea}
                                            onChange={handleChange}
                                            icon="fa-solid fa-scale-balanced"
                                            required
                                        />
                                    </div>

                                    <div className="col-12">
                                        <FloatingInput
                                            id="subject"
                                            name="subject"
                                            label="Subject / Case Summary Headline"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            icon="fa-solid fa-heading"
                                            required
                                        />
                                    </div>

                                    <div className="col-12">
                                        <FloatingInput
                                            id="message"
                                            name="message"
                                            type="textarea"
                                            label="Case Details & Legal Assistance Required"
                                            value={formData.message}
                                            onChange={handleChange}
                                            icon="fa-solid fa-comment-dots"
                                            rows={5}
                                            required
                                        />
                                    </div>

                                    <div className="col-12 mt-4">
                                        <button
                                            type="submit"
                                            className="contact-form-submit-btn"
                                            disabled={loading}
                                        >
                                            {loading ? (
                                                <>
                                                    <i className="fa-solid fa-circle-notch fa-spin" />
                                                    <span>Submitting Legal Brief...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <i className="fa-solid fa-paper-plane" />
                                                    <span>Submit Confidential Legal Inquiry</span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;
