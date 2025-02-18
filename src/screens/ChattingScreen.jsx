import React, { useState } from 'react';
import { IoSend } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiSolidVideo } from "react-icons/bi";
import { HiOutlineMinusSm } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import AnimateLetter from '../components/AnimateLetter';
import { motion, AnimatePresence } from 'framer-motion';

const ChattingScreen = ({ setIsStep, index }) => {
    const [isVisible, setIsVisible] = useState(true);
    const durationDiv = 1;
    setTimeout(() => {
        setIsVisible(false)
        // setTimeout(() => {
        //     setIsStep(index + 1)
        // }, durationDiv * 1000)
    }, (15 + durationDiv) * 1000 )

    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.5 }}
                        transition={{ duration: durationDiv, ease: "easeInOut" }}
                        className='chatbox flex flex-col rounded-xl w-[38vw] h-[90vh]'
                    >
                        <div className='header flex bg-purple-600 h-[9%] rounded-t-lg items-center'>
                            <div className='rounded-full bg-white w-10 h-10 ml-5'></div>
                            <h1 className='text-white ml-3 scale-150 font-semibold'>BP</h1>
                            <FaRegHeart className='w-6 h-6 text-white ml-2 mt-1' />
                            <BsFillTelephoneFill className='w-6 h-6 text-white ml-80' />
                            <BiSolidVideo className='w-8 h-8 text-white ml-5' />
                            <HiOutlineMinusSm className='w-8 h-8 text-white ml-2' />
                            <MdOutlineClose
                                className='w-8 h-8 text-white ml-auto mr-2 cursor-pointer'
                                // onClick={() => setIsVisible(false)}
                            />
                        </div>
                        <div className='messbox bg-gray-600 h-[72%] '>
                            <img src="/img.png" alt="hehe" className='' />
                        </div>
                        <div className='messInput bg-[#242526] h-[19%] flex rounded-b-lg items-center border-white border-t-2'>
                            <div className='chat bg-gray-400 flex flex-col rounded-2xl h-[80%] w-[85%] ml-3 '>
                                <AnimateLetter text="Thì nhân dịp sinh nhật em, anh chúc em một sinh nhật vui vẻ, thật" delay={1 + durationDiv}/>
                                <AnimateLetter text="đặc biệt. Mong em luôn là nghiệm duy nhất của hạnh phúc trong" delay={4.5 + durationDiv}/>
                                <AnimateLetter text="phương trình cuộc sống ♥. Ngày hôm nay là của em, nhưng không" delay={7.5 + durationDiv}/>
                                <AnimateLetter text="hiểu sao có người lại háo hức không kém :>" delay={10.5 + durationDiv} />
                            </div>
                            <IoSend className='w-10 h-10 text-blue-400 ml-5' />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ChattingScreen;
