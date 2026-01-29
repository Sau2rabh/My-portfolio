"use client";
import React from "react";
import Section from "./Section";
import FloatingIcons from "../canvas/FloatingIcons";
import { motion } from "framer-motion";
import { Cpu, Layout, Server, Database, Terminal } from "lucide-react";
import StarField from "./StarField";

const skillCategories = [
    {
        title: "Frontend Development",
        icon: <Layout className="text-cyan-400" size={20} />,
        skills: ["HTML", "CSS", "JavaScript", "React.js"]
    },
    {
        title: "Web Development",
        icon: <Terminal className="text-blue-400" size={20} />,
        skills: ["Node.js", "HTML", "CSS", "JavaScript", "React.js"]
    },
    {
        title: "Database",
        icon: <Database className="text-emerald-400" size={20} />,
        skills: ["MongoDB", "SQL"]
    },
    {
        title: "Testing & QA",
        icon: <Server className="text-purple-400" size={20} />,
        skills: ["Manual Testing", "Test Case Writing", "Bug Reporting", "API Testing (Postman)", "Basic Knowledge of SDLC & STLC"]
    },
    {
        title: "Developer Tools",
        icon: <Cpu className="text-orange-400" size={20} />,
        skills: ["Vercel", "Power BI", "Git", "GitHub", "Postman"]
    }
];

export default function Skills() {
    return (
        <Section id="skills" className="relative overflow-hidden min-h-screen pt-24 pb-20">
            {/* 1. Star Background */}
            <StarField count={30} color="#ffffff" />

            {/* 2. Ambient Glows */}
            <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-3 mb-4"
                    >
                        <Cpu className="text-cyan-400" size={32} />
                        <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500">
                            Technical Skills
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg font-light"
                    >
                        A strong technical skill set covering full-stack development, core computer science concepts, and data analytics, built through academic learning and practical internship experience.
                    </motion.p>
                </div>

                {/* 3D Floating Icons Container */}
                <div className="h-[500px] md:h-[550px] relative mb-16 mt-8 py-12">
                    <FloatingIcons />
                </div>

                {/* Categorized Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-cyan-500/30 transition-all duration-500 group"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white/90">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 rounded-lg bg-black/40 border border-white/5 text-sm text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300 cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
