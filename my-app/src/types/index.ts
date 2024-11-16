export interface Skill {
    name: string;
    level: number;
    color: string;
}

export interface Project {
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
    link: string;
}

export interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
}