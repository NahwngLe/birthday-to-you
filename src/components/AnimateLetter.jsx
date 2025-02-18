import React from 'react'
import { motion } from 'framer-motion'

const AnimateLetter = ({ text, delay = 1 }) => {
    const letters = text.split("")
    const containerVariance = {
        hidden: {},
        visible: {
            transition: {
                delayChildren: delay,
                staggerChildren: 0.05,
            },
        },
    };

    const letterVariance = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 10,
            transition: {
                duration: 0.1
            },
        },
    };

    return (
        <motion.div
            className='inline-block ml-3'
            variants={containerVariance}
            initial="hidden"    
            animate="visible"
        >
            {letters.map((letter, index) => (
                <motion.span
                    className='text-md text-white'
                    variants={letterVariance}
                    key={index}
                >
                    {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
            ), delay * 1000)
            }
        </motion.div>
    )
}

export default AnimateLetter