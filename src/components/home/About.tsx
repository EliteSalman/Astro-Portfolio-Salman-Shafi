'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export default function About() {
  // Mechanical step-rendering variants typed for TypeScript
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0, transition: { duration: 0.05, ease: "linear" } }
  };

  return (
    <section id="about" className="py-24 bg-black border-b border-[#1e1e1e] font-mono scroll-mt-24">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Section Eyebrow with horizontal scroll safeguard */}
        <div className="text-sm font-medium text-[#a1a1aa] mb-12 flex items-center whitespace-nowrap overflow-x-auto no-scrollbar">
          <span className="text-green-500">salman@infra</span>
          <span className="text-white">:</span>
          <span className="text-blue-500">~</span>
          <span className="text-white ml-2">$ cat /etc/sysinfo/profile.conf</span>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-[#050505] border border-[#1e1e1e] p-6 md:p-10 text-sm md:text-base leading-relaxed"
        >
          <motion.div variants={item} className="mb-6">
            <span className="text-[#a1a1aa]"># Core Identity Configuration</span>
            <div className="mt-2">
              <span className="text-[#EE0000]">[profile]</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mt-2">
              <div className="col-span-3 text-[#555]">name</div>
              <div className="col-span-9 text-[#e5e5e5]">= "Salman Shafi"</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mt-1">
              <div className="col-span-3 text-[#555]">role</div>
              <div className="col-span-9 text-[#e5e5e5]">= "Unix/Linux Systems & Network Engineer"</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mt-1">
              <div className="col-span-3 text-[#555]">location</div>
              <div className="col-span-9 text-[#e5e5e5]">= "Bogura, Bangladesh"</div>
            </div>
          </motion.div>

          <motion.div variants={item} className="mb-6">
            <span className="text-[#a1a1aa]"># Operational Focus Areas</span>
            <div className="mt-2">
              <span className="text-[#EE0000]">[operations]</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mt-2">
              <div className="col-span-3 text-[#555]">primary</div>
              <div className="col-span-9 text-[#e5e5e5]">= "Infrastructure & Self-Hosting"</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mt-1">
              <div className="col-span-3 text-[#555]">speciality</div>
              <div className="col-span-9 text-[#e5e5e5]">= "Building highly secure, maintainable Linux systems from scratch."</div>
            </div>
          </motion.div>

          <motion.div variants={item}>
            <span className="text-[#a1a1aa]"># Professional Philosophy</span>
            <div className="mt-2">
              <span className="text-[#EE0000]">[core_values]</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mt-2">
              <div className="col-span-3 text-[#555]">community</div>
              <div className="col-span-9 text-[#e5e5e5]">= "Active contributor. Sharing knowledge increases knowledge."</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
