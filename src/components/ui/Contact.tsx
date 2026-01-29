"use client";
import React, { useState, useRef } from "react";
import Section from "./Section";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, MessageSquare, AlertCircle } from "lucide-react";
import StarField from "./StarField";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const SERVICE_ID = "service_whvpewe";
            const TEMPLATE_ID = "template_9joc65j";
            const PUBLIC_KEY = "_LpaNxBKLZetqNzHi";

            const result = await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    name: formState.name,
                    email: formState.email,
                    message: formState.message,
                    title: `Portfolio Message from ${formState.name}`,
                    reply_to: formState.email,
                },
                PUBLIC_KEY
            );

            if (result.status === 200) {
                setStatus("success");
                setFormState({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Email Error:", error);
            setStatus("error");
        }
    };

    return (
        <Section id="contact" className="relative overflow-hidden min-h-screen flex items-center py-20">
            <StarField count={25} color="#ffffff" />

            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <MessageSquare className="text-cyan-400" size={32} />
                            <span className="text-cyan-400 font-mono tracking-widest uppercase text-sm">Get in touch</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                            Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Contact</span>
                        </h2>

                        <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-lg">
                            I’m open to internship and full-time opportunities, collaborations, and professional discussions. Feel free to reach out if you’d like to connect or learn more about my work.
                        </p>

                        <div className="space-y-6 mb-12">
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all duration-300">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest">Email Me</p>
                                    <p className="text-white font-medium">royalking6993@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            {[
                                { icon: Github, href: "https://github.com/Sau2rabh", color: "hover:text-white" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/saurabh-anand-113271249", color: "hover:text-blue-400" }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className={`p-4 bg-white/5 rounded-2xl border border-white/10 text-gray-400 transition-all duration-300 ${social.color} hover:bg-white/10 hover:border-white/20`}
                                >
                                    <social.icon size={24} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

                        <div className="relative bg-[#0a0a0a]/80 backdrop-blur-2xl p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 shadow-2xl">
                            {status === "success" ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-20"
                                >
                                    <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-cyan-500/30">
                                        <span className="text-cyan-400 text-4xl font-bold">✓</span>
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-2">Message Transmitted!</h3>
                                    <p className="text-gray-400">Your message has been successfully beamed to my inbox.</p>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="mt-8 text-cyan-400 hover:text-white transition-colors underline underline-offset-4"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            ) : (
                                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-mono uppercase tracking-tighter text-gray-400 ml-1">Full Name</label>
                                            <input
                                                type="text"
                                                name="from_name"
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white placeholder:text-gray-600 focus:border-cyan-500/50 focus:bg-white/10 focus:outline-none transition-all duration-300"
                                                placeholder="John Doe"
                                                value={formState.name}
                                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-mono uppercase tracking-tighter text-gray-400 ml-1">Email Address</label>
                                            <input
                                                type="email"
                                                name="from_email"
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white placeholder:text-gray-600 focus:border-cyan-500/50 focus:bg-white/10 focus:outline-none transition-all duration-300"
                                                placeholder="john@example.com"
                                                value={formState.email}
                                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-mono uppercase tracking-tighter text-gray-400 ml-1">Message</label>
                                        <textarea
                                            name="message"
                                            rows={5}
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white placeholder:text-gray-600 focus:border-cyan-500/50 focus:bg-white/10 focus:outline-none transition-all duration-300 resize-none"
                                            placeholder="Tell me about your vision..."
                                            value={formState.message}
                                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        />
                                    </div>

                                    {status === "error" && (
                                        <div className="flex items-center gap-2 text-red-500 text-sm bg-red-500/10 p-4 rounded-xl border border-red-500/20">
                                            <AlertCircle size={16} />
                                            <span>Failed to transmit. Please check your EmailJS setup.</span>
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === "submitting"}
                                        className="w-full group relative py-5 rounded-2xl font-bold text-lg transition-all duration-300 overflow-hidden disabled:opacity-50"
                                    >
                                        {/* Button Background & Border Glow */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white/30 group-hover:bg-white/50 transition-colors duration-300"></div>

                                        {/* Hover Overlay Glow */}
                                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                                        <span className="relative z-10 flex justify-center items-center gap-3 text-white transition-all duration-300 group-hover:tracking-widest">
                                            {status === "submitting" ? (
                                                <>
                                                    Transmitting Data...
                                                    <motion.div
                                                        animate={{ rotate: 360 }}
                                                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                                    >
                                                        <Send size={20} className="text-cyan-200" />
                                                    </motion.div>
                                                </>
                                            ) : (
                                                <>
                                                    Transmit Message
                                                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                                </>
                                            )}
                                        </span>
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
