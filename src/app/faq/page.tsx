'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { 
  HelpCircle,
  ChevronDown,
  Users,
  Building,
  ArrowRight
} from 'lucide-react';
import { useState } from 'react';

const creatorFAQs = [
  {
    question: 'Who do you work with?',
    answer: 'We work with established YouTube creators, filmmakers, producers, and media companies who own content catalogues. Our focus is on African content – both creators based in Africa and those producing content for African and diaspora audiences.',
  },
  {
    question: 'Do I need to be based in Africa?',
    answer: 'No. We work with creators globally who produce content for African audiences or cover topics relevant to African and diaspora communities. What matters is your content and audience, not your physical location.',
  },
  {
    question: 'How is Content Motley different from an MCN or agency?',
    answer: 'We\'re a Creator Service Provider (CSP). Unlike traditional MCNs that often just aggregate channels, we provide hands-on, full-stack channel management – from strategy and SEO to thumbnails, monetization, brand deals, and rights management. We treat your channel like a media business, not just another number in a network.',
  },
  {
    question: 'How do your commercial terms work?',
    answer: 'Our terms vary based on the services you need and your channel\'s current position. We\'ll discuss specifics during our discovery call, but our model is designed so we only succeed when you succeed – our interests are aligned with your growth.',
  },
  {
    question: 'How long before I see results?',
    answer: 'Some quick wins (like improved thumbnails and titles) can show impact within weeks. Bigger shifts in revenue and audience growth typically build over 3-6 months. We focus on sustainable, compounding growth rather than quick hacks.',
  },
  {
    question: 'Can I leave the network?',
    answer: 'Yes. We believe in partnerships, not lock-ins. Our agreements have clear terms and notice periods. If you\'re not happy or your needs change, we\'ll work with you on a smooth transition.',
  },
];

const brandFAQs = [
  {
    question: 'Do you work with brands & agencies directly?',
    answer: 'Absolutely. We connect brands and agencies with curated African creators for campaigns across awareness, consideration, and performance objectives. We handle everything from creator matchmaking to campaign management and reporting.',
  },
  {
    question: 'What types of campaigns can you deliver?',
    answer: 'We support launch moments, always-on ambassador programs, branded series, short-form content, and performance-led campaigns. We\'ll design the right approach based on your objectives and budget.',
  },
  {
    question: 'How do you ensure brand safety?',
    answer: 'All creators in our network are vetted for content quality, audience authenticity, and brand alignment. We have review and approval processes built into every campaign, and we provide guidance on disclosure and compliance.',
  },
  {
    question: 'What markets do you cover?',
    answer: 'Our network spans creators across Africa (with strong presence in Nigeria, Kenya, South Africa, and Ghana) as well as diaspora audiences in the UK, US, and Europe.',
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

function FAQItem({ question, answer, isOpen, onClick, index }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-white/10"
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-lg font-semibold text-white group-hover:text-[var(--color-accent)] transition-colors pr-4">
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180 text-[var(--color-accent)]' : ''
          }`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 pb-6 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
  const [openCreatorFAQ, setOpenCreatorFAQ] = useState<number | null>(0);
  const [openBrandFAQ, setOpenBrandFAQ] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center gradient-hero overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 pattern-grid opacity-30" />
          
          <motion.div
            animate={{ 
              y: [0, -30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[var(--color-cyan)] blur-[150px] opacity-20"
          />
          <motion.div
            animate={{ 
              y: [0, 40, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-[var(--color-accent)] blur-[180px] opacity-15"
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
                <HelpCircle className="w-4 h-4 text-[var(--color-cyan)]" />
                FAQ
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-display-xl font-bold text-white leading-[0.95] mb-8"
            >
              Frequently asked{' '}
              <span className="text-gradient">questions</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/60 max-w-3xl leading-relaxed"
            >
              Straight answers to what creators and brands ask us most.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Creator FAQs */}
      <section className="section bg-[var(--color-primary)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-xl bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/30 flex items-center justify-center">
                <Users className="w-7 h-7 text-[var(--color-accent)]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">For Creators & Media Owners</h2>
                <p className="text-gray-400">Questions about joining the network</p>
              </div>
            </div>
            
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-8 md:p-10">
              {creatorFAQs.map((faq, i) => (
                <FAQItem
                  key={i}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openCreatorFAQ === i}
                  onClick={() => setOpenCreatorFAQ(openCreatorFAQ === i ? null : i)}
                  index={i}
                />
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 text-center"
            >
              <Button href="/apply" variant="primary" showArrow>
                Apply to Join the Network
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand FAQs */}
      <section className="section gradient-mesh">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-xl bg-[var(--color-gold)]/20 border border-[var(--color-gold)]/30 flex items-center justify-center">
                <Building className="w-7 h-7 text-[var(--color-gold)]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">For Brands & Agencies</h2>
                <p className="text-gray-400">Questions about working with us</p>
              </div>
            </div>
            
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-8 md:p-10">
              {brandFAQs.map((faq, i) => (
                <FAQItem
                  key={i}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openBrandFAQ === i}
                  onClick={() => setOpenBrandFAQ(openBrandFAQ === i ? null : i)}
                  index={i}
                />
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 text-center"
            >
              <Button href="/brands" variant="gold" showArrow>
                Learn More About Brand Partnerships
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="section bg-[var(--color-primary)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 rounded-2xl bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/30 flex items-center justify-center mx-auto mb-8">
                <HelpCircle className="w-10 h-10 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-display-sm font-bold text-white mb-6">
                Still have questions?
              </h2>
              <p className="text-xl text-gray-400 mb-10">
                Can&apos;t find what you&apos;re looking for? Get in touch and we&apos;ll be happy to help.
              </p>
              <Button href="/apply#contact" variant="primary" size="lg" showArrow>
                Contact Us
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
