"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Code2, ExternalLink } from "lucide-react";

const contactInfo = {
    email: "Marcoantoniopolo18@gmail.com",
    location: "Tacloban City, Leyte, Philippines",
    institution: "Visayas State University — DCST",
    githubUrl: "https://github.com/Ryuuu00",
};

function Contacts() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="contact"
            className={`glass-card scroll-section ${isVisible ? "is-visible" : ""}`}
        >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.6rem" }}>
                <Mail size={24} color="var(--accent)" />
                <h3 style={{ fontSize: "1.5rem", color: "var(--accent)", margin: 0 }}>Get In Touch</h3>
            </div>
            <p style={{ color: "#94a3b8", lineHeight: "1.5", fontSize: "0.95rem", marginBottom: "1.5rem" }}>
                Feel free to reach out for collaborations, projects, or just to say hello!
            </p>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: "1rem",
                }}
            >
                <div className="contact-card">
                    <div
                        style={{
                            padding: "0.7rem",
                            borderRadius: "10px",
                            background: "rgba(56, 189, 248, 0.12)",
                            border: "1px solid rgba(56, 189, 248, 0.25)",
                            color: "var(--accent)",
                            display: "flex",
                            flexShrink: 0,
                        }}
                    >
                        <Mail size={18} />
                    </div>
                    <div>
                        <div style={{ fontSize: "0.72rem", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>
                            Email
                        </div>
                        <div style={{ color: "#f8fafc", fontSize: "0.92rem", fontWeight: 500, wordBreak: "break-all" }}>
                            {contactInfo.email}
                        </div>
                    </div>
                </div>

                <a
                    href={contactInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card"
                    style={{ justifyContent: "space-between" }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                        <div
                            style={{
                                padding: "0.7rem",
                                borderRadius: "10px",
                                background: "rgba(167, 139, 250, 0.12)",
                                border: "1px solid rgba(167, 139, 250, 0.25)",
                                color: "#c4b5fd",
                                display: "flex",
                                flexShrink: 0,
                            }}
                        >
                            <Code2 size={18} />
                        </div>
                        <div>
                            <div style={{ fontSize: "0.72rem", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>
                                GitHub
                            </div>
                            <div style={{ color: "#f8fafc", fontSize: "0.92rem", fontWeight: 500 }}>
                                github.com/Ryuuu00
                            </div>
                        </div>
                    </div>
                    <ExternalLink size={15} color="#94a3b8" />
                </a>

                <div className="contact-card">
                    <div
                        style={{
                            padding: "0.7rem",
                            borderRadius: "10px",
                            background: "rgba(52, 211, 153, 0.12)",
                            border: "1px solid rgba(52, 211, 153, 0.25)",
                            color: "#34d399",
                            display: "flex",
                            flexShrink: 0,
                        }}
                    >
                        <MapPin size={18} />
                    </div>
                    <div>
                        <div style={{ fontSize: "0.72rem", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>
                            Location
                        </div>
                        <div style={{ color: "#f8fafc", fontSize: "0.92rem", fontWeight: 500 }}>
                            {contactInfo.location}
                        </div>
                        <div style={{ color: "#64748b", fontSize: "0.8rem" }}>
                            {contactInfo.institution}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contacts;