import { motion } from 'framer-motion';

function MotionImage() {
    const variants = {
        initial: { opacity: 0, y: 50, x: 50 }, 
        visible: { opacity: 1, y: 0, x: 0 },  
    };

    return (
        <motion.img
            src="/BP1.jpg"
            className="absolute top-[17%] left-[40%] z-40 rounded-lg"
            alt="Description"
            width={300}
            height={300}
            initial="initial"
            animate="visible"
            variants={variants}
            transition={{
                duration: 6,
                ease: "easeOut",
            }}
        />
    );
}

export default MotionImage;
