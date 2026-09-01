"use client";

import { Code2 } from "lucide-react";

const programmingLanguages = [
    "C",
    "C++",
    "Assembly",
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "SQL",
    "Python"
];

function Skills() {
    return (
        <div className="glass-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <Code2 size={24} color="var(--accent)" />
                <h3 style={{ fontSize: '1.5rem', color: 'var(--accent)', margin: 0 }}>Skills</h3>
            </div>
            <div className="bubble-container">
                {programmingLanguages.map((lang) => (
                    <span key={lang} className="bubble">
                        {lang}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Skills;
