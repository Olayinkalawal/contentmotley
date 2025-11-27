'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { 
  Target,
  Search,
  Image,
  DollarSign,
  Video,
  Shield,
  Wrench,
  Zap,
  TrendingUp,
  Play,
  Layout,
  Settings,
  FileText,
  BarChart3,
  Users,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Channel Strategy & Optimisation',
    description: 'Strategy engineered for YouTube success.',
    features: [
      'Channel positioning and audience definition',
      'Programming calendars for long-form, Shorts and lives',
      'Series design and episodic structure',
      'Playlists that drive session watch time',
      'End screens and cards that move viewers deeper',
    ],
    color: 'var(--color-accent)',
  },
  {
    icon: Search,
    title: 'YouTube SEO & Discoverability',
    description: 'Be the channel viewers actually find.',
    features: [
      'Keyword and topic research across African and global markets',
      'SEO-ready titles, descriptions and tags',
      'Structured metadata for search and suggested traffic',
      'Ongoing optimisation for evergreen and back catalogue content',
    ],
    color: 'var(--color-cyan)',
  },
  {
    icon: Image,
    title: 'Thumbnails & Creative Direction',
    description: 'Thumbnails that demand the click.',
    features: [
      'Thumbnail concepts and design direction based on your niche',
      'Testing and iteration to improve CTR',
      'Style systems so your team can produce at scale',
      'Click-through rate optimization',
    ],
    color: 'var(--color-gold)',
  },
  {
    icon: DollarSign,
    title: 'Monetization & Brand Deals',
    description: 'Build a smarter revenue stack.',
    features: [
      'Ad placement strategy for maximum RPM',
      'Monthly monetization reviews and recommendations',
      'Brand deal scouting, negotiation support and campaign design',
      'Advisory on pricing, deliverables and usage rights',
    ],
    color: 'var(--color-purple)',
  },
  {
    icon: Video,
    title: 'Content Transformation & Shorts',
    description: 'Make every piece of content work harder.',
    features: [
      'Long-form → Shorts repurposing pipelines',
      'Highlight cuts, compilations and theme-based playlists',
      'Refresh strategy for high-potential back catalogue',
      'Multi-format content optimization',
    ],
    color: 'var(--color-accent)',
  },
  {
    icon: Shield,
    title: 'Rights Management & Content ID',
    description: 'Protect your IP, protect your bag.',
    features: [
      'Content ID setup and management',
      'Claiming and monetizing reuploads',
      'Blocking where protection matters more than revenue',
      'Multi-territory rights advisory for media companies',
    ],
    color: 'var(--color-cyan)',
  },
];

const tools = [
  { icon: BarChart3, title: 'Analytics & Insights', description: 'Premium analytics tools for deep performance insights' },
  { icon: Layout, title: 'Production Music', description: 'Access to curated music libraries via partners' },
  { icon: FileText, title: 'Templates & Playbooks', description: 'Templates for briefs, thumbnails, titles and reporting' },
  { icon: Users, title: 'Community Access', description: 'Connect with serious creators in our network' },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center gradient-hero overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 pattern-grid opacity-30" />
          
          <motion.div
            animate={{ 
              y: [0, -30, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[var(--color-accent)] blur-[150px] opacity-25"
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
                <Wrench className="w-4 h-4 text-[var(--color-accent)]" />
                Our Services
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-display-xl font-bold text-white leading-[0.95] mb-8"
            >
              Full-stack YouTube growth for{' '}
              <span className="text-gradient">serious creators</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/60 mb-10 max-w-3xl leading-relaxed"
            >
              Strategy, optimisation, monetization and partnerships under one roof.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Button href="/apply" variant="primary" size="lg" showArrow>
                See If We&apos;re a Fit
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-[var(--color-primary)]">
        <div className="container">
          <div className="space-y-24">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${service.color}20`, border: `1px solid ${service.color}30` }}
                  >
                    <service.icon className="w-8 h-8" style={{ color: service.color }} />
                  </div>
                  <h2 className="text-display-sm font-bold text-white mb-4">{service.title}</h2>
                  <p className="text-xl text-gray-400 mb-8">{service.description}</p>
                  <ul className="space-y-4">
                    {service.features.map((feature, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.1 }}
                        className="flex items-start gap-4"
                      >
                        <div 
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: `${service.color}20` }}
                        >
                          <ArrowRight className="w-3.5 h-3.5" style={{ color: service.color }} />
                        </div>
                        <span className="text-white/80 text-lg">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className={`relative ${i % 2 === 1 ? 'lg:order-1' : ''}`}
                >
                  <div 
                    className="aspect-square rounded-3xl flex items-center justify-center relative overflow-hidden"
                    style={{ 
                      background: `linear-gradient(135deg, ${service.color}20 0%, transparent 50%)`,
                      border: `1px solid ${service.color}30`
                    }}
                  >
                    <div className="absolute inset-0 pattern-dots opacity-30" />
                    <service.icon className="w-32 h-32 opacity-20" style={{ color: service.color }} />
                  </div>
                  
                  {/* Decorative element */}
                  <div 
                    className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full blur-xl opacity-50"
                    style={{ backgroundColor: service.color }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Perks */}
      <section className="section gradient-mesh">
        <div className="container">
          <SectionHeading
            badge="Tools & Perks"
            title="Tools that usually cost money – included"
            align="center"
            light
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 hover:border-[var(--color-accent)]/30 transition-all duration-500 group text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/30 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <tool.icon className="w-7 h-7 text-[var(--color-accent)]" />
                </div>
                <h3 className="font-bold text-lg text-white mb-2">{tool.title}</h3>
                <p className="text-gray-400 text-sm">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[var(--color-primary)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 rounded-2xl bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/30 flex items-center justify-center mx-auto mb-8">
                <Zap className="w-10 h-10 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-display-md font-bold text-white mb-6">
                See if our services fit your channel
              </h2>
              <p className="text-xl text-gray-400 mb-10">
                We&apos;re selective about who we work with. Apply and we&apos;ll let you know if we&apos;re a strong fit.
              </p>
              <Button href="/apply" variant="primary" size="lg" showArrow>
                Apply to Join
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
