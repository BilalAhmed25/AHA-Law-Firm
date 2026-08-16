import React, { useState } from "react";

function GlobalPresenceMap() {
    // Default selected location is Dubai
    const [activeLocationId, setActiveLocationId] = useState("dubai");

    const locations = [
        {
            id: "ajman",
            city: "Ajman",
            country: "United Arab Emirates",
            role: "Global Headquarters",
            badge: "GLOBAL HQ",
            isHq: true,
            coordinates: { x: 38, y: 52 }, // % on zoomed regional SVG stage
            description: "Our central executive headquarters leading regional strategy, judicial litigation, and international governance.",
            icon: "fa-building-columns"
        },
        {
            id: "dubai",
            city: "Dubai",
            country: "United Arab Emirates",
            role: "Strategic UAE Franchise",
            badge: "FRANCHISE",
            isHq: false,
            coordinates: { x: 28, y: 58 }, // % on zoomed regional SVG stage
            description: "Commercial and financial legal hub serving enterprise clients, arbitration, and DIFC corporate matters.",
            icon: "fa-city"
        },
        {
            id: "china",
            city: "China Hub (Beijing)",
            country: "China",
            role: "Asia-Pacific Franchise",
            badge: "FRANCHISE",
            isHq: false,
            coordinates: { x: 74, y: 36 }, // % on zoomed regional SVG stage
            description: "Asia-Pacific international gateway driving cross-border investments, trade law, and foreign enterprise advisory.",
            icon: "fa-globe"
        }
    ];

    const activeLocation = locations.find((loc) => loc.id === activeLocationId) || locations[1];

    return (
        <section
            id="global-locations-section"
            className="gap"
            style={{
                background: "#F8FAFC",
                color: "#0A1628",
                padding: "90px 0 85px",
                position: "relative",
                overflow: "hidden",
                borderTop: "1px solid #E2E8F0",
                borderBottom: "1px solid #E2E8F0"
            }}
        >
            {/* Ambient Accent Glow */}
            <div
                style={{
                    position: "absolute",
                    top: "-150px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "900px",
                    height: "500px",
                    background: "radial-gradient(circle, rgba(197, 160, 89, 0.08) 0%, rgba(248, 250, 252, 0) 70%)",
                    pointerEvents: "none",
                    zIndex: 1
                }}
            />

            {/* Standard Bootstrap Container matching other website sections */}
            <div className="container" style={{ position: "relative", zIndex: 2 }}>
                {/* Section Header */}
                <div className="row justify-content-center text-center mb-5">
                    <div className="col-lg-8">
                        <span
                            style={{
                                color: "var(--theme-colour, #C5A059)",
                                fontWeight: "700",
                                letterSpacing: "2.5px",
                                textTransform: "uppercase",
                                fontSize: "13px",
                                display: "inline-block",
                                marginBottom: "12px",
                                padding: "6px 18px",
                                borderRadius: "30px",
                                background: "rgba(197, 160, 89, 0.12)",
                                border: "1px solid rgba(197, 160, 89, 0.3)"
                            }}
                        >
                            Global Presence Network
                        </span>
                        <h2
                            style={{
                                color: "#0A1628",
                                fontWeight: "800",
                                fontSize: "38px",
                                lineHeight: "1.25",
                                marginTop: "8px"
                            }}
                        >
                            Our 3 Strategic Locations
                        </h2>
                        <p
                            style={{
                                color: "#64748B",
                                fontSize: "16px",
                                marginTop: "14px",
                                lineHeight: "26px",
                                maxWidth: "680px",
                                marginLeft: "auto",
                                marginRight: "auto"
                            }}
                        >
                            Headquartered in <strong style={{ color: "var(--theme-colour, #C5A059)" }}>Ajman</strong>, with strategic operational franchises in <strong style={{ color: "#0A1628" }}>Dubai</strong> and <strong style={{ color: "#0A1628" }}>China</strong>.
                        </p>
                    </div>
                </div>

                {/* ZOOMED REGIONAL LIGHT THEME MAP STAGE */}
                <div className="row justify-content-center mb-5">
                    <div className="col-12">
                        <div
                            style={{
                                background: "#FFFFFF",
                                borderRadius: "24px",
                                border: "1px solid #E2E8F0",
                                padding: "28px",
                                position: "relative",
                                overflow: "hidden",
                                boxShadow: "0 20px 50px rgba(10, 22, 40, 0.07)"
                            }}
                        >
                            {/* Map Canvas Header Bar with Right-Aligned Badges */}
                            <div
                                style={{
                                    display: "flex",
                                    justify: "space-between",
                                    alignItems: "center",
                                    marginBottom: "20px",
                                    flexWrap: "wrap",
                                    gap: "12px"
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    <div
                                        style={{
                                            width: "12px",
                                            height: "12px",
                                            borderRadius: "50%",
                                            background: "var(--theme-colour, #C5A059)",
                                            boxShadow: "0 0 10px rgba(197, 160, 89, 0.6)"
                                        }}
                                    />
                                    <span style={{ fontSize: "15px", fontWeight: "700", color: "#0A1628" }}>
                                        Regional Zoomed Network View (UAE & East Asia)
                                    </span>
                                </div>

                                {/* Right-Aligned Badges */}
                                <div style={{ display: "flex", gap: "12px", alignItems: "center", marginLeft: "auto" }}>
                                    <span
                                        style={{
                                            background: "rgba(197, 160, 89, 0.15)",
                                            color: "var(--theme-colour, #C5A059)",
                                            border: "1px solid rgba(197, 160, 89, 0.5)",
                                            fontSize: "11px",
                                            fontWeight: "800",
                                            padding: "5px 14px",
                                            borderRadius: "20px",
                                            letterSpacing: "0.5px"
                                        }}
                                    >
                                        Ajman: GLOBAL HQ
                                    </span>
                                    <span
                                        style={{
                                            background: "rgba(10, 22, 40, 0.08)",
                                            color: "#0A1628",
                                            border: "1px solid rgba(10, 22, 40, 0.25)",
                                            fontSize: "11px",
                                            fontWeight: "800",
                                            padding: "5px 14px",
                                            borderRadius: "20px",
                                            letterSpacing: "0.5px"
                                        }}
                                    >
                                        Dubai & China: FRANCHISE
                                    </span>
                                </div>
                            </div>

                            {/* Light Theme Zoomed Map Canvas */}
                            <div
                                style={{
                                    position: "relative",
                                    width: "100%",
                                    height: "440px",
                                    borderRadius: "20px",
                                    background: "#F1F5F9",
                                    border: "1px solid #CBD5E1",
                                    overflow: "hidden"
                                }}
                            >
                                {/* Light Mode Grid Matrix */}
                                <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0, opacity: 0.35 }}>
                                    <defs>
                                        <pattern id="lightMapGrid" width="36" height="36" patternUnits="userSpaceOnUse">
                                            <path d="M 36 0 L 0 0 0 36" fill="none" stroke="#94A3B8" strokeWidth="0.5" strokeDasharray="2 2" />
                                            <circle cx="36" cy="36" r="1.2" fill="#64748B" />
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" fill="url(#lightMapGrid)" />
                                </svg>

                                {/* Zoomed Regional Map Silhouette SVG (Middle East & Asia Spotlight) */}
                                <svg
                                    viewBox="0 0 1000 500"
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        opacity: 0.85
                                    }}
                                >
                                    {/* Arabian Peninsula & Gulf Region zoomed vector outline */}
                                    <path
                                        d="M 220 220 Q 280 200 340 240 Q 380 270 360 320 Q 320 370 260 350 Q 200 320 220 220 Z"
                                        fill="#E2E8F0"
                                        stroke="#94A3B8"
                                        strokeWidth="1.5"
                                    />

                                    {/* Middle East & Indian Ocean Coastline */}
                                    <path
                                        d="M 340 230 C 400 210, 480 220, 520 250 C 580 290, 640 240, 700 200 C 760 170, 840 180, 880 230 C 920 280, 860 360, 780 340 C 700 320, 600 350, 520 320 Z"
                                        fill="#E2E8F0"
                                        stroke="#94A3B8"
                                        strokeWidth="1.5"
                                    />

                                    {/* East Asia / China Regional Outline */}
                                    <path
                                        d="M 680 140 C 750 130, 850 150, 880 220 C 900 270, 820 320, 760 300 C 720 280, 650 200, 680 140 Z"
                                        fill="rgba(197, 160, 89, 0.12)"
                                        stroke="rgba(197, 160, 89, 0.5)"
                                        strokeWidth="1.8"
                                    />

                                    {/* Curved Connecting Routes: Ajman (38%, 52%) to Dubai (28%, 58%) and China (74%, 36%) */}
                                    <path
                                        d="M 380 260 Q 330 275 280 290"
                                        fill="none"
                                        stroke="#C5A059"
                                        strokeWidth="3"
                                        strokeDasharray="5 5"
                                    />
                                    <path
                                        d="M 380 260 Q 560 140 740 180"
                                        fill="none"
                                        stroke="#0A1628"
                                        strokeWidth="3"
                                        strokeDasharray="6 6"
                                    />
                                </svg>

                                {/* Animated Zoomed Map Pins */}
                                {locations.map((loc) => {
                                    const isActive = loc.id === activeLocationId;
                                    return (
                                        <div
                                            key={loc.id}
                                            onClick={() => setActiveLocationId(loc.id)}
                                            style={{
                                                position: "absolute",
                                                left: `${loc.coordinates.x}%`,
                                                top: `${loc.coordinates.y}%`,
                                                transform: "translate(-50%, -50%)",
                                                cursor: "pointer",
                                                zIndex: isActive ? 10 : 5,
                                                transition: "all 0.3s ease"
                                            }}
                                        >
                                            {/* Pulsing Radar Ring */}
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    top: "50%",
                                                    left: "50%",
                                                    transform: "translate(-50%, -50%)",
                                                    width: isActive ? "68px" : "44px",
                                                    height: isActive ? "68px" : "44px",
                                                    borderRadius: "50%",
                                                    background: loc.isHq
                                                        ? "rgba(197, 160, 89, 0.3)"
                                                        : "rgba(10, 22, 40, 0.18)",
                                                    border: loc.isHq ? "2px solid #C5A059" : "2px solid #0A1628",
                                                    animation: isActive ? "pulseZoomedEffect 2s infinite" : "none",
                                                    pointerEvents: "none"
                                                }}
                                            />

                                            {/* Pin Head Marker */}
                                            <div
                                                style={{
                                                    width: isActive ? "44px" : "32px",
                                                    height: isActive ? "44px" : "32px",
                                                    borderRadius: "50%",
                                                    background: loc.isHq
                                                        ? "linear-gradient(135deg, #C5A059 0%, #8C6A28 100%)"
                                                        : "linear-gradient(135deg, #0A1628 0%, #1E293B 100%)",
                                                    border: "3px solid #FFFFFF",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    boxShadow: isActive
                                                        ? loc.isHq
                                                            ? "0 0 25px rgba(197, 160, 89, 0.8)"
                                                            : "0 0 25px rgba(10, 22, 40, 0.5)"
                                                        : "0 6px 15px rgba(10, 22, 40, 0.25)",
                                                    transition: "all 0.3s ease"
                                                }}
                                            >
                                                <i
                                                    className={loc.isHq ? "fa-solid fa-crown" : "fa-solid fa-location-dot"}
                                                    style={{
                                                        fontSize: isActive ? "18px" : "13px",
                                                        color: "#FFFFFF"
                                                    }}
                                                />
                                            </div>

                                            {/* Pin Label Tag with Right-Aligned Badge */}
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    top: isActive ? "-46px" : "-36px",
                                                    left: "50%",
                                                    transform: "translateX(-50%)",
                                                    whiteSpace: "nowrap",
                                                    background: isActive ? "#0A1628" : "#FFFFFF",
                                                    color: isActive ? "#FFFFFF" : "#0A1628",
                                                    fontSize: "12.5px",
                                                    fontWeight: "800",
                                                    padding: "5px 14px",
                                                    borderRadius: "20px",
                                                    border: isActive
                                                        ? "1.5px solid #C5A059"
                                                        : "1px solid #CBD5E1",
                                                    boxShadow: "0 6px 20px rgba(10, 22, 40, 0.15)",
                                                    transition: "all 0.3s ease",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "8px"
                                                }}
                                            >
                                                <span>{loc.city}</span>
                                                <span
                                                    style={{
                                                        fontSize: "9.5px",
                                                        padding: "2px 7px",
                                                        borderRadius: "10px",
                                                        background: loc.isHq ? "#C5A059" : (isActive ? "#38BDF8" : "#0A1628"),
                                                        color: loc.isHq ? "#0A1628" : "#FFFFFF",
                                                        fontWeight: "800",
                                                        marginLeft: "auto"
                                                    }}
                                                >
                                                    {loc.badge}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}

                                {/* Bottom Info Strip */}
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: "16px",
                                        left: "20px",
                                        right: "20px",
                                        display: "flex",
                                        justify: "space-between",
                                        alignItems: "center",
                                        background: "rgba(255, 255, 255, 0.92)",
                                        backdropFilter: "blur(8px)",
                                        padding: "10px 18px",
                                        borderRadius: "12px",
                                        border: "1px solid #CBD5E1",
                                        fontSize: "13px",
                                        color: "#475569"
                                    }}
                                >
                                    <span>
                                        Active Location: <strong style={{ color: "#0A1628" }}>{activeLocation.city} ({activeLocation.role})</strong>
                                    </span>
                                    <span style={{ fontSize: "12px", fontWeight: "600", color: "#64748B" }}>
                                        &nbsp;Click any location pin or card below to highlight
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3 Location Cards in Light Theme */}
                <div className="row g-4 justify-content-center">
                    {locations.map((loc) => {
                        const isActive = loc.id === activeLocationId;
                        return (
                            <div className="col-lg-4 col-md-6" key={loc.id}>
                                <div
                                    onClick={() => setActiveLocationId(loc.id)}
                                    style={{
                                        background: "#FFFFFF",
                                        borderRadius: "20px",
                                        border: isActive
                                            ? "2px solid var(--theme-colour, #C5A059)"
                                            : "1px solid #E2E8F0",
                                        padding: "28px",
                                        cursor: "pointer",
                                        transition: "all 0.3s ease",
                                        boxShadow: isActive
                                            ? "0 15px 35px rgba(197, 160, 89, 0.2)"
                                            : "0 6px 20px rgba(10, 22, 40, 0.04)",
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        justify: "space-between",
                                        position: "relative"
                                    }}
                                >
                                    <div>
                                        {/* Icon & Right-Aligned Badge */}
                                        <div
                                            style={{
                                                display: "flex",
                                                justify: "space-between",
                                                alignItems: "center",
                                                marginBottom: "18px"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: "46px",
                                                    height: "46px",
                                                    borderRadius: "12px",
                                                    background: loc.isHq
                                                        ? "rgba(197, 160, 89, 0.12)"
                                                        : "rgba(10, 22, 40, 0.06)",
                                                    border: loc.isHq
                                                        ? "1px solid rgba(197, 160, 89, 0.3)"
                                                        : "1px solid rgba(10, 22, 40, 0.15)",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    color: loc.isHq ? "var(--theme-colour, #C5A059)" : "#0A1628",
                                                    fontSize: "20px"
                                                }}
                                            >
                                                <i className={`fa-solid ${loc.icon}`} />
                                            </div>

                                            {/* Badge Aligned to Right Side */}
                                            <span
                                                style={{
                                                    fontSize: "11px",
                                                    fontWeight: "800",
                                                    padding: "4px 12px",
                                                    borderRadius: "20px",
                                                    background: loc.isHq ? "rgba(197, 160, 89, 0.15)" : "rgba(10, 22, 40, 0.08)",
                                                    color: loc.isHq ? "var(--theme-colour, #C5A059)" : "#0A1628",
                                                    border: loc.isHq ? "1px solid #C5A059" : "1px solid #0A1628",
                                                    letterSpacing: "0.5px",
                                                    marginLeft: "auto"
                                                }}
                                            >
                                                {loc.badge}
                                            </span>
                                        </div>

                                        <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#0A1628", marginBottom: "6px" }}>
                                            {loc.city}
                                        </h3>

                                        <div style={{ fontSize: "13px", color: loc.isHq ? "var(--theme-colour, #C5A059)" : "#0A1628", fontWeight: "700", marginBottom: "12px" }}>
                                            {loc.role} &bull; {loc.country}
                                        </div>

                                        <p style={{ fontSize: "14px", color: "#64748B", lineHeight: "22px", margin: 0 }}>
                                            {loc.description}
                                        </p>
                                    </div>

                                    <div
                                        style={{
                                            marginTop: "20px",
                                            paddingTop: "14px",
                                            borderTop: "1px solid #F1F5F9",
                                            display: "flex",
                                            alignItems: "center",
                                            justify: "space-between",
                                            fontSize: "13px",
                                            fontWeight: "700",
                                            color: isActive ? "var(--theme-colour, #C5A059)" : "#94A3B8"
                                        }}
                                    >
                                        <span>{isActive ? "Selected on Map" : "Click to view on Map"}</span>
                                        <i className="fa-solid fa-arrow-right" style={{ fontSize: "12px" }} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Animation Keyframes */}
            <style>{`
                @keyframes pulseZoomedEffect {
                    0% {
                        transform: translate(-50%, -50%) scale(0.8);
                        opacity: 0.95;
                    }
                    50% {
                        transform: translate(-50%, -50%) scale(1.45);
                        opacity: 0.35;
                    }
                    100% {
                        transform: translate(-50%, -50%) scale(1.75);
                        opacity: 0;
                    }
                }
            `}</style>
        </section>
    );
}

export default GlobalPresenceMap;
