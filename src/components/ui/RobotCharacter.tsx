"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  shadow: string;
  duration: number;
  delay: number;
}

export default function RobotCharacter() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    // Generate sparkles on client-side only
    const generatedSparkles: Sparkle[] = Array.from({ length: 20 }, (_, i) => {
      const colorIndex = i % 3;
      const colors = ['#22d3ee', '#a855f7', '#ec4899'];
      const shadows = [
        'rgba(34,211,238,1)',
        'rgba(168,85,247,1)',
        'rgba(236,72,153,1)'
      ];
      
      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 2,
        color: colors[colorIndex],
        shadow: shadows[colorIndex],
        duration: Math.random() * 2 + 2,
        delay: Math.random() * 3,
      };
    });
    setSparkles(generatedSparkles);
  }, []);
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full flex items-center justify-center pointer-events-none overflow-hidden">
      {/* Vibrant Background Gradient Orbs */}
      <div className="absolute inset-0">
        {/* Purple Orb */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse-slow" />
        {/* Cyan Orb */}
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-cyan-500/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        {/* Pink Orb */}
        <div className="absolute top-1/2 right-1/2 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Robot Container with Float Animation */}
      <div className="relative animate-float z-10">
        {/* Animated Glow Rings */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/40 via-purple-500/40 to-pink-500/40 blur-2xl scale-150 animate-spin-slow" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-l from-purple-500/30 via-cyan-500/30 to-blue-500/30 blur-3xl scale-125 animate-pulse" />
        </div>
        
        {/* Main Glow Effect Behind Robot */}
        <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-cyan-400/30 via-purple-500/30 to-pink-500/30 rounded-full scale-150 animate-glow" />
        
        {/* Robot Image */}
        <div className="relative z-10">
          <Image
            src="/robot.png"
            alt="Robot Character"
            width={400}
            height={580}
            className="object-contain drop-shadow-[0_0_40px_rgba(139,92,246,0.6)] hover:drop-shadow-[0_0_60px_rgba(34,211,238,0.8)] transition-all duration-500 hover:scale-105"
            priority
          />
        </div>

        {/* Enhanced Sparkles Around Robot */}
        <div className="absolute inset-0">
          {sparkles.map((sparkle) => (
            <div
              key={`robot-sparkle-${sparkle.id}`}
              className="absolute rounded-full animate-robot-sparkle"
              style={{
                left: `${sparkle.x}%`,
                top: `${sparkle.y}%`,
                width: `${sparkle.size}px`,
                height: `${sparkle.size}px`,
                background: sparkle.color,
                animationDelay: `${sparkle.delay}s`,
                animationDuration: `${sparkle.duration}s`,
                boxShadow: `0 0 20px ${sparkle.shadow}`,
              }}
            />
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes robot-sparkle {
          0% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.5) rotate(180deg);
          }
          100% {
            opacity: 0;
            transform: scale(0) rotate(360deg);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes glow {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1.5);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.7);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-robot-sparkle {
          animation: robot-sparkle infinite ease-in-out;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
