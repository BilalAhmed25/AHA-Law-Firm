import React, { useState } from "react";
import Header from "../../layout/header";
import Footer from "../../layout/footer";
import { Link } from "react-router-dom";
import { openQuoteModal } from "../../componenet/quote-modal";
import { IMAGES } from "../../constant/theme";
import Cta from "../../componenet/cta";

const allFaqs = [
    {
        id: 1,
        category: "General & Firm",
        question: "What types of legal matters does AHA Law Firm handle?",
        answer: "AHA Law Firm is a premier full-service practice in the UAE representing corporate entities, multinational corporations, financial institutions, and high-net-worth individuals across UAE Court Litigation, Arbitration, Corporate & M&A, Banking, Real Estate, Criminal Defense, Intellectual Property, and Family Law."
    },
    {
        id: 2,
        category: "Litigation & Courts",
        question: "Do your advocates have full rights of audience in all UAE courts?",
        answer: "Yes, our licensed Emirati advocates possess full rights of audience before the UAE Federal Supreme Court, Dubai Court of Cassation, Sharjah Federal Court of Appeal, Abu Dhabi Courts, DIFC Courts, and ADGM Courts."
    },
    {
        id: 3,
        category: "Arbitration & ADR",
        question: "How does commercial arbitration work under DIAC and international rules?",
        answer: "We represent clients in arbitrations governed by the Dubai International Arbitration Centre (DIAC), ICC, LCIA, and UNCITRAL rules, managing everything from drafting arbitration agreements and emergency interim relief to award enforcement and annulment defense."
    },
    {
        id: 4,
        category: "Litigation & Courts",
        question: "Can you assist in emergency asset freezing and ex-parte court orders?",
        answer: "Yes, our litigation department regularly secures emergency precautionary attachment orders (ex-parte asset freezing) over bank accounts, commercial shares, real estate properties, and marine vessels across the UAE."
    },
    {
        id: 5,
        category: "Corporate & Tax",
        question: "What are the new UAE Corporate Tax and VAT compliance requirements?",
        answer: "Under UAE Federal Decree-Law No. 47 of 2022 on Corporate Tax, businesses are subject to a 9% standard statutory rate above AED 375,000 taxable income. Our tax legal team provides tax structuring, Free Zone Qualifying Income compliance, and Federal Tax Authority (FTA) audit defense."
    },
    {
        id: 6,
        category: "Real Estate & Construction",
        question: "How are off-plan real estate and RERA disputes resolved in Dubai and Sharjah?",
        answer: "We handle cancellations of off-plan Sale and Purchase Agreements (SPAs), developer delay penalties, escrow fund disputes, and land department matters before RERA, the Dubai Land Department (DLD), and the Rental Dispute Centre (RDC)."
    },
    {
        id: 7,
        category: "Criminal & Extradition",
        question: "How does Interpol Red Notice removal and international extradition defense work?",
        answer: "Our international criminal defense counsel liaises directly with the Commission for the Control of INTERPOL's Files (CCF) in Lyon, France, to challenge and delete illegitimate Red Notices, while defending clients in UAE extradition hearings."
    },
    {
        id: 8,
        category: "Private Wealth & Family",
        question: "What is the procedure for registering a DIFC or ADGM non-Muslim Will?",
        answer: "Non-Muslim expatriates can register statutory wills at the DIFC Wills Service Centre or ADGM Courts to ensure their UAE assets and child guardianship pass according to their personal wishes, avoiding default Sharia distribution."
    },
    {
        id: 9,
        category: "Private Wealth & Family",
        question: "How do I obtain the UAE 10-Year Golden Visa for real estate investors or executives?",
        answer: "We manage the end-to-end legal and documentation process for property investors (minimum AED 2 Million property equity), entrepreneurs, specialized professionals, and corporate leaders."
    },
    {
        id: 10,
        category: "General & Firm",
        question: "What are your fee structures and payment terms for legal representation?",
        answer: "We offer fully transparent, tailored billing structures including fixed-fee initial advisory, milestone-based litigation stages, success-aligned structures where permitted, and monthly corporate retainer packages."
    },
    {
        id: 11,
        category: "Corporate & Tax",
        question: "How do you handle employment disputes under the new UAE Labour Law?",
        answer: "We advise both employers and executives on UAE Federal Decree-Law No. 33 of 2021 regarding unlawful terminations, non-compete covenants, end-of-service gratuity calculations, and Ministry of Human Resources and Emiratisation (MOHRE) proceedings."
    },
    {
        id: 12,
        category: "Litigation & Courts",
        question: "Can foreign court judgments be enforced in the UAE without retrying the case?",
        answer: "Yes, under the UAE Civil Procedures Law and bilateral international treaties, foreign court judgments can be ratified and executed through UAE execution courts if statutory reciprocity and jurisdictional prerequisites are met."
    },
    {
        id: 13,
        category: "Corporate & Tax",
        question: "What corporate structures are available for establishing a business in UAE mainland vs free zone?",
        answer: "We assist investors in choosing between 100% foreign-owned Mainland LLCs, Free Zone entities (e.g. DIFC, ADGM, DMCC, DAFZA), and offshore holding companies for asset protection and optimal tax efficiency."
    },
    {
        id: 14,
        category: "Corporate & Tax",
        question: "How are trademarks, patents, and copyright protected across the GCC?",
        answer: "We handle registration and anti-counterfeiting enforcement with the UAE Ministry of Economy and customs authorities, protecting brand IP, software code, and patent innovations throughout the GCC."
    },
    {
        id: 15,
        category: "General & Firm",
        question: "How can I schedule a consultation or submit case documents for review?",
        answer: "You can schedule an appointment via our website quote modal, email info@ahalawfirmdxb.com, or call +971 56 685 6365. Consultations are available in-person at our Dubai & Sharjah offices or virtually."
    },
    {
        id: 16,
        category: "General & Firm",
        question: "Is client information and case communication strictly confidential?",
        answer: "Yes, all client consultations, case files, and correspondence are governed by statutory legal professional privilege under UAE Federal Advocacy Laws and strict non-disclosure standards."
    }
];

function FaqsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [activeFaqId, setActiveFaqId] = useState(1);

    const categories = ["All", "General & Firm", "Litigation & Courts", "Arbitration & ADR", "Corporate & Tax", "Real Estate & Construction", "Criminal & Extradition", "Private Wealth & Family"];

    const filteredFaqs = allFaqs.filter((faq) => {
        const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
        const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const toggleFaq = (id) => {
        setActiveFaqId(activeFaqId === id ? null : id);
    };

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section
                className="faqs-hero"
                style={{
                    backgroundColor: '#0A1628',
                    backgroundImage: `linear-gradient(135deg, rgba(10, 22, 40, 0.45) 0%, rgba(15, 32, 58, 0.35) 100%), url(${IMAGES.graph})`,
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
                                <span style={{ color: '#ffffff', fontWeight: '600' }}>Knowledge Base & FAQs</span>
                            </div>

                            <h1 style={{
                                fontSize: '42px',
                                lineHeight: '1.25',
                                fontWeight: '800',
                                color: '#ffffff',
                                marginBottom: '18px',
                                letterSpacing: '-0.5px'
                            }}>
                                Legal <span style={{ color: 'var(--theme-colour)' }}>Knowledge Base</span> & FAQs
                            </h1>

                            <p style={{
                                color: '#E2E8F0',
                                fontSize: '17px',
                                lineHeight: '28px',
                                marginBottom: '0',
                                maxWidth: '680px',
                                fontWeight: '300'
                            }}>
                                Comprehensive legal insights, procedural guides, and answers to frequently asked questions on UAE federal laws, Dubai & Sharjah court litigation, and international arbitration.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Area */}
            <section style={{ background: '#F8FAFC', padding: '80px 0 100px' }}>
                <div className="container">
                    {/* Full-Width Search & Category Filter Bar */}
                    <div style={{
                        background: '#FFFFFF',
                        borderRadius: '20px',
                        padding: '30px',
                        boxShadow: '0 10px 30px rgba(10, 22, 40, 0.05)',
                        border: '1px solid #E2E8F0',
                        marginBottom: '40px'
                    }}>
                        {/* Search Input */}
                        <div style={{ position: 'relative', marginBottom: '24px' }}>
                            <i className="fa-solid fa-magnifying-glass" style={{
                                position: 'absolute',
                                left: '20px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                color: 'var(--theme-colour)',
                                fontSize: '18px'
                            }} />
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search legal topics, court procedures, DIAC arbitration, taxes, visas..."
                                style={{
                                    width: '100%',
                                    padding: '16px 20px 16px 52px',
                                    borderRadius: '12px',
                                    border: '1px solid #CBD5E1',
                                    fontSize: '15px',
                                    outline: 'none',
                                    transition: 'border-color 0.3s ease',
                                    color: '#0A1628'
                                }}
                                onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--theme-colour)'; }}
                                onBlur={(e) => { e.currentTarget.style.borderColor = '#CBD5E1'; }}
                            />
                        </div>

                        {/* Category Filter Pills */}
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            {categories.map((cat, i) => (
                                <button
                                    key={i}
                                    onClick={() => setSelectedCategory(cat)}
                                    style={{
                                        padding: '7px 18px',
                                        borderRadius: '20px',
                                        border: selectedCategory === cat ? '1px solid var(--theme-colour)' : '1px solid #E2E8F0',
                                        background: selectedCategory === cat ? '#0A1628' : '#FAF8F5',
                                        color: selectedCategory === cat ? '#ffffff' : '#475569',
                                        fontSize: '13px',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Full-Width FAQ Accordion List */}
                    <div className="row">
                        <div className="col-12">
                            {filteredFaqs.length > 0 ? (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                    {filteredFaqs.map((item) => {
                                        const isOpen = activeFaqId === item.id;
                                        return (
                                            <div
                                                key={item.id}
                                                style={{
                                                    background: '#FFFFFF',
                                                    borderRadius: '16px',
                                                    border: isOpen ? '1px solid var(--theme-colour)' : '1px solid #E2E8F0',
                                                    boxShadow: isOpen ? '0 10px 25px rgba(10, 22, 40, 0.08)' : '0 4px 12px rgba(10, 22, 40, 0.02)',
                                                    overflow: 'hidden',
                                                    transition: 'all 0.3s ease'
                                                }}
                                            >
                                                {/* Header */}
                                                <div
                                                    onClick={() => toggleFaq(item.id)}
                                                    style={{
                                                        padding: '22px 28px',
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        cursor: 'pointer',
                                                        background: isOpen ? 'rgba(143, 99, 41, 0.04)' : '#FFFFFF',
                                                        transition: 'background 0.3s ease'
                                                    }}
                                                >
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', textAlign: 'left' }}>
                                                        <span style={{
                                                            width: '28px',
                                                            height: '28px',
                                                            borderRadius: '50%',
                                                            background: isOpen ? 'var(--theme-colour)' : 'rgba(10, 22, 40, 0.06)',
                                                            color: isOpen ? '#ffffff' : '#0A1628',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            fontSize: '12px',
                                                            fontWeight: '700',
                                                            flexShrink: 0,
                                                            transition: 'all 0.3s ease'
                                                        }}>
                                                            Q
                                                        </span>
                                                        <div>
                                                            <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--theme-colour)', textTransform: 'uppercase', letterSpacing: '0.8px', display: 'block', marginBottom: '2px' }}>
                                                                {item.category}
                                                            </span>
                                                            <h4 style={{ fontSize: '17px', fontWeight: '700', color: '#0A1628', margin: 0, lineHeight: '1.4' }}>
                                                                {item.question}
                                                            </h4>
                                                        </div>
                                                    </div>

                                                    <div style={{
                                                        width: '32px',
                                                        height: '32px',
                                                        borderRadius: '50%',
                                                        background: isOpen ? 'var(--theme-colour)' : '#F1F5F9',
                                                        color: isOpen ? '#ffffff' : '#64748B',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        fontSize: '12px',
                                                        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                                                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                                        flexShrink: 0,
                                                        marginLeft: '16px'
                                                    }}>
                                                        <i className="fa-solid fa-chevron-down" />
                                                    </div>
                                                </div>

                                                {/* Smooth Animated Accordion Body */}
                                                <div
                                                    style={{
                                                        display: 'grid',
                                                        gridTemplateRows: isOpen ? '1fr' : '0fr',
                                                        transition: 'grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1)'
                                                    }}
                                                >
                                                    <div style={{ overflow: 'hidden' }}>
                                                        <div style={{
                                                            padding: '0 28px 24px 70px',
                                                            textAlign: 'left',
                                                            color: '#475569',
                                                            fontSize: '15px',
                                                            lineHeight: '26px',
                                                            borderTop: '1px solid rgba(143, 99, 41, 0.1)'
                                                        }}>
                                                            <p style={{ marginTop: '16px', marginBottom: 0 }}>
                                                                {item.answer}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div style={{
                                    background: '#FFFFFF',
                                    borderRadius: '20px',
                                    padding: '50px 30px',
                                    textAlign: 'center',
                                    border: '1px solid #E2E8F0'
                                }}>
                                    <i className="fa-solid fa-circle-question" style={{ fontSize: '40px', color: '#94A3B8', marginBottom: '16px' }} />
                                    <h4 style={{ color: '#0A1628', fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>No Matching Questions Found</h4>
                                    <p style={{ color: '#64748B', fontSize: '15px', marginBottom: '20px' }}>Try adjusting your search terms or contact our legal team directly.</p>
                                    <button
                                        onClick={() => openQuoteModal("Knowledge Base Inquiry")}
                                        className="btn"
                                    >
                                        <span>Ask Our Legal Team</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <Cta />
            <Footer />
        </>
    );
}

export default FaqsPage;
