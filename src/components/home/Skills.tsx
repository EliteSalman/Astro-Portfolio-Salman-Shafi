'use client';

import { Server, Shield, Globe, Database, Terminal, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl heading-primary text-gradient-red mb-4 sm:mb-6">Technical Expertise</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-body mb-6 sm:mb-8">Technologies and tools I specialize in</p>
          <div className="divider-themed"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-7xl mx-auto">
          {[
            { icon: <Server size={40} />, title: "Web Servers", skills: ["Nginx", "Apache", "Caddy", "Litespeed"] },
            { icon: <Terminal size={40} />, title: "Operating Systems", skills: ["RHEL", "Debian", "Ubuntu", "Alpine"] },
            { icon: <Globe size={40} />, title: "DNS Management", skills: ["Technitium DNS", "BIND", "Knot", "PowerDNS"] },
            { icon: <Database size={40} />, title: "Infrastructure", skills: ["Server Management", "Backup Solutions", "Monitoring"] },
            { icon: <Shield size={40} />, title: "Security", skills: ["Network Security", "Firewall Management", "Access Control"] },
            { icon: <Zap size={40} />, title: "Performance", skills: ["System Optimization", "Resource Management", "Scalability"] }
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="card-premium p-6 sm:p-8 md:p-10 hover-lift group"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}
            >
              <div className="inline-flex p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-red-gradient text-white mb-6 sm:mb-8 shadow-glow-red group-hover:animate-glow transition-all duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">{skill.title}</h3>
              <ul className="space-y-2 sm:space-y-3">
                {skill.skills.map((item, idx) => (
                  <li key={idx} className="flex items-center text-body text-sm sm:text-base md:text-lg">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-primary rounded-full mr-3 sm:mr-4 animate-pulse flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
