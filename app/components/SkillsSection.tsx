'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { skillsData, Skill } from '../data/skillsData';

interface SkillsSectionProps {
  onShowDetail?: () => void;
}

export default function SkillsSection({ onShowDetail }: SkillsSectionProps) {
  const [activeSkillCategory, setActiveSkillCategory] = useState('All');

  return (
    <motion.section
      id="skills"
      className="py-20 pl-20 bg-orange-50 min-h-screen flex items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
      style={{ scrollSnapAlign: 'start' }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-amber-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {['All', 'Frontend', 'Backend', 'Database', 'Cloud/DevOps', 'Mobile', 'Tools', 'Soft Skills'].map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveSkillCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeSkillCategory === category
                    ? 'bg-amber-600 text-amber-50 shadow-lg'
                    : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {skillsData
            .filter(skill => activeSkillCategory === 'All' || skill.category === activeSkillCategory)
            .map((skill, index) => (
              <motion.div
                key={skill.name}
                className={`bg-gradient-to-br ${skill.color} rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-amber-200`}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  boxShadow: "0 15px 30px rgba(245,158,11,0.15)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mr-3 shadow-sm">
                    <span className="text-xl">{skill.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-800 dark:text-white leading-tight">{skill.name}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full mt-1 inline-block ${
                      skill.level === 'Expert' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      skill.level === 'Advanced' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                      skill.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                      'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                    }`}>
                      {skill.level}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>

        {/* View All Skills Button */}
        {onShowDetail && (
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={onShowDetail}
              className="bg-amber-800 text-amber-50 px-8 py-4 rounded-full font-semibold hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 20px 40px rgba(245,158,11,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                View All Details
              </motion.span>
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
