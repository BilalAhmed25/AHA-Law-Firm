import React from "react";
import { Link } from "react-router-dom";
import Header from "../../layout/header";
import Footer from "../../layout/footer";
import { IMAGES } from "../../constant/theme";
import "../../assets/css/legal-pages.css";

function PrivacyPolicyPage() {
    return (
        <>
            <Header />

            {/* Privacy Policy Hero Banner */}
            <section
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
                        <div className="col-12 text-start">
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
                                <span style={{ color: '#ffffff', fontWeight: '600' }}>Privacy Policy</span>
                            </div>

                            <h1 style={{
                                fontSize: '40px',
                                lineHeight: '1.25',
                                fontWeight: '800',
                                color: '#ffffff',
                                marginBottom: '16px',
                                letterSpacing: '-0.5px'
                            }}>
                                Privacy Policy & Data Protection Statement
                            </h1>

                            <p style={{
                                color: '#E2E8F0',
                                fontSize: '16.5px',
                                lineHeight: '28px',
                                marginBottom: '0',
                                maxWidth: '100%',
                                fontWeight: '300'
                            }}>
                                Effective Date: August 13, 2026 | Compliant with UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Privacy Policy Main Content Section */}
            <section className="legal-page-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-start">
                            <div className="legal-card">
                                <h2 className="legal-article-title">1. Commitment to Client Confidentiality & Privacy</h2>
                                <p>
                                    AHA Law Firm ("we", "us", or "our") is dedicated to upholding the highest standards of professional legal ethics, attorney-client privilege, and data privacy. This Privacy Policy sets out the basis on which personal data collected from clients, website visitors, and legal consultation inquiries will be processed and safeguarded in accordance with the laws of the United Arab Emirates.
                                </p>

                                <div className="legal-callout-box">
                                    <p>
                                        <strong>Statutory Compliance Note:</strong> All data collection and processing activities strictly comply with UAE Federal Decree-Law No. 45 of 2021 regarding the Protection of Personal Data (PDPL) and Central Bank AML/KYC directives.
                                    </p>
                                </div>

                                <h2 className="legal-article-title">2. Information We Collect</h2>
                                <p>
                                    In the course of providing legal services, consultation, and operating this website, we may collect and process the following categories of information:
                                </p>
                                <ul>
                                    <li><strong>Personal Identification Data:</strong> Full name, nationality, passport details, Emirates ID, job title, and residential/business address.</li>
                                    <li><strong>Contact Details:</strong> Phone numbers, email addresses, and preferred communication channels.</li>
                                    <li><strong>Case & Matter Information:</strong> Confidential documentation, contracts, court filings, and evidence submitted for legal evaluation.</li>
                                    <li><strong>Technical Data:</strong> IP address, browser type, device identifiers, and website usage statistics collected via security cookies.</li>
                                </ul>

                                <h2 className="legal-article-title">3. Purpose and Legal Basis for Processing</h2>
                                <p>
                                    Personal data is collected exclusively for legitimate legal, advisory, and statutory administrative purposes, including:
                                </p>
                                <ul>
                                    <li>Evaluating legal inquiries and conflict-of-interest assessments.</li>
                                    <li>Providing formal legal representation before UAE Courts, Arbitration Tribunals, and Government Authorities.</li>
                                    <li>Fulfilling mandatory Anti-Money Laundering (AML) and Know Your Customer (KYC) statutory verification.</li>
                                    <li>Issuing statutory fee statements, retainer invoicing, and administrative communications.</li>
                                </ul>

                                <h2 className="legal-article-title">4. Confidentiality & Third-Party Disclosure</h2>
                                <p>
                                    AHA Law Firm strictly maintains attorney-client privilege and confidentiality. We will never sell, rent, or trade your personal data. We disclose confidential information only under the following limited circumstances:
                                </p>
                                <ul>
                                    <li>With your express written consent or instruction.</li>
                                    <li>To official judicial bodies, UAE Public Prosecution, court-appointed experts, or arbitral tribunals in the course of legal advocacy.</li>
                                    <li>When required under mandatory UAE statutory law or official court order.</li>
                                </ul>

                                <h2 className="legal-article-title">5. Data Retention & Security Measures</h2>
                                <p>
                                    We employ bank-grade encryption protocols, secure servers, and physical document controls to protect client records against unauthorized access, loss, or alteration. Client files are retained for the statutory period required by the UAE Ministry of Justice and legal practice regulations.
                                </p>

                                <h2 className="legal-article-title">6. Your Statutory Rights</h2>
                                <p>
                                    Under the UAE Personal Data Protection Law, individuals residing in the UAE possess specific statutory rights regarding their personal data, including the right to request access, correction, erasure, or restriction of processing, subject to statutory retention mandates for legal records.
                                </p>

                                <h2 className="legal-article-title">7. Contact Our Data Protection Officer</h2>
                                <p>
                                    If you have any questions regarding this Privacy Policy or wish to exercise your statutory privacy rights, please contact our Data Protection Office:
                                </p>
                                <p style={{ fontWeight: '600', color: '#0A1628' }}>
                                    AHA Law Firm — Data Protection Office<br />
                                    Email: info@ahalawfirm.ae | Phone: +971 56 685 6365<br />
                                    Address: Office 1402, Al Habtoor Business Tower, Dubai Marina, Dubai, UAE
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default PrivacyPolicyPage;
