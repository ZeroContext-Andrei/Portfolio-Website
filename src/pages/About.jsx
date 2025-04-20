import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import React, { useState, useEffect, useCallback } from 'react';
import TiltCard from '../components/TiltCard';

// Import skill icons from assets
import ReactIcon from '../assets/React-icon.svg.png'; 
import JSIcon from '../assets/JS.png'; 
import TailwindIcon from '../assets/Tailwind_CSS_Logo.svg.png'; 
import PythonIcon from '../assets/4518857_python_icon.svg';
import NodeJSIcon from '../assets/icons8-nodejs.svg';
import FastAPIIcon from '../assets/FastAPI.svg';
import FramerMotionIcon from '../assets/framer-motion.svg';
import ViteIcon from '../assets/Vite.js.svg';

export default function About() {
  // State for Easter Egg
  const [pythonClicks, setPythonClicks] = useState(0);

  const navigate = useNavigate();

  // Skills data using imported icons
  const skills = [
    { name: "React", icon: ReactIcon, level: 90 },
    { name: "JavaScript", icon: JSIcon, level: 95 },
    { name: "Tailwind CSS", icon: TailwindIcon, level: 85 },
    { name: "Python", icon: PythonIcon, level: 80 },
    { name: "Node.js", icon: NodeJSIcon, level: 85 },
    { name: "FastAPI", icon: FastAPIIcon, level: 75 },
    { name: "Framer Motion", icon: FramerMotionIcon, level: 70 },
    { name: "Vite", icon: ViteIcon, level: 80 }, // Use imported ViteIcon
  ];

  // Original itemVariants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };
  
  // Original containerVariants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Update the journey texts array
  const journeyTexts = [
    "Hey, I'm Andrei—a developer who dove into the world of programming on April 13, 2025.", // First paragraph
    "What started as curiosity quickly turned into momentum. In just two months, I went from zero to building real, AI-powered solutions that get things done.", // Second paragraph
    "I picked up coding fast, focusing on what matters most: delivering results. Whether it's front-end interfaces, automation, or integrating smart AI features, I build what works—clean, fast, and scalable.", // Third paragraph
    "My approach? Learn fast, adapt faster, and always aim to bring real value to the table. No fluff, just solutions.", // Fourth paragraph
    "If you're looking for someone who can understand your vision and make it real with code—I've got you." // Fifth paragraph
  ];

  // Variants for the journey text container (for staggering paragraphs)
  const journeyContainerVariants = {
    hidden: { opacity: 1 }, // Container itself is visible initially
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the paragraphs
        delayChildren: 0.3 // Small delay after card animates in
      }
    }
  };

  // Variants for individual journey paragraphs (slide up)
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Click handler for skills
  const handleSkillClick = (skillName) => {
    if (skillName === "Python") {
      const newCount = pythonClicks + 1;
      setPythonClicks(newCount);
      console.log(`Python clicks: ${newCount}`);
      if (newCount >= 5) {
        console.log("Triggering Snake Game!");
        navigate('/snake-game');
        setPythonClicks(0);
      }
    } else {
      setPythonClicks(0); 
    }
  };

  return (
    <PageTransition>
      {/* Restore original padding */}
      <div className="min-h-screen text-white py-24 px-6"> 
        <div className="max-w-5xl mx-auto">
          {/* Header - Restore original transition */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} 
            className="text-center mb-16 md:mb-20"
          >
            <h1 className="font-['Rajdhani'] text-5xl md:text-6xl font-bold mb-4 tracking-wider bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
              About Me
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              I'm a Full-Stack Developer with a passion for creating elegant, efficient, and user-friendly applications.
              I specialize in modern web technologies and am constantly exploring new tools to enhance my skillset.
            </p>
          </motion.div>

          {/* Profile Picture Placeholder Section */}
          <motion.div
            className="flex justify-center mb-16 md:mb-20" // Center the container and add margin below
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }} // Animation after header
          >
            {/* Gradient Border Container */}
            <div className="p-1.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600">
              {/* Inner Placeholder Circle */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#12121a] flex items-center justify-center"> 
                {/* Placeholder text or icon can go here later */}
                {/* <span className="text-gray-500 text-sm">PFP</span> */}
              </div>
            </div>
          </motion.div>

          {/* About sections - Restore original gap/margin */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-20 md:mb-24" 
            style={{ perspective: '1000px' }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Column - Restore original padding/text size/transition */}
            <TiltCard
              variants={itemVariants} 
              initial="hidden"
              animate="visible"
              className="group"
            >
              <motion.div 
                className="panel-background-style p-8 h-full group-hover:border-purple-500/60 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-colors transition-shadow duration-300 ease-in-out"
                variants={journeyContainerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h2 
                  className="font-['Rajdhani'] text-3xl font-semibold mb-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text"
                  variants={paragraphVariants}
                >
                  My Journey
                </motion.h2>
                {journeyTexts.map((text, index) => (
                  <motion.p
                    key={index} 
                    variants={paragraphVariants}
                    className={`text-gray-300 ${index < journeyTexts.length - 1 ? 'mb-4' : ''} leading-relaxed`}
                  >
                    {text}
                  </motion.p>
                ))}
              </motion.div>
            </TiltCard>

            {/* Right Column - Restore original padding/text size/transition */}
            <TiltCard
              variants={itemVariants} 
              initial="hidden"
              animate="visible"
              className="group"
            >
              <motion.div 
                 className="panel-background-style p-8 h-full group-hover:border-purple-500/60 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-colors transition-shadow duration-300 ease-in-out"
                 variants={journeyContainerVariants}
                 initial="hidden"
                 animate="visible"
               >
                 <motion.h2 
                   className="font-['Rajdhani'] text-3xl font-semibold mb-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text"
                   variants={paragraphVariants}
                 >
                   My Approach
                 </motion.h2>
                 <ul className="space-y-4 text-gray-300">
                   <motion.li variants={paragraphVariants} className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1 text-lg">✓</span>
                    <span className="leading-relaxed">I prioritize <strong>clean, maintainable code</strong> that stands the test of time</span>
                  </motion.li>
                  <motion.li variants={paragraphVariants} className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1 text-lg">✓</span>
                    <span className="leading-relaxed">I believe in <strong>thoughtful UI/UX design</strong> that makes applications intuitive</span>
                  </motion.li>
                  <motion.li variants={paragraphVariants} className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1 text-lg">✓</span>
                    <span className="leading-relaxed">I embrace <strong>continuous learning</strong> to stay at the cutting edge</span>
                  </motion.li>
                  <motion.li variants={paragraphVariants} className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1 text-lg">✓</span>
                    <span className="leading-relaxed">I value <strong>performance optimization</strong> for fast, responsive applications</span>
                  </motion.li>
                  <motion.li variants={paragraphVariants} className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1 text-lg">✓</span>
                    <span className="leading-relaxed">I focus on <strong>accessibility</strong> to ensure applications work for everyone</span>
                  </motion.li>
                 </ul>
               </motion.div>
            </TiltCard>
          </motion.div>

          {/* Tech Stack section */}
          <motion.div
            className="mb-16 md:mb-20 lg:mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }} 
          >
            <h2 className="font-['Rajdhani'] text-4xl md:text-5xl font-bold mb-10 md:mb-12 text-center">My Tech Stack</h2>
            
            <motion.div
              className="flex flex-col max-w-lg mx-auto" 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className={`relative panel-background-style flex items-center p-3 hover:shadow-lg cursor-pointer transition-colors duration-200 ${index > 0 ? '-mt-4' : ''}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.07, y: -15, zIndex: 20 }}
                  transition={{ duration: 0.15 }}
                  onClick={() => handleSkillClick(skill.name)}
                >
                  <motion.img 
                    src={skill.icon} 
                    alt={`${skill.name} icon`} 
                    className="w-6 h-6 md:w-7 md:h-7 mr-4 object-contain flex-shrink-0" 
                  /> 
                  <h3 className="text-base md:text-lg font-medium text-white">{skill.name}</h3>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>

          {/* Call to action - Restore original margin/text/button size */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }} // Restore original
          >
            <h2 className="font-['Rajdhani'] text-3xl font-semibold mb-4">Ready to start a project?</h2>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed max-w-xl mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <Link to="/contact">
              <Button 
                variant="hero-pill" 
                size="lg" 
                colorTheme="purple-indigo"
              >
                Let's Connect
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
} 