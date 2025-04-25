import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import ParticlesBackground from '../components/ParticlesBackground';

// Remove placeholder NavIcon

// Mouse cursor gradient effect
const CursorGradient = () => {
  const [cursorPosition, setCursorPosition] = React.useState({ x: -1000, y: -1000 });

  React.useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);
    
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div 
      className="cursor-gradient"
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
      }}
    />
  );
};

const MainLayout = ({ children }) => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen relative isolate">
      {/* Base background div (styling in CSS) */}
      <div className="bg-main"></div>
      
      {/* Add Particles Background */}
      <ParticlesBackground />
      
      {/* Cursor gradient */}
      <CursorGradient />
      
      {/* Navbar Container (Transparent) */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-16"> {/* Height set for positioning context */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full relative">
          {/* Left side: Brand/Logo (Relatively positioned) */}
          <div className="absolute left-4 sm:left-6 lg:left-8 top-1/2 transform -translate-y-1/2 flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-semibold text-white">:) Zero Context</span>
            </Link>
          </div>

          {/* Centered Glass Panel with Links and Sliding Pill */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="glass-panel px-3 py-1.5 rounded-full shadow-lg">
              <div className="flex items-center space-x-1">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`relative text-sm font-medium transition-colors duration-200 px-3 py-1.5 rounded-full ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                      {isActive && (
                        <motion.span
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 -z-10"
                          layoutId="active-pill" // Key for the animation
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right side: Can be empty or add elements later */}
          {/* <div className="absolute right-4 sm:right-6 lg:right-8 top-1/2 transform -translate-y-1/2">...</div> */}
        </div>
      </nav>
      
      {/* Main content - Padding for fixed navbar */} 
      <main className="pt-20 relative z-10"> {/* Adjusted padding slightly */}
        {children}
      </main>
    </div>
  );
};

export default MainLayout; 