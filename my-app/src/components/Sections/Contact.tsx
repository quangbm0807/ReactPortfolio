import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">
                    <span className="bg-gradient-to-r from-primary-500 to-secondary-500 
                         bg-clip-text text-transparent">
                        Contact Me
                    </span>
                </h2>

                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl 
                      dark:shadow-slate-700/30 backdrop-blur-lg">
                    <div className="grid md:grid-cols-2 gap-8 p-8">
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                                    Get in touch
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300">
                                    Feel free to reach out to me for any inquiries or collaboration
                                    opportunities.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 
                                flex items-center justify-center">
                                        <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Email</p>
                                        <p className="text-slate-900 dark:text-white">john.doe@example.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 
                                flex items-center justify-center">
                                        <Phone className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Phone</p>
                                        <p className="text-slate-900 dark:text-white">+1 234 567 890</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 
                                flex items-center justify-center">
                                        <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">Location</p>
                                        <p className="text-slate-900 dark:text-white">New York, USA</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 
                                               dark:text-slate-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 
                           dark:border-slate-600 bg-white dark:bg-slate-700 
                           text-slate-900 dark:text-white focus:ring-2 
                           focus:ring-primary-500 focus:border-transparent outline-none 
                           transition-all"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 
                                               dark:text-slate-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 
                           dark:border-slate-600 bg-white dark:bg-slate-700 
                           text-slate-900 dark:text-white focus:ring-2 
                           focus:ring-primary-500 focus:border-transparent outline-none 
                           transition-all"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 
                                                dark:text-slate-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-2 rounded-lg border border-slate-300 
                           dark:border-slate-600 bg-white dark:bg-slate-700 
                           text-slate-900 dark:text-white focus:ring-2 
                           focus:ring-primary-500 focus:border-transparent outline-none 
                           transition-all resize-none"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full px-6 py-3 rounded-lg bg-primary-500 text-white 
                         hover:bg-primary-600 transition-colors flex items-center 
                         justify-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
