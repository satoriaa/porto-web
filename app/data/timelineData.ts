export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: string;
  skills: string[];
}

export const timelineData: TimelineItem[] = [
  { year: '2021', title: 'Started Programming Journey', description: 'Began learning HTML, CSS, and JavaScript through online tutorials and courses.', icon: '🚀', skills: ['HTML', 'CSS', 'JavaScript'] },
  { year: '2022', title: 'Frontend Development Focus', description: 'Deepened knowledge in React, Next.js, and modern frontend tools. Built first portfolio website.', icon: '⚛️', skills: ['React', 'Next.js', 'Tailwind CSS'] },
  { year: '2023', title: 'Full-Stack Development', description: 'Expanded to backend technologies, databases, and cloud services. Started contributing to open-source projects.', icon: '🛠️', skills: ['Node.js', 'MongoDB', 'Express', 'Git'] },
  { year: '2024', title: 'Advanced Technologies', description: 'Exploring AI/ML integration, advanced DevOps practices, and mobile development.', icon: '🤖', skills: ['Python', 'Docker', 'React Native', 'AWS'] },
];
