'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Trophy, Youtube } from 'lucide-react';
import { projects } from '@/data/constants';
import { Project } from '@/types';

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden hover:border-gray-600/50 transition-all duration-300 hover:scale-105 group"
    >
      {project.image && (
        <div className="relative h-48 overflow-hidden bg-gray-900/20 p-4">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-white group-hover:text-gray-300 transition-colors duration-200">
            {project.title}
          </h3>
          {project.featured && (
            <span className="px-2 py-1 bg-gray-700/30 text-gray-400 text-xs rounded-full border border-gray-600/30">
              Featured
            </span>
          )}
        </div>
        
        <p className="text-gray-400 mb-6 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-md border border-gray-600"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-3 py-1 bg-gray-700/50 text-gray-400 text-sm rounded-md border border-gray-600">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
        
        <div className="flex space-x-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="View on GitHub"
            >
              <Github size={18} className="mr-1" />
              <span className="text-sm">Code</span>
            </a>
          )}
          {project.devpostUrl && (
            <a
              href={project.devpostUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="View on Devpost"
            >
              <Trophy size={18} className="mr-1" />
              <span className="text-sm">Devpost</span>
            </a>
          )}
          {project.youtubeUrl && (
            <a
              href={project.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="View on YouTube"
            >
              <Youtube size={18} className="mr-1" />
              <span className="text-sm">Demo</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="View live project"
            >
              <ExternalLink size={18} className="mr-1" />
              <span className="text-sm">Live</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-white mb-8 text-center"
            >
              Other Projects
            </motion.h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index + featuredProjects.length} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
