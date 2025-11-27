'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StatCard, TestimonialCard } from '@/components/ui/Card';
import { 
  TrendingUp,
  Eye,
  Film,
  Users,
  DollarSign,
  Award,
  Play,
  ArrowUpRight,
  BarChart3,
  Youtube
} from 'lucide-react';

const networkStats = [
  { value: '1B+', label: 'Monthly Views Driven', icon: Eye },
  { value: '120+', label: 'Films Commissioned', icon: Film },
  { value: '200+', label: 'Channels Managed', icon: Users },
  { value: '32%', label: 'YoY Revenue Uplift', icon: TrendingUp },
];

const creatorHighlights = [
  {
    name: 'Music Creator',
    niche: 'Afrobeats & Entertainment',
    result: 'Higher CTR, longer watch time and more predictable monthly revenue through refined programming and thumbnail redesign.',
    stats: { views: '+45%', revenue: '+38%', ctr: '+2.1%' },
  },
  {
    name: 'Comedy Channel',
    niche: 'Comedy & Skits',
    result: 'Scaled from 500k to 2M subscribers in 18 months with strategic Shorts repurposing and series design.',
    stats: { views: '+120%', revenue: '+89%', subs: '+300%' },
  },
  {
    name: 'Film Studio',
    niche: 'Nollywood & Drama',
    result: 'Transformed 200+ title catalogue into a monetizing YouTube channel generating consistent passive income.',
    stats: { views: '+200%', revenue: '+156%', catalog: '200+' },
  },
];

const testimonials = [
  {
    quote: "Content Motley transformed how we think about our YouTube presence. We went from uploading randomly to having a real content strategy that drives consistent revenue.",
    author: "Creator Partner",
    role: "Entertainment Channel",
  },
  {
    quote: "The team's platform expertise is unmatched. They've been inside YouTube, they know how the algorithm works, and they know how to make it work for us.",
    author: "Media Company",
    role: "Film & TV IP Owner",
  },
  {
    quote: "Finally, a partner who treats our channel like a real business. Clear reporting, smart strategy, and results we can actually measure.",
    author: "Digital Creator",
    role: "Lifestyle & Vlog",
  },
];

const beforeAfter = [
  { metric: 'Click-Through Rate', before: '2.1%', after: '4.8%', improvement: '+128%' },
  { metric: 'Average View Duration', before: '3:45', after: '7:20', improvement: '+95%' },
  { metric: 'Monthly Revenue', before: '$2,400', after: '$8,100', improvement: '+238%' },
  { metric: 'Subscriber Growth', before: '+5k/mo', after: '+25k/mo', improvement: '+400%' },
];

export default function ResultsPage() {
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
            className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-[var(--color-gold)] blur-[150px] opacity-25"
          />
          <motion.div
            animate={{ 
              y: [0, 40, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-[var(--color-accent)] blur-[180px] opacity-20"
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
                <BarChart3 className="w-4 h-4 text-[var(--color-gold)]" />
                Our Results
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-display-xl font-bold text-white leading-[0.95] mb-8"
            >
              Proven reach.{' '}
              <span className="text-gradient">Real creators. Real revenue.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/60 mb-10 max-w-3xl leading-relaxed"
            >
              We&apos;ve done it at scale inside the biggest platforms – and now we do it with you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Network Snapshot */}
      <section className="section bg-[var(--color-primary)]">
        <div className="container">
          <SectionHeading
            badge="Network Snapshot"
            title="What we've moved, so far"
            align="center"
            light
          />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {networkStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 text-center hover:border-[var(--color-accent)]/30 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/30 flex items-center justify-center mx-auto mb-5">
                  <stat.icon className="w-7 h-7 text-[var(--color-accent)]" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Highlights */}
      <section className="section gradient-mesh">
        <div className="container">
          <SectionHeading
            badge="Creator Highlights"
            title="Creators who choose Content Motley"
            subtitle="Real results from our network partners."
            align="center"
            light
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {creatorHighlights.map((creator, i) => (
              <motion.div
                key={creator.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-8 hover:border-white/20 transition-all duration-500"
              >
                {/* Creator avatar placeholder */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-gold)] flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,77,77,0.3)]">
                  <Youtube className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-[var(--color-accent)] text-sm font-medium mb-2">{creator.niche}</div>
                <h3 className="text-xl font-bold text-white mb-4">{creator.name}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{creator.result}</p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  {Object.entries(creator.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-[var(--color-accent)]">{value}</div>
                      <div className="text-xs text-gray-500 uppercase">{key}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="section bg-[var(--color-primary)]">
        <div className="container">
          <SectionHeading
            badge="The Difference"
            title="The Content Motley difference"
            subtitle="When we work with a creator or media partner, we typically see:"
            align="center"
            light
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {beforeAfter.map((item, i) => (
                <motion.div
                  key={item.metric}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 hover:border-[var(--color-accent)]/30 transition-all duration-500"
                >
                  <div className="text-gray-400 text-sm uppercase tracking-wider mb-4">{item.metric}</div>
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="text-gray-500 text-xs mb-1">Before</div>
                      <div className="text-2xl font-bold text-white/50">{item.before}</div>
                    </div>
                    <div className="flex items-center gap-2 text-[var(--color-accent)]">
                      <ArrowUpRight className="w-5 h-5" />
                      <span className="font-bold">{item.improvement}</span>
                    </div>
                    <div className="text-center">
                      <div className="text-[var(--color-accent)] text-xs mb-1">After</div>
                      <div className="text-2xl font-bold text-gradient">{item.after}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section gradient-mesh">
        <div className="container">
          <SectionHeading
            badge="Testimonials"
            title="What our partners say"
            align="center"
            light
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard
                key={i}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                delay={i * 0.1}
              />
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
              <div className="w-20 h-20 rounded-2xl bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/30 flex items-center justify-center mx-auto mb-8">
                <TrendingUp className="w-10 h-10 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-display-md font-bold text-white mb-6">
                Want results like this?
              </h2>
              <p className="text-xl text-gray-400 mb-10">
                Apply to join the network and let&apos;s discuss how we can help you grow.
              </p>
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
