'use client';

import { motion } from 'framer-motion';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <motion.section
      id="hero"
      className="bg-gradient-to-r from-amber-50 to-orange-100 text-amber-900 py-20 pt-32 pl-20 relative overflow-hidden min-h-screen flex items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      style={{ scrollSnapAlign: 'start' }}
    >
      {/* Animated Background - Simplified */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(245,158,11,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between max-w-6xl mx-auto">
          <motion.div
            className="md:w-2/5 text-center md:text-left mb-8 md:mb-0 md:mr-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.h1
              className="text-3xl font-bold mb-0 text-amber-900"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0, type: "spring", stiffness: 100 }}
            >
              Muhammad Satria Rizky
            </motion.h1>
            <motion.div
              className="mb-2 text-amber-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="text-7xl font-black leading-tight bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent drop-shadow-2xl" style={{fontWeight: '900', marginTop: '-0.5rem'}}>SOFTWARE</div>
              <div className="text-7xl font-black leading-tight bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent drop-shadow-2xl" style={{fontWeight: '900'}}>DEVELOPER</div>
            </motion.div>
            <motion.p
              className="text-xl font-semibold mb-8 text-amber-800 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              Passionate software developer with expertise in modern web technologies.
              I create innovative solutions and user-friendly applications that make a difference.
            </motion.p>
            <motion.button
              onClick={() => scrollToSection('about')}
              className="bg-amber-800 text-amber-50 px-8 py-4 rounded-full font-semibold hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              Kenali Lebih Jauh
            </motion.button>
          </motion.div>
            <motion.div
              className="md:w-2/5 flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
                <motion.div
                  className="relative"
                >
                  <motion.div
                    className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-amber-600"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    style={{ willChange: 'transform' }}
                  >
                    <motion.img
                      src="/img.jpg"
                      alt="Profile Image"
                      className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>


              </motion.div>
            </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
