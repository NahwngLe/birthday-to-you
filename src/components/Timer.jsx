import { useState, useEffect } from "react";

const Timer = ({ isActive }) => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let interval;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive]); // 👈 Theo dõi biến `isActive`

    return (
        <div className="fixed top-0 right-0 text-center">
            <h1 className="text-3xl font-bold">{seconds} giây</h1>
        </div>
    );
};

export default Timer;
