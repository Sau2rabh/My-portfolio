import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { useLenis } from "@studio-freight/react-lenis";

export default function Footer() {
    const lenis = useLenis();

    const scrollToTop = () => {
        lenis?.scrollTo(0, { duration: 1.5 });
    };

    return (
        <footer className="relative bg-[#050505] py-16 border-t border-white/5 overflow-hidden">
            {/* Subtle Gradient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-1 font-mono font-bold text-2xl tracking-tighter mb-4">
                            <span className="text-white">Saurabh</span>
                            <span className="text-cyan-400">_</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Portfolio</span>
                        </div>
                        <p className="text-gray-500 max-w-xs leading-relaxed">
                            Crafting scalable digital experiences with precision and modern technology.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        {[
                            { icon: Github, href: "https://github.com/Sau2rabh" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/saurabh-anand-113271249" },
                            { icon: Mail, href: "mailto:royalking6993@gmail.com" }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/5 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-600 text-sm font-mono">
                        © {new Date().getFullYear()} Saurabh Anand. Built with dedication and creativity.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300"
                    >
                        <span className="text-xs font-mono uppercase tracking-widest">Back to top</span>
                        <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
