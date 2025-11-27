'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { 
  Send,
  Youtube,
  Building,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { useState } from 'react';

type FormType = 'creator' | 'brand';

export default function ApplyPage() {
  const [activeForm, setActiveForm] = useState<FormType>('creator');

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center gradient-hero overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 pattern-grid opacity-30" />
          
          <motion.div
            animate={{ 
              y: [0, -30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[var(--color-accent)] blur-[150px] opacity-25"
          />
          <motion.div
            animate={{ 
              y: [0, 40, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-[var(--color-gold)] blur-[180px] opacity-15"
          />
        </div>

        <div className="container relative z-10 pt-40 pb-24">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-5 py-2 mb-8 text-xs font-bold uppercase tracking-[0.2em] rounded-full bg-white/[0.08] text-white/80 border border-white/10 backdrop-blur-sm">
                <Send className="w-4 h-4 text-[var(--color-accent)]" />
                Apply / Contact
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-display-xl font-bold text-white leading-[0.95] mb-8"
            >
              Let&apos;s talk about{' '}
              <span className="text-gradient">your next chapter</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/60 max-w-3xl leading-relaxed"
            >
              Tell us about your channel or catalogue and we&apos;ll let you know if we&apos;re a strong fit.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="section bg-[var(--color-primary)]">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Form Selector & Form */}
            <div className="lg:col-span-2">
              {/* Form Type Selector */}
              <div className="flex gap-4 mb-10">
                <button
                  onClick={() => setActiveForm('creator')}
                  className={`flex-1 p-6 rounded-2xl border transition-all duration-300 ${
                    activeForm === 'creator'
                      ? 'bg-[var(--color-accent)]/10 border-[var(--color-accent)]/30'
                      : 'bg-white/[0.03] border-white/[0.08] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      activeForm === 'creator' 
                        ? 'bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/30' 
                        : 'bg-white/5 border border-white/10'
                    }`}>
                      <Youtube className={`w-6 h-6 ${activeForm === 'creator' ? 'text-[var(--color-accent)]' : 'text-gray-400'}`} />
                    </div>
                    <div className="text-left">
                      <div className={`font-semibold ${activeForm === 'creator' ? 'text-white' : 'text-gray-300'}`}>
                        Creator / Media Owner
                      </div>
                      <div className="text-sm text-gray-500">Apply to join the network</div>
                    </div>
                  </div>
                </button>
                
                <button
                  onClick={() => setActiveForm('brand')}
                  className={`flex-1 p-6 rounded-2xl border transition-all duration-300 ${
                    activeForm === 'brand'
                      ? 'bg-[var(--color-gold)]/10 border-[var(--color-gold)]/30'
                      : 'bg-white/[0.03] border-white/[0.08] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      activeForm === 'brand' 
                        ? 'bg-[var(--color-gold)]/20 border border-[var(--color-gold)]/30' 
                        : 'bg-white/5 border border-white/10'
                    }`}>
                      <Building className={`w-6 h-6 ${activeForm === 'brand' ? 'text-[var(--color-gold)]' : 'text-gray-400'}`} />
                    </div>
                    <div className="text-left">
                      <div className={`font-semibold ${activeForm === 'brand' ? 'text-white' : 'text-gray-300'}`}>
                        Brand / Agency
                      </div>
                      <div className="text-sm text-gray-500">Share your brief</div>
                    </div>
                  </div>
                </button>
              </div>

              {/* Creator Form */}
              {activeForm === 'creator' && (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-8 md:p-10"
                >
                  <h2 className="text-2xl font-bold text-white mb-8">Apply to join the Content Motley network</h2>
                  
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-white/80 text-sm font-medium mb-2 block">Name *</label>
                        <input 
                          type="text" 
                          placeholder="Your full name"
                          className="w-full"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-white/80 text-sm font-medium mb-2 block">Email *</label>
                        <input 
                          type="email" 
                          placeholder="your@email.com"
                          className="w-full"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-white/80 text-sm font-medium mb-2 block">Channel Link(s) *</label>
                      <input 
                        type="url" 
                        placeholder="https://youtube.com/@yourchannel"
                        className="w-full"
                        required
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-white/80 text-sm font-medium mb-2 block">Monthly Views</label>
                        <input 
                          type="text" 
                          placeholder="e.g., 500,000"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="text-white/80 text-sm font-medium mb-2 block">Subscribers</label>
                        <input 
                          type="text" 
                          placeholder="e.g., 100,000"
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-white/80 text-sm font-medium mb-2 block">Content Type / Niche</label>
                      <input 
                        type="text" 
                        placeholder="e.g., Comedy, Music, Lifestyle, Film"
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label className="text-white/80 text-sm font-medium mb-2 block">What do you want to achieve in the next 12 months?</label>
                      <textarea 
                        placeholder="Tell us about your goals..."
                        rows={4}
                        className="w-full resize-none"
                      />
                    </div>
                    
                    <Button type="submit" variant="primary" size="lg" fullWidth>
                      Submit Application
                    </Button>
                  </div>
                </motion.form>
              )}

              {/* Brand Form */}
              {activeForm === 'brand' && (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-8 md:p-10"
                >
                  <h2 className="text-2xl font-bold text-white mb-8">Brief our team</h2>
                  
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-white/80 text-sm font-medium mb-2 block">Brand / Agency Name *</label>
                        <input 
                          type="text" 
                          placeholder="Your company name"
                          className="w-full"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-white/80 text-sm font-medium mb-2 block">Contact Email *</label>
                        <input 
                          type="email" 
                          placeholder="your@company.com"
                          className="w-full"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-white/80 text-sm font-medium mb-2 block">Markets / Audiences</label>
                      <input 
                        type="text" 
                        placeholder="e.g., Nigeria, Kenya, South Africa, Pan-African"
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label className="text-white/80 text-sm font-medium mb-2 block">Campaign Objectives</label>
                      <input 
                        type="text" 
                        placeholder="e.g., Brand awareness, Product launch, Performance"
                        className="w-full"
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-white/80 text-sm font-medium mb-2 block">Timeline</label>
                        <input 
                          type="text" 
                          placeholder="e.g., Q1 2024, March"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="text-white/80 text-sm font-medium mb-2 block">Budget Range</label>
                        <select className="w-full">
                          <option value="">Select budget range</option>
                          <option value="10-25k">$10,000 - $25,000</option>
                          <option value="25-50k">$25,000 - $50,000</option>
                          <option value="50-100k">$50,000 - $100,000</option>
                          <option value="100k+">$100,000+</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-white/80 text-sm font-medium mb-2 block">Tell us more about your campaign</label>
                      <textarea 
                        placeholder="Any specific creators, formats or ideas you have in mind..."
                        rows={4}
                        className="w-full resize-none"
                      />
                    </div>
                    
                    <Button type="submit" variant="gold" size="lg" fullWidth>
                      Share Your Brief
                    </Button>
                  </div>
                </motion.form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div>
              <div className="sticky top-32">
                <h3 className="text-xl font-bold text-white mb-6">Prefer to reach out directly?</h3>
                
                <div className="space-y-4 mb-10">
                  <a 
                    href="mailto:sholz.laelle@gmail.com" 
                    className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/[0.08] rounded-xl hover:border-[var(--color-accent)]/30 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Email</div>
                      <div className="text-white font-medium">sholz.laelle@gmail.com</div>
                    </div>
                  </a>
                  
                  <a 
                    href="tel:+447460583191" 
                    className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/[0.08] rounded-xl hover:border-[var(--color-accent)]/30 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Phone / WhatsApp</div>
                      <div className="text-white font-medium">+44 746 0583 191</div>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/[0.08] rounded-xl">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Location</div>
                      <div className="text-white font-medium">London, UK & Lagos, Nigeria</div>
                    </div>
                  </div>
                </div>

                {/* FAQ Link */}
                <div className="bg-gradient-to-br from-[var(--color-accent)]/20 to-transparent border border-white/[0.08] rounded-2xl p-6">
                  <MessageCircle className="w-10 h-10 text-[var(--color-accent)] mb-4" />
                  <h4 className="font-bold text-white mb-2">Have questions?</h4>
                  <p className="text-gray-400 text-sm mb-4">Check our FAQ for answers to common questions.</p>
                  <Button href="/faq" variant="ghost" size="sm" showArrow>
                    View FAQ
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
