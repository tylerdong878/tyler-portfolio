'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { socialLinks } from '@/data/constants';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would typically send the form data to a server
    // For now, we'll just simulate it
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities, exciting projects, or just having a chat about technology and finance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-600 focus:outline-none transition-colors duration-200"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gray-600 focus:outline-none transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-linear-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8">
                Feel free to reach out through any of these channels. I'm always open to discussing new ideas, opportunities, or collaborations.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href={`mailto:${socialLinks.email}`}
                className="flex items-center p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg hover:border-gray-600/50 transition-all duration-300 group"
              >
                <div className="p-3 bg-gray-700/30 rounded-lg mr-4">
                  <Mail size={24} className="text-gray-400" />
                </div>
                <div>
                  <p className="text-white font-medium group-hover:text-gray-300 transition-colors duration-200">
                    Email
                  </p>
                  <p className="text-gray-400 text-sm">{socialLinks.email}</p>
                </div>
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg hover:border-gray-600/50 transition-all duration-300 group"
              >
                <div className="p-3 bg-gray-700/30 rounded-lg mr-4">
                  <Github size={24} className="text-gray-400" />
                </div>
                <div>
                  <p className="text-white font-medium group-hover:text-gray-300 transition-colors duration-200">
                    GitHub
                  </p>
                  <p className="text-gray-400 text-sm">Check out my projects</p>
                </div>
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg hover:border-gray-600/50 transition-all duration-300 group"
              >
                <div className="p-3 bg-gray-700/30 rounded-lg mr-4">
                  <Linkedin size={24} className="text-gray-400" />
                </div>
                <div>
                  <p className="text-white font-medium group-hover:text-gray-300 transition-colors duration-200">
                    LinkedIn
                  </p>
                  <p className="text-gray-400 text-sm">Let's connect professionally</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
