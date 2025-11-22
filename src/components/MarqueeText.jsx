import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const MarqueeText = ({ text, direction = 1 }) => {
    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], [0, direction * 200]);

    return (
        <div ref={scrollRef} className="overflow-hidden py-10">
            <motion.h2
                style={{ x }}
                className="text-[8rem] md:text-[12rem] font-display font-bold whitespace-nowrap text-[#1a252f] uppercase leading-none select-none"
            >
                {text} {text} {text}
            </motion.h2>
        </div>
    );
};

export default MarqueeText;
