'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface WelcomeAnimationProps {
  showWelcome: boolean;
}

export default function WelcomeAnimation({ showWelcome }: WelcomeAnimationProps) {
  const [particlePositions, setParticlePositions] = useState<Array<{left: string, top: string, delay: number}>>([]);

  // Fixed particle positions to avoid hydration mismatch
  useEffect(() => {
    const positions = [
      { left: '23.8%', top: '91.7%', delay: 0.5 },
      { left: '38.9%', top: '99.3%', delay: 1.2 },
      { left: '82.6%', top: '87.7%', delay: 0.8 },
      { left: '29.5%', top: '68.3%', delay: 1.5 },
      { left: '31.5%', top: '31.7%', delay: 0.3 },
      { left: '94.2%', top: '49.0%', delay: 1.8 },
    ];
    setParticlePositions(positions);
  }, []);

  return (
    <AnimatePresence>
      {showWelcome && (
        <motion.div
          className="fixed top-0 left-0 w-screen h-screen z-[9999] bg-amber-100 flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{ position: 'fixed', width: '100vw', height: '100vh' }}
        >
          {/* Scanlines Effect */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-gradient-to-b from-transparent via-amber-200/20 to-transparent bg-repeat"
                 style={{
                   backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(245,158,11,0.1) 2px, rgba(245,158,11,0.1) 4px)',
                   backgroundSize: '100% 4px'
                 }}>
            </div>
          </div>

          <div className="text-center relative z-10">
            {/* Animated Logo/Icon - Vintage Tech */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
                type: "spring",
                stiffness: 100
              }}
            >
                <motion.div
                  className="w-32 h-32 mx-auto bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 rounded-full flex items-center justify-center shadow-2xl relative"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(245, 158, 11, 0.5)",
                      "0 0 40px rgba(249, 115, 22, 0.7)",
                      "0 0 20px rgba(245, 158, 11, 0.5)",
                      "0 0 20px rgba(245, 158, 11, 0.5)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* CRT Monitor Border Effect */}
                  <div className="absolute inset-0 rounded-full border-4 border-amber-700/30"></div>
                  <motion.span
                    className="text-6xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    💾
                  </motion.span>
                </motion.div>
            </motion.div>

            {/* Welcome Text with Glitch Effect */}
            <motion.h1
              className="text-6xl md:text-8xl font-bold text-amber-900 mb-4 relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  x: [0, -2, 2, -1, 1, 0],
                  textShadow: [
                    "0 0 0px rgba(245,158,11,0)",
                    "0 0 10px rgba(245,158,11,0.5)",
                    "0 0 0px rgba(245,158,11,0)",
                    "2px 0 0px rgba(249,115,22,0.5)",
                    "-2px 0 0px rgba(245,158,11,0.5)",
                    "0 0 0px rgba(245,158,11,0)"
                  ]
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.8 },
                  x: { duration: 0.1, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" },
                  textShadow: { duration: 0.1, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }
                }}
                className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent relative inline-block"
              >
                Welcome
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-amber-800 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              to Satria's Portfolio
            </motion.p>

            {/* Animated Particles - Retro Style */}
            <div className="absolute inset-0 pointer-events-none">
              {particlePositions.map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-500"
                  style={{
                    left: pos.left,
                    top: pos.top,
                    clipPath: i % 2 === 0 ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'polygon(50% 100%, 0% 0%, 100% 0%)'
                  }}
                  animate={{
                    x: [0, 30, -30, 0],
                    y: [0, -40, 40, 0],
                    scale: [0, 1, 0],
                    opacity: [0, 0.9, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: pos.delay,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* Loading Bar - Retro Style */}
            <motion.div
              className="w-64 h-2 bg-amber-200 rounded-full mx-auto overflow-hidden border border-amber-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-amber-400 to-orange-500 relative"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              >
                {/* Loading bar scan effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
