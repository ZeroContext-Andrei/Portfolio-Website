import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineOfficeBuilding, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';
import AnimatedCard from '../components/AnimatedCard';
import PageTransition from '../components/PageTransition';

const Contact = () => {
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
            Get In Touch
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Have a question or want to work together? Drop me a message and I'll get back to you as soon as possible.
          </motion.p>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <motion.h2 
                className="text-2xl md:text-3xl font-bold mb-6 font-['Rajdhani'] text-purple-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Send Me a Message
              </motion.h2>
              
              <ContactForm />
            </div>
            
            <div>
              <motion.h2 
                className="text-2xl md:text-3xl font-bold mb-6 font-['Rajdhani'] text-purple-300"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Contact Information
              </motion.h2>
              
              <div className="space-y-6">
                <AnimatedCard
                  icon={<HiOutlineOfficeBuilding />}
                  title="Office Location"
                  description="123 Digital Avenue, Tech Park, Cityville, CV 12345"
                  className="border-l-4 border-l-purple-500"
                />
                
                <AnimatedCard
                  icon={<HiOutlineMail />}
                  title="Email Address"
                  description="contact@myportfolio.com"
                  className="border-l-4 border-l-cyan-500"
                />
                
                <AnimatedCard
                  icon={<HiOutlinePhone />}
                  title="Phone Number"
                  description="+1 (555) 123-4567"
                  className="border-l-4 border-l-pink-500"
                />
              </div>
              
              <motion.div 
                className="mt-8 p-6 rounded-lg border border-gray-700 bg-gray-900/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-4 font-['Rajdhani'] text-indigo-300">Availability</h3>
                <p className="text-gray-300 mb-2">
                  <span className="font-medium">Monday-Friday:</span> 9:00 AM - 6:00 PM EST
                </p>
                <p className="text-gray-300">
                  <span className="font-medium">Weekend:</span> By appointment only
                </p>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <p className="text-gray-400 mb-2">Connect with me on social media</p>
            <div className="flex justify-center space-x-4">
              <motion.a 
                href="#" 
                className="text-2xl text-gray-400 hover:text-purple-400 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <FaTwitter />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-2xl text-gray-400 hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <FaLinkedinIn />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-2xl text-gray-400 hover:text-pink-400 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <FaGithub />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact; 