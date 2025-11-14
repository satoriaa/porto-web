export interface Skill {
  name: string;
  icon: string;
  category: string;
  level: 'Expert' | 'Advanced' | 'Intermediate' | 'Beginner';
  proficiency: number;
  experience: number;
  projects: number;
  description: string;
  color: string;
  tags: string[];
}

export const skillsData: Skill[] = [
  // Frontend
  { name: 'React', icon: '⚙️', category: 'Frontend', level: 'Advanced', proficiency: 85, experience: 2, projects: 8, description: 'Building interactive user interfaces with modern React patterns', color: 'bg-amber-100 dark:bg-amber-900', tags: ['Hooks', 'Context', 'Redux'] },
  { name: 'Next.js', icon: '⊕', category: 'Frontend', level: 'Advanced', proficiency: 80, experience: 2, projects: 6, description: 'Full-stack React framework for production applications', color: 'bg-amber-100 dark:bg-amber-900', tags: ['SSR', 'SSG', 'API Routes'] },
  { name: 'TypeScript', icon: '⌘', category: 'Frontend', level: 'Intermediate', proficiency: 75, experience: 1.5, projects: 5, description: 'Type-safe JavaScript for scalable applications', color: 'bg-amber-100 dark:bg-amber-900', tags: ['Types', 'Interfaces', 'Generics'] },
  { name: 'Tailwind CSS', icon: '▭', category: 'Frontend', level: 'Advanced', proficiency: 90, experience: 2, projects: 10, description: 'Utility-first CSS framework for rapid UI development', color: 'bg-amber-100 dark:bg-amber-900', tags: ['Responsive', 'Dark Mode', 'Custom'] },
  { name: 'Vue.js', icon: '△', category: 'Frontend', level: 'Intermediate', proficiency: 70, experience: 1, projects: 3, description: 'Progressive JavaScript framework for building UIs', color: 'bg-amber-100 dark:bg-amber-900', tags: ['Composition API', 'Vuex', 'Nuxt'] },
  { name: 'Svelte', icon: '◇', category: 'Frontend', level: 'Beginner', proficiency: 60, experience: 0.5, projects: 1, description: 'Cybernetically enhanced web apps with less code', color: 'bg-amber-100 dark:bg-amber-900', tags: ['Reactive', 'Compiled', 'Small bundle'] },

  // Backend
  { name: 'Node.js', icon: '⬡', category: 'Backend', level: 'Advanced', proficiency: 85, experience: 2, projects: 7, description: 'JavaScript runtime for server-side development', color: 'bg-amber-100 dark:bg-amber-900', tags: ['Express', 'REST APIs', 'Microservices'] },
  { name: 'Express', icon: '▸', category: 'Backend', level: 'Advanced', proficiency: 80, experience: 2, projects: 6, description: 'Fast, unopinionated web framework for Node.js', color: 'bg-amber-100 dark:bg-amber-900', tags: ['Middleware', 'Routing', 'Security'] },
  { name: 'Python', icon: '⟨⟩', category: 'Backend', level: 'Intermediate', proficiency: 75, experience: 1.5, projects: 4, description: 'High-level programming language for backend services', color: 'bg-amber-100 dark:bg-amber-900', tags: ['Django', 'Flask', 'FastAPI'] },
  { name: 'Django', icon: '⚙️', category: 'Backend', level: 'Intermediate', proficiency: 70, experience: 1, projects: 2, description: 'High-level Python web framework', color: 'bg-amber-100 dark:bg-amber-900', tags: ['ORM', 'Admin', 'Security'] },
  { name: 'FastAPI', icon: '▴', category: 'Backend', level: 'Intermediate', proficiency: 65, experience: 0.8, projects: 2, description: 'Modern, fast web framework for building APIs', color: 'bg-amber-100 dark:bg-amber-900', tags: ['Async', 'OpenAPI', 'Type hints'] },

  // Database
  { name: 'MongoDB', icon: '◉', category: 'Database', level: 'Intermediate', proficiency: 75, experience: 1.5, projects: 5, description: 'NoSQL document database for modern applications', color: 'bg-amber-100 dark:bg-amber-900', tags: ['NoSQL', 'Aggregation', 'Indexing'] },
  { name: 'PostgreSQL', icon: '▦', category: 'Database', level: 'Intermediate', proficiency: 70, experience: 1, projects: 3, description: 'Advanced open source relational database', color: 'bg-amber-100 dark:bg-amber-900', tags: ['SQL', 'JSON', 'Extensions'] },
  { name: 'Redis', icon: '▬', category: 'Database', level: 'Beginner', proficiency: 55, experience: 0.5, projects: 1, description: 'In-memory data structure store', color: 'bg-amber-100 dark:bg-amber-900', tags: ['Cache', 'Pub/Sub', 'Sessions'] },

  // Cloud/DevOps
  { name: 'Docker', icon: '⬜', category: 'Cloud/DevOps', level: 'Intermediate', proficiency: 70, experience: 1, projects: 4, description: 'Container platform for application deployment', color: 'bg-amber-100 dark:bg-amber-900', tags: ['Containers', 'Images', 'Compose'] },
  { name: 'Git', icon: '⫘', category: 'Cloud/DevOps', level: 'Advanced', proficiency: 90, experience: 3, projects: 15, description: 'Distributed version control system', color: 'bg-amber-100 dark:bg-amber-900', tags: ['Branching', 'Merging', 'GitHub'] },
  { name: 'AWS', icon: '▥', category: 'Cloud/DevOps', level: 'Beginner', proficiency: 50, experience: 0.3, projects: 1, description: 'Cloud computing platform by Amazon', color: 'bg-amber-100 dark:bg-amber-900', tags: ['EC2', 'S3', 'Lambda'] },
  { name: 'Linux', icon: '▤', category: 'Cloud/DevOps', level: 'Intermediate', proficiency: 65, experience: 1.5, projects: 3, description: 'Open source operating system', color: 'bg-amber-100 dark:bg-amber-900', tags: ['Shell', 'System Admin', 'Servers'] },

  // Mobile
  { name: 'React Native', icon: '⬡', category: 'Mobile', level: 'Intermediate', proficiency: 70, experience: 1, projects: 2, description: 'Framework for building native apps using React', color: 'bg-amber-100 dark:bg-amber-900', tags: ['Cross-platform', 'Native', 'Expo'] },

  // Tools
  { name: 'Figma', icon: '▭', category: 'Tools', level: 'Advanced', proficiency: 85, experience: 2, projects: 8, description: 'Collaborative interface design tool', color: 'bg-amber-100 dark:bg-amber-900', tags: ['UI/UX', 'Prototyping', 'Design Systems'] },
  { name: 'VS Code', icon: '▦', category: 'Tools', level: 'Expert', proficiency: 95, experience: 3, projects: 20, description: 'Code editor with built-in Git support', color: 'bg-amber-100 dark:bg-amber-900', tags: ['Extensions', 'Debugging', 'IntelliSense'] },
  { name: 'Postman', icon: '▥', category: 'Tools', level: 'Advanced', proficiency: 80, experience: 2, projects: 10, description: 'API development and testing tool', color: 'bg-amber-100 dark:bg-amber-900', tags: ['API Testing', 'Documentation', 'Automation'] },

  // Soft Skills
  { name: 'Problem Solving', icon: '▣', category: 'Soft Skills', level: 'Advanced', proficiency: 85, experience: 3, projects: 15, description: 'Analytical thinking and creative solution finding', color: 'bg-amber-100 dark:bg-amber-900', tags: ['Analysis', 'Creativity', 'Logic'] },
  { name: 'Team Collaboration', icon: '▤', category: 'Soft Skills', level: 'Advanced', proficiency: 90, experience: 3, projects: 12, description: 'Working effectively in team environments', color: 'bg-amber-100 dark:bg-amber-900', tags: ['Communication', 'Leadership', 'Mentoring'] },
  { name: 'Agile Methodology', icon: '▥', category: 'Soft Skills', level: 'Intermediate', proficiency: 75, experience: 1.5, projects: 6, description: 'Agile development practices and principles', color: 'bg-amber-100 dark:bg-amber-900', tags: ['Scrum', 'Kanban', 'Sprint Planning'] },
  { name: 'Communication', icon: '▦', category: 'Soft Skills', level: 'Advanced', proficiency: 85, experience: 3, projects: 15, description: 'Clear and effective communication skills', color: 'bg-amber-100 dark:bg-amber-900', tags: ['Presentation', 'Documentation', 'Feedback'] },
];
