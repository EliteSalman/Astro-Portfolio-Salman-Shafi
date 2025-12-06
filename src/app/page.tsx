'use client';

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Server, Shield, Globe, Database, Terminal, Zap, MapPin, Mail, Phone, Send, CheckCircle, AlertCircle, Loader } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus('success');
        setStatusMessage('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setFormStatus('error');
        setStatusMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
    }
  };

  // Auto-hide status message after 5 seconds
  useEffect(() => {
    if (formStatus === 'success' || formStatus === 'error') {
      const timer = setTimeout(() => {
        setFormStatus('idle');
        setStatusMessage('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [formStatus]);

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Salman Shafi",
    "jobTitle": "System Administrator & DNS Expert",
    "description": "Professional System Administrator and DNS Expert from Bogura, Bangladesh. Specialized in Nginx, Apache, RHEL, Technitium DNS, and NS1.",
    "url": "https://salmanshafi.net",
    "image": "https://salmanshafi.net/photo.webp",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bogura",
      "addressCountry": "Bangladesh"
    },
    "email": "hello@salmanshafi.net",
    "telephone": "+8801603161647",
    "knowsAbout": [
      "System Administration",
      "DNS Management",
      "Nginx",
      "Apache",
      "RHEL",
      "Technitium DNS",
      "NS1",
      "Server Management",
      "Infrastructure",
      "Web Server Configuration"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "sameAs": [
      "https://linkedin.com/in/salmanshafi",
      "https://github.com/salmanshafi"
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
            {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-repeat bg-[length:40px_40px] sm:bg-[length:60px_60px]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-32 h-32 sm:w-64 sm:h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-20 sm:top-40 right-10 sm:right-20 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 sm:bottom-20 left-1/3 w-24 h-24 sm:w-48 sm:h-48 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-6 text-center lg:text-left"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-50 rounded-full border border-blue-200">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-blue-700 text-xs sm:text-sm font-medium">Available for projects</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-2 sm:space-y-3">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Hi, I&apos;m{" "}
                  <span className="text-gradient-premium">
                    Salman Shafi
                  </span>
                </h1>
                <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light">
                  System Administrator & DNS Expert
                </h2>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Crafting robust, scalable infrastructure solutions with expertise in DNS management, 
                server administration, and enterprise-level system optimization from Bogura, Bangladesh.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-6">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">1+</div>
                  <div className="text-xs sm:text-sm text-gray-500">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">10+</div>
                  <div className="text-xs sm:text-sm text-gray-500">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-500">Support Available</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
                <Link
                  href="#contact"
                  className="btn-premium hover-lift shadow-glow px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg"
                >
                  Get In Touch
                  <ArrowRight className="ml-2" size={18} />
                </Link>
                
                <Link
                  href="#about"
                  className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-gray-300 rounded-xl text-gray-700 font-semibold text-base sm:text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300 text-center"
                >
                  Learn More
                </Link>
              </div>

              {/* Quick Contact */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 text-gray-500">
                  <MapPin size={14} />
                  <span className="text-xs sm:text-sm">Bogura, Bangladesh</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <Mail size={14} />
                  <span className="text-xs sm:text-sm">Available for hire</span>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Photo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end mt-8 lg:mt-0"
            >
              <div className="relative">
                {/* Main Photo Container */}
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-2xl"></div>
                  
                  {/* Photo Frame */}
                  <div className="relative z-10 w-full h-full rounded-full bg-white border-2 sm:border-4 border-gray-200 p-2 sm:p-3 shadow-xl">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      {/* Profile Photo */}
                                            <Image 
                        src="/photo.webp" 
                        alt="Salman Shafi - System Administrator & DNS Expert"
                        width={320}
                        height={320}
                        className="w-full h-full object-cover object-center rounded-full" 
                        priority
                      />
                    </div>
                  </div>

                  {/* Floating Elements around photo */}
                  <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-lg border-2 border-blue-200 flex items-center justify-center shadow-lg">
                    <Server size={16} className="text-blue-600 sm:w-5 sm:h-5" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-lg border-2 border-purple-200 flex items-center justify-center shadow-lg">
                    <Globe size={16} className="text-purple-600 sm:w-5 sm:h-5" />
                  </div>
                  <div className="absolute top-1/2 -left-4 sm:-left-6 w-6 h-6 sm:w-10 sm:h-10 bg-white rounded-lg border-2 border-cyan-200 flex items-center justify-center shadow-lg">
                    <Shield size={12} className="text-cyan-600 sm:w-4 sm:h-4" />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -z-10 top-8 sm:top-16 -left-8 sm:-left-16 w-16 h-16 sm:w-32 sm:h-32 bg-blue-500/10 rounded-full blur-xl"></div>
                <div className="absolute -z-10 bottom-8 sm:bottom-16 -right-8 sm:-right-16 w-24 h-24 sm:w-48 sm:h-48 bg-purple-500/10 rounded-full blur-xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl heading-premium mb-4 sm:mb-6">About Me</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-premium mb-6 sm:mb-8">Student & System Administration Expert</p>
            <div className="divider-premium"></div>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="card-premium p-6 sm:p-8 md:p-10 hover-lift">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Professional Background</h3>
                <p className="text-premium mb-6 sm:mb-8 text-base sm:text-lg">
                  I&apos;m a dedicated student and system administration expert based in Bogura, Bangladesh. 
                  My passion lies in creating robust, scalable infrastructure solutions that drive business success.
                </p>
                
                <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  <div className="text-center">
                    <div className="glass-effect p-4 sm:p-6 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 hover-scale">
                      <Globe className="text-blue-600 mx-auto" size={28} />
                    </div>
                    <h4 className="font-semibold text-gray-900 text-base sm:text-lg">Location</h4>
                    <p className="text-premium text-sm sm:text-base">Bogura, Bangladesh</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="glass-effect p-4 sm:p-6 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 hover-scale">
                      <Server className="text-blue-600 mx-auto" size={28} />
                    </div>
                    <h4 className="font-semibold text-gray-900 text-base sm:text-lg">Focus</h4>
                    <p className="text-premium text-sm sm:text-base">System Administration</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6 sm:space-y-8 md:space-y-10">
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="bg-premium-blue p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-glow animate-glow flex-shrink-0">
                    <Server className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">Infrastructure Management</h4>
                    <p className="text-premium text-sm sm:text-base md:text-lg">Expert in managing complex server environments and enterprise infrastructure with focus on reliability and performance.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="bg-premium-purple p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-glow-purple flex-shrink-0">
                    <Globe className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">DNS Optimization</h4>
                    <p className="text-premium text-sm sm:text-base md:text-lg">Specialized in DNS server configuration, optimization, and troubleshooting using Technitium DNS and NS1 platforms.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="bg-premium-gold p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-glow flex-shrink-0">
                    <Shield className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">Security & Performance</h4>
                    <p className="text-premium text-sm sm:text-base md:text-lg">Implementing robust security measures and performance optimization strategies for enterprise-grade systems.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl heading-premium mb-4 sm:mb-6">Technical Expertise</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-premium mb-6 sm:mb-8">Technologies and tools I specialize in</p>
            <div className="divider-premium"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-7xl mx-auto">
            {[
              {
                icon: <Server size={40} />,
                title: "Web Servers",
                skills: ["Nginx", "Apache", "Load Balancing", "SSL/TLS"],
                gradient: "bg-premium-blue"
              },
              {
                icon: <Terminal size={40} />,
                title: "Operating Systems",
                skills: ["RHEL", "Linux Administration", "Shell Scripting", "System Monitoring"],
                gradient: "bg-premium-gradient"
              },
              {
                icon: <Globe size={40} />,
                title: "DNS Management",
                skills: ["Technitium DNS", "NS1", "DNS Configuration", "Performance Tuning"],
                gradient: "bg-premium-purple"
              },
              {
                icon: <Database size={40} />,
                title: "Infrastructure",
                skills: ["Server Management", "Backup Solutions", "Monitoring", "Automation"],
                gradient: "bg-premium-gold"
              },
              {
                icon: <Shield size={40} />,
                title: "Security",
                skills: ["Network Security", "Firewall Management", "Access Control", "Compliance"],
                gradient: "bg-premium-blue"
              },
              {
                icon: <Zap size={40} />,
                title: "Performance",
                skills: ["System Optimization", "Resource Management", "Scalability", "Troubleshooting"],
                gradient: "bg-premium-purple"
              }
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="card-premium p-6 sm:p-8 md:p-10 hover-lift group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`inline-flex p-4 sm:p-6 rounded-xl sm:rounded-2xl ${skill.gradient} text-white mb-6 sm:mb-8 shadow-premium-lg group-hover:animate-glow transition-all duration-300`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">{skill.title}</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {skill.skills.map((item, idx) => (
                    <li key={idx} className="flex items-center text-premium text-sm sm:text-base md:text-lg">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-500 rounded-full mr-3 sm:mr-4 animate-pulse flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl heading-premium mb-4 sm:mb-6">Professional Journey</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-premium mb-6 sm:mb-8">My experience in system administration and DNS management</p>
            <div className="divider-premium"></div>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-12 sm:space-y-16">
              {[
                {
                  title: "System Administrator",
                  period: "Current Role",
                  description: "Managing enterprise-level infrastructure with focus on reliability, security, and performance. Specialized in DNS server configuration and optimization.",
                  skills: ["Server Management", "DNS Configuration", "Performance Optimization", "Security Implementation"],
                  current: true
                },
                {
                  title: "Web Server Specialist",
                  period: "Previous Experience",
                  description: "Configured and maintained high-performance web servers using Nginx and Apache. Implemented load balancing solutions and optimized server configurations.",
                  skills: ["Nginx", "Apache", "Load Balancing", "SSL Configuration"],
                  current: false
                },
                {
                  title: "Linux Administrator",
                  period: "Foundation Experience",
                  description: "Built expertise in RHEL and Linux system administration, including system monitoring, backup solutions, and automated deployment processes.",
                  skills: ["RHEL", "System Monitoring", "Backup Solutions", "Automation"],
                  current: false
                }
              ].map((job, index) => (
                <motion.div
                  key={index}
                  className={`relative pl-8 sm:pl-12 pb-6 sm:pb-8 ${index !== 2 ? 'border-l-2 sm:border-l-4 border-blue-200' : ''}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className={`absolute left-0 top-0 w-4 h-4 sm:w-6 sm:h-6 rounded-full transform -translate-x-2 sm:-translate-x-3 ${job.current ? 'bg-premium-blue shadow-glow animate-pulse' : 'bg-gray-400'}`}></div>
                  
                  <div className="card-premium p-6 sm:p-8 md:p-10 hover-lift">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 sm:mb-6">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-0">{job.title}</h3>
                      <span className={`inline-flex px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold ${job.current ? 'bg-blue-100 text-blue-800' : 'bg-gray-200 text-gray-700'}`}>
                        {job.period}
                      </span>
                    </div>
                    
                    <p className="text-premium mb-6 sm:mb-8 text-sm sm:text-base md:text-lg">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {job.skills.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium hover-scale">
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

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl heading-premium mb-4">Let&apos;s Connect</h2>
            <p className="text-xl text-premium mb-6">Ready to discuss your infrastructure needs? Let&apos;s start a conversation.</p>
            <div className="divider-premium"></div>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="card-premium p-6 sm:p-8 hover-lift">
                    <h3 className="text-2xl sm:text-3xl font-bold heading-premium mb-4 sm:mb-6">Send Me a Message</h3>
                    
                    <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                      {/* Status Message */}
                      {statusMessage && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`p-4 rounded-lg flex items-center space-x-3 ${
                            formStatus === 'success' 
                              ? 'bg-green-50 border border-green-200 text-green-800' 
                              : 'bg-red-50 border border-red-200 text-red-800'
                          }`}
                        >
                          {formStatus === 'success' ? (
                            <CheckCircle size={20} className="text-green-600" />
                          ) : (
                            <AlertCircle size={20} className="text-red-600" />
                          )}
                          <span className="text-sm font-medium">{statusMessage}</span>
                        </motion.div>
                      )}
                      
                      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            disabled={formStatus === 'loading'}
                            className="input-premium text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            disabled={formStatus === 'loading'}
                            className="input-premium text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          disabled={formStatus === 'loading'}
                          className="input-premium text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                          placeholder="What would you like to discuss?"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          disabled={formStatus === 'loading'}
                          className="input-premium resize-none text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                          placeholder="Tell me about your project, requirements, or any questions you have..."
                        />
                      </div>
                      
                      <button
                        type="submit"
                        disabled={formStatus === 'loading'}
                        className="btn-premium hover-lift shadow-glow w-full py-3 sm:py-4 flex items-center justify-center text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
                      >
                        {formStatus === 'loading' ? (
                          <>
                            <Loader size={18} className="mr-2 sm:mr-3 animate-spin" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send size={18} className="mr-2 sm:mr-3" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </motion.div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4 sm:space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="card-premium p-4 sm:p-6 hover-lift">
                    <h3 className="text-xl sm:text-2xl font-bold heading-premium mb-4 sm:mb-6">Contact Information</h3>
                    
                    <div className="space-y-4 sm:space-y-6">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="bg-premium-blue p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-glow flex-shrink-0">
                          <Mail className="text-white" size={18} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Email</h4>
                          <p className="text-premium mb-1 text-xs sm:text-sm break-all">hello@salmanshafi.net</p>
                          <p className="text-xs text-gray-500">Response within 24 hours</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="bg-premium-purple p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-glow-purple flex-shrink-0">
                          <Phone className="text-white" size={18} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Phone</h4>
                          <p className="text-premium mb-1 text-xs sm:text-sm">+8801603161647</p>
                          <p className="text-xs text-gray-500">Available during business hours</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="bg-premium-gold p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-glow flex-shrink-0">
                          <MapPin className="text-white" size={18} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Location</h4>
                          <p className="text-premium mb-1 text-xs sm:text-sm">Bogura, Bangladesh</p>
                          <p className="text-xs text-gray-500">GMT+6 timezone</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="card-premium bg-premium-gradient text-white p-4 sm:p-6 hover-lift shadow-glow">
                    <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">Let&apos;s Work Together</h3>
                    <p className="text-blue-100 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                      I&apos;m passionate about helping businesses build reliable, scalable infrastructure. 
                      Whether you need DNS optimization, server management, or system administration expertise.
                    </p>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="glass-effect p-2 sm:p-3 rounded-lg sm:rounded-xl">
                        <Terminal className="text-white" size={14} />
                      </div>
                      <span className="text-blue-100 text-xs sm:text-sm">Available for projects and consultations</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
