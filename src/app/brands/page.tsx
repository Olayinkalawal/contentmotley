'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { IconCard, FeatureCard } from '@/components/ui/Card';
import { 
  Users, 
  Target, 
  Play, 
  Shield, 
  BarChart3,
  Zap,
  Rocket,
  Clock,
  Film,
  Smartphone,
  TrendingUp,
  CheckCircle2,
  FileText,
  Eye,
  Heart,
  MousePointer,
  Briefcase,
  ArrowRight
} from 'lucide-react';

const whyChooseUs = [
  { 
    icon: Users, 
    title: 'Curated Creator Network', 
    description: 'We work with vetted creators, filmmakers and media companies across music, lifestyle, film, youth culture and more.',
    color: 'var(--color-accent)',
  },
  { 
    icon: Target, 
    title: 'Audience-First Planning', 
    description: 'We build campaigns around the communities you want to reach – not just creator follower counts.',
    color: 'var(--color-cyan)',
  },
  { 
    icon: Play, 
    title: 'YouTube-Native Storytelling', 
    description: 'We design stories for the YouTube feed and Shorts shelf, not just repurposed TVCs.',
    color: 'var(--color-gold)',
  },
  { 
    icon: Zap, 
    title: 'Operational Simplicity', 
    description: 'One contract, one point of contact, full delivery.',
    color: 'var(--color-purple)',
  },
];

const campaignTypes = [
  { icon: Rocket, title: 'Launch Moments', description: 'Product launches, rebrands, announcements.', color: 'var(--color-accent)' },
  { icon: Clock, title: 'Always-On Programs', description: 'Ambassadors and long-term partnerships.', color: 'var(--color-cyan)' },
  { icon: Film, title: 'Branded Series', description: 'Episodic shows that audiences return to.', color: 'var(--color-gold)' },
  { icon: Smartphone, title: 'Short-Form & Shorts', description: 'Vertical clips optimised for speed and shareability.', color: 'var(--color-purple)' },
  { icon: TrendingUp, title: 'Performance Content', description: 'Creator-led campaigns designed to drive signups, downloads or sales.', color: 'var(--color-accent)' },
];

const workSteps = [
  { title: 'Brief & Objectives', description: 'You share markets, goals, timelines and budget.' },
  { title: 'Creator & Concept Match', description: 'We propose creators, formats and narratives that fit your brand.' },
  { title: 'Co-create & Approve', description: 'We align on scripts, key messages and guardrails while preserving creator authenticity.' },
  { title: 'Launch & Optimise', description: 'We oversee production, publishing, and optimise based on audience response.' },
  { title: 'Report & Learn', description: 'You get a clear view of performance and learnings for next time.' },
];

const metrics = [
  { icon: Eye, label: 'Views & Watch Time', description: 'Completion rates', color: 'var(--color-accent)' },
  { icon: Heart, label: 'Engagement', description: 'Likes, comments, shares', color: 'var(--color-cyan)' },
  { icon: MousePointer, label: 'Click-Through', description: 'Traffic to owned assets', color: 'var(--color-gold)' },
  { icon: TrendingUp, label: 'Brand Lift', description: 'Sentiment signals', color: 'var(--color-purple)' },
];

const brandSafetyPoints = [
  'Creators vetted for brand fit and audience alignment',
  'Clear contracts, deliverables and usage terms',
  'Review and approvals baked into the process',
  'Guidance on disclosure and compliance',
];

export default function BrandsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center gradient-hero-alt overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 pattern-grid opacity-30" />
          
          <motion.div
            animate={{ 
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-[var(--color-gold)] blur-[150px] opacity-20"
          />
          <motion.div
            animate={{ 
              y: [0, -40, 0],
              x: [0, 20, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[var(--color-accent)] blur-[180px] opacity-20"
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
                <Briefcase className="w-4 h-4 text-[var(--color-gold)]" />
                For Brands & Agencies
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-display-xl font-bold text-white leading-[0.95] mb-8"
            >
              Work with Africa&apos;s most{' '}
              <span className="text-gradient">trusted YouTube creators</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/60 mb-10 max-w-3xl leading-relaxed"
            >
              We connect your brand to premium African creators and IP – and manage everything from brief to reporting.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button href="/apply" variant="gold" size="lg" showArrow>
                Brief Our Team
              </Button>
              <Button href="#" variant="outline-white" size="lg" external showArrow>
                Book a Strategy Call
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Brands Choose Us */}
      <section className="section bg-[var(--color-primary)]">
        <div className="container">
          <SectionHeading
            badge="Why Us"
            title="One partner for creators, content and results"
            subtitle="You don't need 20 creator relationships and 10 agencies. You need a partner who understands creators, platforms and outcomes."
            light
            align="center"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}20`, border: `1px solid ${item.color}30` }}
                >
                  <item.icon className="w-7 h-7" style={{ color: item.color }} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Types */}
      <section className="section gradient-mesh">
        <div className="container">
          <SectionHeading
            badge="Campaign Types"
            title="What we can build together"
            align="center"
            light
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {campaignTypes.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}20`, border: `1px solid ${item.color}30` }}
                >
                  <item.icon className="w-7 h-7" style={{ color: item.color }} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section bg-[var(--color-primary)]">
        <div className="container">
          <SectionHeading
            badge="Process"
            title="Simple, structured, transparent"
            subtitle="How we work with brands"
            align="center"
            light
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-gold)] to-[var(--color-cyan)]" />
              
              {workSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex items-center gap-8 mb-8 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 hover:border-[var(--color-accent)]/30 transition-all">
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-12 h-12 rounded-full bg-[var(--color-accent)] items-center justify-center text-white font-bold text-lg z-10 shadow-[0_0_30px_rgba(255,77,77,0.4)] flex-shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Safety */}
      <section className="section gradient-mesh">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                badge="Brand Safety"
                title="Brand-safe from day one"
                light
              />
              
              <ul className="space-y-5">
                {brandSafetyPoints.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Shield className="w-4 h-4 text-[var(--color-accent)]" />
                    </div>
                    <span className="text-white/80 text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/[0.03] backdrop-blur-sm rounded-3xl p-10 border border-white/[0.08]">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-[var(--color-accent)] flex items-center justify-center shadow-[0_0_40px_rgba(255,77,77,0.3)]">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-2xl">100% Vetted</h3>
                    <p className="text-gray-400">Creator Network</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {['Content Quality', 'Audience Authenticity', 'Brand Alignment', 'Compliance Ready'].map((item, i) => (
                    <div key={item} className="flex items-center gap-4 p-4 bg-white/[0.03] rounded-xl border border-white/[0.05]">
                      <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)]" />
                      <span className="text-white/80 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Measurement & Reporting */}
      <section className="section bg-[var(--color-primary)]">
        <div className="container">
          <SectionHeading
            badge="Reporting"
            title="Numbers that matter"
            subtitle="We measure what matters to your team:"
            align="center"
            light
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {metrics.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 text-center border border-white/[0.08] hover:border-white/20 transition-all duration-500"
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: `${item.color}20`, border: `1px solid ${item.color}30` }}
                >
                  <item.icon className="w-8 h-8" style={{ color: item.color }} />
                </div>
                <h3 className="font-bold text-xl text-white mb-2">{item.label}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section gradient-mesh">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 rounded-2xl bg-[var(--color-gold)]/20 border border-[var(--color-gold)]/30 flex items-center justify-center mx-auto mb-8">
                <FileText className="w-10 h-10 text-[var(--color-gold)]" />
              </div>
              <h2 className="text-display-md font-bold text-white mb-6">
                Ready to explore creators for your next brief?
              </h2>
              <p className="text-xl text-gray-400 mb-10">
                Tell us about your campaign goals and we&apos;ll show you what&apos;s possible with Africa&apos;s top creators.
              </p>
              <Button href="/apply" variant="gold" size="lg" showArrow>
                Brief Our Team
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
