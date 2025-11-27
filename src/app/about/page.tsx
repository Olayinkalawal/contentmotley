'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { 
  Youtube, 
  Tv, 
  Film,
  Building2,
  Award,
  Users,
  Globe,
  Heart,
  Eye,
  Sparkles,
  Target,
  ArrowRight,
  Rocket
} from 'lucide-react';

const founderHighlights = [
  {
    role: 'Head of YouTube Content Partnerships, SSA (Google)',
    description: 'Drove 1B+ monthly views, +21% DAU and doubled watch time and revenue for 25+ strategic creators and media partners.',
    icon: Youtube,
    color: 'var(--color-accent)',
  },
  {
    role: 'Director of Content & Editorial Strategy (Paramount Africa)',
    description: 'Transformed MTV Base Africa into the #1 regional music channel (+400% viewership) and delivered 40% ratings growth across seven TV channels.',
    icon: Tv,
    color: 'var(--color-cyan)',
  },
  {
    role: 'Head of Commissioned Content (Multichoice – Africa Magic)',
    description: 'Greenlit 120+ TV movies and 30+ shows, managing a $30M P&L and driving 200% ratings growth.',
    icon: Film,
    color: 'var(--color-gold)',
  },
  {
    role: 'Chief Content Officer (Advisory) at Aforevo',
    description: 'Advised YouTube\'s largest African MCN, guiding strategy for 200+ channels, delivering 32% YoY revenue uplift.',
    icon: Building2,
    color: 'var(--color-purple)',
  },
  {
    role: 'CEO, Circo Live',
    description: 'Led a video creation app for African creators, scaling from 0 → 100k users in 3 months, with 70% daily engagement.',
    icon: Sparkles,
    color: 'var(--color-accent)',
  },
];

const values = [
  {
    icon: Users,
    title: 'Creator-first',
    description: 'We only win when creators win.',
    color: 'var(--color-accent)',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Clear terms, clear reporting, no hidden surprises.',
    color: 'var(--color-cyan)',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We treat every channel and catalogue like a serious media asset.',
    color: 'var(--color-gold)',
  },
  {
    icon: Globe,
    title: 'Africa to the world',
    description: 'Proudly rooted in African stories, built for global reach.',
    color: 'var(--color-purple)',
  },
];

const timeline = [
  { year: '2008', event: 'Started career in content and media', side: 'left' },
  { year: '2012', event: 'Joined Multichoice Africa Magic', side: 'right' },
  { year: '2015', event: 'Moved to Paramount Africa', side: 'left' },
  { year: '2018', event: 'Joined YouTube/Google', side: 'right' },
  { year: '2021', event: 'Advisory role at Aforevo', side: 'left' },
  { year: '2023', event: 'Founded Content Motley', side: 'right' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center gradient-hero overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 pattern-dots opacity-30" />
          
          <motion.div
            animate={{ 
              y: [0, 30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[var(--color-gold)] blur-[150px] opacity-20"
          />
          <motion.div
            animate={{ 
              y: [0, -40, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--color-accent)] blur-[180px] opacity-20"
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
                <Heart className="w-4 h-4 text-[var(--color-accent)]" />
                About Us
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-display-xl font-bold text-white leading-[0.95] mb-8"
            >
              The team behind Africa&apos;s{' '}
              <span className="text-gradient">creator revolution</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/60 max-w-3xl leading-relaxed"
            >
              Content Motley is where deep platform expertise meets a passion for African storytelling.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-[var(--color-primary)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              badge="Our Story"
              title="Built for creators, from inside the platform"
              light
            />
            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                Content Motley was created to solve a simple problem: African creators and content owners were driving culture, but not always capturing the value.
              </p>
              <p className="text-xl text-gray-400 leading-relaxed">
                We&apos;re a creator service provider (CSP) focused on helping African creators, filmmakers, producers and media companies turn their content into sustainable, scalable businesses on YouTube and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section gradient-mesh">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Founder Card */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="sticky top-32"
              >
                <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-8 text-center">
                  <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-[var(--color-accent)] via-[var(--color-gold)] to-[var(--color-cyan)] flex items-center justify-center text-white text-6xl font-bold mx-auto mb-6 shadow-[0_0_60px_rgba(255,77,77,0.3)]">
                    SL
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">Sholz S. Laelle</h3>
                  <p className="text-gray-400 mb-4">Founder & CEO</p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    MBA-trained executive with 16+ years building content, streaming and creator businesses across EMEA.
                  </p>
                  
                  {/* Awards */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-center gap-2 text-[var(--color-gold)]">
                      <Award className="w-5 h-5" />
                      <span className="text-sm font-medium">5× Leadership Awards</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Paramount Africa</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Experience */}
            <div className="lg:col-span-3">
              <SectionHeading
                badge="Leadership"
                title="Led by YouTube and media insiders"
                light
              />
              <div className="space-y-6">
                {founderHighlights.map((item, i) => (
                  <motion.div
                    key={item.role}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 hover:border-white/20 transition-all duration-500 group"
                  >
                    <div className="flex items-start gap-5">
                      <div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                        style={{ backgroundColor: `${item.color}20`, border: `1px solid ${item.color}30` }}
                      >
                        <item.icon className="w-7 h-7" style={{ color: item.color }} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-white mb-2">{item.role}</h4>
                        <p className="text-gray-400 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 text-gray-500 italic bg-white/[0.03] rounded-xl p-4 border border-white/[0.08]"
              >
                He has also served as Executive Producer on 120+ TV movies/series and YouTube Originals.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section bg-[var(--color-primary)]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <SectionHeading
              badge="Mission"
              title="What we stand for"
              light
              align="center"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl text-white/80 leading-relaxed bg-gradient-to-r from-[var(--color-accent)]/20 to-transparent rounded-2xl p-8 border border-white/[0.08]"
            >
              To unlock the full economic and global potential of African storytellers by turning content into sustainable, scalable businesses.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 text-center hover:border-white/20 transition-all duration-500"
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: `${value.color}20`, border: `1px solid ${value.color}30` }}
                >
                  <value.icon className="w-8 h-8" style={{ color: value.color }} />
                </div>
                <h3 className="font-bold text-xl text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bigger Vision */}
      <section className="section gradient-mesh">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading
              badge="Vision"
              title="Beyond YouTube"
              align="center"
              light
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-10 leading-relaxed"
            >
              YouTube is where most journeys start – but not where they end. We&apos;re building an ecosystem where African stories move across platforms, formats and territories: from TV to streaming, big screens to mobile screens, and local audiences to global fandoms.
            </motion.p>
            <Button href="/apply" variant="primary" size="lg" showArrow>
              Join the Movement
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-[var(--color-primary)]">
        <div className="container">
          <SectionHeading
            badge="Journey"
            title="The path to Content Motley"
            align="center"
            light
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-gold)] to-[var(--color-cyan)] -translate-x-1/2" />
              
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex items-center gap-8 mb-12 ${
                    i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="text-3xl font-bold text-gradient mb-1">{item.year}</div>
                    <div className="text-gray-400">{item.event}</div>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-[var(--color-accent)] relative z-10 flex-shrink-0 shadow-[0_0_20px_rgba(255,77,77,0.5)]" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
