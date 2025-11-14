'use client';

import { motion } from 'framer-motion';
import { timelineData } from '../data/timelineData';

export default function TimelineSection() {
  return (
    <motion.section
      id="timeline"
      className="py-20 pl-20 bg-gradient-to-br from-orange-50 to-amber-50 min-h-screen flex items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
      style={{ scrollSnapAlign: 'start' }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-amber-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          My Journey
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 via-orange-500 to-amber-600 transform md:-translate-x-0.5"></div>

            {timelineData.map((item, index) => (
              <motion.div
                key={item.year}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-8 md:left-1/2 w-4 h-4 bg-amber-600 rounded-full border-4 border-amber-50 shadow-lg transform md:-translate-x-2 z-10"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />

                {/* Content Card */}
                <motion.div
                  className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-amber-200 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mr-4 shadow-md">
                        <span className="text-2xl">{item.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-amber-900">{item.year}</h3>
                        <h4 className="text-lg font-semibold text-amber-700">{item.title}</h4>
                      </div>
                    </div>
                    <p className="text-amber-800 mb-4 leading-relaxed">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: (index * 0.2) + (skillIndex * 0.1) }}
                          viewport={{ once: true }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
