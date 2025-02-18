import React from 'react';
import { motion } from 'framer-motion';

const getRandomValue = (min, max) => Math.random() * (max - min) + min;

const Balloon1 = () => {
    const balloons = Array.from({ length: 50 }).map((_, index) => {
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
                className="absolute bottom-0 z-0"
            >
                <img src="public\ballon1.svg" alt="Balloon" width={size} height={size} />
            </motion.div>
        );
    });

    const balloons2 = Array.from({ length: 50 }).map((_, index) => {
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
                transition={{ duration: duration, ease: 'easeOut', delay: delay + 2, repeat: Infinity }}
                className="absolute bottom-0 z-0"
            >
                <img src="public\ballon2.svg" alt="Balloon" width={size} height={size} />
            </motion.div>
        );
    });

    const balloons3 = Array.from({ length: 50 }).map((_, index) => {
        const startX = getRandomValue(0, 100);
        const duration = getRandomValue(3, 6);
        const size = getRandomValue(60, 100);
        const delay = getRandomValue(0, 2);
        const color = `hsl(${getRandomValue(0, 360)}, 70%, 60%)`;

        return (
            <motion.div
                key={index}
                initial={{ y: '100vh', x: `${startX}vw`, opacity: 0 }}
                animate={{ y: '-100vh', opacity: 1 }}
                transition={{ duration: duration, ease: 'easeOut', delay: delay + 1, repeat: Infinity }}
                className="absolute bottom-0 z-0"
            >
                <img src="public\ballon3.svg" alt="Balloon" width={size} height={size} />
            </motion.div>
        );
    });

    return (
        <>
            {balloons}
            {balloons2}
            {balloons3}
        </>
    );
};

export default Balloon1;
