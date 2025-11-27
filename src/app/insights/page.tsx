'use client';

import { motion } from 'framer-motion';
import { Button, PillButton } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { 
  BookOpen,
  TrendingUp,
  Users,
  Film,
  Globe,
  ArrowRight,
  Clock,
  Tag
} from 'lucide-react';
import { useState } from 'react';

const topics = [
  { id: 'all', label: 'All Topics' },
  { id: 'creators', label: 'For Creators' },
  { id: 'media', label: 'For Media Owners' },
  { id: 'brands', label: 'For Brands' },
  { id: 'africa', label: 'Africa Creator Economy' },
];

const articles = [
  {
    id: 1,
    title: 'The Ultimate Guide to YouTube Monetization in Africa',
    excerpt: 'Everything you need to know about turning your African YouTube channel into a sustainable revenue stream.',
    topic: 'creators',
    readTime: '12 min read',
    date: '2024-01-15',
    featured: true,
  },
  {
    id: 2,
    title: 'Why Brands Should Partner with African Creators in 2024',
    excerpt: 'The rise of the African creator economy and what it means for global brands looking to reach new audiences.',
    topic: 'brands',
    readTime: '8 min read',
    date: '2024-01-10',
    featured: true,
  },
  {
    id: 3,
    title: 'Content ID 101: Protecting Your Film and TV Catalogue on YouTube',
    excerpt: 'A comprehensive guide to setting up and managing Content ID for media companies and IP owners.',
    topic: 'media',
    readTime: '10 min read',
    date: '2024-01-08',
    featured: false,
  },
  {
    id: 4,
    title: 'State of the African Creator Economy: 2024 Report',
    excerpt: 'Key trends, opportunities and challenges facing African digital creators this year.',
    topic: 'africa',
    readTime: '15 min read',
    date: '2024-01-05',
    featured: true,
  },
  {
    id: 5,
    title: 'How to Repurpose Long-Form Content into YouTube Shorts',
    excerpt: 'A step-by-step guide to maximizing your content library with strategic Shorts repurposing.',
    topic: 'creators',
    readTime: '6 min read',
    date: '2024-01-03',
    featured: false,
  },
  {
    id: 6,
    title: 'Working with African Creators: A Guide for Agencies',
    excerpt: 'Best practices for brands and agencies partnering with creators across the continent.',
    topic: 'brands',
    readTime: '9 min read',
    date: '2024-01-01',
    featured: false,
  },
];

const topicIcons: Record<string, typeof Users> = {
  creators: Users,
  media: Film,
  brands: TrendingUp,
  africa: Globe,
};

export default function InsightsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredArticles = activeFilter === 'all' 
    ? articles 
    : articles.filter(a => a.topic === activeFilter);

  const featuredArticles = articles.filter(a => a.featured).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center gradient-hero overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 pattern-grid opacity-30" />
          
          <motion.div
            animate={{ 
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/3 right-1/3 w-[500px] h-[500px] rounded-full bg-[var(--color-cyan)] blur-[150px] opacity-20"
          />
          <motion.div
            animate={{ 
              y: [0, 40, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[var(--color-accent)] blur-[180px] opacity-15"
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
                <BookOpen className="w-4 h-4 text-[var(--color-cyan)]" />
                Insights
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-display-xl font-bold text-white leading-[0.95] mb-8"
            >
              Insights from inside the{' '}
              <span className="text-gradient">creator economy</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/60 max-w-3xl leading-relaxed"
            >
              Practical guides and commentary for creators, media owners and brands betting on African audiences.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-8 bg-[var(--color-primary)] border-b border-white/10 sticky top-[72px] z-30 backdrop-blur-xl">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center">
            {topics.map((topic) => (
              <PillButton
                key={topic.id}
                active={activeFilter === topic.id}
                onClick={() => setActiveFilter(topic.id)}
              >
                {topic.label}
              </PillButton>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {activeFilter === 'all' && (
        <section className="section bg-[var(--color-primary)]">
          <div className="container">
            <SectionHeading
              badge="Featured"
              title="Latest insights"
              light
            />
            
            <div className="grid md:grid-cols-3 gap-8">
              {featuredArticles.map((article, i) => {
                const TopicIcon = topicIcons[article.topic] || BookOpen;
                return (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
                  >
                    {/* Article thumbnail placeholder */}
                    <div className="aspect-video bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-cyan)]/10 relative overflow-hidden">
                      <div className="absolute inset-0 pattern-dots opacity-30" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <TopicIcon className="w-16 h-16 text-white/10" />
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--color-accent)]/20 text-[var(--color-accent)] capitalize">
                          {article.topic}
                        </span>
                        <span className="text-gray-500 text-xs flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                        {article.excerpt}
                      </p>
                      
                      <Button variant="ghost" size="sm" showArrow className="text-[var(--color-accent)]">
                        Read More
                      </Button>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className={`section ${activeFilter === 'all' ? 'gradient-mesh' : 'bg-[var(--color-primary)]'}`}>
        <div className="container">
          {activeFilter !== 'all' && (
            <SectionHeading
              badge={topics.find(t => t.id === activeFilter)?.label}
              title="Browse articles"
              light
            />
          )}
          
          <div className="grid md:grid-cols-2 gap-6">
            {filteredArticles.map((article, i) => {
              const TopicIcon = topicIcons[article.topic] || BookOpen;
              return (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group flex gap-6 bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 hover:border-white/20 transition-all duration-500 cursor-pointer"
                >
                  {/* Thumbnail */}
                  <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-[var(--color-accent)]/20 to-transparent flex-shrink-0 flex items-center justify-center">
                    <TopicIcon className="w-10 h-10 text-[var(--color-accent)]/50" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[var(--color-accent)] text-xs font-medium uppercase tracking-wider capitalize">
                        {article.topic}
                      </span>
                      <span className="text-gray-500 text-xs">•</span>
                      <span className="text-gray-500 text-xs">{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gradient transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section bg-[var(--color-primary)]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[var(--color-accent)]/20 to-transparent border border-white/[0.08] rounded-3xl p-12"
            >
              <BookOpen className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-6" />
              <h2 className="text-display-sm font-bold text-white mb-4">
                Get insights delivered
              </h2>
              <p className="text-gray-400 mb-8">
                Subscribe to get the latest creator economy insights, tips and strategies straight to your inbox.
              </p>
              <div className="flex gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[var(--color-accent)]"
                />
                <Button variant="primary">Subscribe</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
