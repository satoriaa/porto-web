'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface NavigationProps {
  currentSection: number;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  scrollToSection: (sectionId: string) => void;
}

export default function Navigation({ currentSection, isMenuOpen, setIsMenuOpen, scrollToSection }: NavigationProps) {
  return (
    <>
      {/* Full Navbar */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo/Name on the left */}
          <motion.div
            className="text-2xl font-bold text-amber-900 ml-8"
            animate={{ opacity: isMenuOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            Satria
          </motion.div>

          {/* Hamburger Menu on the right - Hidden on desktop */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative w-10 h-10 flex flex-col justify-center items-center bg-transparent border-none cursor-pointer mr-4 md:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="w-6 h-0.5 bg-amber-900 mb-1"
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 8 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-amber-900 mb-1"
              animate={{
                opacity: isMenuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-amber-900"
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? -8 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </motion.nav>

      {/* Vertical Sidebar Navigation - Always visible on desktop */}
      <motion.nav
        className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col space-y-6 bg-amber-900/90 backdrop-blur-sm rounded-r-3xl p-4 border-r border-amber-700/50 shadow-lg"
        initial={{ x: -80 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 100 }}
      >
        {[
          { id: 'hero', label: 'Home', icon: '▢' },
          { id: 'about', label: 'About', icon: '▣' },
          { id: 'projects', label: 'Projects', icon: '▤' }
        ].map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`group relative flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all duration-300 text-amber-700 hover:text-amber-900 shadow-lg hover:shadow-xl ${
              currentSection === index ? 'bg-amber-600 text-amber-50' : 'bg-amber-50 hover:bg-amber-100'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -right-20 bg-amber-900 text-amber-50 px-2 py-1 rounded whitespace-nowrap">
              {item.label}
            </span>

            {/* Bubble Effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-amber-600"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{
                scale: [1, 1.2, 1.4, 1],
                opacity: [0, 0.5, 0.8, 0],
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            />
          </motion.button>
        ))}
      </motion.nav>

      {/* Animated Navigation Menu Overlay - Only for mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Expanding Circle Animation from Hamburger Button */}
            <motion.div
              className="fixed z-30 bg-amber-600/40 rounded-full"
              style={{
                top: '2rem',
                right: '1rem',
              }}
              initial={{ width: 0, height: 0, opacity: 1 }}
              animate={{
                width: '300vw',
                height: '300vw',
                opacity: 0.3,
              }}
              exit={{
                width: 0,
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            />

            {/* Full Screen Overlay with Brown Tint and Blur */}
            <motion.div
              className="fixed inset-0 z-35 bg-amber-900/60 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Sidebar Cover Overlay */}
            {isMenuOpen && (
              <motion.div
                className="fixed left-0 top-0 bottom-0 w-20 z-40 bg-amber-900/60 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            )}

            {/* Logo and Exit Button */}
            <motion.div
              className="fixed top-8 left-8 z-50 flex items-center space-x-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <motion.div
                className="text-2xl font-bold text-amber-900"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Satria
              </motion.div>
              <motion.button
                onClick={() => setIsMenuOpen(false)}
                className="relative w-10 h-10 flex flex-col justify-center items-center bg-transparent border-none cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="w-6 h-0.5 bg-amber-900 mb-1"
                  animate={{
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? 8 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-amber-900 mb-1"
                  animate={{
                    opacity: isMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-amber-900"
                  animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? -8 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>

            {/* Centered Navigation Menu */}
            <motion.div
              className="fixed inset-0 z-45 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <motion.div
                className="text-center"
                initial={{ scale: 0, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0, opacity: 0, y: 50 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6,
                  type: "spring",
                  stiffness: 150,
                  damping: 15
                }}
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
              >
                <div className="space-y-6">
                  {[
                    { id: 'hero', label: 'Home', icon: '▢' },
                    { id: 'about', label: 'About', icon: '▣' },
                    { id: 'projects', label: 'Projects', icon: '▤' }
                  ].map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="flex items-center space-x-4 block text-2xl font-bold text-white hover:text-amber-200 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.7 }}
                    >
                      <span className="text-3xl">{item.icon}</span>
                      <span>{item.label}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
