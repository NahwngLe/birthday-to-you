import React from 'react';
import { motion } from 'framer-motion';

const getRandomValue = (min, max) => Math.random() * (max - min) + min;

const Balloon2 = () => {
    const balloons = Array.from({ length: 100 }).map((_, index) => {
        const startX = getRandomValue(10, 90);
        const duration = getRandomValue(3, 6);
        const size = getRandomValue(60, 100);
        const delay = getRandomValue(0, 2);
        const color = `hsl(${getRandomValue(0, 360)}, 70%, 60%)`;

        return (
            <motion.div
                key={index}
                initial={{ y: '100vh', x: `${startX}vw`, opacity: 0 }}
                animate={{ y: '-100vh', opacity: 1 }}
                transition={{ duration: duration, ease: 'easeOut', delay: delay, repeat: Infinity }}
                className="absolute bottom-0"
            >
                <img src="src\assets\img\ballon2.svg" alt="Balloon" width={size} height={size} />
            </motion.div>
        );
    });

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {balloons}
        </div>
    );
};

export default Balloon2;
