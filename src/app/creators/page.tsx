'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { IconCard, BentoCard, FeatureCard, StatCard } from '@/components/ui/Card';
import { Hero } from '@/components/ui/Hero';
import { 
  Play, 
  TrendingUp, 
  DollarSign,
  BarChart3,
  Users,
  Lightbulb,
  Shield,
  Zap,
  Target,
  MessageCircle,
  Calendar,
  Award,
  CheckCircle2,
  Sparkles,
  Youtube,
  Video,
  Layers,
  LineChart
} from 'lucide-react';

const whatYouGet = [
  { icon: Target, title: 'Dedicated Channel Strategy', description: 'Custom programming and positioning tailored to your niche and audience.', color: 'var(--color-accent)' },
  { icon: Lightbulb, title: 'SEO-Optimised Content', description: 'Titles, descriptions and tags engineered for maximum discoverability.', color: 'var(--color-cyan)' },
  { icon: Play, title: 'Scroll-Stopping Thumbnails', description: 'Thumbnail concepts and designs that convert browsers into viewers.', color: 'var(--color-gold)' },
  { icon: Calendar, title: 'Smart Upload Calendars', description: 'Publishing schedules that match when your audience is most active.', color: 'var(--color-purple)' },
  { icon: Layers, title: 'Playlist & Series Strategy', description: 'Structures that keep viewers watching longer and coming back.', color: 'var(--color-accent)' },
  { icon: Zap, title: 'End-to-End Optimization', description: 'Every element of your channel working together for growth.', color: 'var(--color-cyan)' },
];

const monetizationFeatures = [
  {
    icon: DollarSign,
    title: 'Ad Revenue Optimisation',
    description: 'Intelligent ad placements and formats to grow RPM without hurting viewer experience.',
    color: 'var(--color-accent)',
  },
  {
    icon: Shield,
    title: 'Content ID & Rights Management',
    description: 'Protect your catalogue, monetise reuploads or block them – your choice.',
    color: 'var(--color-cyan)',
  },
  {
    icon: Award,
    title: 'Brand Deals & Sponsorships',
    description: 'We pitch, negotiate and help execute campaigns that feel native to your channel.',
    color: 'var(--color-gold)',
  },
  {
    icon: Zap,
    title: 'Multi-Format Monetization',
    description: 'Long-form, Shorts, lives, compilations and spin-offs working together.',
    color: 'var(--color-purple)',
  },
];

const analyticsFeatures = [
  { icon: BarChart3, title: 'Audience Analysis', description: 'Deep dive into who watches, when and why.' },
  { icon: TrendingUp, title: 'Content Mapping', description: 'What to keep making, what to retire.' },
  { icon: Target, title: 'A/B Testing', description: 'Thumbnail and title testing for higher CTR.' },
  { icon: Calendar, title: 'Performance Reviews', description: 'Regular reviews and action plans.' },
];

const fitCriteria = [
  {
    title: 'Consistent',
    description: 'You\'re consistent or ready to become consistent.',
    icon: CheckCircle2,
  },
  {
    title: 'Traction',
    description: 'You already have traction, or a strong catalogue we can work with.',
    icon: TrendingUp,
  },
  {
    title: 'Business-minded',
    description: 'You want to build a business – not just chase one viral moment.',
    icon: Target,
  },
];

export default function CreatorsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 pattern-dots opacity-30" />
          
          <motion.div
            animate={{ 
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[var(--color-accent)] blur-[150px] opacity-30"
          />
          <motion.div
            animate={{ 
              y: [0, 40, 0],
              x: [0, 20, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-[var(--color-cyan)] blur-[180px] opacity-15"
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
                <Youtube className="w-4 h-4 text-[var(--color-accent)]" />
                For Creators
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-display-xl font-bold text-white leading-[0.95] mb-8"
            >
              The creator network for Africa&apos;s most{' '}
              <span className="text-gradient">ambitious voices</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/60 mb-10 max-w-3xl leading-relaxed"
            >
              Get a YouTube-native team, serious monetization and a network of top African creators behind you.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button href="/apply" variant="primary" size="lg" showArrow>
                Apply to Join the Network
              </Button>
              <Button href="#" variant="outline-white" size="lg" external showArrow>
                Book a Discovery Call
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Get - Bento Grid */}
      <section className="section bg-[var(--color-primary)]">
        <div className="container">
          <SectionHeading
            badge="What You Get"
            title="More than management – your unfair advantage"
            subtitle="When you join Content Motley, you're not just signing with an MCN. You're getting a partner who treats your channel like a media business."
            light
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatYouGet.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
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

      {/* Monetization & Revenue */}
      <section className="section gradient-mesh">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                badge="Monetization"
                title="Turn attention into income"
                subtitle="We build a monetization plan that fits your content and stage."
                light
              />
              
              <div className="space-y-6">
                {monetizationFeatures.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-5 group"
                  >
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${item.color}20`, border: `1px solid ${item.color}30` }}
                    >
                      <item.icon className="w-7 h-7" style={{ color: item.color }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-white">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Revenue Stats Card */}
              <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-10">
                <div className="text-center mb-10">
                  <div className="text-6xl font-bold text-gradient mb-3">+32%</div>
                  <div className="text-gray-400 uppercase tracking-wider text-sm">Average YoY Revenue Uplift</div>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Ad Revenue', value: '85%', growth: '+24%', color: 'var(--color-accent)' },
                    { label: 'Brand Deals', value: '12%', growth: '+156%', color: 'var(--color-gold)' },
                    { label: 'Content ID', value: '3%', growth: '+89%', color: 'var(--color-cyan)' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between p-5 bg-white/[0.03] rounded-xl border border-white/[0.05]">
                      <span className="font-medium text-white">{item.label}</span>
                      <div className="flex items-center gap-6">
                        <span className="text-gray-500">{item.value}</span>
                        <span className="font-bold" style={{ color: item.color }}>{item.growth}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--color-accent)]/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[var(--color-cyan)]/20 rounded-full blur-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Growth Tools & Analytics */}
      <section className="section bg-[var(--color-primary-light)]">
        <div className="container">
          <SectionHeading
            badge="Analytics"
            title="Data, not vibes"
            subtitle="We use platform analytics and industry tools to guide decisions – not guesswork."
            light
            align="center"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {analyticsFeatures.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 border border-white/[0.08] hover:border-[var(--color-accent)]/30 transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-[var(--color-accent)]" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
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
              <Sparkles className="w-4 h-4 text-[var(--color-gold)] inline mr-2" />
              You also get access to selected premium tools and playbooks that creators normally pay for.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Personal Support & Community */}
      <section className="section gradient-mesh">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-5">
                {/* Large card spanning full width */}
                <div className="col-span-2 bg-gradient-to-br from-[var(--color-accent)]/20 to-transparent border border-white/[0.08] rounded-2xl p-8">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-[var(--color-accent)] flex items-center justify-center shadow-[0_0_30px_rgba(255,77,77,0.3)]">
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-white">Direct Access</h3>
                      <p className="text-gray-400">WhatsApp / Telegram support for quick decisions</p>
                    </div>
                  </div>
                </div>
                
                {/* Smaller cards */}
                <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 hover:border-[var(--color-cyan)]/30 transition-colors">
                  <Users className="w-10 h-10 text-[var(--color-cyan)] mb-4" />
                  <h3 className="font-bold text-white mb-1">Community</h3>
                  <p className="text-sm text-gray-400">Network of serious creators</p>
                </div>
                <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 hover:border-[var(--color-gold)]/30 transition-colors">
                  <Award className="w-10 h-10 text-[var(--color-gold)] mb-4" />
                  <h3 className="font-bold text-white mb-1">Programs</h3>
                  <p className="text-sm text-gray-400">Sessions & labs access</p>
                </div>
              </div>
            </motion.div>
            
            <div>
              <SectionHeading
                badge="Support"
                title="You don't have to figure it out alone"
                subtitle="Every creator in our network gets human support, not just dashboards."
                light
              />
              
              <ul className="space-y-5">
                {[
                  'Access to our team via WhatsApp / Telegram for quick questions and decisions',
                  'Help with admin, paperwork and platform issues',
                  'Invitations to creator programs, sessions and labs',
                  'A community of creators who are just as serious as you are',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)]" />
                    </div>
                    <span className="text-white/80 text-lg leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Accept */}
      <section className="section bg-[var(--color-primary)]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading
              badge="Fit Check"
              title="Are we a fit for each other?"
              subtitle="We're a curated network. You're likely a strong fit if:"
              align="center"
              light
            />
            
            <div className="grid md:grid-cols-3 gap-6 mb-14">
              {fitCriteria.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 hover:border-[var(--color-accent)]/30 transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-accent)] flex items-center justify-center mx-auto mb-5 shadow-[0_0_30px_rgba(255,77,77,0.3)]">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-xl text-gray-300">Think this sounds like you?</p>
              <Button href="/apply" variant="primary" size="lg" showArrow>
                Apply to Join the Network
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

