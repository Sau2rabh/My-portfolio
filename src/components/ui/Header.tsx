"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { useLenis } from "@studio-freight/react-lenis";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredPath, setHoveredPath] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const lenis = useLenis();

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            lenis?.scrollTo(href, { offset: 0, duration: 1.5 });
            if (isOpen) setIsOpen(false);
        }
    };

    return (
        <React.Fragment>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={clsx(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out flex justify-center",
                    scrolled ? "pt-4" : "pt-6"
                )}
            >
                <div
                    className={clsx(
                        "flex justify-between items-center transition-all duration-500 border border-transparent",
                        scrolled
                            ? "w-[90%] md:w-[70%] max-w-4xl bg-black/70 backdrop-blur-xl backdrop-saturate-150 rounded-full px-8 py-3 border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                            : "w-full max-w-7xl px-6 bg-transparent"
                    )}
                >
                    {/* ANIMATED TEXT LOGO */}
                    <Link
                        href="/"
                        onClick={(e) => {
                            e.preventDefault();
                            lenis?.scrollTo(0, { duration: 1.5 });
                        }}
                        className="group relative flex items-center gap-0.5 font-mono font-bold text-2xl tracking-tighter"
                    >
                        <span className="text-white group-hover:text-neon-cyan transition-colors duration-300">Saurabh</span>
                        <span className="text-neon-cyan animate-pulse">_</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 group-hover:from-neon-cyan group-hover:to-neon-purple transition-all duration-300">Portfolio</span>
                    </Link>

                    {/* DESKTOP NAV - Sliding Magnetic Pill */}
                    <nav className="hidden md:flex items-center gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="relative px-5 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                                onMouseEnter={() => setHoveredPath(link.href)}
                                onMouseLeave={() => setHoveredPath(null)}
                            >
                                <span className="relative z-10">{link.name}</span>
                                {hoveredPath === link.href && (
                                    <motion.div
                                        layoutId="navbar-hover"
                                        className="absolute inset-0 rounded-full -z-10 bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(0,255,255,0.3)] backdrop-blur-sm"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                                    >
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/10 via-white/5 to-purple-500/10 opacity-100" />
                                    </motion.div>
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* MOBILE TOGGLE */}
                    <button
                        className="md:hidden text-white hover:text-neon-cyan transition-colors bg-white/5 p-2 rounded-full border border-white/5 hover:bg-white/10"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.header>

            {/* MOBILE MENU OVERLAY */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-24 left-4 right-4 z-40 md:hidden bg-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-2"
                    >
                        <nav className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="flex items-center justify-between px-6 py-4 text-lg text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all border border-transparent hover:border-white/5"
                                    onClick={(e) => handleNavClick(e, link.href)}
                                >
                                    {link.name}
                                    <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </React.Fragment>
    );
}
