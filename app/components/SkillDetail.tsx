'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { skillsData } from '../data/skillsData';

interface SkillDetailProps {
  onBack: () => void;
}

export default function SkillDetail({ onBack }: SkillDetailProps) {
  const detailContainerRef = useRef<HTMLDivElement>(null);
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
      id="skills-detail"
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
          ← Back to Skills
        </motion.button>

        <motion.h2
          className="text-5xl font-bold text-center mb-4 text-amber-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My Detailed Skills
        </motion.h2>

        <motion.p
          className="text-center text-amber-800 text-lg mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          A comprehensive overview of my technical expertise and proficiency levels
        </motion.p>

        <div className="max-w-6xl mx-auto space-y-12 pb-12">
          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12 sticky top-0 bg-gradient-to-r from-amber-50 to-orange-50 py-4 rounded-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
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

          {/* Skills Grid */}
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
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-3xl">{skill.icon}</span>
                              <h4 className="text-xl font-bold text-amber-900">{skill.name}</h4>
                            </div>
                            <div className="flex gap-2 flex-wrap">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                skill.level === 'Expert' ? 'bg-green-100 text-green-800' :
                                skill.level === 'Advanced' ? 'bg-blue-100 text-blue-800' :
                                skill.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-gray-100 text-gray-800'
                              }`}>
                                {skill.level}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-amber-800 text-sm mb-4 leading-relaxed">
                          {skill.description}
                        </p>

                        {/* Proficiency Bar */}
                        <div className="mb-6">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-semibold text-amber-700">Proficiency</span>
                            <span className="text-xs font-semibold text-amber-700">{skill.proficiency}%</span>
                          </div>
                          <motion.div className="bg-amber-100 rounded-full h-2 overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-amber-600 to-orange-600"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.proficiency}%` }}
                              transition={{ duration: 1, delay: skillIndex * 0.05 }}
                            />
                          </motion.div>
                        </div>

                        {/* Experience & Projects */}
                        <div className="grid grid-cols-2 gap-4 mb-6 bg-amber-50 p-4 rounded-lg">
                          <div>
                            <span className="text-xs text-amber-600 font-semibold block">Experience</span>
                            <span className="text-lg font-bold text-amber-900">{skill.experience}</span>
                            <span className="text-xs text-amber-700">years</span>
                          </div>
                          <div>
                            <span className="text-xs text-amber-600 font-semibold block">Projects</span>
                            <span className="text-lg font-bold text-amber-900">{skill.projects}</span>
                            <span className="text-xs text-amber-700">completed</span>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {skill.tags.map((tag) => (
                            <motion.span
                              key={tag}
                              className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-medium"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3 }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
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
        </div>
      </div>
    </motion.section>
  );
}
