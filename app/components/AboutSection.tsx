'use client';

import { motion } from 'framer-motion';

interface AboutSectionProps {
  onShowDetail?: () => void;
}

export default function AboutSection({ onShowDetail }: AboutSectionProps) {
  return (
    <motion.section
      id="about"
      className="py-20 pl-20 bg-gradient-to-br from-amber-50 to-orange-50 min-h-screen flex items-center"
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
          About Me
        </motion.h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-xl font-semibold text-amber-800 leading-relaxed">
                Hello! I'm <span className="font-bold text-amber-900">Satria</span>, a passionate web developer
                with a love for creating innovative web applications. I specialize in modern technologies like React, Next.js,
                and Node.js, always striving to build user-friendly and efficient solutions.
              </p>
              <p className="text-xl font-semibold text-amber-800 leading-relaxed">
                My journey in tech started with curiosity and has evolved into a career where I enjoy solving complex problems
                and bringing creative ideas to life through code. I believe in continuous learning and staying up-to-date with
                the latest industry trends.
              </p>
              {onShowDetail && (
                <motion.button
                  onClick={onShowDetail}
                  className="bg-amber-800 text-amber-50 px-6 py-3 rounded-full font-semibold hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(245,158,11,0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  Know More About Me
                </motion.button>
              )}
            </motion.div>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative"
                whileHover={{
                  scale: 1.05,
                }}
              >
                <motion.div
                  className="w-80 h-80 bg-gradient-to-br from-slate-400 via-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl"
                  style={{ willChange: 'transform' }}
                >
                  <motion.div
                    className="w-72 h-72 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-6xl">👨‍💻</span>
                  </motion.div>
                </motion.div>

                {/* Multiple Floating Elements - Simplified */}
                <div className="absolute w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-yellow-400 -top-4 -right-4">
                  <span className="text-lg">⚡</span>
                </div>
                <div className="absolute w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-green-400 -bottom-4 -right-4">
                  <span className="text-lg">🚀</span>
                </div>
                <div className="absolute w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-red-400 -top-4 -left-4">
                  <span className="text-lg">💡</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
