import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineOfficeBuilding, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';
import AnimatedCard from '../components/AnimatedCard';
import PageTransition from '../components/PageTransition';

const socialLinks = [
  {
    name: "Let's Connect",
    handle: "on LinkedIn",
    icon: <FaLinkedinIn className="w-6 h-6" />,
    url: "#", // Replace with your LinkedIn URL
    colorClass: "text-blue-500", // LinkedIn Blue
    glowHoverClass: "group-hover:shadow-[0_0_10px_theme(colors.blue.500/0.7)]"
  },
  {
    name: "Instagram",
    handle: "@your_handle", // Replace with your Instagram handle
    icon: <FaInstagram className="w-6 h-6" />,
    url: "#", // Replace with your Instagram URL
    colorClass: "text-pink-500", // Instagram Pink/Gradient approximate
    glowHoverClass: "group-hover:shadow-[0_0_10px_theme(colors.pink.500/0.7)]"
  },
  {
    name: "YouTube",
    handle: "@your_channel", // Replace with your YouTube handle
    icon: <FaYoutube className="w-6 h-6" />,
    url: "#", // Replace with your YouTube URL
    colorClass: "text-red-600", // YouTube Red
    glowHoverClass: "group-hover:shadow-[0_0_10px_theme(colors.red.600/0.7)]"
  },
  {
    name: "Github",
    handle: "@your_github", // Replace with your GitHub handle
    icon: <FaGithub className="w-6 h-6" />,
    url: "#", // Replace with your GitHub URL
    colorClass: "text-white", // GitHub White (on dark background)
    glowHoverClass: "group-hover:shadow-[0_0_10px_theme(colors.white/0.7)]"
  },
   {
    name: "TikTok",
    handle: "@your_tiktok", // Replace with your TikTok handle
    icon: <FaTiktok className="w-6 h-6" />,
    url: "#", // Replace with your TikTok URL
    colorClass: "text-cyan-400", // TikTok Teal approximate
    glowHoverClass: "group-hover:shadow-[0_0_10px_theme(colors.cyan.400/0.7)]"
  },
];

const Contact = () => {
  return (
    <PageTransition>
      <div className="min-h-screen text-white py-24 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            className="text-center mb-16 md:mb-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 font-['Rajdhani'] bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Have something to discuss? Send me a message and let's talk.
            </p>
          </motion.div>

          <motion.div 
            className="panel-background-style p-8 md:p-10 lg:p-12 space-y-12 md:space-y-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div>
              <ContactForm />
            </div>

            <div className="pt-8 md:pt-10 border-t border-gray-700/50">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 font-['Rajdhani'] text-center">
                 Connect With Me
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group panel-background-style p-4 flex items-center space-x-4 transition-colors duration-200 hover:bg-gray-800/80"
                    whileHover={{ scale: 1.03, y: -3 }}
                    transition={{ duration: 0.15 }}
                  >
                    <span className={`${link.colorClass} ${link.glowHoverClass} transition-shadow duration-200 rounded-full p-0.5`}>
                      {link.icon}
                    </span>
                    <div>
                      <h3 className="text-base font-medium text-white">{link.name}</h3>
                      <p className="text-xs text-gray-400">{link.handle}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact; 