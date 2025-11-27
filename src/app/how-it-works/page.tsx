'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { 
  FileText,
  Phone,
  Search,
  Handshake,
  Settings,
  Rocket,
  BarChart3,
  Clock,
  CheckCircle2,
  ArrowDown,
  Zap
} from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Apply',
    description: 'Share your channel link, current performance and what you want to achieve.',
    color: 'var(--color-accent)',
  },
  {
    number: '02',
    icon: Phone,
    title: 'Discovery Call',
    description: 'If we\'re aligned on basics, we jump on a call to understand your goals, catalogue and constraints.',
    color: 'var(--color-cyan)',
  },
  {
    number: '03',
    icon: Search,
    title: 'Channel Audit & Proposal',
    description: 'We run a deep audit of your channel(s) and send you a clear partnership proposal with scope, structure and terms.',
    color: 'var(--color-gold)',
  },
  {
    number: '04',
    icon: Handshake,
    title: 'Deal & Onboarding',
    description: 'Once agreed, we handle contracts, add you to our systems and set up communication channels.',
    color: 'var(--color-purple)',
  },
  {
    number: '05',
    icon: Settings,
    title: 'Strategy & Setup',
    description: 'We refine programming, monetization and optimisation plans and agree your first 90-day focus.',
    color: 'var(--color-accent)',
  },
  {
    number: '06',
    icon: Rocket,
    title: 'Launch & Optimise',
    description: 'We implement changes, track results and iterate based on performance.',
    color: 'var(--color-cyan)',
  },
  {
    number: '07',
    icon: BarChart3,
    title: 'Ongoing Management & Reviews',
    description: 'You get regular performance reviews, recommendations and access to our team as your channel grows.',
    color: 'var(--color-gold)',
  },
];

const expectations = [
  {
    icon: Zap,
    title: 'Quick Wins',
    description: 'Thumbnails, titles and metadata improvements can move within weeks.',
    timeframe: '2-4 weeks',
  },
  {
    icon: BarChart3,
    title: 'Growth Trajectory',
    description: 'Bigger shifts in revenue and audience typically build over months.',
    timeframe: '3-6 months',
  },
  {
    icon: Clock,
    title: 'Long-term Compounding',
    description: 'We focus on sustainable, compounding growth – not hacks that burn your audience.',
    timeframe: 'Ongoing',
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center gradient-hero overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 pattern-grid opacity-30" />
          
          <motion.div
            animate={{ 
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/3 right-1/3 w-[500px] h-[500px] rounded-full bg-[var(--color-accent)] blur-[150px] opacity-25"
          />
          <motion.div
            animate={{ 
              y: [0, 40, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[var(--color-cyan)] blur-[180px] opacity-15"
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
                <Settings className="w-4 h-4 text-[var(--color-accent)]" />
                How It Works
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-display-xl font-bold text-white leading-[0.95] mb-8"
            >
              How to work with{' '}
              <span className="text-gradient">Content Motley</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/60 max-w-3xl leading-relaxed"
            >
              A clear, simple process so you know exactly what&apos;s coming.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section bg-[var(--color-primary)]">
        <div className="container">
          <SectionHeading
            badge="Your Journey"
            title="Step-by-step"
            subtitle="From first contact to full-service management."
            align="center"
            light
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-gold)] to-[var(--color-cyan)] -translate-x-1/2 hidden lg:block" />
              
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative mb-12 last:mb-0"
                >
                  <div className={`flex items-center gap-8 lg:gap-16 ${
                    i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}>
                    {/* Content */}
                    <div className={`flex-1 ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 hover:border-white/20 transition-all duration-500">
                        <div className="flex items-center gap-4 mb-4" style={{ 
                          flexDirection: i % 2 === 0 ? 'row-reverse' : 'row',
                          justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start'
                        }}>
                          <div 
                            className="w-14 h-14 rounded-xl flex items-center justify-center"
                            style={{ backgroundColor: `${step.color}20`, border: `1px solid ${step.color}30` }}
                          >
                            <step.icon className="w-7 h-7" style={{ color: step.color }} />
                          </div>
                          <span className="text-4xl font-bold text-white/10">{step.number}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div 
                      className="hidden lg:flex w-6 h-6 rounded-full flex-shrink-0 items-center justify-center z-10"
                      style={{ backgroundColor: step.color, boxShadow: `0 0 20px ${step.color}60` }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    
                    {/* Spacer */}
                    <div className="flex-1 hidden lg:block" />
                  </div>
                  
                  {/* Arrow connector (mobile) */}
                  {i < steps.length - 1 && (
                    <div className="flex justify-center my-4 lg:hidden">
                      <ArrowDown className="w-6 h-6 text-white/20" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timelines & Expectations */}
      <section className="section gradient-mesh">
        <div className="container">
          <SectionHeading
            badge="Expectations"
            title="What you can expect"
            align="center"
            light
          />
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {expectations.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 text-center hover:border-[var(--color-accent)]/30 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/30 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-8 h-8 text-[var(--color-accent)]" />
                </div>
                <div className="text-[var(--color-accent)] text-sm font-medium uppercase tracking-wider mb-2">
                  {item.timeframe}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 bg-white/[0.03] inline-block px-6 py-3 rounded-full border border-white/[0.08]">
              We&apos;re focused on long-term, compounding growth – not hacks that burn your audience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[var(--color-primary)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 rounded-2xl bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/30 flex items-center justify-center mx-auto mb-8">
                <Rocket className="w-10 h-10 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-display-md font-bold text-white mb-6">
                Ready to start?
              </h2>
              <p className="text-xl text-gray-400 mb-10">
                Apply now and take the first step toward building your content business.
              </p>
              <Button href="/apply" variant="primary" size="lg" showArrow>
                Apply Now
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
