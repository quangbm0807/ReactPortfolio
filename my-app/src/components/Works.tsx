import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';

const Works: React.FC = () => {
    const projects: Project[] = [
        {
            name: "Project Name",
            description: "Project description goes here...",
            tags: [
                {
                    name: "react",
                    color: "blue-text-gradient",
                },
                {
                    name: "mongodb",
                    color: "green-text-gradient",
                },
                {
                    name: "tailwind",
                    color: "pink-text-gradient",
                },
            ],
            image: "/project-image.png",
            demo_link: "https://project-demo.com",
            source_code_link: "https://github.com/username/project",
        },
    ];

    return (
        <div className="padding-x padding-y bg-white dark:bg-[#050816] transition-colors duration-200">
            <h2 className="text-black dark:text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                Projects
            </h2>
            <div className="w-full flex">
                <p className="mt-3 text-gray-600 dark:text-secondary text-[17px] max-w-3xl leading-[30px]">
                    Following projects showcases my skills and experience through
                    real-world examples of my work.
                </p>
            </div>

            <div className="mt-20 flex flex-wrap gap-7">
                {projects.map((project, index) => (
                    <motion.div
                        key={`project-${index}`}
                        className="bg-gray-100 dark:bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full 
                     shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="relative w-full h-[230px]">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-full object-cover rounded-2xl"
                            />
                            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                                <div
                                    onClick={() => window.open(project.source_code_link, "_blank")}
                                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                                >
                                    <img
                                        src="/github.png"
                                        alt="github"
                                        className="w-1/2 h-1/2 object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-5">
                            <h3 className="text-black dark:text-white font-bold text-[24px]">{project.name}</h3>
                            <p className="mt-2 text-gray-600 dark:text-secondary text-[14px]">{project.description}</p>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                                    #{tag.name}
                                </p>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Works;