"use client";

import { useEffect, useRef, useState } from "react";
import { FolderGit2, ExternalLink, Code2 } from "lucide-react";

const myProjects = [
    {
        id: 1,
        title: "NFC Scanner",
        description: "Makes use of NFC as a faster solution to identify students during logging of entry and exit.",
        tags: ["React", "TypeScript", "Tailwind CSS", "NFC", "Supabase"],
        role: "Developer",
        githubUrl: "https://github.com/Kamish76/hackathon-1",
    },
    {
        id: 2,
        title: "Cemetary Management System",
        description: "Automates tasks of cemetery administration such as reservations and payments.",
        tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
        liveDemoUrl: "https://cemetery-management-app-xth9.vercel.app",
        role: "Lead Developer",
        githubUrl: "https://github.com/Ryuuu00/cemetery-management-app",
    },
];

function Projects() {
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
            { threshold: 0.1 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="projects"
            className={`glass-card scroll-section ${isVisible ? "is-visible" : ""}`}
        >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.75rem" }}>
                <FolderGit2 size={26} color="var(--accent)" />
                <h3 style={{ fontSize: "1.6rem", color: "var(--accent)", margin: 0 }}>Projects</h3>
            </div>
            <p style={{ color: "#94a3b8", lineHeight: "1.6", fontSize: "1rem", marginBottom: "2rem" }}>
                Here are some of the projects I have worked on. Feel free to explore the code or live demos!
            </p>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "1.5rem",
                }}
            >
                {myProjects.map((project) => (
                    <div
                        key={project.id}
                        style={{
                            background: "rgba(255, 255, 255, 0.03)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                            borderRadius: "1rem",
                            padding: "1.5rem",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            gap: "1.25rem",
                            transition: "transform 0.3s ease, border-color 0.3s ease",
                        }}
                    >
                        <div>
                            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.6rem" }}>
                                <h4 style={{ fontSize: "1.25rem", color: "#f8fafc", margin: 0 }}>
                                    {project.title}
                                </h4>
                                {project.role && (
                                    <span
                                        style={{
                                            fontSize: "0.75rem",
                                            fontWeight: 600,
                                            padding: "0.2rem 0.6rem",
                                            borderRadius: "9999px",
                                            background: "rgba(167, 139, 250, 0.12)",
                                            border: "1px solid rgba(167, 139, 250, 0.3)",
                                            color: "#c4b5fd",
                                            letterSpacing: "0.02em",
                                        }}
                                    >
                                        {project.role}
                                    </span>
                                )}
                            </div>

                            <p style={{ color: "#94a3b8", fontSize: "0.92rem", lineHeight: "1.6", marginBottom: "1rem" }}>
                                {project.description}
                            </p>

                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        style={{
                                            fontSize: "0.75rem",
                                            padding: "0.2rem 0.6rem",
                                            borderRadius: "9999px",
                                            background: "rgba(56, 189, 248, 0.1)",
                                            border: "1px solid rgba(56, 189, 248, 0.25)",
                                            color: "#7dd3fc",
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div style={{ display: "flex", gap: "0.8rem", paddingTop: "0.5rem", borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.4rem",
                                        color: "#cbd5e1",
                                        fontSize: "0.85rem",
                                        textDecoration: "none",
                                        transition: "color 0.2s ease",
                                    }}
                                >
                                    <Code2 size={16} />
                                    Code
                                </a>
                            )}
                            {project.liveDemoUrl && (
                                <a
                                    href={project.liveDemoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.4rem",
                                        color: "var(--accent)",
                                        fontSize: "0.85rem",
                                        textDecoration: "none",
                                        transition: "color 0.2s ease",
                                    }}
                                >
                                    <ExternalLink size={16} />
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;