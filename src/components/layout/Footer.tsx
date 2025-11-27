'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Youtube, Linkedin, Twitter, Instagram, Mail, MapPin, Phone, ArrowUpRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const footerLinks = {
  solutions: [
    { name: 'For Creators', href: '/creators' },
    { name: 'For Brands', href: '/brands' },
    { name: 'Services', href: '/services' },
    { name: 'Results', href: '/results' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Programs', href: '/programs' },
    { name: 'Insights', href: '/insights' },
  ],
  support: [
    { name: 'FAQ', href: '/faq' },
    { name: 'Apply', href: '/apply' },
    { name: 'Contact', href: '/apply#contact' },
    { name: 'Privacy Policy', href: '#' },
  ],
};

const socialLinks = [
  { name: 'YouTube', icon: Youtube, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
];

export function Footer() {
  return (
    <footer className="relative bg-[var(--color-primary)] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pattern-grid opacity-20" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[var(--color-accent)] rounded-full blur-[200px] opacity-5" />
      
      {/* CTA Section */}
      <div className="relative border-b border-white/10">
        <div className="container py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/30 mb-8"
            >
              <Zap className="w-8 h-8 text-[var(--color-accent)]" />
            </motion.div>
            
            <h2 className="text-display-lg font-bold text-white mb-6">
              Ready to run your channel{' '}
              <span className="text-gradient">like a business?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              If you&apos;re serious about turning your content into a scalable, global business, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/apply" variant="primary" size="lg" showArrow>
                Apply to Join the Network
              </Button>
              <Button href="#" variant="outline-white" size="lg" external showArrow>
                Book a Strategy Call
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-6 group">
              <span className="text-3xl font-bold tracking-tight text-white">
                Content<span className="text-[var(--color-accent)] group-hover:text-gradient transition-colors">Motley</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-8 max-w-md text-lg leading-relaxed">
              Africa&apos;s creator service provider – helping creators, filmmakers and media brands turn views into long-term revenue.
            </p>
            <div className="space-y-4 text-gray-400">
              <a href="mailto:sholz.laelle@gmail.com" className="flex items-center gap-3 hover:text-[var(--color-accent)] transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[var(--color-accent)]/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>sholz.laelle@gmail.com</span>
              </a>
              <a href="tel:+447460583191" className="flex items-center gap-3 hover:text-[var(--color-accent)] transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[var(--color-accent)]/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+44 746 0583 191</span>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>London, UK & Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-6">Solutions</h3>
            <ul className="space-y-4">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-6">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/50 mb-6">Support</h3>
            <ul className="space-y-4 mb-8">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Newsletter */}
            <div className="p-6 bg-white/[0.03] rounded-2xl border border-white/10">
              <h4 className="font-semibold text-white mb-3">Stay in the loop</h4>
              <p className="text-sm text-gray-400 mb-4">Get creator economy insights delivered to your inbox.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-[var(--color-accent)]"
                />
                <Button variant="primary" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Content Motley. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
