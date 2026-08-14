import React, { useState, useEffect } from "react";

function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisible = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisible);
        return () => window.removeEventListener("scroll", toggleVisible);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <button
            type="button"
            aria-label="Back to Top"
            onClick={scrollToTop}
            style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                background: 'rgba(10, 22, 40, 0.68)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(197, 160, 89, 0.45)',
                boxShadow: 'none',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 9990,
                opacity: visible ? 1 : 0,
                visibility: visible ? 'visible' : 'hidden',
                transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                outline: 'none'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.border = '1px solid var(--theme-colour)';
                e.currentTarget.style.color = 'var(--theme-colour)';
                e.currentTarget.style.background = 'rgba(10, 22, 40, 0.88)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.border = '1px solid rgba(197, 160, 89, 0.45)';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.background = 'rgba(10, 22, 40, 0.68)';
            }}
        >
            <i className="fa-solid fa-chevron-up" style={{ fontSize: '16px' }} />
        </button>
    );
}

export default ScrollToTop;
