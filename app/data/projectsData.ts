export interface Project {
  id: string;
  title: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  screenshot?: string;
  links: {
    github?: string;
    live?: string;
    figma?: string;
  };
  status: 'Completed' | 'In Progress' | 'Planning';
  year: number;
  duration: string;
  teamSize: number;
  role: string;
}

export const projectsData: Project[] = [
  {
    id: 'task-manager',
    title: 'Task Manager',
    icon: '📋',
    shortDescription: 'A web application built with React and Node.js for task management, featuring real-time updates and collaborative features.',
    fullDescription: 'A comprehensive task management system designed for teams and individuals. Built with React for a responsive frontend and Node.js/Express for the backend, this application provides real-time collaboration, task tracking, priority management, and team analytics. The system uses MongoDB for data persistence and Socket.IO for real-time updates across multiple clients.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'JWT', 'Docker'],
    screenshot: 'https://images.unsplash.com/photo-1672505869812-fa35f39667ba?w=600&h=400&fit=crop',
    features: [
      'Real-time task synchronization across multiple users',
      'Priority-based task filtering and sorting',
      'Team collaboration with role-based access control',
      'Activity logging and audit trails',
      'File attachment support for tasks',
      'Email notifications for task updates',
      'Advanced search and filtering capabilities',
      'REST API with comprehensive documentation',
    ],
    links: {
      github: 'https://github.com/satoriaa/task-manager',
      live: 'https://task-manager-demo.vercel.app',
    },
    status: 'Completed',
    year: 2023,
    duration: '3 months',
    teamSize: 2,
    role: 'Full Stack Developer',
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    icon: '💳',
    shortDescription: 'An e-commerce platform with payment integration, admin dashboard, and advanced analytics for seamless online shopping.',
    fullDescription: 'A full-featured e-commerce platform built with Next.js for server-side rendering and optimized performance. Features include product catalog management, shopping cart with persistent storage, secure payment processing with Stripe integration, order management system, and a comprehensive admin dashboard for inventory and sales analytics.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL', 'Prisma', 'AWS S3'],
    screenshot: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
    features: [
      'Product catalog with advanced filtering and search',
      'Shopping cart with persistent storage',
      'Secure payment processing with Stripe',
      'Order management and tracking',
      'User authentication and authorization',
      'Admin dashboard with sales analytics',
      'Inventory management system',
      'Email order notifications',
      'Responsive mobile design',
    ],
    links: {
      github: 'https://github.com/satoriaa/ecommerce-platform',
      live: 'https://ecommerce-demo.vercel.app',
    },
    status: 'Completed',
    year: 2023,
    duration: '4 months',
    teamSize: 3,
    role: 'Lead Frontend Developer',
  },
  {
    id: 'fitness-tracker',
    title: 'Fitness Tracker',
    icon: '📊',
    shortDescription: 'A mobile app for fitness tracking with real-time data visualization, workout plans, and social features for fitness enthusiasts.',
    fullDescription: 'A cross-platform mobile application built with React Native for tracking fitness activities, workouts, and progress. Features real-time data synchronization with Firebase, workout planning with AI recommendations, social features for community engagement, and comprehensive analytics dashboard showing progress over time.',
    technologies: ['React Native', 'Firebase', 'Expo', 'Redux', 'TypeScript', 'Chart.js'],
    screenshot: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop',
    features: [
      'Activity tracking with GPS integration',
      'Workout plans with AI recommendations',
      'Real-time data synchronization',
      'Social features and community challenges',
      'Progress analytics and goal tracking',
      'Integration with wearable devices',
      'Offline functionality',
      'Push notifications for workouts',
      'Leaderboards and achievements',
    ],
    links: {
      github: 'https://github.com/satoriaa/fitness-tracker',
    },
    status: 'Completed',
    year: 2023,
    duration: '5 months',
    teamSize: 4,
    role: 'Mobile Developer',
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    icon: '🌐',
    shortDescription: 'A modern, interactive portfolio website showcasing projects and skills with smooth animations and responsive design.',
    fullDescription: 'A beautifully designed personal portfolio website built with Next.js and Framer Motion. Features smooth animations, snap scrolling, detailed project showcases, skills timeline, and multiple detail pages for deep dives into specific projects and expertise areas.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    screenshot: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    features: [
      'Smooth scroll animations',
      'Detailed project showcases',
      'Skills timeline and progression',
      'Responsive design for all devices',
      'Dark mode support',
      'SEO optimized',
      'Contact form with validation',
      'Project detail pages',
    ],
    links: {
      github: 'https://github.com/satoriaa/portfolio-website',
      live: 'https://satoriaa.dev',
    },
    status: 'In Progress',
    year: 2024,
    duration: 'Ongoing',
    teamSize: 1,
    role: 'Solo Developer',
  },
];
