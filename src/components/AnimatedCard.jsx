import { motion } from 'framer-motion';
import React from 'react';

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8
    }
  }
};

export default function AnimatedCard({ title, description, icon, className = "" }) {
  return (
    <motion.div
      className={`glass-panel p-6 ${className}`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      whileHover={{ scale: 1.03, borderColor: '#22e6d2' }}
      whileTap={{ scale: 0.98 }}
    >
      {icon && (
        <div className="accent-color text-2xl mb-4">
          {typeof icon === 'string' ? icon : React.cloneElement(icon, { size: 24 })}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2 text-white font-['Rajdhani']">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
} 