'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { projectsData } from '../data/projectsData';
import { skillsData } from '../data/skillsData';

interface ProjectsSkillsDetailProps {
  onBack: () => void;
}

export default function ProjectsSkillsDetail({ onBack }: ProjectsSkillsDetailProps) {
  const detailContainerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'projects' | 'skills'>('projects');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ['Frontend', 'Backend', 'Database', 'Cloud/DevOps', 'Mobile', 'Tools', 'Soft Skills'];
  const categoryColors: Record<string, string> = {
    'Frontend': 'from-blue-500 to-blue-600',
    'Backend': 'from-green-500 to-green-600',
    'Database': 'from-purple-500 to-purple-600',
    'Cloud/DevOps': 'from-orange-500 to-orange-600',
    'Mobile': 'from-pink-500 to-pink-600',
    'Tools': 'from-indigo-500 to-indigo-600',
    'Soft Skills': 'from-yellow-500 to-yellow-600',
  };

  useEffect(() => {
    // Lock body scroll
    document.body.style.overflow = 'hidden';

    return () => {
      // Unlock body scroll when component unmounts
      document.body.style.overflow = 'unset';
    };
  }, []);

  const filteredSkills = selectedCategory
    ? skillsData.filter(skill => skill.category === selectedCategory)
    : skillsData;

  return (
    <motion.section
      id="projects-skills-detail"
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
          ← Back to Overview
        </motion.button>

        {/* Tab Navigation */}
        <motion.div
          className="flex gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.button
            onClick={() => {
              setActiveTab('projects');
              setSelectedCategory(null);
            }}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'projects'
                ? 'bg-amber-800 text-amber-50 shadow-lg'
                : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Projects
          </motion.button>
          <motion.button
            onClick={() => setActiveTab('skills')}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'skills'
                ? 'bg-amber-800 text-amber-50 shadow-lg'
                : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Skills
          </motion.button>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12 pb-12">
          {/* PROJECTS TAB */}
          {activeTab === 'projects' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <motion.h2
                className="text-5xl font-bold text-center text-amber-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                My Projects
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectsData.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="bg-white rounded-2xl shadow-lg border border-amber-200 overflow-hidden hover:shadow-xl transition-all"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Screenshot Area */}
                    <div className="relative h-48 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center overflow-hidden">
                      {project.screenshot ? (
                        <motion.img
                          src={project.screenshot}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                      ) : (
                        <div className="text-center">
                          <div className="text-6xl mb-4">{project.icon}</div>
                          <p className="text-amber-800 font-semibold">{project.title}</p>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-amber-900 mb-2">{project.title}</h3>
                        <div className="flex gap-2 flex-wrap">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                            project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {project.status}
                          </span>
                          <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium">
                            {project.year}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-amber-800 text-sm mb-4 leading-relaxed line-clamp-3">
                        {project.shortDescription}
                      </p>

                      {/* Technologies */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-medium">
                              +{project.technologies.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="grid grid-cols-2 gap-3 mb-4 bg-amber-50 p-3 rounded-lg text-xs">
                        <div>
                          <span className="text-amber-700 font-semibold block">Duration</span>
                          <span className="text-amber-900">{project.duration}</span>
                        </div>
                        <div>
                          <span className="text-amber-700 font-semibold block">Team</span>
                          <span className="text-amber-900">{project.teamSize} {project.teamSize === 1 ? 'person' : 'people'}</span>
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex gap-2">
                        {project.links.github && (
                          <motion.a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-gray-800 hover:bg-gray-900 text-white py-2 px-3 rounded font-semibold transition-all text-center text-sm"
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
                            className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-2 px-3 rounded font-semibold transition-all text-center text-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Live
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Features Section */}
              <motion.div
                className="mt-12 space-y-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-3xl font-bold text-amber-900 mb-8">Project Details</h3>
                {projectsData.map((project, index) => (
                  <div
                    key={project.id}
                    className="bg-white rounded-2xl shadow-lg p-8 border border-amber-200"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-4xl">{project.icon}</span>
                      <div>
                        <h4 className="text-2xl font-bold text-amber-900">{project.title}</h4>
                        <p className="text-amber-700">{project.role}</p>
                      </div>
                    </div>

                    <p className="text-amber-800 mb-6 leading-relaxed">
                      {project.fullDescription}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-lg font-semibold text-amber-900 mb-3">Key Features</h5>
                        <ul className="space-y-2">
                          {project.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2 text-amber-800">
                              <span className="text-amber-600 mt-1">✓</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-amber-900 mb-3">Technologies Used</h5>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-medium text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* SKILLS TAB */}
          {activeTab === 'skills' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <motion.h2
                className="text-5xl font-bold text-center text-amber-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                My Skills
              </motion.h2>

              {/* Category Filter */}
              <motion.div
                className="flex flex-wrap justify-center gap-3 mb-12 bg-white rounded-lg p-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === null
                      ? 'bg-amber-700 text-white shadow-lg'
                      : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  All Skills
                </motion.button>
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-amber-700 text-white shadow-lg'
                        : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </motion.div>

              {/* Skills by Category */}
              <div className="space-y-8">
                {categories.map((category) => {
                  const categorySkills = skillsData.filter(skill => skill.category === category);
                  
                  if (selectedCategory && selectedCategory !== category) {
                    return null;
                  }

                  return (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      {/* Category Header */}
                      <div className={`bg-gradient-to-r ${categoryColors[category]} rounded-lg p-6 mb-6`}>
                        <h3 className="text-3xl font-bold text-white">{category}</h3>
                        <p className="text-white/90 mt-2">{categorySkills.length} skills</p>
                      </div>

                      {/* Skills Grid */}
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categorySkills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill.name}
                            className="bg-white rounded-xl shadow-lg p-6 border border-amber-200 hover:shadow-xl transition-all"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                            whileHover={{ y: -5 }}
                          >
                            {/* Skill Header */}
                            <div className="flex items-start gap-3 mb-4">
                              <span className="text-4xl">{skill.icon}</span>
                              <div>
                                <h4 className="text-xl font-bold text-amber-900">{skill.name}</h4>
                              </div>
                            </div>

                            {/* Description */}
                            <p className="text-amber-800 text-sm leading-relaxed">
                              {skill.description}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Summary Section */}
              <motion.div
                className="bg-white rounded-2xl shadow-lg p-8 border border-amber-200 mt-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-amber-900 mb-6">Skills Summary</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                    <div className="text-4xl font-bold text-green-700 mb-2">
                      {skillsData.filter(s => s.level === 'Expert').length}
                    </div>
                    <p className="text-green-800 font-semibold">Expert Level</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                    <div className="text-4xl font-bold text-blue-700 mb-2">
                      {skillsData.filter(s => s.level === 'Advanced').length}
                    </div>
                    <p className="text-blue-800 font-semibold">Advanced Level</p>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-6">
                    <div className="text-4xl font-bold text-yellow-700 mb-2">
                      {skillsData.filter(s => s.level === 'Intermediate').length}
                    </div>
                    <p className="text-yellow-800 font-semibold">Intermediate Level</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                    <div className="text-4xl font-bold text-purple-700 mb-2">
                      {skillsData.length}
                    </div>
                    <p className="text-purple-800 font-semibold">Total Skills</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
