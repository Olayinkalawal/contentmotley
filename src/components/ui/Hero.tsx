'use client';

import { motion } from 'framer-motion';
import { Button } from './Button';
import { cn } from '@/lib/utils';
import { Play, ArrowDown } from 'lucide-react';

interface HeroProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
    external?: boolean;
  };
  showScroll?: boolean;
  className?: string;
  variant?: 'default' | 'center' | 'split';
  size?: 'default' | 'large' | 'compact';
  microcopy?: string;
}

export function Hero({
  badge,
  title,
  titleHighlight,
  subtitle,
  primaryCTA,
  secondaryCTA,
  showScroll = true,
  className,
  variant = 'default',
  size = 'default',
  microcopy,
}: HeroProps) {
  return (
    <section className={cn(
      'relative flex items-center gradient-hero overflow-hidden',
      size === 'large' && 'min-h-screen',
      size === 'default' && 'min-h-[90vh]',
      size === 'compact' && 'min-h-[70vh]',
      className
    )}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 pattern-grid opacity-30" />
        
        {/* Animated gradient orbs */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[var(--color-accent)] blur-sphere"
        />
        <motion.div
          animate={{ 
            y: [0, 40, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[var(--color-cyan)] blur-sphere opacity-20"
        />
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            x: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full bg-[var(--color-gold)] blur-sphere opacity-10"
        />
        
        {/* Animated shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] border border-white/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-1/2 -left-1/4 w-[1000px] h-[1000px] border border-white/5 rounded-full"
        />
      </div>

      <div className={cn(
        'container relative z-10',
        size === 'large' ? 'pt-40 pb-24' : 'pt-36 pb-20'
      )}>
        <div className={cn(
          'max-w-5xl',
          variant === 'center' && 'mx-auto text-center'
        )}>
          {/* Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-5 py-2 mb-8 text-xs font-bold uppercase tracking-[0.2em] rounded-full bg-white/[0.08] text-white/80 border border-white/10 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                {badge}
              </span>
            </motion.div>
          )}
          
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={cn(
              'font-bold text-white leading-[0.95]',
              size === 'large' ? 'text-display-2xl' : 'text-display-xl',
              'mb-8'
            )}
          >
            {title}
            {titleHighlight && (
              <>
                {' '}
                <span className="text-gradient">{titleHighlight}</span>
              </>
            )}
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={cn(
              'text-body-xl text-white/60 mb-4',
              variant === 'center' ? 'max-w-3xl mx-auto' : 'max-w-3xl'
            )}
          >
            {subtitle}
          </motion.p>
          
          {/* Microcopy */}
          {microcopy && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/40 text-sm italic mb-10"
            >
              {microcopy}
            </motion.p>
          )}
          
          {/* CTAs */}
          {(primaryCTA || secondaryCTA) && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className={cn(
                'flex flex-col sm:flex-row gap-4',
                variant === 'center' && 'justify-center'
              )}
            >
              {primaryCTA && (
                <Button href={primaryCTA.href} variant="primary" size="lg" showArrow>
                  {primaryCTA.text}
                </Button>
              )}
              {secondaryCTA && (
                <Button 
                  href={secondaryCTA.href} 
                  variant="outline-white" 
                  size="lg"
                  external={secondaryCTA.external}
                  showArrow={secondaryCTA.external}
                >
                  {secondaryCTA.text}
                </Button>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScroll && (
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
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

// Video Hero Variant
interface VideoHeroProps extends Omit<HeroProps, 'variant'> {
  videoUrl?: string;
  posterUrl?: string;
}

export function VideoHero({
  videoUrl,
  posterUrl,
  ...props
}: VideoHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      {videoUrl && (
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={posterUrl}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-[var(--color-primary)]/80 to-[var(--color-primary)]/60" />
        </div>
      )}
      
      <Hero {...props} className="bg-transparent" />
    </section>
  );
}

// Split Hero with image/video side
interface SplitHeroProps extends Omit<HeroProps, 'variant'> {
  media?: {
    type: 'image' | 'video';
    src: string;
    alt?: string;
  };
  stats?: {
    value: string;
    label: string;
  }[];
}

export function SplitHero({
  media,
  stats,
  ...props
}: SplitHeroProps) {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-30" />
      
      <div className="container relative z-10 pt-40 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <Hero {...props} showScroll={false} className="bg-transparent min-h-0 pt-0 pb-0" />
          </div>
          
          {/* Media */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10">
              {media?.type === 'video' ? (
                <>
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={media.src} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 rounded-full bg-[var(--color-accent)] flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_40px_rgba(255,77,77,0.4)]">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </button>
                  </div>
                </>
              ) : media?.type === 'image' ? (
                <img 
                  src={media.src} 
                  alt={media.alt || ''} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[var(--color-accent)]/30 to-[var(--color-gold)]/20 flex items-center justify-center">
                  <button className="w-20 h-20 rounded-full bg-[var(--color-accent)] flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_40px_rgba(255,77,77,0.4)]">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </button>
                </div>
              )}
            </div>
            
            {/* Floating Stats Card */}
            {stats && stats.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-8 -left-8 bg-white/[0.05] backdrop-blur-xl rounded-2xl p-6 border border-white/10"
              >
                <div className="flex gap-8">
                  {stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

