import React from "react";

function FirmHistoryTimeline() {
    const milestones = [
        {
            year: "2010",
            title: "Foundation & Primary UAE Licensure",
            description: "Established primary operations in Sharjah and Dubai, focusing on civil litigation, commercial contracts, and dispute advocacy before local UAE courts."
        },
        {
            year: "2015",
            title: "Corporate & Commercial Expansion",
            description: "Expanded into specialized corporate advisory, cross-border transactional support, real estate dispute resolution, and banking legal compliance."
        },
        {
            year: "2019",
            title: "DIFC Accreditation & Arbitration Division",
            description: "Secured audience rights before DIFC and ADGM court systems while establishing a dedicated International Arbitration and Mediation practice group."
        },
        {
            year: "Present",
            title: "full service UAE Legal Powerhouse",
            description: "Leading multi-disciplinary firm with over 1,500+ successful litigation outcomes, representing Fortune 500 companies, regional conglomerates, and private clients."
        }
    ];

    return (
        <section className="gap" style={{ background: '#ffffff', padding: '90px 0' }}>
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
                            Milestones of Growth
                        </span>
                        <h2 style={{
                            color: '#0A1628',
                            fontWeight: '800',
                            fontSize: '36px',
                            lineHeight: '1.3'
                        }}>
                            Our Journey & Strategic Legacy in the UAE
                        </h2>
                        <p style={{
                            color: '#64748B',
                            fontSize: '16px',
                            marginTop: '15px',
                            lineHeight: '26px'
                        }}>
                            Over a decade of relentless legal advocacy, establishing legal precedents, and safeguarding client assets across Dubai and Sharjah.
                        </p>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="timeline-container-wrapper" style={{ position: 'relative', paddingLeft: '20px', paddingRight: '20px' }}>
                            {/* Vertical Line for Desktop */}
                            <div style={{
                                position: 'absolute',
                                left: '50%',
                                top: '0',
                                bottom: '0',
                                width: '3px',
                                background: 'linear-gradient(180deg, var(--theme-colour) 0%, rgba(10, 22, 40, 0.1) 100%)',
                                transform: 'translateX(-50%)',
                                display: 'block'
                            }} className="d-none d-md-block" />

                            {milestones.map((item, index) => {
                                const isEven = index % 2 === 0;
                                return (
                                    <div key={index} className="row align-items-center mb-5" style={{ position: 'relative' }}>
                                        {/* Left Side Content */}
                                        <div className={`col-md-6 ${isEven ? 'text-md-end' : 'order-md-2 text-md-start'}`}>
                                            <div style={{
                                                background: '#F8FAFC',
                                                border: '1px solid #E2E8F0',
                                                borderRadius: '16px',
                                                padding: '30px',
                                                boxShadow: '0 8px 25px rgba(10, 22, 40, 0.04)',
                                                display: 'inline-block',
                                                width: '100%',
                                                textAlign: 'left'
                                            }}>
                                                <span style={{
                                                    background: 'var(--theme-colour)',
                                                    color: '#ffffff',
                                                    fontSize: '13px',
                                                    fontWeight: '700',
                                                    padding: '4px 12px',
                                                    borderRadius: '20px',
                                                    display: 'inline-block',
                                                    marginBottom: '12px'
                                                }}>
                                                    {item.year}
                                                </span>
                                                <h4 style={{ fontSize: '20px', fontWeight: '700', color: '#0A1628', marginBottom: '10px' }}>
                                                    {item.title}
                                                </h4>
                                                <p style={{ fontSize: '14px', lineHeight: '24px', color: '#64748B', margin: 0 }}>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Center Node Pin */}
                                        <div className="d-none d-md-flex col-md-12 justify-content-center" style={{ position: 'absolute', left: 0, right: 0, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                                            <div style={{
                                                width: '24px',
                                                height: '24px',
                                                borderRadius: '50%',
                                                background: 'var(--theme-colour)',
                                                border: '4px solid #ffffff',
                                                boxShadow: '0 0 0 3px rgba(197, 160, 89, 0.4)'
                                            }} />
                                        </div>

                                        {/* Spacer column */}
                                        <div className={`col-md-6 ${isEven ? 'order-md-2' : ''}`} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FirmHistoryTimeline;
