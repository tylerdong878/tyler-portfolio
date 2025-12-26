'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/constants';

const Skills = () => {
  const categories = [
    { key: 'frontend', title: 'Frontend', color: 'blue' },
    { key: 'backend', title: 'Backend', color: 'green' },
    { key: 'quant', title: 'Quantitative', color: 'purple' },
    { key: 'tools', title: 'Tools', color: 'orange' }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600'
    };
    return colorMap[color as keyof typeof colorMap] || 'from-gray-500 to-gray-600';
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-linear-to-b from-gray-900/50 to-black" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {skills
                  .filter(skill => skill.category === category.key)
                  .map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.3 + skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-full bg-linear-to-r ${getColorClasses(category.color)} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            Additional Technologies
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {['Git', 'Docker', 'AWS', 'Kubernetes', 'GraphQL', 'Redis', 'Elasticsearch', 'Jenkins'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full text-gray-300 hover:border-blue-500/50 hover:text-white transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
