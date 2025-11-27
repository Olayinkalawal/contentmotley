'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
  titleClassName?: string;
  size?: 'default' | 'large' | 'small';
  gradient?: boolean;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'left',
  light = false,
  className,
  titleClassName,
  size = 'default',
  gradient = false,
}: SectionHeadingProps) {
  return (
    <div className={cn(
      'mb-12 md:mb-16',
      align === 'center' && 'text-center mx-auto max-w-3xl',
      className
    )}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className={cn(
            'inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-[0.2em] rounded-full',
            light 
              ? 'bg-white/10 text-white/90 border border-white/20' 
              : 'bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20'
          )}>
            <span className={cn(
              'w-1.5 h-1.5 rounded-full animate-pulse',
              light ? 'bg-white' : 'bg-[var(--color-accent)]'
            )} />
            {badge}
          </span>
        </motion.div>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={cn(
          'font-bold',
          size === 'large' && 'text-display-lg',
          size === 'default' && 'text-display-md',
          size === 'small' && 'text-display-sm',
          light ? 'text-white' : 'text-white',
          gradient && 'text-gradient',
          titleClassName
        )}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={cn(
            'mt-5 text-body-lg max-w-2xl',
            align === 'center' && 'mx-auto',
            light ? 'text-white/70' : 'text-gray-400'
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

// Alternate style for special sections
export function SectionHeadingAlt({
  eyebrow,
  title,
  titleHighlight,
  description,
  align = 'left',
  className,
}: {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <div className={cn(
      'mb-16',
      align === 'center' && 'text-center',
      className
    )}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[var(--color-accent)] font-mono text-sm uppercase tracking-wider mb-4"
        >
          {eyebrow}
        </motion.p>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-display-lg font-bold text-white"
      >
        {title}
        {titleHighlight && (
          <span className="text-gradient"> {titleHighlight}</span>
        )}
      </motion.h2>
      
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={cn(
            'mt-6 text-xl text-gray-400 max-w-2xl',
            align === 'center' && 'mx-auto'
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
