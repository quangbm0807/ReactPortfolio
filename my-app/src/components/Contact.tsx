import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Add your form submission logic here
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsSubmitting(false);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className="relative padding-x padding-y bg-white dark:bg-[#050816]">
            <div className="absolute inset-0 bg-[#E5E7EB] dark:bg-[#1d1836] clip-path-contact" />

            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-black dark:text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                        Get in touch
                    </h2>
                    <p className="mt-4 text-gray-600 dark:text-secondary text-[17px] max-w-3xl leading-[30px]">
                        Have a project in mind? Let's work together to create something amazing.
                    </p>
                </motion.div>

                <motion.form
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col gap-8 bg-white/80 dark:bg-[#1d1836]/80 backdrop-blur-md rounded-2xl p-8 shadow-xl"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="flex flex-col sm:flex-row gap-8">
                        <label className="flex-1">
                            <span className="text-black dark:text-white font-medium mb-4 block">Your Name</span>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                placeholder="John Doe"
                                className="bg-white/50 dark:bg-[#1d1836]/50 py-4 px-6 placeholder:text-secondary text-black dark:text-white rounded-lg outline-none border-none font-medium w-full"
                            />
                        </label>
                        <label className="flex-1">
                            <span className="text-black dark:text-white font-medium mb-4 block">Your Email</span>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                placeholder="john@example.com"
                                className="bg-white/50 dark:bg-[#1d1836]/50 py-4 px-6 placeholder:text-secondary text-black dark:text-white rounded-lg outline-none border-none font-medium w-full"
                            />
                        </label>
                    </div>
                    <label>
                        <span className="text-black dark:text-white font-medium mb-4 block">Your Message</span>
                        <textarea
                            rows={7}
                            name="message"
                            value={formData.message}
                            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                            placeholder="What would you like to say?"
                            className="bg-white/50 dark:bg-[#1d1836]/50 py-4 px-6 placeholder:text-secondary text-black dark:text-white rounded-lg outline-none border-none font-medium w-full resize-none"
                        />
                    </label>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[#915EFF] hover:bg-[#7e51db] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary flex items-center gap-2 transition-all disabled:opacity-50"
                    >
                        {isSubmitting ? (
                            'Sending...'
                        ) : (
                            <>
                                Send Message
                                <Send className="w-4 h-4" />
                            </>
                        )}
                    </button>
                </motion.form>
            </div>
        </section>
    );
};