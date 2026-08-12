import React from "react";

const statsData = [
    { icon: "fa-solid fa-trophy", number: "500+", label: "Cases Won" },
    { icon: "fa-solid fa-award", number: "15+", label: "Years of Experience" },
    { icon: "fa-solid fa-user-tie", number: "50+", label: "Legal Professionals" },
    { icon: "fa-solid fa-handshake", number: "1000+", label: "Satisfied Clients" },
];

function StatsCounter() {
    return (
        <section style={{ background: 'var(--common-colour)', padding: '70px 0' }}>
            <div className="container">
                <div className="row align-items-center">
                    {statsData.map((item, idx) => (
                        <div
                            className="col-lg-3 col-md-6"
                            key={idx}
                            style={{
                                borderRight: idx < 3 ? '1px solid rgba(255, 255, 255, 0.12)' : 'none',
                                padding: '15px 25px',
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    minWidth: '60px',
                                    borderRadius: '14px',
                                    background: 'rgba(143, 99, 41, 0.12)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--theme-colour)',
                                    fontSize: '26px'
                                }}>
                                    <i className={item.icon} />
                                </div>
                                <div>
                                    <h2 style={{ color: 'var(--theme-colour)', fontSize: '38px', fontWeight: '700', margin: 0, lineHeight: 1.1 }}>{item.number}</h2>
                                    <p style={{ color: '#b0b0b0', fontSize: '13px', margin: '4px 0 0 0', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '500' }}>{item.label}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default StatsCounter;
