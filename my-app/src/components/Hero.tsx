import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <section className="relative w-full h-screen mx-auto bg-white dark:bg-[#050816]">
            <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-10 flex flex-row items-start gap-5">
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
                    <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </div>

                <div>
                    <h1 className="text-black dark:text-white font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
                        Hi, I'm <span className="text-[#915EFF]">Your Name</span>
                    </h1>
                    <p className="text-gray-600 dark:text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
                        I develop 3D visuals, user interfaces<br className="sm:block hidden" />
                        and web applications
                    </p>
                </div>
            </div>

            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-gray-400 dark:border-gray-300 flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-300 mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;