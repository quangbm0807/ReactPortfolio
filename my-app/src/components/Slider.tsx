import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
    title: string;
    description: string;
    image: string;
}

const slides: Slide[] = [
    {
        title: "Web Development",
        description: "Building responsive web applications with modern technologies",
        image: "/web-dev.jpg"
    },
    {
        title: "Mobile Development",
        description: "Creating cross-platform mobile applications",
        image: "/mobile-dev.jpg"
    },
    {
        title: "UI/UX Design",
        description: "Designing beautiful and intuitive user interfaces",
        image: "/design.jpg"
    }
];

const Slider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setCurrentSlide(prevSlide => (prevSlide + newDirection + slides.length) % slides.length);
    };

    return (
        <div className="relative h-[500px] w-full overflow-hidden bg-white dark:bg-[#0a0a0a] rounded-xl">
            <AnimatePresence initial={false} custom={currentSlide}>
                <motion.div
                    key={currentSlide}
                    custom={currentSlide}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);
                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                    className="absolute w-full h-full"
                >
                    <div className="relative h-full w-full">
                        <img
                            src={slides[currentSlide].image}
                            alt={slides[currentSlide].title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
                            <h3 className="text-white text-3xl font-bold mb-2">
                                {slides[currentSlide].title}
                            </h3>
                            <p className="text-white/80">
                                {slides[currentSlide].description}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 dark:bg-black/30 dark:hover:bg-black/50 p-2 rounded-full backdrop-blur-sm transition-all"
                onClick={() => paginate(-1)}
            >
                <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 dark:bg-black/30 dark:hover:bg-black/50 p-2 rounded-full backdrop-blur-sm transition-all"
                onClick={() => paginate(1)}
            >
                <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all ${index === currentSlide
                            ? "bg-white w-4"
                            : "bg-white/50 hover:bg-white/80"
                            }`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};
export default Slider;