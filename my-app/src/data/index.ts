import { Skill, Project, Experience } from '../types';

export const skillsData: Skill[] = [
    { name: 'React', level: 90, color: '#61dafb' },
    { name: 'TypeScript', level: 85, color: '#007acc' },
    { name: 'Node.js', level: 80, color: '#43853d' },
    { name: 'GraphQL', level: 75, color: '#e535ab' },
    { name: 'Docker', level: 70, color: '#2496ed' },
    { name: 'AWS', level: 65, color: '#ff9900' },
];

export const projectsData: Project[] = [
    {
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB',
        tags: ['React', 'Node.js', 'MongoDB'],
        imageUrl: '/api/placeholder/400/250',
        link: '#'
    },
    // ... other projects
];

export const experienceData: Experience[] = [
    {
        title: 'Senior Frontend Developer',
        company: 'Tech Corp',
        period: '2021 - Present',
        description: 'Led development of multiple web applications using React and TypeScript'
    },
    // ... other experiences
];
