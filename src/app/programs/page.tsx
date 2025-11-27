'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { 
  GraduationCap,
  Users,
  Sparkles,
  Calendar,
  Video,
  Lightbulb,
  MessageCircle,
  Award,
  Mic,
  Globe,
  Rocket
} from 'lucide-react';

const programs = [
  {
    icon: GraduationCap,
    title: 'Learning & Training',
    description: 'Learn the business of content',
    features: [
      'Practical workshops on YouTube strategy and analytics',
      'Monetization, pricing and deal-structure sessions',
      'Storytelling and format development labs',
      'Office hours with our team and invited experts',
    ],
    color: 'var(--color-accent)',
  },
  {
    icon: Users,
    title: 'Community & Peer Support',
    description: 'Build with other serious creators',
    features: [
      'Private creator groups for honest conversations',
      'Peer feedback on titles, thumbnails and ideas',
      'Shared resources, templates and playbooks',
      'Networking with creators at your level',
    ],
    color: 'var(--color-cyan)',
  },
  {
    icon: Sparkles,
    title: 'Brand & Creator Moments',
    description: 'Where creators and brands meet',
    features: [
      'Invite-only mixers and salons with brand partners',
      'Pitch sessions for bigger projects and series',
      'Showcases that put African creators in front of global decision-makers',
      'Exclusive networking events',
    ],
    color: 'var(--color-gold)',
  },
];

const upcomingEvents = [
  {
    title: 'Creator Strategy Workshop',
    date: 'Monthly',
    type: 'Virtual',
    description: 'Deep dive into YouTube algorithm and strategy',
    icon: Video,
  },
  {
    title: 'Monetization Masterclass',
    date: 'Quarterly',
    type: 'Virtual',
    description: 'Advanced revenue optimization techniques',
    icon: Lightbulb,
  },
  {
    title: 'Creator Mixer',
    date: 'Quarterly',
    type: 'Lagos / London',
    description: 'Network with top creators and brand partners',
    icon: Users,
  },
  {
    title: 'Brand Pitch Day',
    date: 'Bi-Annual',
    type: 'Invite Only',
    description: 'Present your channel to potential sponsors',
    icon: Mic,
  },
];

export default function ProgramsPage() {
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
            className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[var(--color-purple)] blur-[150px] opacity-25"
          />
          <motion.div
            animate={{ 
              y: [0, 40, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-[var(--color-accent)] blur-[180px] opacity-20"
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
                <Award className="w-4 h-4 text-[var(--color-gold)]" />
                Programs & Events
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-display-xl font-bold text-white leading-[0.95] mb-8"
            >
              Programs that turn creators into{' '}
              <span className="text-gradient">media entrepreneurs</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/60 mb-10 max-w-3xl leading-relaxed"
            >
              Beyond management, we run sessions, labs and experiences that level up your skills and network.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section bg-[var(--color-primary)]">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {programs.map((program, i) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-8 hover:border-white/20 transition-all duration-500"
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${program.color}20`, border: `1px solid ${program.color}30` }}
                >
                  <program.icon className="w-8 h-8" style={{ color: program.color }} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
                <p className="text-gray-400 mb-6">{program.description}</p>
                <ul className="space-y-3">
                  {program.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div 
                        className="w-1.5 h-1.5 rounded-full mt-2.5"
                        style={{ backgroundColor: program.color }}
                      />
                      <span className="text-white/70 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section gradient-mesh">
        <div className="container">
          <SectionHeading
            badge="Events"
            title="Upcoming programs"
            subtitle="Join our network to access these exclusive events and programs."
            align="center"
            light
          />
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {upcomingEvents.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 hover:border-[var(--color-accent)]/30 transition-all duration-500 flex gap-5"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/30 flex items-center justify-center flex-shrink-0">
                  <event.icon className="w-7 h-7 text-[var(--color-accent)]" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-medium text-[var(--color-accent)] uppercase tracking-wider">{event.date}</span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-gray-400">{event.type}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{event.title}</h3>
                  <p className="text-gray-400 text-sm">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
              <div className="w-20 h-20 rounded-2xl bg-[var(--color-gold)]/20 border border-[var(--color-gold)]/30 flex items-center justify-center mx-auto mb-8">
                <Rocket className="w-10 h-10 text-[var(--color-gold)]" />
              </div>
              <h2 className="text-display-md font-bold text-white mb-6">
                Join the network to access upcoming programs
              </h2>
              <p className="text-xl text-gray-400 mb-10">
                Our programs are exclusively available to Content Motley network members. Apply today to get access.
              </p>
              <Button href="/apply" variant="gold" size="lg" showArrow>
                Apply to Join
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
