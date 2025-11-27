'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  defaultOpen?: number;
}

export function Accordion({ items, className, defaultOpen = -1 }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen >= 0 ? defaultOpen : null);

  return (
    <div className={cn('space-y-0', className)}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="border-b border-white/10"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between py-6 text-left group"
          >
            <span className="text-lg font-semibold text-white group-hover:text-[var(--color-accent)] transition-colors pr-4">
              {item.question}
            </span>
            <ChevronDown 
              className={cn(
                'w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0',
                openIndex === index && 'rotate-180 text-[var(--color-accent)]'
              )} 
            />
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <p className="text-gray-400 pb-6 leading-relaxed">{item.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

// Single accordion item component for more control
interface AccordionItemProps {
  question: string;
  answer: string | React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  index?: number;
}

export function AccordionItem({ 
  question, 
  answer, 
  isOpen = false, 
  onToggle,
  index = 0 
}: AccordionItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-white/10"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-lg font-semibold text-white group-hover:text-[var(--color-accent)] transition-colors pr-4">
          {question}
        </span>
        <ChevronDown 
          className={cn(
            'w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0',
            isOpen && 'rotate-180 text-[var(--color-accent)]'
          )} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="text-gray-400 pb-6 leading-relaxed">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
