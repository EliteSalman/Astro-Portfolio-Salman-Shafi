'use client';

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Server, Shield, Globe, MapPin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-background py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-repeat bg-[length:60px_60px]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f5255' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 text-center lg:text-left"
          >

            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Hi, I&apos;m{" "}
                <span className="text-gradient-red">Salman Shafi</span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light">
                System Administrator
              </h2>
            </div>

            <p className="text-base sm:text-lg text-text-body-color leading-relaxed max-w-xl mx-auto lg:mx-0">
              Crafting robust, scalable infrastructure solutions with expertise in DNS management,
              server administration, and enterprise-level system optimization from Bogura, Bangladesh.
            </p>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-6">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-foreground mb-1">1+</div>
                <div className="text-xs sm:text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-foreground mb-1">10+</div>
                <div className="text-xs sm:text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-foreground mb-1">24/7</div>
                <div className="text-xs sm:text-sm text-gray-400">Support Available</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
              <Link
                href="#contact"
                className="btn-primary hover-lift shadow-glow-red px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg"
              >
                Get In Touch
                <ArrowRight className="ml-2" size={18} />
              </Link>

              <Link
                href="#about"
                className="btn-secondary px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg"
              >
                Learn More
              </Link>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-border-color">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={14} />
                <span className="text-xs sm:text-sm">Bogura, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail size={14} />
                <span className="text-xs sm:text-sm">Available for hire</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            <div className="relative">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-2xl"></div>

                <div className="relative z-10 w-full h-full rounded-full bg-card-background border-2 sm:border-4 border-border-color p-2 sm:p-3 shadow-xl">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="/photo.webp"
                      alt="Salman Shafi - System Administrator"
                      width={320} height={320}
                      className="w-full h-full object-cover object-center rounded-full"
                      priority fetchPriority="high"
                    />
                  </div>
                </div>

                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-8 h-8 sm:w-12 sm:h-12 bg-input-background rounded-lg border-2 border-primary/50 flex items-center justify-center shadow-lg">
                  <Server size={16} className="text-primary sm:w-5 sm:h-5" />
                </div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-8 h-8 sm:w-12 sm:h-12 bg-input-background rounded-lg border-2 border-primary/50 flex items-center justify-center shadow-lg">
                  <Globe size={16} className="text-primary sm:w-5 sm:h-5" />
                </div>
                <div className="absolute top-1/2 -left-4 sm:-left-6 w-6 h-6 sm:w-10 sm:h-10 bg-input-background rounded-lg border-2 border-primary/50 flex items-center justify-center shadow-lg">
                  <Shield size={12} className="text-primary sm:w-4 sm:h-4" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
