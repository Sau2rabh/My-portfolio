"use client";
import React from "react";
import { motion } from "framer-motion";
import Typewriter from "@/components/ui/Typewriter";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import RobotCharacter from "@/components/ui/RobotCharacter";
import About from "@/components/ui/About";

import Skills from "@/components/ui/Skills";
import Contact from "@/components/ui/Contact";
import Footer from "@/components/ui/Footer";
import { ArrowRight, FileText, Github, Linkedin, Mail } from "lucide-react";
import { useLenis } from "@studio-freight/react-lenis";

export default function Home() {
  const lenis = useLenis();



  return (
    <main className="relative w-full overflow-x-hidden bg-black text-white selection:bg-neon-cyan selection:text-black">

      {/* HERO SECTION */}
      <section
        className="relative h-screen w-full flex items-center justify-center overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 15% 25%, rgba(0, 255, 200, 0.15), transparent 45%),
            radial-gradient(circle at 50% 100%, rgba(120, 0, 255, 0.15), transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 0%, #000 100%)
          `
        }}
      >


        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <AnimatedBackground />
          <RobotCharacter />
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-[1.5fr_0.8fr] gap-12 items-center h-full pointer-events-none">

          {/* LEFT: Text Content - Premium Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="pointer-events-auto relative z-10 p-6 md:p-14 lg:p-16 rounded-[2rem] bg-black/60 backdrop-blur-md border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(34,211,238,0.1)] transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_30px_60px_rgba(0,0,0,0.9),0_0_50px_rgba(34,211,238,0.2)] hover:border-white/30 group/card"
          >
            {/* Subtle Inner Glow */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Intro Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-base font-mono text-gray-300 tracking-wider uppercase">
                Hello, I&apos;m
              </span>
            </motion.div>

            {/* Name Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight"
            >
              Saurabh{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                Anand
              </span>
            </motion.h1>

            {/* Typewriter Role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-2 md:gap-3 text-lg md:text-2xl font-mono mb-8 min-h-[32px]"
            >
              <span className="text-gray-400 whitespace-nowrap">I am a</span>
              <div className="text-cyan-400 font-bold drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                <Typewriter
                  words={[
                    "Frontend Developer",
                    "QA Engineer"
                  ]}
                  cursorClassName="bg-cyan-400 w-[3px]"
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-400 max-w-xl text-base md:text-lg leading-relaxed mb-10 font-light"
            >
              Develop <span className="text-gray-200 font-medium">responsive React web applications</span>, integrate <span className="text-gray-200 font-medium">REST APIs</span>, optimize performance and usability, and ensure quality through <span className="text-gray-200 font-medium">testing and bug fixes</span>.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-5"
            >
              {/* Resume Button */}
              <a
                href="https://drive.google.com/file/d/1OR3fMds67PkkBRHL8_P-ywE33hMwQmWE/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-bold text-base md:text-lg shadow-lg shadow-cyan-500/25 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  My Resume <FileText size={20} className="group-hover:text-cyan-300 transition-colors" />
                </span>
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-6 mt-12 pl-1"
            >
              <a href="https://github.com/Sau2rabh" target="_blank" rel="noopener noreferrer" className="group">
                <Github className="text-gray-500 w-6 h-6 group-hover:text-white group-hover:scale-110 transition-all cursor-pointer group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
              </a>
              <a href="https://www.linkedin.com/in/saurabh-anand-113271249" target="_blank" rel="noopener noreferrer" className="group">
                <Linkedin className="text-gray-500 w-6 h-6 group-hover:text-cyan-400 group-hover:scale-110 transition-all cursor-pointer group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
              </a>
              <a href="mailto:royalking6993@gmail.com" className="group">
                <Mail className="text-gray-500 w-6 h-6 group-hover:text-red-500 group-hover:scale-110 transition-all cursor-pointer group-hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
              </a> 
            </motion.div>
          </motion.div>

          {/* RIGHT: Empty for 3D Model (Handled by Scene background, but we can add a spacer if needed) */}
          <div className="hidden md:block">
            {/* The 3D model is positioned absolutely/in canvas, so this div just reserves grid space if needed, 
                   but since the 3D scene is 'absolute inset-0', the model is placed via R3F coordinates. 
                   We position the model to the right in HeroModel.tsx */}
          </div>
        </div>
      </section>

      <About />

      <Skills />
      <Contact />
      <Footer />
    </main >
  );
}
