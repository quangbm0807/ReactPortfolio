import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-white dark:bg-slate-900 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-600 dark:text-slate-400">
                        © {new Date().getFullYear()} John Doe. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <a
                            href="#"
                            className="text-slate-600 dark:text-slate-400 hover:text-primary-500 
                       dark:hover:text-primary-400 transition-colors"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                        <a
                            href="#"
                            className="text-slate-600 dark:text-slate-400 hover:text-primary-500 
                       dark:hover:text-primary-400 transition-colors"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a
                            href="mailto:john.doe@example.com"
                            className="text-slate-600 dark:text-slate-400 hover:text-primary-500 
                       dark:hover:text-primary-400 transition-colors"
                        >
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};