'use client';

import { useState, useEffect, useRef, useCallback } from "react";
import Script from "next/script";
import { CheckCircle, AlertCircle, Loader, Send, Mail, Phone, MapPin, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // NEW: State to hold the runtime site key from the server
  const [runtimeSiteKey, setRuntimeSiteKey] = useState<string | null>(null);

  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const [turnstileLoaded, setTurnstileLoaded] = useState(false);
  const turnstileRef = useRef<HTMLDivElement>(null);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle Turnstile callback
  const handleTurnstileCallback = useCallback((token: string) => {
    setTurnstileToken(token);
  }, []);

  // Make callback available globally for Turnstile
  useEffect(() => {
    window.handleTurnstileCallback = handleTurnstileCallback;
    return () => {
      delete window.handleTurnstileCallback;
    };
  }, [handleTurnstileCallback]);

  // Modified: Render Turnstile widget with Runtime Key Fetch
  useEffect(() => {
    const renderTurnstile = async () => {
      // 1. Fetch the key from the server if we don't have it yet
      let currentKey = runtimeSiteKey;

      if (!currentKey) {
        try {
          // Fetch from your new API route
          const response = await fetch('/api/turnstile');
          const data = await response.json();
          currentKey = data.siteKey;
          setRuntimeSiteKey(currentKey);
        } catch (error) {
          console.error('Failed to fetch runtime Turnstile key:', error);
          return;
        }
      }

      // 2. Render only if we have the key and the library is ready
      if (window.turnstile && turnstileRef.current && currentKey) {
        // Prevent re-rendering if already populated
        if (turnstileRef.current.innerHTML !== '') return;

        try {
          window.turnstile.render(turnstileRef.current, {
            sitekey: currentKey, // Use the fetched key
            callback: (token: string) => {
              setTurnstileToken(token);
            },
            theme: 'dark',
            size: 'normal'
          });
          setTurnstileLoaded(true);
        } catch (error) {
          console.error('Error rendering Turnstile:', error);
        }
      }
    };

    // Try to render immediately if Turnstile is already loaded
    if (window.turnstile) {
      renderTurnstile();
    } else {
      // Wait for Turnstile to load
      const checkTurnstile = setInterval(() => {
        if (window.turnstile) {
          renderTurnstile();
          clearInterval(checkTurnstile);
        }
      }, 100);

      // Cleanup interval after 10 seconds
      setTimeout(() => clearInterval(checkTurnstile), 10000);
    }
  }, [runtimeSiteKey]); // Add runtimeSiteKey as dependency

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if Turnstile token is present
    if (!turnstileToken || turnstileToken.length === 0) {
      setFormStatus('error');
      setStatusMessage('Please complete the security verification.');
      return;
    }

    setFormStatus('loading');
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          turnstileToken
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus('success');
        setStatusMessage('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTurnstileToken('');
        // Reset Turnstile widget
        if (window.turnstile && turnstileRef.current) {
          window.turnstile.reset(turnstileRef.current);
        }
      } else {
        setFormStatus('error');
        setStatusMessage(result.error || 'Something went wrong. Please try again.');
        // Reset Turnstile on error
        if (window.turnstile && turnstileRef.current) {
          window.turnstile.reset(turnstileRef.current);
        }
        setTurnstileToken('');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
      // Reset Turnstile on error
      if (window.turnstile && turnstileRef.current) {
        window.turnstile.reset(turnstileRef.current);
      }
      setTurnstileToken('');
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

  return (
    <section id="contact" className="py-16 bg-background">
      {/* Cloudflare Turnstile Script */}
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="beforeInteractive"
      />

      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl heading-primary text-gradient-red mb-4">Let&apos;s Connect</h2>
          <p className="text-xl text-body mb-6">Ready to discuss your infrastructure needs? Let&apos;s start a conversation.</p>
          <div className="divider-themed"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }} viewport={{ once: true }}
              >
                <div className="card-premium p-6 sm:p-8 hover-lift">
                  <h3 className="text-2xl sm:text-3xl font-bold heading-primary text-gradient-red mb-4 sm:mb-6">Send Me a Message</h3>

                  <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                    {statusMessage && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                        className={`p-4 rounded-lg flex items-center space-x-3 ${
                          formStatus === 'success'
                            ? 'bg-green-900/50 border border-green-700 text-green-300'
                            : 'bg-red-900/50 border border-red-700 text-red-300'
                        }`}
                      >
                        {formStatus === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                        <span className="text-sm font-medium">{statusMessage}</span>
                      </motion.div>
                    )}

                    <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2">Full Name *</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required disabled={formStatus === 'loading'}
                          className="input-themed text-sm sm:text-base" placeholder="Your full name" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2">Email Address *</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required disabled={formStatus === 'loading'}
                          className="input-themed text-sm sm:text-base" placeholder="your.email@example.com" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2">Subject *</label>
                      <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required disabled={formStatus === 'loading'}
                        className="input-themed text-sm sm:text-base" placeholder="What would you like to discuss?" />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2">Message *</label>
                      <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={4} disabled={formStatus === 'loading'}
                        className="input-themed resize-none text-sm sm:text-base" placeholder="Tell me about your project..."></textarea>
                    </div>

                    {/* Cloudflare Turnstile Widget - Modified for Runtime */}
                    <div className="flex flex-col items-center space-y-2">
                      {!turnstileLoaded && (
                        <div className="flex items-center space-x-2 text-gray-400 text-sm">
                          <div className="w-4 h-4 border-2 border-gray-600 border-t-primary rounded-full animate-spin"></div>
                          {/* Shows different text depending on state */}
                          <span>{runtimeSiteKey ? "Loading widget..." : "Verifying security..."}</span>
                        </div>
                      )}

                      {/* Only render Turnstile div if we have the key */}
                      {runtimeSiteKey && (
                        <div
                          ref={turnstileRef}
                          className="cf-turnstile"
                        />
                      )}

                      {turnstileToken && (
                        <div className="flex items-center space-x-2 text-green-400 text-xs">
                          <CheckCircle size={12} />
                          <span>Security verification completed</span>
                        </div>
                      )}
                    </div>

                    <button
                      type="submit" disabled={formStatus === 'loading'}
                      className="btn-primary hover-lift shadow-glow-red w-full py-3 sm:py-4 flex items-center justify-center text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
                    >
                      {formStatus === 'loading' ? (
                        <>
                          <Loader size={18} className="mr-2 sm:mr-3 animate-spin" />
                          Sending...
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

            <div className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}
              >
                <div className="card-premium p-4 sm:p-6 hover-lift">
                  <h3 className="text-xl sm:text-2xl font-bold heading-primary text-gradient-red mb-4 sm:mb-6">Contact Information</h3>

                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="bg-red-gradient p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-glow-red flex-shrink-0">
                        <Mail className="text-white" size={18} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Email</h4>
                        <p className="text-body mb-1 text-xs sm:text-sm break-all">hello@salmanshafi.net</p>
                        <p className="text-xs text-gray-500">Response within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 sm:space-x-4">
                       <div className="bg-red-gradient p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-glow-red flex-shrink-0">
                        <Phone className="text-white" size={18} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Phone</h4>
                        <p className="text-body mb-1 text-xs sm:text-sm">+8801603161647</p>
                        <p className="text-xs text-gray-500">Available during business hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 sm:space-x-4">
                       <div className="bg-red-gradient p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-glow-red flex-shrink-0">
                        <MapPin className="text-white" size={18} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Remote On</h4>
                        <p className="text-body mb-1 text-xs sm:text-sm">Bogura, Bangladesh</p>
                        <p className="text-xs text-gray-500">GMT+6 timezone</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}
              >
                <div className="card-premium bg-red-gradient text-white p-4 sm:p-6 hover-lift shadow-glow-red">
                  <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">Let&apos;s Work Together</h3>
                  <p className="text-gray-200 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    I&apos;m passionate about helping businesses build reliable, scalable infrastructure.
                  </p>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="glass-dark p-2 sm:p-3 rounded-lg sm:rounded-xl">
                      <Terminal className="text-white" size={14} />
                    </div>
                    <span className="text-gray-200 text-xs sm:text-sm">Available for projects</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
