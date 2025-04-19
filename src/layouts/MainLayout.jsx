import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const NavIcon = ({ href, icon, label, isActive }) => {
  return (
    <Link
      to={href}
      className="relative flex flex-col items-center group cursor-pointer"
    >
      <span 
        className={`text-2xl transition-colors duration-300 ${isActive ? 'accent-color' : 'text-white'}`}
      >
        {icon}
      </span>
      <span className="sr-only">{label}</span>
      {isActive && (
        <span className="absolute bottom-0 w-full h-0.5 accent-bg animate-underlineIn" />
      )}
    </Link>
  );
};

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
  const [activeRoute, setActiveRoute] = React.useState('/');
  
  React.useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location]);

  return (
    <div className="min-h-screen relative">
      {/* Fixed background */}
      <div className="bg-main"></div>
      
      {/* Cursor gradient */}
      <CursorGradient />
      
      <nav className="navbar fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img src={logo} alt="Zero Context Logo" className="h-8 mr-2" />
                <span className="font-['Rajdhani'] text-xl font-bold text-white">Zero Context</span>
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <NavIcon 
                href="/" 
                icon="🏠" 
                label="Home" 
                isActive={activeRoute === '/'} 
              />
              <NavIcon 
                href="/about" 
                icon="ℹ️" 
                label="About" 
                isActive={activeRoute === '/about'} 
              />
              <NavIcon 
                href="/contact" 
                icon="📱" 
                label="Contact" 
                isActive={activeRoute === '/contact'} 
              />
            </div>
          </div>
        </div>
      </nav>
      
      <main className="pt-16 relative z-10">
        {children}
      </main>
    </div>
  );
};

export default MainLayout; 