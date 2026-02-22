'use client';

import { Server, Shield, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl heading-primary text-gradient-red mb-4 sm:mb-6">About Me</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-body mb-6 sm:mb-8">Student & System Administrator</p>
          <div className="divider-themed"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }}
          >
            <div className="card-premium p-6 sm:p-8 md:p-10 hover-lift">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8">Professional Background</h3>
              <p className="text-body mb-6 sm:mb-8 text-base sm:text-lg">
                I&apos;m a dedicated student and system administration expert based in Bogura, Bangladesh.
                My passion lies in creating robust, scalable infrastructure solutions that drive business success.
              </p>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                <div className="text-center">
                  <div className="glass-dark p-4 sm:p-6 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 hover-scale">
                    <Globe className="text-primary mx-auto" size={28} />
                  </div>
                  <h4 className="font-semibold text-foreground text-base sm:text-lg">Remote On</h4>
                  <p className="text-body text-sm sm:text-base">Bogura, Bangladesh</p>
                </div>

                <div className="text-center">
                  <div className="glass-dark p-4 sm:p-6 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 hover-scale">
                    <Server className="text-primary mx-auto" size={28} />
                  </div>
                  <h4 className="font-semibold text-foreground text-base sm:text-lg">Focus</h4>
                  <p className="text-body text-sm sm:text-base">System Administration</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }}
          >
            <div className="space-y-6 sm:space-y-8 md:space-y-10">
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="bg-red-gradient p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-glow-red flex-shrink-0">
                  <Server className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-2 sm:mb-3">Infrastructure Management</h4>
                  <p className="text-body text-sm sm:text-base md:text-lg">Expert in managing complex server environments and enterprise infrastructure with focus on reliability and performance.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 sm:space-x-6">
                 <div className="bg-red-gradient p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-glow-red flex-shrink-0">
                  <Globe className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-2 sm:mb-3">DNS Optimization</h4>
                  <p className="text-body text-sm sm:text-base md:text-lg">Specialized in DNS server configuration, optimization, and troubleshooting using Technitium,BIND,Knot,Etc DNS.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 sm:space-x-6">
                 <div className="bg-red-gradient p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-glow-red flex-shrink-0">
                  <Shield className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-2 sm:mb-3">Security & Performance</h4>
                  <p className="text-body text-sm sm:text-base md:text-lg">Implementing robust security measures and performance optimization strategies for enterprise-grade systems.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
