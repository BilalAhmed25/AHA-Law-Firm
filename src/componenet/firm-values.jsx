import React from "react";

function FirmValues() {
    const values = [
        {
            icon: "fa-solid fa-gavel",
            title: "Statutory Precision",
            description: "Deep mastery of UAE Federal Code, Dubai local regulations, and DIFC common law enables us to formulate bulletproof legal strategies tailored to your exact case requirements."
        },
        {
            icon: "fa-solid fa-user-shield",
            title: "Client-Centric Advocacy",
            description: "We prioritize your strategic goals and commercial viability, offering transparent counsel, direct access to senior partners, and relentless defense of your rights."
        },
        {
            icon: "fa-solid fa-lock",
            title: "Absolute Discretion",
            description: "Confidentiality is our bedrock. Whether handling high-profile litigation, sensitive corporate restructurings, or private wealth matters, we safeguard your privacy with non-negotiable protocols."
        },
        {
            icon: "fa-solid fa-globe",
            title: "Global Vision & Reach",
            description: "Our multilingual team bridges domestic UAE law with international commercial standards, seamlessly serving multinational corporations and cross-border investors."
        }
    ];

    return (
        <section className="gap" style={{ background: '#F8FAFC', padding: '90px 0' }}>
            <div className="container">
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-lg-8">
                        <span style={{
                            color: 'var(--theme-colour)',
                            fontWeight: '700',
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            fontSize: '14px',
                            display: 'block',
                            marginBottom: '10px'
                        }}>
                            Our Foundation
                        </span>
                        <h2 style={{
                            color: '#0A1628',
                            fontWeight: '800',
                            fontSize: '36px',
                            lineHeight: '1.3'
                        }}>
                            The Core Pillars Defining Our Practice
                        </h2>
                        <p style={{
                            color: '#64748B',
                            fontSize: '16px',
                            marginTop: '15px',
                            lineHeight: '26px'
                        }}>
                            Every legal brief, negotiation, and courtroom representation at AHA Law Firm is governed by our foundational principles.
                        </p>
                    </div>
                </div>

                <div className="row g-4">
                    {values.map((item, index) => (
                        <div className="col-md-6 col-lg-3" key={index}>
                            <div style={{
                                background: '#ffffff',
                                borderRadius: '16px',
                                padding: '35px 25px',
                                height: '100%',
                                boxShadow: '0 10px 30px rgba(10, 22, 40, 0.05)',
                                border: '1px solid #E2E8F0',
                                transition: 'all 0.3s ease',
                                cursor: 'default'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-6px)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(10, 22, 40, 0.12)';
                                    e.currentTarget.style.borderColor = 'var(--theme-colour)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(10, 22, 40, 0.05)';
                                    e.currentTarget.style.borderColor = '#E2E8F0';
                                }}
                            >
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '12px',
                                    background: 'rgba(197, 160, 89, 0.12)',
                                    color: 'var(--theme-colour)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '24px',
                                    marginBottom: '22px'
                                }}>
                                    <i className={item.icon} />
                                </div>
                                <h4 style={{
                                    fontSize: '20px',
                                    fontWeight: '700',
                                    color: '#0A1628',
                                    marginBottom: '14px'
                                }}>
                                    {item.title}
                                </h4>
                                <p style={{
                                    fontSize: '14px',
                                    lineHeight: '24px',
                                    color: '#64748B',
                                    margin: 0
                                }}>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FirmValues;
