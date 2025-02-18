import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const sentences = [
    "And overrrr",
    "But I love you so",
    "I love you so",
    "I love you so"
];

const AnimateText = ({
    classname = '',
    textColor = 'text-black',
    index,
    setIsStep,
    sentence = "Testing text",
    inDuration = 0.5,
    hide = 3,
    delay = 2.5,
    fontWeight = "bold",
    ...props
}) => {
    const [visibleSentence, setVisibleSentence] = useState("");
    const [isExiting, setIsExiting] = useState(false); // Trạng thái thoát

    console.log(visibleSentence);
    useEffect(() => {
        let showTimeout, hideTimeout;

        // Hiển thị câu chữ
        showTimeout = setTimeout(() => {
            setVisibleSentence(sentence);

            // Sau khoảng thời gian delay + hide, ẩn phần tử bằng cách gỡ bỏ khỏi DOM
            hideTimeout = setTimeout(() => {
                setVisibleSentence(null);
            }, (hide) * 1000);
        }, 100);

        return () => {
            clearTimeout(showTimeout);
            clearTimeout(hideTimeout);
        };
    }, [sentence, delay, hide]);


    // Lắng nghe khi visibleSentence trở thành null (exit bắt đầu)
    // Để debug, thêm console.log:
    useEffect(() => {
        if (!visibleSentence) {
            const exitTimeout = setTimeout(() => {
                setIsStep((prev) => {
                    console.log("Current prev:", prev);
                    console.log("Current index:", index);
                    console.log("Will increment?", prev === index);
                    return (prev === index ? prev + 1 : prev)
                })
            }, (inDuration + delay + 1) * 1000);
            return () => clearTimeout(exitTimeout);
        }
    }, [visibleSentence, index, setIsStep, inDuration]);

    return (
        <div className={`absolute ${classname}`} style={{ top: `${props.top}%`, left: `${props.left}%` }}>
            <AnimatePresence>
                {visibleSentence ? (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 15 }}
                        exit={{ opacity: 0, y: 23 }}
                        transition={{ delay: delay, duration: inDuration }}
                        style={{
                            fontSize: `${props.textsize}px`,
                            fontWeight: fontWeight
                        }}
                        className="text-black flex items-center z-40"
                    >
                        {sentence}
                    </motion.p>
                ) : null}
            </AnimatePresence>
        </div>
    );
};

export default AnimateText;
