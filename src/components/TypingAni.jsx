import { useState, useEffect } from "react";

function TypingAni() {
  const phrases = [
    "Computer Science Undergraduate",
    "Software Engineer",
    "UI/UX Designer",
    "Full Stack Developer",
    "Web Developer",
    "Graphic Designer",
  ];

  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    if (isTyping) {
      // Typing effect
      if (displayText.length < currentPhrase.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        }, 200);
        return () => clearTimeout(timer);
      } else {
        // Pause before erasing
        const timer = setTimeout(() => {
          setIsTyping(false);
        }, 4000);
        return () => clearTimeout(timer);
      }
    } else {
      // Erasing effect
      if (displayText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50);
        return () => clearTimeout(timer);
      } else {
        // Move to next phrase
        const nextIndex = (phraseIndex + 1) % phrases.length;
        setPhraseIndex(nextIndex);
        setIsTyping(true);
      }
    }
  }, [displayText, phraseIndex, isTyping, phrases]);

  return (
    <div className="h-auto max-w-full whitespace-normal break-words overflow-wrap text-center px-4">
      <span className="md:text-[30px] text-[20px] font-semibold text-white inline-block">
        {displayText}
        <span
          className="inline-block w-1 md:h-7 h-5 bg-white ml-1 animate-blink"
          style={{
            animation: "blink 1s infinite",
          }}
        ></span>
      </span>
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s infinite;
          }
        `}
      </style>
    </div>
  );
}

export default TypingAni;
