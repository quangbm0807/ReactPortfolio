export interface Experience {
    title: string;
    company: string;
    icon: string;
    date: string;
    points: string[];
}

export interface Project {
    name: string;
    description: string;
    tags: {
        name: string;
        color: string;
    }[];
    image: string;
    demo_link: string;
    source_code_link: string;
}
