'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { socialLinks } from '@/data/constants';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-64">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-medium mb-6 text-blue-300"
          >
            Tyler Dong
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-blue-200 mb-8"
          >
            <span className="font-normal text-blue-400">Software Developer</span>
            <span className="mx-3 text-blue-500">•</span>
            <span className="font-normal text-blue-400">Engineer</span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-blue-200 mb-12 max-w-2xl mx-auto"
          >
            SDE @ Philips | CECS @ Northeastern
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-x-6 mb-16"
          >
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full hover:bg-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} className="text-gray-300 hover:text-white" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full hover:bg-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="text-gray-300 hover:text-white" />
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              className="p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full hover:bg-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} className="text-gray-300 hover:text-white" />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
