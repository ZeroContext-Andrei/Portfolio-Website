import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import ProjectCard from '../components/ProjectCard';

const Portfolio = () => {
  // Sample project data - replace with actual projects
  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with React and Tailwind CSS, showcasing skills and projects with smooth animations.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      image: 'https://placehold.co/600x400/252437/FFFFFF?text=Portfolio+Website',
      link: '#'
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'A fully functional e-commerce site with product catalog, user authentication, and shopping cart functionality using the MERN stack.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
      image: 'https://placehold.co/600x400/252437/FFFFFF?text=E-commerce+Platform',
      link: '#'
    },
    {
      id: 3,
      title: 'Weather Application',
      description: 'A responsive weather application fetching data from a third-party API to display current and forecasted conditions.',
      technologies: ['JavaScript', 'OpenWeatherMap API', 'CSS3', 'HTML5'],
      image: 'https://placehold.co/600x400/252437/FFFFFF?text=Weather+App',
      link: '#'
    },
    // Add more projects if needed
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <PageTransition>
      <div className="min-h-screen text-white py-24 px-6">
        <div className="container mx-auto">
          <motion.h1 
            className="text-5xl md:text-6xl font-extrabold mb-6 text-center font-['Rajdhani'] bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h1>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 mx-auto mb-10 md:mb-16"></div>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto text-center mb-16 md:mb-20 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Here are some of my recent projects showcasing my skills. Each represents a unique challenge tackled with passion and creativity.
          </motion.p>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group bg-gray-900/60 rounded-xl overflow-hidden border border-gray-800/70 shadow-lg ease-in-out hover:border-purple-500/80 hover:shadow-purple-500/20 flex flex-col"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-3 font-['Rajdhani'] text-purple-300 group-hover:text-purple-200 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-5 leading-relaxed flex-grow text-sm">
                    {project.description}
                  </p>
                  <div className="mb-5">
                    <h4 className="text-xs text-gray-500 mb-2 uppercase tracking-wider font-medium">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-2.5 py-1 text-xs rounded-full bg-gray-800/70 text-gray-300 font-medium group-hover:bg-purple-900/50 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-block px-5 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg font-medium text-white text-center hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-20 md:mt-24 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-300 text-white font-medium hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V19c0 .27.16.59.67.5C17.14 18.16 20 14.42 20 10A10 10 0 0010 0z" clipRule="evenodd" />
              </svg>
              View More on GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Portfolio; 