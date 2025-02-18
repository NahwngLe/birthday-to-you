import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimateTextXoayXoay = ({
    classname = '',
    textColor = 'text-black',
    sentence = "Testing text",
    inDuration = 0.1,
    hide = 3,
    delay = 2.5,
    fontWeight = "bold",
    href = "#",
    target = "_blank",
    ...props
}) => {
    const [visibleSentence, setVisibleSentence] = useState("");

    useEffect(() => {
        let showTimeout, hideTimeout;

        // Hiển thị câu chữ
        showTimeout = setTimeout(() => {
            setVisibleSentence(sentence);

            // Sau thời gian hide, ẩn phần tử
            hideTimeout = setTimeout(() => {
                setVisibleSentence(null);
            }, hide * 1000);
        }, 100);

        return () => {
            clearTimeout(showTimeout);
            clearTimeout(hideTimeout);
        };
    }, [sentence, hide]);

    return (
        <div className={`absolute ${classname}`} style={{ top: `${props.top}%`, left: `${props.left}%` }}>
            <AnimatePresence>
                {visibleSentence && (
                    <div className="flex">
                        {visibleSentence.split('').map((letter, index) => (
                            <motion.span
                                key={index}
                                initial={{ color: '#ff8fab', rotateY: 0 }}
                                animate={{ color: '#f00', rotateY: 360 }}
                                transition={{
                                    delay: delay + index * 0.1,
                                    duration: inDuration ,
                                    repeat: Infinity, // Lặp lại vô hạn
                                    repeatType: "reverse",
                                    repeatDelay: 8,
                                }}
                                style={{
                                    fontSize: `${props.textsize}px`,
                                    fontWeight: fontWeight,
                                    display: 'inline-block'
                                }}
                                className={`z-40 ${textColor}`}
                            >
                                {letter === ' ' ? ' ' : letter}
                            </motion.span>
                        ))}
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AnimateTextXoayXoay;
