import React from "react";

function Cta() {
    return (
        <section className="gap" style={{ background: 'linear-gradient(135deg, #0A1628 0%, #1B2A4A 100%)', textAlign: 'center' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <span style={{ color: 'var(--theme-colour)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '14px' }}>Get In Touch</span>
                        <h2 style={{ color: '#fff', marginTop: '15px', marginBottom: '20px', fontWeight: '700', fontSize: '36px' }}>Ready to Discuss Your Legal Needs?</h2>
                        <p style={{ color: '#b0b0b0', fontSize: '17px', maxWidth: '600px', margin: '0 auto 30px' }}>Schedule a free consultation with our experienced legal team. We are here to provide the strategic guidance and representation you need.</p>
                        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="https://wa.me/971566856365?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20free%20consultation." target="_blank" rel="noopener noreferrer" className="btn"><span><i className="fa-brands fa-whatsapp" style={{ marginRight: '8px' }} /> WhatsApp Us</span></a>
                            <a href="tel:+971566856365" className="btn" style={{ background: 'transparent', border: '2px solid var(--theme-colour)' }}><span><i className="fa-solid fa-phone" style={{ marginRight: '8px' }} /> Call +971 56 685 6365</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cta;
