import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

// Typing animation component for role display
const TypedRoles = () => {
  const roles = [
    { text: "Full-Stack Developer", icon: "💻" },
    { text: "Designer", icon: "🎨" },
    { text: "Prompt Engineer", icon: "🔧" },
    { text: "Vision Architect", icon: "🧠" },
    { text: "Frontend Magician", icon: "✨" },
    { text: "Backend Builder", icon: "🏗️" },
    { text: "Dream Realizer", icon: "💭" },
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState("");
  const currentRole = roles[currentRoleIndex];
  
  useEffect(() => {
    let timeout;
    
    if (isTyping) {
      if (displayText.length < currentRole.text.length) {
        // Type the next character
        timeout = setTimeout(() => {
          setDisplayText(currentRole.text.substring(0, displayText.length + 1));
        }, 100);
      } else {
        // Finished typing, wait before starting to delete
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2500);
      }
    } else {
      if (displayText.length > 0) {
        // Delete a character
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50);
      } else {
        // Move to the next role and start typing again
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsTyping(true);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentRole.text, currentRoleIndex]);
  
  return (
    <div className="flex items-center h-8">
      <span className="mr-2">{currentRole.icon}</span>
      <span className="text-white monospace">{displayText}</span>
      <span className="animate-blink monospace">|</span>
    </div>
  );
};

// Social icons with hover effects
const SocialIcons = () => {
  return (
    <div className="flex space-x-6 my-6">
      <motion.a 
        href="https://github.com" 
        target="_blank"
        initial={{ color: "#ffffff" }}
        whileHover={{ color: '#22e6d2', scale: 1.05 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="text-2xl"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </motion.a>
      <motion.a 
        href="https://linkedin.com" 
        target="_blank"
        initial={{ color: "#ffffff" }}
        whileHover={{ color: '#22e6d2', scale: 1.05 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="text-2xl"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      </motion.a>
      <motion.a 
        href="https://instagram.com" 
        target="_blank"
        initial={{ color: "#ffffff" }}
        whileHover={{ color: '#22e6d2', scale: 1.05 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="text-2xl"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </motion.a>
    </div>
  );
};

// Main Home component
export default function Home() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Hero Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <h2 className="font-['Rajdhani'] text-2xl font-medium mb-2">AI-Powered Innovation</h2>
            <h1 className="font-['Rajdhani'] text-6xl font-bold mb-6 tracking-wider heading-extra-bold">
              FULL-STACK<br/>DEVELOPER
            </h1>
            
            <SocialIcons />
            
            <p className="text-xl mb-8 text-gray-300">
              Bring your visions to life with innovation and creativity
            </p>
            
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                onClick={scrollToContact}
                className="w-40 bg-transparent border accent-border accent-color hover:bg-[rgba(34,230,210,0.1)]"
              >
                Get Started
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right Grey Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="glass-panel p-12"
          >
            <div className="flex flex-col justify-center h-full">
              <h2 className="font-['Rajdhani'] text-3xl font-bold mb-6">Create with AI + Developer</h2>
              <div className="text-lg mb-8 text-gray-300">and</div>
              <TypedRoles />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Placeholder for Contact section (you'll scroll to here) */}
      <div id="contact" className="py-20">
        {/* Contact form will be here */}
      </div>
    </div>
  );
} 