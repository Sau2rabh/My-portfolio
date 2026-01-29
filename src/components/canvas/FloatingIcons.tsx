"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = [
    // Frontend Development
    { name: "HTML", color: "#E34F26" },
    { name: "CSS", color: "#1572B6" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "React.js", color: "#61DAFB" },
    
    // Backend & Database
    { name: "Node.js", color: "#339933" },
    { name: "MongoDB", color: "#47A248" },
    { name: "SQL", color: "#4479A1" },
    
    // Testing & QA
    { name: "Manual Testing", color: "#FF6B6B" },
    { name: "API Testing", color: "#FF8C42" },
    { name: "Postman", color: "#FF6C37" },
    
    // Developer Tools
    { name: "Git", color: "#F05032" },
    { name: "GitHub", color: "#ffffff" },
    { name: "Vercel", color: "#000000" },
    { name: "Power BI", color: "#F2C811" },
];

function SkillBalloon({ skill, index, total }: { skill: typeof skills[0]; index: number; total: number }) {
    const angle = (index / total) * 360;
    const radius = 150; // Reduced from 200 to prevent overlap
    
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="absolute"
            style={{
                left: '50%',
                top: '50%',
            }}
        >
            <motion.div
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{
                    transformOrigin: '0 0',
                }}
            >
                <div
                    style={{
                        transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
                    }}
                    className="relative"
                >
                    {/* Balloon Sphere */}
                    <div
                        className="relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center"
                        style={{
                            background: `radial-gradient(circle at 30% 30%, ${skill.color}dd, ${skill.color}66)`,
                            boxShadow: `
                                0 0 20px ${skill.color}88,
                                inset -5px -5px 15px rgba(0,0,0,0.3),
                                inset 5px 5px 15px rgba(255,255,255,0.3)
                            `,
                        }}
                    >
                        {/* Skill Name Tag */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                            <div className="bg-white/10 backdrop-blur-md text-white/90 px-3 py-1 rounded-full text-xs font-bold border border-white/20 shadow-lg">
                                {skill.name}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function FloatingIcons() {
    return (
        <div className="w-full h-[400px] md:h-[500px] relative z-0 flex items-center justify-center">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
            
            {/* Central Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-cyan-500/20 rounded-full blur-3xl" />
            
            {/* Orbital Path Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-[300px] h-[300px] border border-white/5 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] border border-cyan-500/10 rounded-full" />
            </div>
            
            {/* Floating Skill Balloons in Orbit */}
            <div className="relative w-full h-full">
                {skills.map((skill, index) => (
                    <SkillBalloon key={skill.name} skill={skill} index={index} total={skills.length} />
                ))}
            </div>
        </div>
    );
}
