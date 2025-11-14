'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { timelineData } from '../data/timelineData';

interface AboutDetailProps {
  onBack: () => void;
}

export default function AboutDetail({ onBack }: AboutDetailProps) {
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
      id="about-detail"
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

        <motion.h2
          className="text-5xl font-bold text-center mb-16 text-amber-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About Me - Detailed Journey
        </motion.h2>

        <div className="max-w-6xl mx-auto">
          {/* Personal Introduction */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-amber-200">
              <h3 className="text-3xl font-bold text-amber-900 mb-6">Who I Am</h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <p className="text-lg text-amber-800 leading-relaxed">
                    Hi there! I'm Muhammad Satria Rizky, a passionate software developer with a deep love for creating
                    digital experiences that matter. My journey in technology began with simple curiosity and has evolved
                    into a fulfilling career where I get to solve complex problems and bring creative ideas to life.
                  </p>
                  <p className="text-lg text-amber-800 leading-relaxed">
                    I specialize in modern web technologies, particularly React, Next.js, and Node.js. I believe in
                    writing clean, maintainable code and creating user experiences that are both beautiful and functional.
                  </p>
                  <p className="text-lg text-amber-800 leading-relaxed">
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                    or sharing knowledge with the developer community. I believe in continuous learning and staying
                    up-to-date with the latest industry trends.
                  </p>
                </div>
                <div className="flex justify-center">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-64 h-64 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                      <div className="w-60 h-60 bg-white rounded-full flex items-center justify-center">
                        <span className="text-8xl">👨‍💻</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Overview */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-amber-200">
              <h3 className="text-3xl font-bold text-amber-900 mb-6">Technical Expertise</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚛️</span>
                  </div>
                  <h4 className="text-xl font-semibold text-amber-900 mb-2">Frontend Development</h4>
                  <p className="text-amber-700">React, Next.js, TypeScript, Tailwind CSS</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🖥️</span>
                  </div>
                  <h4 className="text-xl font-semibold text-amber-900 mb-2">Backend Development</h4>
                  <p className="text-amber-700">Node.js, Express, Python, MongoDB</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🛠️</span>
                  </div>
                  <h4 className="text-xl font-semibold text-amber-900 mb-2">Tools & Technologies</h4>
                  <p className="text-amber-700">Git, Docker, AWS, Figma</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Detailed Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-center mb-12 text-amber-900">My Professional Journey</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-amber-400 to-amber-600 h-full rounded-full"></div>

              {timelineData.map((item, index) => (
                <motion.div
                  key={item.year}
                  className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <motion.div
                      className="bg-white p-8 rounded-2xl shadow-lg border border-amber-200 hover:shadow-xl transition-shadow duration-300"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-4">{item.icon}</span>
                        <div>
                          <h4 className="text-2xl font-bold text-amber-900">{item.year}</h4>
                          <h5 className="text-xl font-semibold text-amber-800">{item.title}</h5>
                        </div>
                      </div>
                      <p className="text-amber-700 mb-6 text-lg leading-relaxed">{item.description}</p>
                      <div className="flex flex-wrap gap-3">
                        {item.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-amber-600 rounded-full border-4 border-white shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Personal Interests */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-amber-200">
              <h3 className="text-3xl font-bold text-amber-900 mb-6">Beyond Coding</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-amber-900 mb-4">Interests & Hobbies</h4>
                  <ul className="space-y-2 text-amber-800">
                    <li className="flex items-center">
                      <span className="text-amber-600 mr-2">🎵</span>
                      Music production and audio engineering
                    </li>
                    <li className="flex items-center">
                      <span className="text-amber-600 mr-2">📚</span>
                      Reading tech blogs and science fiction
                    </li>
                    <li className="flex items-center">
                      <span className="text-amber-600 mr-2">🏃‍♂️</span>
                      Running and staying active
                    </li>
                    <li className="flex items-center">
                      <span className="text-amber-600 mr-2">🎮</span>
                      Gaming and exploring new technologies
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-amber-900 mb-4">Community Involvement</h4>
                  <ul className="space-y-2 text-amber-800">
                    <li className="flex items-center">
                      <span className="text-amber-600 mr-2">🤝</span>
                      Open source contributions
                    </li>
                    <li className="flex items-center">
                      <span className="text-amber-600 mr-2">📝</span>
                      Technical writing and blogging
                    </li>
                    <li className="flex items-center">
                      <span className="text-amber-600 mr-2">👨‍🏫</span>
                      Mentoring junior developers
                    </li>
                    <li className="flex items-center">
                      <span className="text-amber-600 mr-2">🎤</span>
                      Speaking at tech meetups
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
