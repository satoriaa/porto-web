'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence, useMotionValue, useInView } from 'framer-motion';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import AboutDetail from './components/AboutDetail';
import ProjectsSection from './components/ProjectsSection';
import ProjectsSkillsDetail from './components/ProjectsSkillsDetail';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [particlePositions, setParticlePositions] = useState<Array<{left: string, top: string, delay: number}>>([]);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [activeSkillCategory, setActiveSkillCategory] = useState('All');
  const [currentSection, setCurrentSection] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAboutDetail, setShowAboutDetail] = useState(false);
  const [showProjectsSkillsDetail, setShowProjectsSkillsDetail] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 50,
    restDelta: 0.01
  });

  // Sections for snap scrolling - Updated to 3 sections
  const sections = ['hero', 'about', 'projects'];

  // Mouse tracking for interactive effects - Throttled
  useEffect(() => {
    let lastUpdateTime = 0;
    const throttleDelay = 50; // Update every 50ms max
    
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastUpdateTime >= throttleDelay) {
        setMousePosition({ x: e.clientX, y: e.clientY });
        lastUpdateTime = now;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Magnetic snap scrolling with animation - prevents skipping sections
  useEffect(() => {
    if (showAboutDetail || showProjectsSkillsDetail) return; // Disable snap scrolling when in detail view

    let isScrolling = false;
    let accumulatedDelta = 0;
    const threshold = 150; // Higher threshold to prevent accidental snaps
    let animationTimeout: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      if (showAboutDetail || showProjectsSkillsDetail) return; // Additional check to prevent any scroll handling in detail view

      e.preventDefault();
      if (isScrolling) return;

      accumulatedDelta += e.deltaY;

      if (Math.abs(accumulatedDelta) > threshold) {
        const direction = accumulatedDelta > 0 ? 1 : -1;
        const nextSection = Math.max(0, Math.min(sections.length - 1, currentSection + direction));

        if (nextSection !== currentSection) {
          isScrolling = true;
          setCurrentSection(nextSection);

          // Clear any existing timeout
          if (animationTimeout) {
            clearTimeout(animationTimeout);
          }

          // Smooth scroll with animation
          const element = document.getElementById(sections[nextSection]);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });

            accumulatedDelta = 0; // Reset accumulated delta

            // Set scrolling flag to false after animation completes
            animationTimeout = setTimeout(() => {
              isScrolling = false;
            }, 1000); // Allow time for smooth scroll animation
          }
        }
      }
    };

    // Intersection Observer for tracking current section
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const sectionIndex = sections.indexOf(sectionId);
          if (sectionIndex !== -1 && sectionIndex !== currentSection) {
            setCurrentSection(sectionIndex);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
      observer.disconnect();
      if (animationTimeout) {
        clearTimeout(animationTimeout);
      }
    };
  }, [currentSection, sections, showAboutDetail, showProjectsSkillsDetail]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update current section after scroll completes
      setTimeout(() => {
        const sectionIndex = sections.indexOf(sectionId);
        if (sectionIndex !== -1) {
          setCurrentSection(sectionIndex);
        }
      }, 300); // Small delay to let scroll complete
    }
    setIsMenuOpen(false); // Close menu after navigation
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));

      // For demo purposes, always succeed
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <motion.div
        ref={containerRef}
        className="min-h-screen bg-amber-50 relative overflow-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ scrollSnapType: showAboutDetail || showProjectsSkillsDetail ? 'none' : 'y mandatory', overflow: showAboutDetail || showProjectsSkillsDetail ? 'hidden' : 'auto' }}
      >
      {/* Interactive Background Particles - Removed for performance */}

      {/* Scroll Progress Bar - Optimized */}
      {!showAboutDetail && !showProjectsSkillsDetail && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-500 via-purple-500 to-blue-500 z-50 origin-left"
          style={{ scaleX, willChange: 'transform' }}
        />
      )}

      {/* Navigation */}
      {!showAboutDetail && !showProjectsSkillsDetail && (
        <Navigation
          currentSection={currentSection}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          scrollToSection={scrollToSection}
        />
      )}

      {/* Hero Section */}
      {!showAboutDetail && !showProjectsSkillsDetail && <HeroSection scrollToSection={scrollToSection} />}

      {/* Detail Views */}
      {showAboutDetail ? (
        <AboutDetail onBack={() => setShowAboutDetail(false)} />
      ) : showProjectsSkillsDetail ? (
        <ProjectsSkillsDetail onBack={() => setShowProjectsSkillsDetail(false)} />
      ) : (
        <>
          <AboutSection onShowDetail={() => setShowAboutDetail(true)} />
          {/* Projects Section */}
          <ProjectsSection onShowDetail={() => setShowProjectsSkillsDetail(true)} />
        </>
      )}

      </motion.div>
    </>
  );
}
