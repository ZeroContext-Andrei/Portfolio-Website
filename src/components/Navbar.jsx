import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];
  
  return (
    <motion.div 
      className="w-full max-w-md mx-auto mt-8 mb-12 px-4"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-center bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-full p-1.5">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                isActive 
                  ? 'text-white bg-gradient-to-r from-purple-600 to-indigo-600' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Navbar; 