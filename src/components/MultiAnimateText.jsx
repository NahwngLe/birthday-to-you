// Tạo component mới MultiAnimateText.jsx
import React from 'react';
import AnimateText from './AnimateText';

const MultiAnimateText = ({ texts, setIsStep, setIsStepTemp, index }) => {
  // Chỉ component cuối cùng mới được phép chuyển step
  const lastIndex = texts.length - 1;
  
  return (
    <>
      {texts.map((text, idx) => (
        <AnimateText
          key={idx}
          {...text}
          setIsStep={idx === lastIndex ? setIsStep : setIsStepTemp}
          index={index}
        />
      ))}
    </>
  );
};

export default MultiAnimateText;