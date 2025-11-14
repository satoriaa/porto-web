'use client';

import { motion } from 'framer-motion';

interface ProjectsSectionProps {
  onShowDetail?: () => void;
}

export default function ProjectsSection({ onShowDetail }: ProjectsSectionProps) {
  return (
    <motion.section
      id="projects"
      className="py-20 pl-20 bg-amber-50 min-h-screen flex items-center"
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
          My Projects
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg p-6 border border-amber-200 hover:shadow-2xl transition-all duration-300"
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-slate-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-amber-900">Task Manager</h3>
            </div>
            <p className="text-lg font-semibold text-amber-800 mb-6 leading-relaxed">
              A web application built with React and Node.js for task management, featuring real-time updates and collaborative features.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-slate-100 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm font-medium">React</span>
              <span className="bg-green-100 dark:bg-green-600 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
              <span className="bg-blue-100 dark:bg-blue-600 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">MongoDB</span>
            </div>
              <motion.button
                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-amber-50 py-3 px-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(245,158,11,0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                View Project
              </motion.button>
          </motion.div>
          <motion.div
            className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg p-6 border border-amber-200 hover:shadow-2xl transition-all duration-300"
            whileHover={{ y: -10, scale: 1.02 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-slate-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-xl">💳</span>
              </div>
              <h3 className="text-xl font-bold text-amber-900">E-Commerce Platform</h3>
            </div>
            <p className="text-amber-800 mb-6 leading-relaxed">
              An e-commerce platform with payment integration, admin dashboard, and advanced analytics for seamless online shopping.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-slate-100 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm font-medium">Next.js</span>
            </div>
            <motion.button
              className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-amber-50 py-3 px-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(245,158,11,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              View Project
            </motion.button>
          </motion.div>
          <motion.div
            className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg p-6 border border-amber-200 hover:shadow-2xl transition-all duration-300"
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-slate-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-amber-900">Fitness Tracker</h3>
            </div>
            <p className="text-amber-800 mb-6 leading-relaxed">
              A mobile app for fitness tracking with real-time data visualization, workout plans, and social features for fitness enthusiasts.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-slate-100 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm font-medium">React Native</span>
              <span className="bg-yellow-100 dark:bg-yellow-600 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-medium">Firebase</span>
            </div>
            <motion.button
              className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-amber-50 py-3 px-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(245,158,11,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              View Project
            </motion.button>
          </motion.div>
        </motion.div>

        {/* View All Projects Button */}
        {onShowDetail && (
          <motion.div
            className="flex justify-center mt-16"
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
