import React, { useState, useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function GlobalPresenceMap() {
    // Default selected location is Sharjah (HQ)
    const [activeLocationId, setActiveLocationId] = useState("sharjah");
    const mapContainerRef = useRef(null);
    const mapInstanceRef = useRef(null);
    const markersRef = useRef({});

    const locations = [
        {
            id: "sharjah",
            city: "Sharjah",
            country: "United Arab Emirates",
            role: "Global Headquarters",
            badge: "GLOBAL HQ",
            isHq: true,
            coordinates: { lat: 25.3463, lng: 55.4209 },
            zoomLevel: 11,
            labelPosition: "label-top-right",
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
            coordinates: { lat: 25.2048, lng: 55.2708 },
            zoomLevel: 11,
            labelPosition: "label-bottom-left",
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
            coordinates: { lat: 39.9042, lng: 116.4074 },
            zoomLevel: 6,
            labelPosition: "label-top",
            description: "Asia-Pacific international gateway driving cross-border investments, trade law, and foreign enterprise advisory.",
            icon: "fa-globe"
        }
    ];

    const activeLocation = locations.find((loc) => loc.id === activeLocationId) || locations[0];

    // Initialize Leaflet Map
    useEffect(() => {
        if (!mapContainerRef.current) return;

        // Prevent re-initialization if map already exists
        if (mapInstanceRef.current) {
            mapInstanceRef.current.remove();
        }

        // Center map to focus on UAE regional view so Sharjah & Dubai are clearly separated
        const initialCenter = [25.28, 55.35];
        const initialZoom = 9;

        const map = L.map(mapContainerRef.current, {
            center: initialCenter,
            zoom: initialZoom,
            minZoom: 3,
            maxZoom: 18,
            zoomControl: false,
            scrollWheelZoom: false
        });

        mapInstanceRef.current = map;

        // Custom Leaflet Zoom Control at top right
        L.control.zoom({ position: "topright" }).addTo(map);

        // CartoDB Voyager / Light Tiles for a clean, realistic, luxury aesthetic
        L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: "abcd",
            maxZoom: 19
        }).addTo(map);

        // Create curved connection lines from Sharjah HQ to Dubai and China
        const sharjahCoords = [locations[0].coordinates.lat, locations[0].coordinates.lng];
        const dubaiCoords = [locations[1].coordinates.lat, locations[1].coordinates.lng];
        const chinaCoords = [locations[2].coordinates.lat, locations[2].coordinates.lng];

        // Draw direct connection lines with dashed styling
        const uaeLine = L.polyline([sharjahCoords, dubaiCoords], {
            color: "#C5A059",
            weight: 3,
            dashArray: "6, 8",
            opacity: 0.9
        }).addTo(map);
        uaeLine.bindTooltip("Sharjah HQ ↔ Dubai Franchise", { sticky: true });

        // Curved control point for Sharjah -> Beijing line for realistic aviation arc
        const midLat = (sharjahCoords[0] + chinaCoords[0]) / 2 + 10;
        const midLng = (sharjahCoords[1] + chinaCoords[1]) / 2;
        const curvePoints = [];
        for (let t = 0; t <= 1; t += 0.05) {
            const lat = (1 - t) * (1 - t) * sharjahCoords[0] + 2 * (1 - t) * t * midLat + t * t * chinaCoords[0];
            const lng = (1 - t) * (1 - t) * sharjahCoords[1] + 2 * (1 - t) * t * midLng + t * t * chinaCoords[1];
            curvePoints.push([lat, lng]);
        }

        const chinaArc = L.polyline(curvePoints, {
            color: "#0A1628",
            weight: 3,
            dashArray: "8, 8",
            opacity: 0.75
        }).addTo(map);
        chinaArc.bindTooltip("Sharjah HQ ↔ China Hub Arc", { sticky: true });

        // Add Markers for each location
        locations.forEach((loc) => {
            const isHq = loc.isHq;

            // Custom HTML Marker Icon with directional offset positioning
            const customIcon = L.divIcon({
                className: "custom-map-pin-container",
                html: `
                    <div class="leaflet-pin-wrapper ${loc.id === activeLocationId ? "active" : ""}" id="pin-${loc.id}">
                        <div class="leaflet-pulse-ring ${isHq ? "hq" : "franchise"}"></div>
                        <div class="leaflet-pin-badge ${isHq ? "hq" : "franchise"}">
                            <i class="fa-solid ${isHq ? "fa-crown" : "fa-location-dot"}"></i>
                        </div>
                        <div class="leaflet-pin-label ${loc.labelPosition}">
                            <span class="city-name">${loc.city}</span>
                            <span class="badge-tag ${isHq ? "hq" : "franchise"}">${loc.badge}</span>
                        </div>
                    </div>
                `,
                iconSize: [40, 40],
                iconAnchor: [20, 20]
            });

            const marker = L.marker([loc.coordinates.lat, loc.coordinates.lng], { icon: customIcon }).addTo(map);

            // Marker Popup
            const popupContent = `
                <div style="font-family: inherit; padding: 4px;">
                    <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 6px;">
                        <strong style="color: #0A1628; font-size: 15px;">${loc.city}</strong>
                        <span style="background: ${isHq ? "#C5A059" : "#0A1628"}; color: #FFF; font-size: 10px; font-weight: 800; padding: 2px 8px; border-radius: 12px;">${loc.badge}</span>
                    </div>
                    <div style="font-size: 12px; color: #C5A059; font-weight: 700; margin-bottom: 6px;">${loc.role}</div>
                    <p style="font-size: 12px; color: #475569; margin: 0; line-height: 1.4;">${loc.description}</p>
                </div>
            `;
            marker.bindPopup(popupContent, { maxWidth: 260 });

            // Click listener on marker
            marker.on("click", () => {
                setActiveLocationId(loc.id);
            });

            markersRef.current[loc.id] = marker;
        });

        // Trigger map resize fix
        setTimeout(() => {
            map.invalidateSize();
        }, 200);

        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, []);

    // Handle Active Location Change (Camera FlyTo)
    const handleSelectLocation = (locId) => {
        setActiveLocationId(locId);
        const loc = locations.find((l) => l.id === locId);
        if (loc && mapInstanceRef.current) {
            mapInstanceRef.current.flyTo([loc.coordinates.lat, loc.coordinates.lng], loc.zoomLevel, {
                duration: 1.5,
                easeLinearity: 0.25
            });

            // Open marker popup after transition
            if (markersRef.current[locId]) {
                setTimeout(() => {
                    markersRef.current[locId].openPopup();
                }, 1200);
            }
        }
    };

    // Fit map bounds to view all 3 locations
    const handleFitAllLocations = () => {
        if (mapInstanceRef.current) {
            const bounds = L.latLngBounds(locations.map((loc) => [loc.coordinates.lat, loc.coordinates.lng]));
            mapInstanceRef.current.fitBounds(bounds, { padding: [60, 60], duration: 1.2 });
        }
    };

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
                            Headquartered in <strong style={{ color: "var(--theme-colour, #C5A059)" }}>Sharjah</strong>, with strategic operational franchises in <strong style={{ color: "#0A1628" }}>Dubai</strong> and <strong style={{ color: "#0A1628" }}>China</strong>.
                        </p>
                    </div>
                </div>

                {/* REALISTIC INTERACTIVE LEAFLET MAP STAGE */}
                <div className="row justify-content-center mb-5">
                    <div className="col-12">
                        <div
                            style={{
                                background: "#FFFFFF",
                                borderRadius: "24px",
                                border: "1px solid #E2E8F0",
                                padding: "24px",
                                position: "relative",
                                overflow: "hidden",
                                boxShadow: "0 20px 50px rgba(10, 22, 40, 0.07)"
                            }}
                        >
                            {/* Map Bar Header */}
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBottom: "18px",
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
                                        Interactive Geographic Global Map
                                    </span>
                                </div>

                                <div style={{ display: "flex", gap: "12px", alignItems: "center", marginLeft: "auto" }}>
                                    <button
                                        onClick={handleFitAllLocations}
                                        style={{
                                            background: "#FFFFFF",
                                            color: "#0A1628",
                                            border: "1px solid #CBD5E1",
                                            fontSize: "12px",
                                            fontWeight: "700",
                                            padding: "6px 14px",
                                            borderRadius: "20px",
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "6px",
                                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                                            transition: "all 0.2s ease"
                                        }}
                                    >
                                        <i className="fa-solid fa-expand" style={{ color: "var(--theme-colour, #C5A059)" }} />
                                        Fit All Locations
                                    </button>
                                    <span
                                        style={{
                                            background: "rgba(197, 160, 89, 0.15)",
                                            color: "var(--theme-colour, #C5A059)",
                                            border: "1px solid rgba(197, 160, 89, 0.5)",
                                            fontSize: "11px",
                                            fontWeight: "800",
                                            padding: "6px 14px",
                                            borderRadius: "20px",
                                            letterSpacing: "0.5px"
                                        }}
                                    >
                                        Sharjah: GLOBAL HQ
                                    </span>
                                </div>
                            </div>

                            {/* Leaflet Canvas Mount Element */}
                            <div
                                style={{
                                    position: "relative",
                                    width: "100%",
                                    height: "480px",
                                    borderRadius: "18px",
                                    overflow: "hidden",
                                    border: "1px solid #CBD5E1",
                                    zIndex: 1
                                }}
                            >
                                <div ref={mapContainerRef} style={{ width: "100%", height: "100%" }} />

                                {/* Bottom Floating Info Strip */}
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: "16px",
                                        left: "20px",
                                        right: "20px",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        background: "rgba(255, 255, 255, 0.94)",
                                        backdropFilter: "blur(10px)",
                                        padding: "12px 20px",
                                        borderRadius: "14px",
                                        border: "1px solid #CBD5E1",
                                        fontSize: "13px",
                                        color: "#475569",
                                        zIndex: 1000,
                                        boxShadow: "0 8px 24px rgba(10, 22, 40, 0.1)"
                                    }}
                                >
                                    <span>
                                        Active Location: <strong style={{ color: "#0A1628" }}>{activeLocation.city} ({activeLocation.role})</strong>
                                    </span>
                                    <span style={{ fontSize: "12px", fontWeight: "600", color: "#64748B" }}>
                                        <i className="fa-solid fa-hand-pointer" style={{ color: "#C5A059", marginRight: "6px" }} />
                                        Click map markers or cards below to fly to location
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3 Location Cards */}
                <div className="row g-4 justify-content-center">
                    {locations.map((loc) => {
                        const isActive = loc.id === activeLocationId;
                        return (
                            <div className="col-lg-4 col-md-6" key={loc.id}>
                                <div
                                    onClick={() => handleSelectLocation(loc.id)}
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

            {/* Custom Leaflet Pins CSS Styling */}
            <style>{`
                .custom-map-pin-container {
                    background: none;
                    border: none;
                }
                .leaflet-pin-wrapper {
                    position: relative;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                }
                .leaflet-pulse-ring {
                    position: absolute;
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    animation: pulseRing 2s infinite ease-out;
                    pointer-events: none;
                }
                .leaflet-pulse-ring.hq {
                    background: rgba(197, 160, 89, 0.25);
                    border: 2px solid #C5A059;
                }
                .leaflet-pulse-ring.franchise {
                    background: rgba(10, 22, 40, 0.18);
                    border: 2px solid #0A1628;
                }
                .leaflet-pin-badge {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #FFFFFF;
                    font-size: 14px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
                    border: 2px solid #FFFFFF;
                    position: relative;
                    z-index: 2;
                    transition: transform 0.3s ease;
                }
                .leaflet-pin-wrapper:hover .leaflet-pin-badge,
                .leaflet-pin-wrapper.active .leaflet-pin-badge {
                    transform: scale(1.25);
                }
                .leaflet-pin-badge.hq {
                    background: linear-gradient(135deg, #C5A059 0%, #8C6A28 100%);
                    box-shadow: 0 0 16px rgba(197, 160, 89, 0.7);
                }
                .leaflet-pin-badge.franchise {
                    background: linear-gradient(135deg, #0A1628 0%, #1E293B 100%);
                    box-shadow: 0 0 12px rgba(10, 22, 40, 0.4);
                }
                .leaflet-pin-label {
                    position: absolute;
                    white-space: nowrap;
                    background: #FFFFFF;
                    color: #0A1628;
                    font-size: 11px;
                    font-weight: 800;
                    padding: 3px 10px;
                    border-radius: 14px;
                    border: 1px solid #CBD5E1;
                    box-shadow: 0 4px 12px rgba(10, 22, 40, 0.12);
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    pointer-events: none;
                    z-index: 3;
                }
                .leaflet-pin-label.label-top-right {
                    top: -34px;
                    left: 24px;
                    transform: none;
                }
                .leaflet-pin-label.label-bottom-left {
                    top: 34px;
                    right: 18px;
                    left: auto;
                    transform: none;
                }
                .leaflet-pin-label.label-top {
                    top: -34px;
                    left: 50%;
                    transform: translateX(-50%);
                }
                .badge-tag.hq {
                    background: #C5A059;
                    color: #FFFFFF;
                    font-size: 9px;
                    padding: 1px 6px;
                    border-radius: 8px;
                }
                .badge-tag.franchise {
                    background: #0A1628;
                    color: #FFFFFF;
                    font-size: 9px;
                    padding: 1px 6px;
                    border-radius: 8px;
                }
                @keyframes pulseRing {
                    0% {
                        transform: scale(0.7);
                        opacity: 0.9;
                    }
                    70% {
                        transform: scale(1.5);
                        opacity: 0.2;
                    }
                    100% {
                        transform: scale(1.8);
                        opacity: 0;
                    }
                }
                .leaflet-popup-content-wrapper {
                    border-radius: 14px;
                    box-shadow: 0 10px 30px rgba(10, 22, 40, 0.15);
                    border: 1px solid #E2E8F0;
                }
            `}</style>
        </section>
    );
}

export default GlobalPresenceMap;
