'use client';

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl heading-primary text-gradient-red mb-4 sm:mb-6">Professional Journey</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-body mb-6 sm:mb-8">My experience in system administration and DNS management</p>
          <div className="divider-themed"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-12 sm:space-y-16">
            {[
              { title: "System Administrator", period: "Current Role", description: "Managing enterprise-level infrastructure with focus on reliability, security, and performance. Specialized in DNS server configuration and optimization.", skills: ["Server Management", "DNS Configuration", "Performance Optimization", "Security Implementation"], current: true },
              { title: "Web Server Specialist", period: "Previous Experience", description: "Configured and maintained high-performance web servers using Nginx and Apache. Implemented load balancing solutions and optimized server configurations.", skills: ["Nginx", "Apache", "Caddy", "Litespeed"], current: false },
              { title: "Linux Administrator", period: "Foundation Experience", description: "Built expertise in RHEL and Linux system administration, including system monitoring, backup solutions, and automated deployment processes.", skills: ["RHEL", "System Monitoring", "Automation"], current: false }
            ].map((job, index) => (
              <motion.div
                key={index}
                className={`relative pl-8 sm:pl-12 pb-6 sm:pb-8 ${index !== 2 ? 'border-l-2 sm:border-l-4 border-border-color' : ''}`}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }} viewport={{ once: true }}
              >
                <div className={`absolute left-0 top-0 w-4 h-4 sm:w-6 sm:h-6 rounded-full transform -translate-x-2 sm:-translate-x-3 ${job.current ? 'bg-primary shadow-glow-red animate-pulse' : 'bg-gray-600'}`}></div>

                <div className="card-premium p-6 sm:p-8 md:p-10 hover-lift">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 sm:mb-6">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 md:mb-0">{job.title}</h3>
                    <span className={`inline-flex px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold ${job.current ? 'bg-input-background text-red-400' : 'bg-input-background text-gray-300'}`}>
                      {job.period}
                    </span>
                  </div>

                  <p className="text-body mb-6 sm:mb-8 text-sm sm:text-base md:text-lg">{job.description}</p>

                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {job.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1.5 sm:px-4 sm:py-2 bg-input-background text-red-400 rounded-full text-xs sm:text-sm font-medium hover-scale">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
