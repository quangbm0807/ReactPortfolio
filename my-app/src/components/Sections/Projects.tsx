import React from 'react';
import { projectsData } from '../../data';
import { ExternalLink, Github, } from 'lucide-react';

export const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">
                    <span className="bg-gradient-to-r from-primary-500 to-secondary-500 
                         bg-clip-text text-transparent">
                        Projects
                    </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden 
                       shadow-lg dark:shadow-slate-700/30 hover:-translate-y-2 
                       transition-all duration-300"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-48 object-cover transform group-hover:scale-110 
                           transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity 
                              duration-300" />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-slate-900 
                             dark:text-white">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-sm rounded-full bg-primary-100 
                               dark:bg-primary-900 text-primary-600 
                               dark:text-primary-400"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={project.link}
                                        className="flex items-center gap-2 text-sm text-slate-600 
                             dark:text-slate-300 hover:text-primary-500 
                             dark:hover:text-primary-400 transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Live Demo
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center gap-2 text-sm text-slate-600 
                             dark:text-slate-300 hover:text-primary-500 
                             dark:hover:text-primary-400 transition-colors"
                                    >
                                        <Github className="w-4 h-4" />
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};