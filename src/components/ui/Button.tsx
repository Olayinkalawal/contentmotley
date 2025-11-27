'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'white' | 'outline-white' | 'gold' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
  external?: boolean;
  type?: 'button' | 'submit';
  disabled?: boolean;
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className,
  showArrow = false,
  external = false,
  type = 'button',
  disabled = false,
  fullWidth = false,
}: ButtonProps) {
  const baseStyles = cn(
    'group inline-flex items-center justify-center gap-2.5 font-semibold rounded-xl transition-all duration-300 cursor-pointer relative overflow-hidden',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
    {
      'px-4 py-2.5 text-sm': size === 'sm',
      'px-7 py-3.5 text-base': size === 'md',
      'px-10 py-5 text-lg': size === 'lg',
      'w-full': fullWidth,
      // Primary - Electric Coral with glow
      'bg-[var(--color-accent)] text-white border-2 border-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] hover:border-[var(--color-accent-hover)] hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,77,77,0.4)] active:translate-y-0': variant === 'primary',
      // Secondary - Glass outline
      'bg-transparent text-white border-2 border-white/20 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 hover:-translate-y-1': variant === 'secondary',
      // White - Solid white
      'bg-white text-[var(--color-primary)] border-2 border-white hover:bg-gray-100 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(255,255,255,0.15)]': variant === 'white',
      // Outline white - Transparent with white border
      'bg-transparent text-white border-2 border-white/40 hover:bg-white hover:text-[var(--color-primary)] hover:-translate-y-1': variant === 'outline-white',
      // Gold - Premium
      'bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-dark)] text-[var(--color-primary)] border-2 border-transparent hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,184,0,0.4)]': variant === 'gold',
      // Ghost - Minimal
      'bg-transparent text-white/80 border-2 border-transparent hover:text-white hover:bg-white/5': variant === 'ghost',
    },
    className
  );

  const ArrowIcon = external ? ArrowUpRight : ArrowRight;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <ArrowIcon className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
      )}
      {/* Shine effect for primary button */}
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={baseStyles}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={baseStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={baseStyles}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

// Pill button for tags/filters
export function PillButton({
  children,
  active = false,
  onClick,
  className,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-5 py-2 rounded-full text-sm font-medium transition-all duration-300',
        active
          ? 'bg-[var(--color-accent)] text-white shadow-[0_0_20px_rgba(255,77,77,0.3)]'
          : 'bg-white/5 text-white/70 border border-white/10 hover:border-[var(--color-accent)]/50 hover:text-white',
        className
      )}
    >
      {children}
    </button>
  );
}

// Icon Button
export function IconButton({
  children,
  onClick,
  className,
  variant = 'ghost',
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'ghost' | 'filled';
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300',
        variant === 'ghost' 
          ? 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white' 
          : 'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)]',
        className
      )}
    >
      {children}
    </button>
  );
}
