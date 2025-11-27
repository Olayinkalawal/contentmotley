'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  hover?: boolean;
  delay?: number;
  glow?: boolean;
}

export function Card({ 
  children, 
  className, 
  dark = true, 
  hover = true, 
  delay = 0,
  glow = false,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        'rounded-2xl p-6 md:p-8 relative',
        dark 
          ? 'bg-white/[0.03] backdrop-blur-sm border border-white/[0.08]' 
          : 'bg-white border border-gray-100',
        hover && 'transition-all duration-500 hover:-translate-y-2 hover:border-[var(--color-accent)]/30',
        glow && 'hover:shadow-[0_0_40px_rgba(255,77,77,0.15)]',
        className
      )}
    >
      {children}
    </motion.div>
  );
}

interface IconCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
  delay?: number;
  variant?: 'default' | 'minimal' | 'filled';
}

export function IconCard({ 
  icon: Icon, 
  title, 
  description, 
  iconColor = 'var(--color-accent)', 
  delay = 0,
  variant = 'default',
}: IconCardProps) {
  return (
    <Card delay={delay} glow className="group">
      <div 
        className={cn(
          'w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110',
          variant === 'filled' 
            ? 'bg-[var(--color-accent)]' 
            : 'border border-white/10'
        )}
        style={{ 
          backgroundColor: variant !== 'filled' ? `${iconColor}15` : undefined,
        }}
      >
        <Icon 
          className="w-7 h-7" 
          style={{ color: variant === 'filled' ? 'white' : iconColor }} 
        />
      </div>
      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gradient transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </Card>
  );
}

interface StepCardProps {
  number: string | number;
  title: string;
  description: string;
  delay?: number;
  active?: boolean;
}

export function StepCard({ 
  number, 
  title, 
  description, 
  delay = 0,
  active = false,
}: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className="relative flex gap-6 group"
    >
      {/* Number bubble */}
      <div className={cn(
        'flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-300',
        active 
          ? 'bg-[var(--color-accent)] text-white shadow-[0_0_30px_rgba(255,77,77,0.4)]' 
          : 'bg-white/5 text-white/60 border border-white/10 group-hover:border-[var(--color-accent)]/50 group-hover:text-[var(--color-accent)]'
      )}>
        {String(number).padStart(2, '0')}
      </div>
      
      {/* Content */}
      <div className="flex-1 pt-2">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
      
      {/* Connecting line */}
      <div className="absolute left-7 top-14 bottom-0 w-px bg-gradient-to-b from-white/10 to-transparent" />
    </motion.div>
  );
}

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
  variant?: 'default' | 'large' | 'accent';
}

export function StatCard({ 
  value, 
  label, 
  delay = 0,
  variant = 'default',
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        'text-center p-6',
        variant === 'accent' && 'bg-white/[0.03] rounded-2xl border border-white/[0.08]'
      )}
    >
      <div className={cn(
        'font-bold mb-2',
        variant === 'large' ? 'text-6xl md:text-7xl' : 'text-4xl md:text-5xl',
        'text-gradient'
      )}>
        {value}
      </div>
      <div className="text-gray-400 text-sm uppercase tracking-wider font-medium">{label}</div>
    </motion.div>
  );
}

// Bento Card for creative layouts
interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  span?: 'default' | 'wide' | 'tall' | 'large';
  delay?: number;
}

export function BentoCard({ 
  children, 
  className, 
  span = 'default',
  delay = 0,
}: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        'bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-8 overflow-hidden',
        'transition-all duration-500 hover:border-[var(--color-accent)]/30 hover:-translate-y-1',
        span === 'wide' && 'md:col-span-2',
        span === 'tall' && 'md:row-span-2',
        span === 'large' && 'md:col-span-2 md:row-span-2',
        className
      )}
    >
      {children}
    </motion.div>
  );
}

// Feature Card with icon and gradient background
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: string;
  delay?: number;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  gradient = 'from-[var(--color-accent)]/20 to-transparent',
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        'relative group rounded-3xl p-8 overflow-hidden',
        'bg-gradient-to-br',
        gradient,
        'border border-white/[0.08] transition-all duration-500',
        'hover:border-white/20 hover:-translate-y-2'
      )}
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent" />
      
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-[var(--color-accent)]" />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

// Testimonial Card
interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
  delay?: number;
}

export function TestimonialCard({
  quote,
  author,
  role,
  avatar,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-8"
    >
      {/* Quote icon */}
      <svg 
        className="w-12 h-12 text-[var(--color-accent)]/30 mb-6" 
        fill="currentColor" 
        viewBox="0 0 32 32"
      >
        <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z"/>
      </svg>
      
      <blockquote className="text-xl text-white mb-8 leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>
      
      <div className="flex items-center gap-4">
        {avatar ? (
          <img 
            src={avatar} 
            alt={author} 
            className="w-12 h-12 rounded-full object-cover border-2 border-[var(--color-accent)]/30"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-gold)] flex items-center justify-center text-white font-bold">
            {author.split(' ').map(n => n[0]).join('')}
          </div>
        )}
        <div>
          <div className="font-semibold text-white">{author}</div>
          <div className="text-gray-400 text-sm">{role}</div>
        </div>
      </div>
    </motion.div>
  );
}
