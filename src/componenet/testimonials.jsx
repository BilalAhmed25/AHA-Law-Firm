import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "../assets/css/testimonials.css";

const testimonialsData = [
    {
        name: "Zahid Miles",
        role: "Managing Director",
        avatarText: "ZM",
        avatarBg: "#0A1628",
        quote: "They are great. They did exactly what I needed. The friendly team are real problem solvers. Loved working with them."
    },
    {
        name: "Asa Walter",
        role: "Corporate Client",
        avatarText: "AW",
        avatarBg: "#1B2A4A",
        quote: "This is the best thing that happened to my business. They re-branded, re-organized, and structured our company in no time."
    },
    {
        name: "Casper Leigh",
        role: "Real Estate Investor",
        avatarText: "CL",
        avatarBg: "#8f6329",
        quote: "Awesome legal services! I am really happy to be here because of their expertise. I will continue to use their services in the future."
    },
    {
        name: "Cian Roberts",
        role: "Global Founder",
        avatarText: "CR",
        avatarBg: "#2C3E50",
        quote: "By far the most efficient law firm in Dubai. The team they've put together is outstanding. Everyone is so knowledgeable and attentive."
    },
    {
        name: "John Doe",
        role: "Private Client",
        avatarText: "JD",
        avatarBg: "#B08D3A",
        quote: "I knew I was going to receive great legal advice, but they went above and beyond all my expectations."
    }
];

const loopedData = [...testimonialsData, ...testimonialsData, ...testimonialsData];

function Testimonials() {
    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="testimonials-main-wrapper">
                    {/* Background watermark quote */}
                    <div className="testimonials-watermark">“</div>

                    {/* Section Header */}
                    <div className="testimonials-header">
                        <h2 className="testimonials-title">What our Clients say!</h2>
                        <div className="testimonials-underline"></div>
                    </div>

                    {/* Testimonials Swiper Slider */}
                    <Swiper
                        className="testimonials-swiper-container"
                        modules={[Autoplay, EffectCoverflow]}
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={1.2}
                        loop={true}
                        loopAdditionalSlides={5}
                        autoplay={{
                            delay: 2800,
                            disableOnInteraction: false,
                        }}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1400: {
                                slidesPerView: 3.5,
                            }
                        }}
                    >
                        {loopedData.map((item, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="testimonial-card">
                                    <div className="testimonial-avatar-wrapper" style={{ background: item.avatarBg }}>
                                        <span className="testimonial-avatar-fallback">{item.avatarText}</span>
                                    </div>
                                    <h4 className="testimonial-name">{item.name}</h4>
                                    <span className="testimonial-role">{item.role}</span>
                                    <div className="testimonial-card-quote-icon">“</div>
                                    <p className="testimonial-quote">{item.quote}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
