'use client';

import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { socialLinks } from '@/data/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <p className="text-gray-400 text-sm">
              © {currentYear} Tyler Dong. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6"
          >
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
