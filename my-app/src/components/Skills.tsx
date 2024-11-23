import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
    name: string;
    icon: string;
    level: number;
}

const skills: Skill[] = [
    { name: "React", icon: "/react.svg", level: 90 },
    { name: "TypeScript", icon: "/typescript.svg", level: 85 },
    { name: "Node.js", icon: "/nodejs.svg", level: 80 },
    { name: "Python", icon: "/python.svg", level: 75 },
    // Add more skills
];

const Skills: React.FC = () => {
    return (
        <section className="padding-x padding-y bg-white dark:bg-[#050816]">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-7xl mx-auto"
            >
                <h2 className="text-black dark:text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                    Skills & Technologies
                </h2>

                <div className="mt-20 flex flex-wrap gap-10 justify-center">
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            className="w-28 flex flex-col items-center"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="w-20 h-20 rounded-full bg-white dark:bg-[#1d1836] shadow-lg flex items-center justify-center mb-4 hover:scale-110 transition-transform">
                                <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
                            </div>
                            <p className="text-black dark:text-white text-center font-medium">
                                {skill.name}
                            </p>
                            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full mt-2">
                                <motion.div
                                    className="h-full bg-[#915EFF] rounded-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;