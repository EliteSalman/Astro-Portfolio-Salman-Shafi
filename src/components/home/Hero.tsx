'use client';

import { ArrowRight, MapPin, Server } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-black py-20 md:py-32 border-b border-[#1e1e1e]">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col items-start space-y-6">
          
          {/* Eyebrow Terminal Prompt */}
          <div className="text-sm md:text-base font-medium font-mono text-[#a1a1aa] flex items-center">
            <span className="text-green-500">salman@infra</span>
            <span className="text-white">:</span>
            <span className="text-blue-500">~</span>
            <span className="text-white">$ whoami</span>
          </div>
          
          {/* Main Heading with Blinking Cursor */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#e5e5e5] leading-tight flex items-center font-mono tracking-tight">
            <span className="inline-block w-4 sm:w-6 h-8 sm:h-12 bg-[#EE0000] mr-4 animate-blink"></span>
            Salman Shafi
          </h1>
          
          <h2 className="text-xl md:text-2xl text-[#a1a1aa] font-mono">
            Unix/Linux Systems & Network Engineer
          </h2>
          
          <p className="text-base md:text-lg text-[#888] leading-relaxed max-w-2xl font-mono mt-2">
            Focus on DIY infrastructure, from-scratch deployments, and building highly secure, self-hosted environments.
          </p>

          <div className="flex flex-wrap gap-4 pt-4 font-mono">
            <div className="flex items-center gap-2 text-[#a1a1aa] bg-[#111] border border-[#1e1e1e] px-3 py-1.5 text-sm">
              <MapPin size={14} className="text-[#EE0000]" />
              <span>Bogura, Bangladesh</span>
            </div>
            <div className="flex items-center gap-2 text-[#a1a1aa] bg-[#111] border border-[#1e1e1e] px-3 py-1.5 text-sm">
              <Server size={14} className="text-[#EE0000]" />
              <span>Self-Hosting & Infrastructure</span>
            </div>
          </div>

          {/* Stats: Sharp inline grid */}
          <div className="inline-grid grid-cols-3 divide-x divide-[#1e1e1e] border border-[#1e1e1e] mt-8 font-mono bg-[#0a0a0a]">
            <div className="px-6 py-4 text-center hover:bg-[#111] transition-colors">
              <div className="text-2xl font-bold text-[#e5e5e5]">2+</div>
              <div className="text-xs text-[#555] mt-1 uppercase tracking-wider">Years Exp</div>
            </div>
            <div className="px-6 py-4 text-center hover:bg-[#111] transition-colors">
              <div className="text-2xl font-bold text-[#e5e5e5]">20+</div>
              <div className="text-xs text-[#555] mt-1 uppercase tracking-wider">Projects</div>
            </div>
            <div className="px-6 py-4 text-center hover:bg-[#111] transition-colors">
              <div className="text-2xl font-bold text-[#e5e5e5]">24/7</div>
              <div className="text-xs text-[#555] mt-1 uppercase tracking-wider">Support</div>
            </div>
          </div>

          <div className="pt-8 font-mono">
            <a
              href="#contact"
              className="inline-flex items-center bg-[#EE0000] text-white px-8 py-4 font-bold hover:bg-white hover:text-black transition-colors"
            >
              INITIALISE_CONTACT
              <ArrowRight className="ml-2" size={18} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
