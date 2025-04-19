import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const Projects = () => {
  // Sample project data - you can replace with your actual projects
  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with React and Tailwind CSS',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://placehold.co/600x400/252437/FFFFFF?text=Portfolio+Website',
      link: '#'
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'A fully functional e-commerce site with product catalog and cart functionality',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: 'https://placehold.co/600x400/252437/FFFFFF?text=E-commerce+Platform',
      link: '#'
    },
    {
      id: 3,
      title: 'Weather Application',
      description: 'A responsive weather application that shows current and forecasted weather data',
      technologies: ['JavaScript', 'Weather API', 'CSS3'],
      image: 'https://placehold.co/600x400/252437/FFFFFF?text=Weather+App',
      link: '#'
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen text-white py-20 px-6">
        <div className="container mx-auto">
          <motion.h1 
            className="text-5xl md:text-6xl font-extrabold mb-8 text-center font-['Rajdhani'] bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Here are some of my recent projects that showcase my skills and expertise. Each project represents a unique challenge that I've tackled with passion and creativity.
          </motion.p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 hover:border-purple-500 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(138, 75, 255, 0.2)' }}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 font-['Rajdhani'] text-purple-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm text-gray-400 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a 
                    href={project.link} 
                    className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-md font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors duration-300"
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

export default Projects; 