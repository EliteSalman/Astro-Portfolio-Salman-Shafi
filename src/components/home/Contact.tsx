'use client';
import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [runtimeSiteKey, setRuntimeSiteKey] = useState<string | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const [turnstileLoaded, setTurnstileLoaded] = useState(false);
  const turnstileRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTurnstileCallback = useCallback((token: string) => {
    setTurnstileToken(token);
  }, []);

  useEffect(() => {
    (window as any).handleTurnstileCallback = handleTurnstileCallback;
    return () => {
      delete (window as any).handleTurnstileCallback;
    };
  }, [handleTurnstileCallback]);

  useEffect(() => {
    const renderTurnstile = async () => {
      let currentKey = runtimeSiteKey;

      if (!currentKey) {
        try {
          const response = await fetch('/api/turnstile');
          const data = await response.json();
          currentKey = data.siteKey;
          setRuntimeSiteKey(currentKey);
        } catch (error) {
          console.error('Failed to fetch runtime Turnstile key:', error);
          return;
        }
      }

      if ((window as any).turnstile && turnstileRef.current && currentKey) {
        if (turnstileRef.current.innerHTML !== '') return;

        try {
          (window as any).turnstile.render(turnstileRef.current, {
            sitekey: currentKey,
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

    if ((window as any).turnstile) {
      renderTurnstile();
    } else {
      const checkTurnstile = setInterval(() => {
        if ((window as any).turnstile) {
          renderTurnstile();
          clearInterval(checkTurnstile);
        }
      }, 100);
      setTimeout(() => clearInterval(checkTurnstile), 10000);
    }
  }, [runtimeSiteKey]);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!turnstileToken || turnstileToken.length === 0) {
      setFormStatus('error');
      setStatusMessage('Security verification failed. Please complete the CAPTCHA.');
      return;
    }

    setFormStatus('loading');
    setStatusMessage('Executing transmission sequence...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, turnstileToken }),
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus('success');
        setStatusMessage('Transmission successful. Awaiting ACK.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTurnstileToken('');
        if ((window as any).turnstile && turnstileRef.current) {
          (window as any).turnstile.reset(turnstileRef.current);
        }
      } else {
        setFormStatus('error');
        setStatusMessage(result.error || 'Transmission failed. Connection refused.');
        if ((window as any).turnstile && turnstileRef.current) {
          (window as any).turnstile.reset(turnstileRef.current);
        }
        setTurnstileToken('');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
      setStatusMessage('Network unreachable. Please verify routing and try again.');
      if ((window as any).turnstile && turnstileRef.current) {
        (window as any).turnstile.reset(turnstileRef.current);
      }
      setTurnstileToken('');
    }
  };

  useEffect(() => {
    if (formStatus === 'success' || formStatus === 'error') {
      const timer = setTimeout(() => {
        setFormStatus('idle');
        setStatusMessage('');
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [formStatus]);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const item: Variants = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0, transition: { duration: 0.05, ease: "linear" } }
  };

  return (
    <section id="contact" className="py-24 bg-black border-b border-[#1e1e1e] font-mono scroll-mt-24">
      

      <div className="container mx-auto px-6 max-w-5xl">
        
        <div className="text-sm font-medium text-[#a1a1aa] mb-12 flex items-center whitespace-nowrap overflow-x-auto no-scrollbar">
          <span className="text-green-500">salman@infra</span>
          <span className="text-white">:</span>
          <span className="text-blue-500">~</span>
          <span className="text-white ml-2">$ /usr/local/bin/send-message --to=<a href="mailto:hello@salmanshafi.net" className="hover:text-[#EE0000] underline underline-offset-4">hello@salmanshafi.net</a></span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-6 bg-[#050505] border border-[#1e1e1e] p-6 md:p-8">
              
              {statusMessage && (
                <motion.div variants={item} className={`p-3 text-sm border ${formStatus === 'success' ? 'border-green-900 bg-green-900/10 text-green-500' : formStatus === 'error' ? 'border-[#EE0000]/30 bg-[#EE0000]/10 text-[#EE0000]' : 'border-[#1e1e1e] text-[#a1a1aa]'}`}>
                  {formStatus === 'success' ? '[OK] ' : formStatus === 'error' ? '[ERR] ' : '[...] '}
                  {statusMessage}
                </motion.div>
              )}

              <motion.div variants={item} className="flex flex-col relative group">
                <label htmlFor="name" className="text-[#555] mb-2 text-sm flex items-center">
                  <span className="text-[#EE0000] mr-2">&gt;</span> --name=
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} disabled={formStatus === 'loading' || formStatus === 'success'} required
                  placeholder="root_user"
                  className="bg-[#0a0a0a] border border-[#1e1e1e] text-[#e5e5e5] p-3 focus:outline-none focus:border-[#EE0000] transition-colors rounded-none font-mono text-sm disabled:opacity-50 placeholder:text-[#333]" />
              </motion.div>

              <motion.div variants={item} className="flex flex-col relative group">
                <label htmlFor="email" className="text-[#555] mb-2 text-sm flex items-center">
                  <span className="text-[#EE0000] mr-2">&gt;</span> --email=
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} disabled={formStatus === 'loading' || formStatus === 'success'} required
                  placeholder="user@domain.tld"
                  className="bg-[#0a0a0a] border border-[#1e1e1e] text-[#e5e5e5] p-3 focus:outline-none focus:border-[#EE0000] transition-colors rounded-none font-mono text-sm disabled:opacity-50 placeholder:text-[#333]" />
              </motion.div>

              <motion.div variants={item} className="flex flex-col relative group">
                <label htmlFor="subject" className="text-[#555] mb-2 text-sm flex items-center">
                  <span className="text-[#EE0000] mr-2">&gt;</span> --subject=
                </label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} disabled={formStatus === 'loading' || formStatus === 'success'} required
                  placeholder="infrastructure_query"
                  className="bg-[#0a0a0a] border border-[#1e1e1e] text-[#e5e5e5] p-3 focus:outline-none focus:border-[#EE0000] transition-colors rounded-none font-mono text-sm disabled:opacity-50 placeholder:text-[#333]" />
              </motion.div>

              <motion.div variants={item} className="flex flex-col relative group">
                <label htmlFor="message" className="text-[#555] mb-2 text-sm flex items-center">
                  <span className="text-[#EE0000] mr-2">&gt;</span> --message=
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  disabled={formStatus === 'loading' || formStatus === 'success'} 
                  rows={5} 
                  required 
                  placeholder="Enter configuration parameters..."
                  className="bg-[#0a0a0a] border border-[#1e1e1e] text-[#e5e5e5] p-3 focus:outline-none focus:border-[#EE0000] focus:ring-0 transition-colors rounded-none font-mono text-sm resize-none disabled:opacity-50 shadow-none appearance-none placeholder:text-[#333]"
                ></textarea>
              </motion.div>

              <motion.div variants={item} className="cf-turnstile flex flex-col space-y-2">
                {!turnstileLoaded && (
                   <span className="text-[#555] text-xs">
                     {runtimeSiteKey ? "Loading verification module..." : "Fetching security keys..."}
                   </span>
                )}
                {runtimeSiteKey && (
                  <div ref={turnstileRef} className="cf-turnstile mt-2" />
                )}
              </motion.div>

              <motion.div variants={item} className="pt-4">
                {formStatus === 'success' ? (
                  <button 
                    type="button" 
                    onClick={() => {
                      setFormStatus('idle');
                      setStatusMessage('');
                    }}
                    className="w-full bg-[#1e1e1e] text-[#a1a1aa] font-bold py-4 hover:bg-[#333] transition-colors uppercase tracking-wider text-sm border border-[#333] rounded-none flex justify-center items-center"
                  >
                    [ CLEAR_TERMINAL ]
                  </button>
                ) : (
                  <button 
                    type="submit" 
                    disabled={formStatus === 'loading'}
                    className="w-full bg-[#EE0000] text-white font-bold py-4 hover:bg-white hover:text-black transition-colors uppercase tracking-wider text-sm border border-[#EE0000] hover:border-white rounded-none glitch-hover flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#EE0000] disabled:hover:text-white"
                  >
                    {formStatus === 'loading' ? '[ EXECUTING... ]' : '[ EXECUTE ]'}
                  </button>
                )}
              </motion.div>

            </form>
          </motion.div>

          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-col space-y-6">
            <motion.div variants={item} className="bg-[#050505] border border-[#1e1e1e] p-6 md:p-8">
              <span className="text-[#a1a1aa] text-sm block mb-6"># Contact Endpoints</span>
              
              <div className="space-y-4 text-sm">
                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-12 sm:col-span-3 text-[#555]">email_uri</div>
                  <div className="col-span-12 sm:col-span-9 text-[#e5e5e5] break-words">= &quot;<a href="mailto:hello@salmanshafi.net" className="hover:text-[#EE0000] underline underline-offset-4">hello@salmanshafi.net</a>&quot;</div>
                </div>
                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-12 sm:col-span-3 text-[#555]">phone_pvt</div>
                  <div className="col-span-12 sm:col-span-9 text-[#e5e5e5] break-words">= &quot;<a href="tel:+8801603161647" className="hover:text-[#EE0000] underline underline-offset-4">+8801603161647</a>&quot;</div>
                </div>
                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-12 sm:col-span-3 text-[#555]">location</div>
                  <div className="col-span-12 sm:col-span-9 text-[#e5e5e5] break-words">= "Bogura, Bangladesh"</div>
                </div>
                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-12 sm:col-span-3 text-[#555]">timezone</div>
                  <div className="col-span-12 sm:col-span-9 text-[#e5e5e5] break-words">= "GMT+6"</div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={item} className="bg-[#050505] border border-[#1e1e1e] p-6 md:p-8">
              <span className="text-[#a1a1aa] text-sm block mb-4"># Status Check</span>
              <div className="flex items-center text-sm text-[#e5e5e5]">
                <span className="text-green-500 mr-3 text-xs">●</span>
                System active. Awaiting input.
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
