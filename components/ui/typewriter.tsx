'use client';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export const Typewriter = ({
  text,
  className = '',
  delay = 100,
  cursor = true,
}: {
  text: string;
  className?: string;
  delay?: number;
  cursor?: boolean;
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span className={className}>
      {displayedText}
      {cursor && currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          className="inline-block ml-0.5"
        >
          |
        </motion.span>
      )}
    </span>
  );
};
