'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface MarqueeProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: 'slow' | 'normal' | 'fast';
  pauseOnHover?: boolean;
  className?: string;
}

export function Marquee({
  children,
  direction = 'left',
  speed = 'normal',
  pauseOnHover = true,
  className,
}: MarqueeProps) {
  const speeds = {
    slow: '60s',
    normal: '40s',
    fast: '25s',
  };

  return (
    <div className={cn('overflow-hidden whitespace-nowrap', className)}>
      <div
        className={cn(
          'inline-flex',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
        style={{
          animation: `marquee ${speeds[speed]} linear infinite`,
          animationDirection: direction === 'right' ? 'reverse' : 'normal',
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

// Logo Strip Component
interface LogoStripProps {
  logos: {
    name: string;
    icon?: React.ReactNode;
  }[];
  title?: string;
  className?: string;
}

export function LogoStrip({ logos, title, className }: LogoStripProps) {
  return (
    <div className={cn('py-12 border-y border-white/10', className)}>
      {title && (
        <p className="text-center text-sm text-gray-500 uppercase tracking-widest mb-8">
          {title}
        </p>
      )}
      <Marquee speed="slow">
        {logos.map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="flex items-center gap-3 px-10 text-gray-400 hover:text-white transition-colors"
          >
            {logo.icon && <span className="text-2xl">{logo.icon}</span>}
            <span className="text-xl font-semibold tracking-tight">{logo.name}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

// Stats Marquee
interface StatsMarqueeProps {
  stats: {
    value: string;
    label: string;
  }[];
  className?: string;
}

export function StatsMarquee({ stats, className }: StatsMarqueeProps) {
  return (
    <div className={cn('py-8 bg-[var(--color-accent)]', className)}>
      <Marquee speed="normal" pauseOnHover={false}>
        {stats.map((stat, i) => (
          <div
            key={`${stat.label}-${i}`}
            className="flex items-center gap-4 px-12"
          >
            <span className="text-3xl font-bold text-white">{stat.value}</span>
            <span className="text-white/80 uppercase tracking-wider text-sm">{stat.label}</span>
            <span className="text-white/40 mx-8">•</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

// Testimonial Marquee
interface TestimonialMarqueeProps {
  testimonials: {
    quote: string;
    author: string;
    role: string;
  }[];
  className?: string;
}

export function TestimonialMarquee({ testimonials, className }: TestimonialMarqueeProps) {
  return (
    <div className={cn('py-8', className)}>
      <Marquee speed="slow">
        {testimonials.map((item, i) => (
          <div
            key={`${item.author}-${i}`}
            className="flex-shrink-0 w-[400px] mx-4 p-6 bg-white/[0.03] rounded-2xl border border-white/10"
          >
            <p className="text-white/80 mb-4 line-clamp-3">&ldquo;{item.quote}&rdquo;</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-gold)] flex items-center justify-center text-white text-sm font-bold">
                {item.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="text-white font-medium text-sm">{item.author}</div>
                <div className="text-gray-500 text-xs">{item.role}</div>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

// Creator Marquee with images
interface CreatorMarqueeProps {
  creators: {
    name: string;
    niche: string;
    image?: string;
  }[];
  className?: string;
}

export function CreatorMarquee({ creators, className }: CreatorMarqueeProps) {
  return (
    <div className={cn('py-6', className)}>
      <Marquee speed="slow">
        {creators.map((creator, i) => (
          <div
            key={`${creator.name}-${i}`}
            className="flex items-center gap-3 mx-6 px-4 py-2 bg-white/[0.03] rounded-full border border-white/10 hover:border-[var(--color-accent)]/50 transition-colors cursor-pointer"
          >
            {creator.image ? (
              <img 
                src={creator.image} 
                alt={creator.name}
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-gold)] flex items-center justify-center text-white text-sm font-bold">
                {creator.name.split(' ').map(n => n[0]).join('')}
              </div>
            )}
            <div>
              <div className="text-white font-medium text-sm whitespace-nowrap">{creator.name}</div>
              <div className="text-gray-500 text-xs">{creator.niche}</div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

// Brand Ticker
interface BrandTickerProps {
  brands: string[];
  className?: string;
  variant?: 'default' | 'outline';
}

export function BrandTicker({ brands, className, variant = 'default' }: BrandTickerProps) {
  return (
    <div className={cn('relative', className)}>
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--color-primary)] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--color-primary)] to-transparent z-10" />
      
      <Marquee speed="slow">
        {brands.map((brand, i) => (
          <span
            key={`${brand}-${i}`}
            className={cn(
              'mx-8 text-2xl font-bold tracking-tight transition-colors',
              variant === 'outline' 
                ? 'text-transparent stroke-text' 
                : 'text-gray-600 hover:text-white'
            )}
            style={variant === 'outline' ? {
              WebkitTextStroke: '1px rgba(255,255,255,0.3)',
            } : undefined}
          >
            {brand}
          </span>
        ))}
      </Marquee>
    </div>
  );
}

