'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { IconCard, StatCard, FeatureCard } from '@/components/ui/Card';
import { StatsMarquee, BrandTicker, CreatorMarquee } from '@/components/ui/Marquee';
import { Showreel, PortfolioGallery } from '@/components/ui/PortfolioGallery';
import { 
  Play, 
  TrendingUp, 
  Shield, 
  Globe, 
  Users, 
  Film, 
  Target, 
  BarChart3,
  Zap,
  Award,
  Youtube,
  Tv,
  Building2,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Rocket,
  DollarSign
} from 'lucide-react';

const stats = [
  { value: '1B+', label: 'Monthly Views' },
  { value: '120+', label: 'Films Commissioned' },
  { value: '200+', label: 'Channels Managed' },
  { value: '32%', label: 'Revenue Growth' },
];

const pillars = [
  {
    icon: Youtube,
    title: 'Platform-level Expertise',
    description: 'Our founder led YouTube Content Partnerships in Sub-Saharan Africa, driving 1B+ monthly views, +21% DAU and doubling revenue for top partners.',
    gradient: 'from-[var(--color-accent)]/20 to-transparent',
  },
  {
    icon: Tv,
    title: 'Proven Media Track Record',
    description: 'We\'ve commissioned 120+ films and 30+ series at Multichoice, and transformed MTV Base Africa into the #1 music channel in its market.',
    gradient: 'from-[var(--color-cyan)]/20 to-transparent',
  },
  {
    icon: Zap,
    title: 'Full-stack Management',
    description: 'We handle strategy, SEO, thumbnails, programming, monetization, rights and reporting – so your content works harder without you burning out.',
    gradient: 'from-[var(--color-gold)]/20 to-transparent',
  },
  {
    icon: Globe,
    title: 'Africa to the World',
    description: 'We specialise in African stories with global potential, helping you grow in Africa, the UK, US, Europe and the wider diaspora.',
    gradient: 'from-[var(--color-purple)]/20 to-transparent',
  },
];

const steps = [
  {
    title: 'Discovery & Strategy Call',
    description: 'We unpack your goals, content and audience.',
  },
  {
    title: 'Channel Audit',
    description: 'Deep dive into your analytics, SEO, monetization and catalogue.',
  },
  {
    title: 'Partnership Offer',
    description: 'If we\'re a fit, we agree clear terms and scope.',
  },
  {
    title: 'Onboarding & Launch',
    description: 'We set up workflows, tools and start optimizing.',
  },
];

const founderCredentials = [
  { icon: Youtube, text: 'YouTube/Google' },
  { icon: Tv, text: 'Paramount' },
  { icon: Film, text: 'Multichoice' },
  { icon: Sparkles, text: 'Circo Live' },
  { icon: Building2, text: 'Aforevo' },
];

const brandNames = [
  'YouTube', 'Paramount', 'Multichoice', 'Africa Magic', 'MTV Base', 'Aforevo', 'Circo Live'
];

const mockCreators = [
  { name: 'Mark Angel', niche: 'Comedy' },
  { name: 'Korty EO', niche: 'Lifestyle' },
  { name: 'Simi', niche: 'Music' },
  { name: 'Toke Makinwa', niche: 'Entertainment' },
  { name: 'Falz', niche: 'Music & Comedy' },
  { name: 'Basketmouth', niche: 'Comedy' },
];

// Portfolio gallery items
const portfolioItems = [
  {
    id: '1',
    type: 'video' as const,
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
    title: 'Music Video Production',
    category: 'music',
    creator: 'Afrobeats Artist',
  },
  {
    id: '2',
    type: 'image' as const,
    src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200&h=800&fit=crop',
    title: 'Documentary Series',
    category: 'documentary',
    creator: 'African Stories',
  },
  {
    id: '3',
    type: 'video' as const,
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop',
    title: 'Comedy Sketch',
    category: 'comedy',
    creator: 'Comedy Creator',
  },
  {
    id: '4',
    type: 'image' as const,
    src: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&h=800&fit=crop',
    title: 'Film Production',
    category: 'film',
    creator: 'Nollywood Studios',
  },
  {
    id: '5',
    type: 'video' as const,
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
    title: 'Live Performance',
    category: 'music',
    creator: 'Concert Recording',
  },
  {
    id: '6',
    type: 'image' as const,
    src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&h=800&fit=crop',
    title: 'Behind The Scenes',
    category: 'documentary',
    creator: 'Production Team',
  },
  {
    id: '7',
    type: 'video' as const,
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1605826832916-d0ea9d6fe71e?w=800&h=600&fit=crop',
    title: 'Lifestyle Vlog',
    category: 'lifestyle',
    creator: 'Lifestyle Creator',
  },
  {
    id: '8',
    type: 'image' as const,
    src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&h=800&fit=crop',
    title: 'Brand Campaign',
    category: 'commercial',
    creator: 'Brand Partnership',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 pattern-grid opacity-30" />
          
          {/* Animated gradient orbs */}
          <motion.div
            animate={{ 
              y: [0, -40, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[var(--color-accent)] blur-[150px]"
          />
          <motion.div
            animate={{ 
              y: [0, 50, 0],
              x: [0, 30, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-1/4 left-1/4 w-[700px] h-[700px] rounded-full bg-[var(--color-cyan)] blur-[180px] opacity-20"
          />
          <motion.div
            animate={{ 
              y: [0, -30, 0],
              x: [0, -40, 0],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/2 right-1/3 w-[500px] h-[500px] rounded-full bg-[var(--color-gold)] blur-[150px] opacity-10"
          />
          
          {/* Rotating rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-white/[0.03] rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] border border-white/[0.02] rounded-full"
          />
        </div>

        <div className="container relative z-10 pt-40 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Content */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 px-5 py-2 mb-8 text-xs font-bold uppercase tracking-[0.2em] rounded-full bg-white/[0.08] text-white/80 border border-white/10 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                  Africa's Creator Service Provider
                </span>
              </motion.div>
              
              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-display-xl font-bold text-white leading-[0.95] mb-8"
              >
                Managed by experts.
                <br />
                <span className="text-gradient">Built for top creators.</span>
              </motion.h1>
              
              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-xl text-white/60 mb-4 max-w-xl leading-relaxed"
              >
                Content Motley is Africa's creator service provider – a YouTube-first team helping creators, filmmakers and media brands turn views into long-term revenue.
              </motion.p>
              
              {/* Microcopy */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-white/40 text-sm mb-10 font-medium"
              >
                We're selective. We work with creators and content owners who treat this like a real business.
              </motion.p>
              
              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button href="/apply" variant="primary" size="lg" showArrow>
                  Apply to Join
                </Button>
                <Button href="#" variant="outline-white" size="lg" external showArrow>
                  Book a Call
                </Button>
              </motion.div>
            </div>

            {/* Right - Showreel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Showreel 
                videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
                posterUrl="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&h=800&fit=crop"
                title="Showreel 2024"
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-white/40"
          >
            <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center pt-2">
              <motion.div 
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 rounded-full bg-white/60" 
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Portfolio Gallery */}
      <section id="portfolio" className="section bg-[var(--color-primary)]">
        <div className="container">
          <SectionHeading
            badge="Our Work"
            title="Creator Portfolio"
            subtitle="A showcase of the incredible content from our network of African creators, filmmakers and media partners."
            align="center"
            light
          />
          
          <PortfolioGallery items={portfolioItems} />
        </div>
      </section>

      {/* Stats Marquee */}
      <StatsMarquee stats={stats} />

      {/* Social Proof */}
      <section className="section gradient-mesh">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm text-[var(--color-accent)] uppercase tracking-widest font-medium mb-4">
              A growth engine for Africa's top creators
            </p>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We don't guess how to grow channels – we've done it at platform scale and inside the biggest media brands. Now we bring that experience directly to you.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Ticker */}
      <div className="py-12 border-y border-white/[0.05]">
        <BrandTicker brands={brandNames} />
      </div>

      {/* Who We're For */}
      <section className="section bg-[var(--color-primary)]">
        <div className="container">
          <SectionHeading
            badge="Who We're For"
            title="Built for serious storytellers"
            subtitle="Content Motley is for creators and content owners who are ready to build real businesses."
            align="center"
          />
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Users,
                title: 'Established Creators',
                description: 'You\'re ready to move from "creator" to "media company". You want systems, strategy and a team behind you.',
                link: '/creators',
                linkText: 'For Creators',
                color: 'var(--color-accent)',
              },
              {
                icon: Film,
                title: 'Media & IP Owners',
                description: 'You own film, TV or digital IP and want predictable, recurring revenue from YouTube without starting from scratch.',
                link: '/creators',
                linkText: 'For Media Owners',
                color: 'var(--color-cyan)',
              },
              {
                icon: Target,
                title: 'Brands & Agencies',
                description: 'You need trusted African creators for real business outcomes – not just impressions, but influence.',
                link: '/brands',
                linkText: 'For Brands',
                color: 'var(--color-gold)',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-8 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}20`, border: `1px solid ${item.color}30` }}
                >
                  <item.icon className="w-8 h-8" style={{ color: item.color }} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{item.description}</p>
                <Button href={item.link} variant="ghost" size="sm" showArrow>
                  {item.linkText}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Content Motley - Bento Grid */}
      <section className="section gradient-mesh">
        <div className="container">
          <SectionHeading
            badge="Why Content Motley"
            title="Why top creators choose us"
            subtitle="We combine platform-level expertise with hands-on channel management to help you grow faster and earn more."
            align="center"
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((pillar, i) => (
              <FeatureCard
                key={pillar.title}
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.description}
                gradient={pillar.gradient}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* For Creators Section */}
      <section className="section bg-[var(--color-primary)]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                badge="For Creators"
                title="For creators, filmmakers and media owners"
                light
              />
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Whether you're a solo creator or a studio with a deep catalogue, we help you build a sustainable media business.
              </p>
              <ul className="space-y-5 mb-10">
                {[
                  'Optimise and scale your YouTube channels',
                  'Unlock new revenue streams (ads, Content ID, brand deals, licensing)',
                  'Repurpose and refresh your library for new audiences',
                  'Build systems so the channel keeps growing even when you\'re not posting',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)]" />
                    </div>
                    <span className="text-white/80 text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Button href="/creators" variant="primary" showArrow>
                Explore the Creator Network
              </Button>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main video card */}
              <div className="aspect-video rounded-3xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-gold)]/10 border border-white/10 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 pattern-dots opacity-50" />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative z-10 w-24 h-24 rounded-full bg-[var(--color-accent)] flex items-center justify-center cursor-pointer shadow-[0_0_60px_rgba(255,77,77,0.5)]"
                >
                  <Play className="w-10 h-10 text-white ml-1.5" />
                </motion.button>
              </div>
              
              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-[var(--color-primary-medium)] rounded-2xl p-5 border border-white/10 shadow-2xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/30 flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gradient">+32%</div>
                    <div className="text-sm text-gray-400">YoY Revenue Growth</div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -top-4 -left-4 bg-[var(--color-gold)] text-[var(--color-primary)] rounded-full px-4 py-2 text-sm font-bold shadow-lg"
              >
                200+ Channels
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Creator Marquee */}
      <div className="py-8 border-y border-white/[0.05]">
        <CreatorMarquee creators={mockCreators} />
      </div>

      {/* For Brands Section */}
      <section className="section gradient-mesh">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, label: 'Creator Matchmaking', color: 'var(--color-accent)' },
                  { icon: Shield, label: 'Brand Safety', color: 'var(--color-cyan)' },
                  { icon: BarChart3, label: 'Full Reporting', color: 'var(--color-gold)' },
                  { icon: Zap, label: 'End-to-End Management', color: 'var(--color-purple)' },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 hover:border-white/20 transition-all"
                  >
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${item.color}20`, border: `1px solid ${item.color}30` }}
                    >
                      <item.icon className="w-6 h-6" style={{ color: item.color }} />
                    </div>
                    <span className="font-semibold text-white">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <div className="order-1 lg:order-2">
              <SectionHeading
                badge="For Brands"
                title="For brands that want influence, not just impressions"
                light
              />
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We help brands plug into Africa's most trusted creators and premium IP through YouTube-native campaigns that feel like content, not ads.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Strategic creator matchmaking across our curated network',
                  'End-to-end campaign management and approvals',
                  'Brand-safe partnerships with clear contracts',
                  'Reporting your CMO can take to the board',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[var(--color-accent)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <Button href="/brands" variant="primary" showArrow>
                Solutions for Brands
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-[var(--color-primary)]">
        <div className="container">
          <SectionHeading
            badge="How It Works"
            title="From first call to full-service management"
            subtitle="A clear, simple process so you know exactly what's coming."
            align="center"
            light
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group"
                >
                  <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 hover:border-[var(--color-accent)]/30 transition-all duration-500 h-full">
                    <div className="flex items-center gap-5 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/30 flex items-center justify-center text-[var(--color-accent)] font-bold text-lg">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button href="/how-it-works" variant="secondary" showArrow>
              See the Full Process
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Founder Strip */}
      <section className="section gradient-mesh">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              <div className="relative">
                <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-[var(--color-accent)] via-[var(--color-gold)] to-[var(--color-cyan)] flex items-center justify-center text-white text-5xl font-bold shadow-[0_0_60px_rgba(255,77,77,0.3)]">
                  SL
                </div>
                <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
            
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-[0.15em] rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20">
                  <Sparkles className="w-3.5 h-3.5" />
                  Led by a Creator Economy Veteran
                </span>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-300 mb-8 leading-relaxed"
              >
                Content Motley is led by <strong className="text-white">Sholz S. Laelle</strong>, an MBA-trained executive with 16+ years building content, streaming and creator businesses for Google/YouTube, Paramount, Multichoice and Aforevo.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap justify-center lg:justify-start gap-3"
              >
                {founderCredentials.map((cred, i) => (
                  <motion.div
                    key={cred.text}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 hover:border-[var(--color-accent)]/30 transition-colors"
                  >
                    <cred.icon className="w-4 h-4 text-[var(--color-accent)]" />
                    <span className="text-sm font-medium text-white/80">{cred.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
