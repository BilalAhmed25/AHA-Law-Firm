import React from "react";
import { Link } from "react-router-dom";
import Header from "../../layout/header";
import Footer from "../../layout/footer";
import { IMAGES } from "../../constant/theme";
import "../../assets/css/legal-pages.css";

function TermsConditionsPage() {
    return (
        <>
            <Header />

            {/* Terms & Conditions Hero Banner */}
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
                                <span style={{ color: '#ffffff', fontWeight: '600' }}>Terms & Conditions</span>
                            </div>

                            <h1 style={{
                                fontSize: '40px',
                                lineHeight: '1.25',
                                fontWeight: '800',
                                color: '#ffffff',
                                marginBottom: '16px',
                                letterSpacing: '-0.5px'
                            }}>
                                Terms & Conditions of Website Use
                            </h1>

                            <p style={{
                                color: '#E2E8F0',
                                fontSize: '16.5px',
                                lineHeight: '28px',
                                marginBottom: '0',
                                maxWidth: '100%',
                                fontWeight: '300'
                            }}>
                                Effective Date: August 13, 2026 | Governed by the Laws of the United Arab Emirates & Dubai Courts Jurisdiction.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Terms & Conditions Main Content Section */}
            <section className="legal-page-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-start">
                            <div className="legal-card">
                                <h2 className="legal-article-title">1. Acceptance of Website Terms</h2>
                                <p>
                                    Welcome to the official website of AHA Law Firm ("Firm", "we", "us", or "our"). By accessing or using this website (www.ahalawfirm.ae), you agree to comply with and be bound by these Terms & Conditions. If you do not accept these terms, you must refrain from using our digital platforms.
                                </p>

                                <div className="legal-callout-box">
                                    <p>
                                        <strong>Important Legal Disclaimer:</strong> The content, legal articles, commentary, and publications available on this website are provided strictly for general informational purposes and do not constitute formal legal advice or create an attorney-client relationship.
                                    </p>
                                </div>

                                <h2 className="legal-article-title">2. No Attorney-Client Relationship Prior to Retainer</h2>
                                <p>
                                    Transmitting inquiries, contact forms, or communication through this website or WhatsApp links does not form a binding attorney-client relationship between you and AHA Law Firm. A formal legal relationship is established only upon executing a written legal retainer agreement signed by an authorized advocate of the Firm.
                                </p>

                                <h2 className="legal-article-title">3. Intellectual Property & Brand Ownership</h2>
                                <p>
                                    All contents of this website—including legal articles, practice descriptions, trademarks, firm logos, graphics, software code, and visual design—are the exclusive intellectual property of AHA Law Firm protected under UAE Federal Law No. 36 of 2021 on Trademarks and UAE Copyright Law. Unauthorized reproduction, distribution, or commercial exploitation is strictly prohibited.
                                </p>

                                <h2 className="legal-article-title">4. Permitted Website Use & Prohibited Conduct</h2>
                                <p>
                                    You agree to use this website solely for lawful purposes. You are strictly prohibited from:
                                </p>
                                <ul>
                                    <li>Attempting unauthorized access to website servers, databases, or client portals.</li>
                                    <li>Transmitting malicious code, viruses, or automated scraping bots.</li>
                                    <li>Misrepresenting your identity or providing fraudulent details during legal inquiry submissions.</li>
                                </ul>

                                <h2 className="legal-article-title">5. Limitation of Liability</h2>
                                <p>
                                    To the maximum extent permitted by UAE statutory law, AHA Law Firm and its partners, advocates, and employees disclaim all liability for any direct, indirect, incidental, or consequential damages resulting from reliance on website information or temporary website service disruptions.
                                </p>

                                <h2 className="legal-article-title">6. External Third-Party Links</h2>
                                <p>
                                    This website may contain links to external governmental, judicial, or regulatory portals (e.g. Dubai Land Department, MOHRE, Central Bank of the UAE). We do not control or endorse external websites and assume no liability for third-party privacy practices or content.
                                </p>

                                <h2 className="legal-article-title">7. Governing Law & Jurisdiction</h2>
                                <p>
                                    These Terms & Conditions are governed by and construed in accordance with the Federal Laws of the United Arab Emirates and the local laws of the Emirate of Dubai. Any dispute arising out of or in connection with the use of this website shall be subject to the exclusive jurisdiction of the Courts of Dubai.
                                </p>

                                <h2 className="legal-article-title">8. Contact Information</h2>
                                <p>
                                    For inquiries regarding these Terms & Conditions or formal legal engagement requests, please contact our managing office:
                                </p>
                                <p style={{ fontWeight: '600', color: '#0A1628' }}>
                                    AHA Law Firm — Head Office<br />
                                    Email: contact@ahalawfirm.ae | Phone: +971 56 685 6365<br />
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

export default TermsConditionsPage;
