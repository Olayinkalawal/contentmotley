'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'Solutions',
    children: [
      { name: 'For Creators', href: '/creators', description: 'Grow your YouTube channel with expert support' },
      { name: 'For Brands', href: '/brands', description: 'Connect with Africa\'s top creators' },
      { name: 'Services', href: '/services', description: 'Full-stack YouTube management' },
    ]
  },
  { name: 'Results', href: '/results' },
  { name: 'Programs', href: '/programs' },
  { name: 'Insights', href: '/insights' },
  {
    name: 'Company',
    children: [
      { name: 'About', href: '/about', description: 'Our story and mission' },
      { name: 'How It Works', href: '/how-it-works', description: 'Your journey with us' },
      { name: 'FAQ', href: '/faq', description: 'Common questions answered' },
    ]
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled 
            ? 'bg-[var(--color-primary)]/90 backdrop-blur-xl border-b border-white/5 py-4' 
            : 'bg-transparent py-6'
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10 group">
            <span className="text-2xl font-bold tracking-tight text-white">
              Content
              <span className="text-[var(--color-accent)] group-hover:text-gradient transition-colors">Motley</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <button
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className={cn(
                      'flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-all duration-300',
                      'text-white/70 hover:text-white'
                    )}
                  >
                    {item.name}
                    <ChevronDown className={cn(
                      'w-4 h-4 transition-transform duration-300',
                      openDropdown === item.name && 'rotate-180'
                    )} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'px-4 py-2 text-sm font-medium transition-all duration-300',
                      pathname === item.href 
                        ? 'text-[var(--color-accent)]' 
                        : 'text-white/70 hover:text-white'
                    )}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Desktop Dropdown */}
                {item.children && (
                  <div
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className={cn(
                      'absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2',
                    )}
                  >
                    <div className="bg-[var(--color-primary-medium)] rounded-2xl shadow-2xl py-3 min-w-[280px] border border-white/10 backdrop-blur-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            'flex items-center justify-between px-5 py-3 mx-2 rounded-xl transition-all duration-300',
                            pathname === child.href 
                              ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]' 
                              : 'text-white/70 hover:text-white hover:bg-white/5'
                          )}
                        >
                          <div>
                            <div className="font-medium">{child.name}</div>
                            <div className="text-xs text-gray-500 mt-0.5">{child.description}</div>
                          </div>
                          <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button 
              href="/apply" 
              variant="primary"
              size="sm"
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-10 p-2 text-white"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[var(--color-primary)]/95 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.nav 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[var(--color-primary-light)] border-l border-white/10 overflow-y-auto"
            >
              <div className="pt-24 pb-8 px-6">
                {navigation.map((item, itemIndex) => (
                  <motion.div 
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: itemIndex * 0.05 }}
                    className="border-b border-white/10"
                  >
                    {item.children ? (
                      <>
                        <button
                          onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                          className="w-full flex items-center justify-between py-5 text-xl font-semibold text-white"
                        >
                          {item.name}
                          <ChevronDown className={cn(
                            'w-5 h-5 transition-transform duration-300',
                            openDropdown === item.name && 'rotate-180'
                          )} />
                        </button>
                        <AnimatePresence>
                          {openDropdown === item.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pb-4 space-y-1">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    className={cn(
                                      'block py-3 px-4 rounded-xl transition-all',
                                      pathname === child.href 
                                        ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]' 
                                        : 'text-white/60 hover:text-white hover:bg-white/5'
                                    )}
                                  >
                                    <div className="font-medium">{child.name}</div>
                                    <div className="text-xs text-gray-500 mt-0.5">{child.description}</div>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          'block py-5 text-xl font-semibold',
                          pathname === item.href 
                            ? 'text-[var(--color-accent)]' 
                            : 'text-white'
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
                
                {/* Mobile CTAs */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-8 space-y-3"
                >
                  <Button href="/apply" variant="primary" fullWidth>
                    Apply to Network
                  </Button>
                  <Button href="/brands" variant="secondary" fullWidth>
                    For Brands
                  </Button>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
