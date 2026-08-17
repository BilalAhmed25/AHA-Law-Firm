import React from "react";

function OfficeLocations() {
    const offices = [
        {
            city: "Dubai Head Office",
            type: "Corporate Advisory & High Court Litigation Practice",
            address: "Business Bay, Executive Towers, Tower B, Level 14, Dubai, United Arab Emirates",
            phone: "+971 56 685 6365",
            email: "info@ahalawfirm.ae",
            hours: "Monday - Saturday: 9:00 AM - 7:00 PM",
            mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1786539269224!2d55.2721877!3d25.1873138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682829c85e07%3A0xa9bc19c00b0800!2sExecutive%20Towers%20-%20Business%20Bay%20-%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
        },
        {
            city: "Sharjah Legal Branch",
            type: "Litigation, Personal Status & Penal Advocacy Branch",
            address: "Al Majaz 1, Corniche Street, Suite 402, Sharjah, United Arab Emirates",
            phone: "+971 56 685 6365",
            email: "info@ahalawfirmdxb.com",
            hours: "Monday - Saturday: 9:00 AM - 7:00 PM",
            mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.287893112853!2d55.3918!3d25.3452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f578788888888%3A0x8888888888888888!2sSharjah%20UAE!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
        }
    ];

    return (
        <section className="gap" style={{ background: '#ffffff', padding: '90px 0 60px' }}>
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
                            Visit Our Practice Locations
                        </span>
                        <h2 style={{
                            color: '#0A1628',
                            fontWeight: '800',
                            fontSize: '36px',
                            lineHeight: '1.3'
                        }}>
                            Our UAE Office Headquarters & Branches
                        </h2>
                        <p style={{
                            color: '#64748B',
                            fontSize: '16px',
                            marginTop: '15px',
                            lineHeight: '26px'
                        }}>
                            Conveniently located in primary commercial hubs across Dubai and Sharjah to serve our regional and international clients.
                        </p>
                    </div>
                </div>

                <div className="row g-4 justify-content-center">
                    {offices.map((office, idx) => (
                        <div className="col-lg-6" key={idx}>
                            <div style={{
                                background: '#F8FAFC',
                                borderRadius: '20px',
                                border: '1px solid #E2E8F0',
                                overflow: 'hidden',
                                height: '100%',
                                boxShadow: '0 10px 30px rgba(10, 22, 40, 0.04)',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                {/* Map Header */}
                                <div style={{ height: '220px', width: '100%', position: 'relative' }}>
                                    <iframe
                                        title={office.city}
                                        src={office.mapSrc}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>

                                {/* Office Content Info */}
                                <div style={{ padding: '30px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <div>
                                        <div style={{
                                            display: 'inline-block',
                                            background: 'rgba(197, 160, 89, 0.12)',
                                            color: 'var(--theme-colour)',
                                            fontSize: '12px',
                                            fontWeight: '700',
                                            padding: '4px 12px',
                                            borderRadius: '20px',
                                            marginBottom: '12px'
                                        }}>
                                            {office.city}
                                        </div>

                                        <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0A1628', marginBottom: '8px' }}>
                                            {office.city}
                                        </h3>
                                        <p style={{ fontSize: '13.5px', color: '#64748B', marginBottom: '20px', fontWeight: '500' }}>
                                            {office.type}
                                        </p>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
                                            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                                <i className="fa-solid fa-location-dot" style={{ color: 'var(--theme-colour)', marginTop: '4px', fontSize: '16px' }} />
                                                <span style={{ fontSize: '14.5px', color: '#334155', lineHeight: '22px' }}>{office.address}</span>
                                            </div>

                                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                                <i className="fa-solid fa-phone" style={{ color: 'var(--theme-colour)', fontSize: '15px' }} />
                                                <a href={`tel:${office.phone.replace(/\s+/g, '')}`} style={{ fontSize: '14.5px', color: '#0A1628', fontWeight: '600', textDecoration: 'none' }}>
                                                    {office.phone}
                                                </a>
                                            </div>

                                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                                <i className="fa-solid fa-envelope" style={{ color: 'var(--theme-colour)', fontSize: '15px' }} />
                                                <a href={`mailto:${office.email}`} style={{ fontSize: '14.5px', color: '#334155', textDecoration: 'none' }}>
                                                    {office.email}
                                                </a>
                                            </div>

                                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                                <i className="fa-solid fa-clock" style={{ color: 'var(--theme-colour)', fontSize: '15px' }} />
                                                <span style={{ fontSize: '14px', color: '#64748B' }}>{office.hours}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', paddingTop: '16px', borderTop: '1px solid #E2E8F0' }}>
                                        <a
                                            href={`https://wa.me/971566856365?text=Hello%2C%20I%20would%20like%20to%20schedule%20an%20appointment%20at%20your%20${encodeURIComponent(office.city)}.`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn"
                                            style={{ flexGrow: 1, justifyContent: 'center' }}
                                        >
                                            <span>Book Appointment</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OfficeLocations;
