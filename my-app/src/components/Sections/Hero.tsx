import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export const Hero: React.FC = () => {
    return (
        <section id="about" className="min-h-screen pt-20 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 
                      shadow-xl dark:shadow-slate-700/30">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="flex justify-center">
                            <div className="relative animate-float">
                                <div className="w-48 h-48 rounded-full bg-gradient-to-r from-primary-500 
                              to-secondary-500 animate-pulse-slow absolute -inset-2 blur-lg 
                              opacity-30" />
                                <img
                                    src="/api/placeholder/200/200"
                                    alt="Profile"
                                    className="w-48 h-48 rounded-full relative z-10"
                                />
                            </div>
                        </div>

                        <div className="text-center md:text-left">
                            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
                                John Doe
                            </h1>
                            <h2 className="text-xl text-slate-600 dark:text-slate-300 mt-2">
                                Full Stack Developer
                            </h2>
                            <p className="mt-4 text-slate-600 dark:text-slate-300">
                                Passionate developer with expertise in building modern web applications.
                                Focused on creating clean, efficient, and user-friendly solutions.
                            </p>
                            <div className="mt-6 flex gap-4 justify-center md:justify-start">
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg 
                           bg-primary-500 text-white hover:bg-primary-600 transition-colors"
                                >
                                    <Github className="w-5 h-5" />
                                    GitHub
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg 
                           bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 
                           hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                                >
                                    <Linkedin className="w-5 h-5" />
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};