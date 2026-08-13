import React from "react";
import { IMAGES } from "../constant/theme";

function Hero() {
    return (
        <section className="banner" style={{ backgroundImage: `url(${IMAGES.bannerbg})`, paddingTop: '170px', paddingBottom: '110px' }}>
            <div className="container">
                <div className="row align-items-center text-start">
                    <div className="col-lg-6 text-start">
                        <div className="title-area-data text-start" style={{ textAlign: 'left' }}>
                            <h2 style={{ fontSize: '36px', lineHeight: '1.35', fontWeight: '700', textAlign: 'left' }}>Empowering Your Rights & Protecting Your Future Across the UAE</h2>
                            <p style={{ color: '#333333', fontSize: '17px', lineHeight: '28px', marginTop: '18px', fontWeight: '400', textAlign: 'left' }}>
                                AHA Law Firm is a distinguished full-service legal practice headquartered in Dubai and Ajman, UAE. We provide comprehensive legal representation across a broad spectrum of practice areas — serving individuals, corporate entities, financial institutions, governmental bodies, and global investors.
                            </p>
                            <div style={{ marginTop: '30px', marginBottom: '35px', display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                                <a href="https://wa.me/971566856365?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20free%20consultation." target="_blank" rel="noopener noreferrer" className="btn"><span>Free Consultation</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner-img">
                            <img src={IMAGES.bannrimag} alt="AHA Law Firm" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 12px 35px rgba(0,0,0,0.25)', objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
