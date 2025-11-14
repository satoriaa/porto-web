'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { projectsData } from '../data/projectsData';

interface ProjectDetailProps {
  onBack: () => void;
}

export default function ProjectDetail({ onBack }: ProjectDetailProps) {
  const detailContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lock body scroll
    document.body.style.overflow = 'hidden';

    return () => {
      // Unlock body scroll when component unmounts
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.section
      id="projects-detail"
      className="py-20 pl-20 bg-gradient-to-br from-amber-50 to-orange-50 fixed inset-0 w-full h-full overflow-hidden flex flex-col z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div 
        ref={detailContainerRef}
        className="container mx-auto px-4 flex-1 overflow-y-auto"
      >
        {/* Back Button */}
        <motion.button
          onClick={onBack}
          className="mb-8 bg-amber-800 text-amber-50 px-6 py-3 rounded-full font-semibold hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          ← Back to Projects
        </motion.button>

        <motion.h2
          className="text-5xl font-bold text-center mb-16 text-amber-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My Projects
        </motion.h2>

        <div className="max-w-6xl mx-auto space-y-16 pb-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg p-8 border border-amber-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl">{project.icon}</span>
                    <div>
                      <h3 className="text-3xl font-bold text-amber-900">{project.title}</h3>
                      <div className="flex gap-2 mt-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                          project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {project.status}
                        </span>
                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                          {project.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Short Description */}
              <p className="text-lg text-amber-800 mb-6 leading-relaxed">
                {project.shortDescription}
              </p>

              {/* Grid Layout for Details */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Full Description */}
                  <div>
                    <h4 className="text-xl font-semibold text-amber-900 mb-3">Project Overview</h4>
                    <p className="text-amber-800 leading-relaxed">
                      {project.fullDescription}
                    </p>
                  </div>

                  {/* Project Info */}
                  <div className="bg-amber-50 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-amber-900 mb-4">Project Info</h4>
                    <div className="space-y-3">
                      <div>
                        <span className="text-amber-700 font-semibold">Duration:</span>
                        <p className="text-amber-800">{project.duration}</p>
                      </div>
                      <div>
                        <span className="text-amber-700 font-semibold">Team Size:</span>
                        <p className="text-amber-800">{project.teamSize} {project.teamSize === 1 ? 'person' : 'people'}</p>
                      </div>
                      <div>
                        <span className="text-amber-700 font-semibold">My Role:</span>
                        <p className="text-amber-800">{project.role}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Technologies */}
                  <div>
                    <h4 className="text-xl font-semibold text-amber-900 mb-4">Technologies</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.links.github && (
                      <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-800 hover:bg-gray-900 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 text-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        GitHub
                      </motion.a>
                    )}
                    {project.links.live && (
                      <motion.a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 text-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-xl font-semibold text-amber-900 mb-4">Key Features</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {project.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      className="flex items-start gap-3 bg-amber-50 p-4 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: featureIndex * 0.05 }}
                    >
                      <span className="text-amber-600 mt-1">✓</span>
                      <span className="text-amber-800">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
