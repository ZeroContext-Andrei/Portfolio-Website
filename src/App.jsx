import React from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import MainLayout from './layouts/MainLayout';
import SnakeGamePage from './pages/SnakeGamePage';

function App() {
  return <AppRoutes />;
}

function AppRoutes() {
  const location = useLocation();
  return (
    <MainLayout>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/snake-game" element={<SnakeGamePage />} />
        </Routes>
      </AnimatePresence>
    </MainLayout>
  );
}

export default App;
