'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white dark:bg-gray-800 shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-800 dark:text-white' : 'text-white'
            }`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Satria
          </motion.div>
          <motion.div
            className="hidden md:flex space-x-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button
              onClick={() => scrollToSection('about')}
              className={`hover:text-slate-600 transition-colors duration-300 ${
                isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`hover:text-slate-600 transition-colors duration-300 ${
                isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={`hover:text-slate-600 transition-colors duration-300 ${
                isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white'
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`hover:text-slate-600 transition-colors duration-300 ${
                isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white'
              }`}
            >
              Contact
            </button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-slate-700 to-slate-900 text-white py-20 pt-32"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between max-w-6xl mx-auto">
            <motion.div
              className="md:w-2/5 text-center md:text-left mb-8 md:mb-0 md:mr-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h1 className="text-5xl font-bold mb-4">Hi, im'Satria</h1>
              <p className="text-xl mb-8">Student At Tarumanagara University</p>
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-slate-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
            <motion.div
              className="md:w-2/5 flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
                <img
                  src="/img.jpg"
                  alt="Profile Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Hello! I'm <span className="font-semibold text-slate-700 dark:text-slate-300">Satria</span>, a passionate web developer
                  with a love for creating innovative web applications. I specialize in modern technologies like React, Next.js,
                  and Node.js, always striving to build user-friendly and efficient solutions.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  My journey in tech started with curiosity and has evolved into a career where I enjoy solving complex problems
                  and bringing creative ideas to life through code. I believe in continuous learning and staying up-to-date with
                  the latest industry trends.
                </p>
              </motion.div>
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className="w-80 h-80 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full flex items-center justify-center shadow-2xl">
                    <div className="w-72 h-72 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                      <span className="text-6xl">👨‍💻</span>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <span className="text-2xl">⚡</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-20 bg-gray-50 dark:bg-gray-900"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white"
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
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-600 hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-slate-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">📋</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Task Manager</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                A web application built with React and Node.js for task management, featuring real-time updates and collaborative features.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-slate-100 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm font-medium">React</span>
                <span className="bg-green-100 dark:bg-green-600 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
                <span className="bg-blue-100 dark:bg-blue-600 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">MongoDB</span>
              </div>
              <motion.button
                className="w-full bg-slate-600 hover:bg-slate-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project
              </motion.button>
            </motion.div>
            <motion.div
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-600 hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-slate-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🛒</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">E-Commerce Platform</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                An e-commerce platform with payment integration, admin dashboard, and advanced analytics for seamless online shopping.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-slate-100 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm font-medium">Next.js</span>
              </div>
              <motion.button
                className="w-full bg-slate-600 hover:bg-slate-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project
              </motion.button>
            </motion.div>
            <motion.div
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-600 hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-slate-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl">🏃‍♂️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Fitness Tracker</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                A mobile app for fitness tracking with real-time data visualization, workout plans, and social features for fitness enthusiasts.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-slate-100 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm font-medium">React Native</span>
                <span className="bg-yellow-100 dark:bg-yellow-600 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-medium">Firebase</span>
              </div>
              <motion.button
                className="w-full bg-slate-600 hover:bg-slate-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="py-20 bg-white dark:bg-gray-800"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Skills
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Frontend</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full mb-2">
                    <span className="text-2xl">⚛️</span>
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-300">React</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full mb-2">
                    <span className="text-2xl">▲</span>
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-300">Next.js</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full mb-2">
                    <span className="text-2xl">🟦</span>
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-300">TypeScript</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full mb-2">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-300">Tailwind CSS</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-2xl">⚙️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Backend</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full mb-2">
                    <span className="text-2xl">🟢</span>
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-300">Node.js</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full mb-2">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-300">Express</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full mb-2">
                    <span className="text-2xl">🐍</span>
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-300">Python</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-2xl">🛠️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Tools</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full mb-2">
                    <span className="text-2xl">📚</span>
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-300">Git</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full mb-2">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-300">Figma</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-full mb-2">
                    <span className="text-2xl">🧩</span>
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-300">Problem Solving</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-full mb-2">
                    <span className="text-2xl">👥</span>
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-300">Team Collaboration</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-full mb-2">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-300">Agile Methodology</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-full mb-2">
                    <span className="text-2xl">💬</span>
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-300">Communication</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 bg-gray-50 dark:bg-gray-900"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <motion.div
            className="max-w-md mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Let's connect! Find me on social media or send me a message.
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <motion.a
                href="https://www.instagram.com/str_rzy/#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/muhammad-satria-rizky-832842371/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
              <motion.a
                href="https://github.com/satoriaa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>
            </div>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-slate-600 text-white py-2 px-4 rounded-md hover:bg-slate-700 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}
