import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimateTextLink = ({
    classname = '',
    textColor = 'text-black',
    sentence = "Testing text",
    inDuration = 0.5,
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
                    <motion.a
                        href={href}
                        target={target}
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 15 }}
                        exit={{ opacity: 0, y: 23 }}
                        transition={{ delay: delay, duration: inDuration }}
                        style={{
                            fontSize: `${props.textsize}px`,
                            fontWeight: fontWeight
                        }}
                        className={`flex items-center z-40 ${textColor} hover:underline cursor-pointer`}
                    >
                        {sentence}
                    </motion.a>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AnimateTextLink;
