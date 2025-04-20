import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import PageTransition from '../components/PageTransition';

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
  const hoverColor = '#8b5cf6'; // Purple-500
  const transitionSettings = { duration: 0.15 }; // Faster transition

  return (
    <div className="flex space-x-6 my-6">
      <motion.a 
        href="https://github.com" 
        target="_blank"
        aria-label="Visit our GitHub profile"
        initial={{ color: "#ffffff" }}
        whileHover={{ color: hoverColor, scale: 1.05 }}
        transition={transitionSettings}
        className="text-2xl"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </motion.a>
      <motion.a 
        href="https://linkedin.com" 
        target="_blank"
        aria-label="Visit our LinkedIn profile"
        initial={{ color: "#ffffff" }}
        whileHover={{ color: hoverColor, scale: 1.05 }}
        transition={transitionSettings}
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
        aria-label="Visit our Instagram profile"
        initial={{ color: "#ffffff" }}
        whileHover={{ color: hoverColor, scale: 1.05 }}
        transition={transitionSettings}
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
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/contact');
  };

  return (
    <PageTransition>
      <div className="relative overflow-hidden text-white min-h-[calc(100vh-5rem)] flex flex-col justify-center">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col justify-center text-center lg:text-left"
            >
              <h2 className="font-['Rajdhani'] text-xl sm:text-2xl font-medium mb-3 text-gray-300">AI-Powered Innovation</h2>
              <h1 className="font-['Rajdhani'] text-5xl sm:text-6xl md:text-7xl font-bold mb-5 tracking-wide heading-extra-bold">
                FULL-STACK<br/>
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                  DEVELOPER
                </span>
              </h1>
              <div className="flex justify-center lg:justify-start">
                <SocialIcons />
              </div>
              <p className="text-lg sm:text-xl mb-10 text-gray-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Bring your visions to life with cutting-edge technology and creative problem-solving.
              </p>
              
              <div className="self-center lg:self-start">
                <Button 
                  onClick={navigateToContact}
                  variant="hero-pill"
                  size="lg"
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                transition: { duration: 0.8, delay: 0.3, ease: "easeOut" }
              }}
              className="group ease-in-out"
              whileHover={{ y: -5, scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <div className="panel-background-style p-8 md:p-10 lg:p-12 h-full group-hover:border-purple-500/60 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-colors transition-shadow duration-300 ease-in-out">
                <div className="flex flex-col justify-center h-full">
                  <h2 className="font-['Rajdhani'] text-2xl md:text-3xl font-bold mb-4 text-white">
                    Create with{' '}
                    <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">AI</span> 
                    + 
                    <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">Developer</span>
                  </h2>
                  <div className="text-base md:text-lg mb-6 text-gray-400">and explore roles like:</div>
                  <TypedRoles />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
} 