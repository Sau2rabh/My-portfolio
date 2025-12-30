"use client";
import React, { useRef, useLayoutEffect } from "react";
import Section from "./Section";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Github, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import StarField from "./StarField";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "AI Trip Planner",
        desc: "Smart travel itineraries generated via Gemini AI. Features budget tracking, route optimization, and real-time destination data.",
        tech: ["MERN Stack", "Gemini API", "Google Maps", "Shadcn UI"],
        color: "from-cyan-500 to-blue-600",
        link: "https://ai-world-routes.vercel.app/",
        github: "https://github.com/sonukumarsaw12/Ai_World_Routes",
        image: "https://lh3.googleusercontent.com/d/10ey-Mp6U9QHGrG-uQHOTaTaIzJrRld0D"
    },
    {
        title: "Fitness AI Coach",
        desc: "Personalized workout plans and real-time progress tracking powered by Machine Learning. Includes voice-guided support.",
        tech: ["Python", "ML", "Tkinter", "OpenCV"],
        color: "from-purple-500 to-indigo-600",
        link: "https://github.com/sonukumarsaw12/Fitness-AI-Coach",
        github: "https://github.com/sonukumarsaw12/Fitness-AI-Coach",
        image: "https://lh3.googleusercontent.com/d/1GLItbaNOY6hG9iwBUevwrGNAhwP05Mks"
    },
    {
        title: "Skill_Swap Platform",
        desc: "Skill Swap enables real-time skill exchange through scheduling, chat,and video meetings.",
        tech: ["WebRTC", "Socket.io", "MERN", "MongoDB", "JWT"],
        color: "from-emerald-500 to-teal-600",
        link: "https://skill-swap-by-sonu.vercel.app/",
        github: "https://github.com/sonukumarsaw12/Skill_Swap_By_Sonu/tree/main",
        image: "https://lh3.googleusercontent.com/d/1U4v7DjjRKPgQ9I5ewRSzp7S18TXa9TUD"
    },
    {
        title: "Movie OTT Platform",
        desc: "Full-featured streaming experience with categories, search, and responsive player. Managed via custom MySQL database.",
        tech: ["HTML5", "CSS", "JS", "MySQL"],
        color: "from-red-500 to-pink-600",
        link: "https://tangerine-souffle-7eae56.netlify.app/",
        github: "https://github.com/sonukumarsaw12/Movie-OTT-Platform/tree/main",
        image: "https://lh3.googleusercontent.com/d/1t4J5spsBFZDSB0brxEFAJEXuV8VDYhYJ"
    },
    {
        title: "Glowify Ecommerce",
        desc: "Glowify is a modern full-stack e-commerce platform built using the MERN stack, featuring a user-friendly shopping experience and a powerful admin dashboard.",
        tech: ["MERN", "REACT-ROUTER", "JWT", "REDUX"],
        color: "from-blue-500 to-cyan-400",
        link: "https://shopping-full-stack-website.vercel.app/",
        github: "https://github.com/sonukumarsaw12/Shopping_Full_Stack_website?tab=readme-ov-file#glowify---ecommerce-website-with-admin-panel",
        image: "https://lh3.googleusercontent.com/d/11D366CzL2zqf0u3J8hpCi5O21mPdt7Gv"
    },
    {
        title: "Sweet Shop UI",
        desc: "A full-stack Sweet Shop Management System built using modern web technologies and following Test-Driven Development (TDD) principles.",
        tech: ["MERN", "JWT", "REST API", "REACT-ROUTER", "JEST"],
        color: "from-orange-400 to-yellow-600",
        link: "https://sweet-shop-sk.vercel.app/",
        github: "https://github.com/sonukumarsaw12/Sweet_Shop_Project",
        image: "https://lh3.googleusercontent.com/d/1VW66ToDIef9gaY_xZ7_9EN8I_Nb7LEfW"
    },
];

export default function Projects() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (!sectionRef.current || !triggerRef.current) return;

            const totalWidth = sectionRef.current.scrollWidth;
            const windowWidth = window.innerWidth;
            const scrollLength = totalWidth - windowWidth;

            gsap.fromTo(
                sectionRef.current,
                { x: 0 },
                {
                    x: -scrollLength,
                    ease: "none",
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        start: "top top",
                        end: () => `+=${scrollLength}`,
                        scrub: 1,
                        pin: true,
                        invalidateOnRefresh: true,
                    },
                }
            );

            // Refresh ScrollTrigger to ensure correct positions
            setTimeout(() => {
                ScrollTrigger.refresh();
            }, 100);
        }, triggerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={triggerRef} className="overflow-hidden bg-black">
            <Section id="projects" className="relative h-screen flex items-center overflow-hidden py-0">
                {/* 1. Star Background */}
                <StarField count={40} color="#00ffff" />

                {/* 2. Ambient Blows */}
                <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="absolute top-28 left-10 md:left-20 z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3"
                    >
                        <Code2 className="text-cyan-400" size={28} />
                        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-400 leading-tight">
                            Selected Projects
                        </h2>
                    </motion.div>
                </div>

                <div ref={sectionRef} className="flex gap-12 md:gap-20 pl-10 md:pl-20 pr-[20vw] items-center pt-[15vh] w-max">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative shrink-0">
                            <motion.div
                                whileHover={{ y: -15, scale: 1.01 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                className="relative w-[85vw] md:w-[480px] h-[65vh] bg-[#0a0a0a]/80 backdrop-blur-xl rounded-[2.5rem] border border-white/10 overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-pointer will-change-transform"
                            >
                                {/* Visual Preview */}
                                <div className={`h-1/2 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                                    {project.image ? (
                                        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                                                unoptimized
                                            />
                                        </div>
                                    ) : (
                                        <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-all duration-700 flex items-center justify-center">
                                            <span className="text-[12rem] font-black text-white/[0.03] group-hover:text-white/[0.08] transition-all duration-700 select-none">{index + 1}</span>
                                        </div>
                                    )}
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60" />

                                    {/* Animated Line */}
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                                </div>

                                {/* Content */}
                                <div className="p-10 flex flex-col h-1/2 justify-between">
                                    <div>
                                        <h3 className="text-3xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300 line-clamp-1">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 font-light line-clamp-3">
                                            {project.desc}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map(t => (
                                                <span key={t} className="text-[10px] font-mono px-3 py-1 bg-white/5 border border-white/5 rounded-full text-gray-400 hover:border-cyan-500/30 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-300">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex gap-6 pt-6 items-center">
                                        <motion.a
                                            href={project.link}
                                            whileHover={{ x: 3 }}
                                            className="flex items-center gap-2 text-xs font-bold tracking-widest text-white/70 hover:text-cyan-400 transition-colors uppercase"
                                        >
                                            Live Demo <ArrowUpRight size={14} />
                                        </motion.a>
                                        <motion.a
                                            href={project.github}
                                            whileHover={{ x: 3 }}
                                            className="flex items-center gap-2 text-xs font-bold tracking-widest text-white/70 hover:text-purple-400 transition-colors uppercase"
                                        >
                                            Github <Github size={14} />
                                        </motion.a>
                                    </div>
                                </div>

                                {/* Inner Border Glow */}
                                <div className="absolute inset-0 rounded-[2.5rem] border-2 border-white/0 group-hover:border-white/5 transition-colors duration-700 pointer-events-none" />
                            </motion.div>
                        </div>
                    ))}

                    {/* Final Spacer */}
                    <div className="w-[10vw]" />
                </div>
            </Section>
        </div>
    );
}
