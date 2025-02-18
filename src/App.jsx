import { useState, useEffect } from 'react'
import './App.css'
import AudioConfirm from './screens/AudioConfirm'
import AnimateText from './components/AnimateText'
import AnimateTextLink from './components/AnimateTextLink'
import AnimateTextXoayXoay from './components/AnimateTextXoayXoay'
import { div } from 'framer-motion/client'
import Timer from './components/Timer'
import BirthdayCard from './components/BirthdayCard'
import ChattingScreen from './screens/ChattingScreen'
import { delay } from 'framer-motion'
import { motion, AnimatePresence } from 'framer-motion';
import Balloon1 from './components/Balloon1'
import Balloon2 from './components/Balloon2'
import MotionImage from './components/MotionImage'

function App() {
  const [isPlay, setIsPlay] = useState(false)
  const [isStep, setIsStep] = useState(0)
  const [isStep1, setIsStep1] = useState(0)

  const [showBox, setShowBox] = useState(false);

  // Kích hoạt sau 1 giây
  useEffect(() => {
    const timer = setTimeout(() => setShowBox(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isStep === 6) {
      const hideBoxTimer = setTimeout(() => {
        setShowBox(false);
      }, 6000);

      const nextStepTimer = setTimeout(() => {
        setIsStep(6);
      }, 11000);

      return () => {
        clearTimeout(hideBoxTimer);
        clearTimeout(nextStepTimer);
      };
    }
  }, [isStep]);


  // console.log("🚀 ~ App ~ isStep:", isStep)

  return (
    <div className='overflow-hidden'>
      <AudioConfirm setIsPlay={setIsPlay} />
      {/* <Timer isActive={isPlay} /> */}
      {isPlay ? (
        <>
          {isStep === 0 ?
            (
              <>
                <AnimateText sentence='Chào em Phạm Ngọc Bích Phương' delay={2} hide={5} textsize={50}
                  top={30} left={26} fontWeight='600' setIsStep={setIsStep} index={0} />
                <AnimateText sentence='Nhân tiện, anh rất thích tên của em :)' delay={3} hide={4} textsize={25}
                  top={42} left={38} fontWeight='100' setIsStep={setIsStep} index={0} />
              </>
            ) : (isStep === 1 ? (
              <>
                <AnimateText sentence='Hôm nay là sinh nhật của em' delay={1} hide={4} textsize={50}
                  top={30} left={30} fontWeight='100' setIsStep={setIsStep} index={1} />
                <AnimateText sentence='18/02/2005 - 18/02/2025' delay={2} hide={3} textsize={25}
                  top={39} left={53} fontWeight='200' setIsStep={setIsStep} index={1} />
              </>
            ) : (isStep === 2 ? (
              <>
                <AnimateText sentence='1' delay={0} hide={15.3} textsize={25}
                  top={39} left={53} fontWeight='200' setIsStep={setIsStep} index={2} />
                <ChattingScreen />
              </>
            ) : (isStep === 3 ? (
              <>
                <AnimateText sentence='Anh đã nhắn tin chúc mừng cho em' delay={1} hide={4} textsize={50}
                  top={30} left={27} fontWeight='100' setIsStep={setIsStep} index={3} />
              </>
            ) : (isStep === 4 ? (
              <>
                <AnimateText sentence='Nhưng' delay={1} hide={2.5} textsize={50}
                  top={30} left={45} fontWeight='300' setIsStep={setIsStep} index={4} />
              </>
            ) : (isStep === 5 ? (
              <>
                <AnimateText sentence='Anh nhận ra anh muốn làm gì đó đặc biệt!' delay={1} hide={4} textsize={50}
                  top={30} left={23} fontWeight='100' setIsStep={setIsStep} index={5} />
              </>
            ) : (isStep === 6 ? (
              <>
                <AnimateText
                  sentence='Bởi vì em là một người'
                  delay={0.5}
                  hide={7}
                  textsize={50}
                  top={30}
                  left={28}
                  fontWeight='100'
                  setIsStep={setIsStep}
                  index={6}
                />
                <AnimatePresence>
                  {showBox && (
                    <motion.div
                      initial={{ backgroundColor: "#ffffff", color: "#000000", scale: 1, fontWeight: "400", opacity: 0 }}
                      animate={{ backgroundColor: "#ff0000", color: "#ffffff", scale: 1.2, fontWeight: "700", opacity: 1 }}
                      exit={{ scale: 0.2, opacity: 0 }}
                      transition={{ duration: 2, ease: "easeInOut", delay: 2 }}
                      className=' absolute text-[50px] rounded-lg cursor-pointer top-[32%] left-[61%]'
                    >
                      đặc biệt
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (isStep === 7 ? (
              <>
                <AnimateTextXoayXoay sentence='Chúc mừng sinh nhật em một lần nữa!' delay={1} hide={10000} textsize={50}
                  top={60} left={24} fontWeight='300' setIsStep={setIsStep} index={7} inDuration={1.5} />
                <MotionImage />
                <Balloon1 />
                <AnimateTextLink sentence='Có thể ủng hộ tác giả một cái ôm tại đây ♥'
                  href='https://www.facebook.com/nhan.lequy.12/'
                  delay={3}
                  hide={10000}
                  textsize={20}
                  top={10} left={1}
                  textColor='text-pink-600'
                  fontWeight='300' inDuration={1.5} />

              </>
            ) : (
              <></>
            )))
            )))))
          }
        </>
      ) : (
        <div></div>
      )}
      {/* <ChattingScreen /> */}
    </div>
  )
}

export default App
