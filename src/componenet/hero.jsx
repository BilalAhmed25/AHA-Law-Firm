import React, { useState } from "react";
import { IMAGES } from "../constant/theme";

function Hero() {
    const [gifFlipped, setGifFlipped] = useState(false);

    return (
        <section className="banner" style={{ backgroundImage: `url(${IMAGES.bannerbg})`, paddingTop: '170px', paddingBottom: '110px', position: 'relative', overflow: 'hidden' }}>
            <style>{`
                @keyframes simpleShinePulse {
                    0% { transform: translate(-50%, -50%) scale(0.92); opacity: 0.6; }
                    100% { transform: translate(-50%, -50%) scale(1.15); opacity: 0.95; }
                }
                @keyframes simpleGifFloat {
                    0% { transform: translateY(0px); }
                    100% { transform: translateY(-8px); }
                }
                @keyframes heroFadeSlideUp {
                    0% { opacity: 0; transform: translateY(30px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                @keyframes heroFadeSlideRight {
                    0% { opacity: 0; transform: translateX(-30px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                @keyframes heroFadeSlideLeft {
                    0% { opacity: 0; transform: translateX(30px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                @keyframes shimmerSweep {
                    0% { left: -100%; }
                    100% { left: 100%; }
                }
                @keyframes softDotFloat {
                    0% { transform: translateY(0) scale(1); opacity: 0.5; }
                    50% { transform: translateY(-20px) scale(1.2); opacity: 0.8; }
                    100% { transform: translateY(0) scale(1); opacity: 0.5; }
                }

                /* GIF 3D Flip */
                .hero-gif-flip-container {
                    perspective: 1200px;
                    cursor: pointer;
                }
                .hero-gif-flip-inner {
                    position: relative;
                    width: 100%;
                    transition: transform 0.8s cubic-bezier(0.34, 1.2, 0.64, 1);
                    transform-style: preserve-3d;
                }
                .hero-gif-flip-container.flipped .hero-gif-flip-inner {
                    transform: rotateY(180deg);
                }
                @media (hover: hover) {
                    .hero-gif-flip-container:hover .hero-gif-flip-inner {
                        transform: rotateY(180deg);
                    }
                }
                .hero-gif-front,
                .hero-gif-back {
                    width: 100%;
                    border-radius: 16px;
                    -webkit-backface-visibility: hidden;
                    backface-visibility: hidden;
                }
                .hero-gif-front {
                    display: block;
                }
                .hero-gif-back {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    transform: rotateY(180deg);
                    background: linear-gradient(145deg, #0a1628 0%, #162a4a 50%, #1a192b 100%);
                    border: 1px solid rgba(197, 160, 89, 0.35);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding: 30px;
                    text-align: center;
                    box-sizing: border-box;
                }
            `}</style>

            {/* Subtle floating dots in the background */}
            {[
                { top: '15%', left: '8%', size: 6, delay: '0s', dur: '7s' },
                { top: '70%', left: '12%', size: 4, delay: '1.5s', dur: '6s' },
                { top: '30%', left: '92%', size: 5, delay: '0.8s', dur: '8s' },
                { top: '80%', left: '85%', size: 4, delay: '2s', dur: '5.5s' },
                { top: '50%', left: '50%', size: 3, delay: '3s', dur: '9s' },
            ].map((dot, i) => (
                <div key={i} style={{
                    position: 'absolute',
                    top: dot.top,
                    left: dot.left,
                    width: `${dot.size}px`,
                    height: `${dot.size}px`,
                    borderRadius: '50%',
                    background: '#c5a059',
                    opacity: 0.5,
                    zIndex: 1,
                    pointerEvents: 'none',
                    animation: `softDotFloat ${dot.dur} ease-in-out ${dot.delay} infinite`
                }} />
            ))}

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="title-area-data">
                            <h2 style={{
                                fontSize: '36px',
                                lineHeight: '1.35',
                                fontWeight: '700',
                                animation: 'heroFadeSlideRight 0.8s ease forwards'
                            }}>
                                Empowering Your Rights & <span style={{ color: '#c5a059' }}>Protecting Your Future</span> Across the UAE
                            </h2>
                            <p style={{
                                color: '#333333',
                                fontSize: '17px',
                                lineHeight: '28px',
                                marginTop: '18px',
                                fontWeight: '400',
                                animation: 'heroFadeSlideUp 0.9s ease 0.2s both'
                            }}>
                                AHA Law Firm is a distinguished full-service legal practice headquartered in Dubai and Ajman, UAE. We provide comprehensive legal representation across a broad spectrum of practice areas — serving individuals, corporate entities, financial institutions, governmental bodies, and global investors.
                            </p>
                            <div style={{
                                marginTop: '30px',
                                marginBottom: '35px',
                                display: 'flex',
                                gap: '15px',
                                flexWrap: 'wrap',
                                justifyContent: 'flex-start',
                                animation: 'heroFadeSlideUp 0.9s ease 0.4s both'
                            }}>
                                <a href="https://wa.me/971566856365?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20free%20consultation." target="_blank" rel="noopener noreferrer" className="btn"><span>Free Consultation</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner-img" style={{
                            position: 'relative',
                            animation: 'heroFadeSlideLeft 1s ease 0.3s both'
                        }}>
                            {/* Animated Rounded Shine Flare */}
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '50%',
                                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.95) 0%, rgba(245, 230, 200, 0.7) 45%, rgba(255, 255, 255, 0) 75%)',
                                    filter: 'blur(35px)',
                                    zIndex: 1,
                                    pointerEvents: 'none',
                                    animation: 'simpleShinePulse 5s ease-in-out infinite alternate'
                                }}
                            ></div>

                            {/* GIF with 3D Flip — hover on desktop, tap on mobile */}
                            <div
                                className={`hero-gif-flip-container ${gifFlipped ? 'flipped' : ''}`}
                                onClick={() => setGifFlipped(!gifFlipped)}
                                style={{ position: 'relative', zIndex: 2 }}
                            >
                                <div className="hero-gif-flip-inner">
                                    {/* FRONT: GIF */}
                                    <div className="hero-gif-front" style={{ position: 'relative', overflow: 'hidden', borderRadius: '16px' }}>
                                        <img
                                            src={IMAGES.homeBannerGif || IMAGES.bannrimag}
                                            alt="AHA Law Firm"
                                            style={{
                                                width: '100%',
                                                borderRadius: '16px',
                                                boxShadow: 'none',
                                                objectFit: 'cover',
                                                display: 'block',
                                                animation: 'simpleGifFloat 4.5s ease-in-out infinite alternate'
                                            }}
                                        />
                                        {/* Light shimmer sweep */}
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: '-100%',
                                            width: '50%',
                                            height: '100%',
                                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)',
                                            zIndex: 3,
                                            pointerEvents: 'none',
                                            animation: 'shimmerSweep 5s ease-in-out 2s infinite'
                                        }} />
                                    </div>

                                    {/* BACK: Text Content */}
                                    <div className="hero-gif-back">
                                        <div style={{ marginBottom: '16px' }}>
                                            <span style={{
                                                fontSize: '11px',
                                                fontWeight: '700',
                                                letterSpacing: '1.5px',
                                                color: '#c5a059',
                                                textTransform: 'uppercase'
                                            }}>⚖️ WHY AHA LAW FIRM?</span>
                                        </div>
                                        <h3 style={{
                                            fontFamily: '"Poppins", sans-serif',
                                            fontSize: '22px',
                                            fontWeight: '700',
                                            color: '#ffffff',
                                            lineHeight: '1.35',
                                            marginBottom: '14px'
                                        }}>
                                            Your Trusted Legal Partner in the UAE
                                        </h3>
                                        <p style={{
                                            fontSize: '14px',
                                            lineHeight: '1.6',
                                            color: '#c8c6de',
                                            marginBottom: '20px'
                                        }}>
                                            With deep expertise across civil, commercial, criminal & corporate law — AHA delivers strategic counsel, courtroom advocacy, and end-to-end legal management.
                                        </p>
                                        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', marginBottom: '22px', width: '100%' }}>
                                            <a href="tel:+971566856365" onClick={(e) => e.stopPropagation()} style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                flex: 1,
                                                padding: '12px 14px',
                                                borderRadius: '50px',
                                                background: 'rgba(255, 255, 255, 0.08)',
                                                backdropFilter: 'blur(12px)',
                                                WebkitBackdropFilter: 'blur(12px)',
                                                border: '1px solid rgba(255, 255, 255, 0.15)',
                                                fontSize: '13px',
                                                color: '#ffffff',
                                                fontWeight: '600',
                                                textDecoration: 'none',
                                                transition: 'all 0.3s ease',
                                                justifyContent: 'center'
                                            }}>
                                                <i className="fa-solid fa-phone" style={{ color: '#c5a059', fontSize: '14px' }}></i>
                                                +971 56 685 6365
                                            </a>
                                            <a href="mailto:info@ahalawfirm.com" onClick={(e) => e.stopPropagation()} style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                flex: 1,
                                                padding: '12px 14px',
                                                borderRadius: '50px',
                                                background: 'rgba(255, 255, 255, 0.08)',
                                                backdropFilter: 'blur(12px)',
                                                WebkitBackdropFilter: 'blur(12px)',
                                                border: '1px solid rgba(255, 255, 255, 0.15)',
                                                fontSize: '13px',
                                                color: '#ffffff',
                                                fontWeight: '600',
                                                textDecoration: 'none',
                                                transition: 'all 0.3s ease',
                                                justifyContent: 'center'
                                            }}>
                                                <i className="fa-solid fa-envelope" style={{ color: '#c5a059', fontSize: '14px' }}></i>
                                                info@ahalawfirm.com
                                            </a>
                                        </div>
                                        <a
                                            href="https://wa.me/971566856365?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20free%20consultation."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                padding: '12px 28px',
                                                borderRadius: '50px',
                                                background: 'linear-gradient(135deg, #c5a059, #9e7b37)',
                                                color: '#0A1628',
                                                fontSize: '14px',
                                                fontWeight: '700',
                                                textDecoration: 'none',
                                                boxShadow: '0 6px 18px rgba(197,160,89,0.35)',
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            Get Free Consultation <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
