'use client';

import { motion } from 'framer-motion';
import { Code, Briefcase, TrendingUp, GraduationCap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Full-stack development with modern technologies and best practices'
    },
    {
      icon: TrendingUp,
      title: '',
      description: ''
    },
    {
      icon: Briefcase,
      title: 'Professional Experience',
      description: 'Industry experience in fintech and software engineering'
    },
    {
      icon: GraduationCap,
      title: 'Continuous Learning',
      description: 'Always expanding knowledge in emerging technologies'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Building Cool Stuff
            </h3>
            
            <div className="space-y-4 text-gray-300">
              <p>
                I'm a Software Developer and Computer Engineering student at Northeastern University with a passion for building intelligent systems and automation tools.
              </p>
              
              <p>
                My experience spans AI/ML engineering, fintech applications, and educational technology, with a focus on creating practical solutions that solve real-world problems.
              </p>
              
              <p>
                Currently seeking opportunities to apply my technical skills in software development, machine learning, and system design while continuing to expand my knowledge in emerging technologies.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, x: -50, rotate: -5 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index + 0.4 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-gray-600/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gray-700/30 rounded-lg mr-3">
                    <highlight.icon size={20} className="text-gray-400" />
                  </div>
                  <h4 className="font-semibold text-white">{highlight.title}</h4>
                </div>
                <p className="text-gray-400 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
