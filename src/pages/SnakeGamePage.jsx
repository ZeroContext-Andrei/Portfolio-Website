import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SnakeGame from '../components/SnakeGame/SnakeGame'; // Import the game component
import { Button } from '../components/ui/Button'; // Import your Button component

const SnakeGamePage = () => {
  const navigate = useNavigate();

  const handleExit = () => {
    // Navigate back to the About page, or use navigate(-1) to go back one step
    navigate('/about'); 
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }
  };

  const gameContainerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3 } }
  };

  return (
    <PageTransition>
      <div className="min-h-screen text-white py-16 px-6 flex flex-col items-center justify-center">
        {/* Game Title */}
        <motion.h1 
          className="font-['Rajdhani'] text-4xl md:text-5xl font-bold mb-8 md:mb-10 text-center bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Snake Game
        </motion.h1>

        {/* Game Container */}
        <motion.div
           className="mb-6 md:mb-8" // Margin below game container
           variants={gameContainerVariants}
           initial="hidden"
           animate="visible"
        >
           <SnakeGame />
        </motion.div>

        {/* Control Instructions */}
        <motion.p 
          className="text-gray-400 text-center text-sm md:text-base mb-6 md:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Use Arrow Keys (↑ ↓ ← →) to control the snake.
        </motion.p>

        {/* Exit Button */}
        <Button 
          onClick={handleExit} 
          variant="secondary"
          size="md"
          colorTheme="purple-indigo"
        >
          Exit Game
        </Button>
      </div>
    </PageTransition>
  );
};

export default SnakeGamePage; 