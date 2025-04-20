import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const TiltCard = ({ children, className, variants, initial, animate, ...rest }) => {
  const ref = useRef(null);

  // Motion values to track mouse position relative to the element
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring animations for smooth transitions
  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Transform mouse position into rotation values (adjust range for sensitivity)
  const rotateX = useTransform(ySpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  // Handle mouse movement over the card
  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position from center of the element (-0.5 to 0.5)
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    // Update motion values
    x.set(xPct);
    y.set(yPct);
  };

  // Handle mouse leaving the card
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className} // Pass through className
      variants={variants}   // Pass through variants for initial animation
      initial={initial}
      animate={animate}
      style={{
        rotateX,       // Apply dynamic rotation
        rotateY,       // Apply dynamic rotation
        transformStyle: 'preserve-3d', // Enable 3D space for children if needed
        // scale: 1.03, // Optional: Keep scale on hover if desired
      }}
      whileHover={{ scale: 1.03 }} // Can apply scale here still
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...rest} // Pass through any other props
    >
      {children}
    </motion.div>
  );
};

export default TiltCard; 