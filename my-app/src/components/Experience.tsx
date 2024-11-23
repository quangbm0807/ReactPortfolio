import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Experience as ExperienceType } from '../types';

const Experience: React.FC = () => {
    const experiences: ExperienceType[] = [
        {
            title: "Software Developer",
            company: "Company Name",
            icon: "/company-icon.png",
            date: "Jan 2022 - Present",
            points: [
                "Developing and maintaining web applications using React.js and other technologies.",
                "Implementing responsive design and ensuring cross-browser compatibility.",
                "Participating in code reviews and providing constructive feedback to other developers.",
            ],
        },
    ];

    return (
        <div className="padding-x padding-y bg-white dark:bg-[#050816] transition-colors duration-200">
            <h2 className="text-black dark:text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                Work Experience
            </h2>
            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <VerticalTimelineElement
                            key={index}
                            contentStyle={{
                                background: 'var(--tw-prose-background)',
                                color: 'var(--tw-prose-text)',
                                boxShadow: '0 3px 0 var(--tw-prose-shadow)'
                            }}
                            contentArrowStyle={{ borderRight: '7px solid var(--tw-prose-background)' }}
                            date={experience.date}
                            iconStyle={{ background: '#383E56' }}
                            icon={
                                <div className="flex justify-center items-center w-full h-full">
                                    <img src={experience.icon} alt={experience.company} className="w-[60%] h-[60%] object-contain" />
                                </div>
                            }
                        >
                            <div>
                                <h3 className="text-black dark:text-white text-[24px] font-bold">{experience.title}</h3>
                                <p className="text-gray-600 dark:text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
                                    {experience.company}
                                </p>
                            </div>

                            <ul className="mt-5 list-disc ml-5 space-y-2">
                                {experience.points.map((point, index) => (
                                    <li key={`experience-point-${index}`} className="text-gray-600 dark:text-white-100 text-[14px] pl-1 tracking-wider">
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default Experience;