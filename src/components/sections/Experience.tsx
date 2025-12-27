'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Philips',
      location: 'Boston, MA',
      period: '2024 - Present',
      description: 'Full-stack development for healthcare technology solutions',
      type: 'full-time'
    },
    {
      title: 'Software Engineering Intern',
      company: 'FinTech Startup',
      location: 'Remote',
      period: '2023 - 2024',
      description: 'Built scalable financial applications and APIs',
      type: 'internship'
    },
    {
      title: 'Teaching Assistant',
      company: 'Northeastern University',
      location: 'Boston, MA',
      period: '2022 - 2023',
      description: 'Taught computer science concepts to undergraduate students',
      type: 'education'
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
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
            Experience
          </motion.h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-blue-500/20 to-purple-500/20" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-xl p-6 max-w-md hover:border-gray-600/50 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-start mb-4">
                    <div className="p-2 bg-gray-700/30 rounded-lg mr-3">
                      <Briefcase size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                      <p className="text-blue-300 font-medium">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar size={16} className="mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <MapPin size={16} className="mr-2" />
                      {exp.location}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  
                  <div className="mt-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      exp.type === 'full-time' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      exp.type === 'internship' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                      'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                    }`}>
                      {exp.type === 'full-time' ? 'Full-time' :
                       exp.type === 'internship' ? 'Internship' : 'Education'}
                    </span>
                  </div>
                </motion.div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
