import React from 'react';
import TypingEffect from 'react-typing-effect';

const TypingAnimation = () => {
  return (
    <div className="flex justify-center items-center h-[15vh] bg-[#F9F4F3]">
      <TypingEffect
        text={['Welcome to Admin Dashboard 🤩']}
        speed={100}
        eraseSpeed={50}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => (
          <h1 className="text-6xl font-semibold font-serif text-gradient shadow-2xl  transition-transform transform mb-6">{text}</h1>
        )}
      />
    </div>
  );
};

export default TypingAnimation;
