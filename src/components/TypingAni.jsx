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
        }, 100);
        return () => clearTimeout(timer);
      } else {
        // Pause before erasing
        const timer = setTimeout(() => {
          setIsTyping(false);
        }, 1500);
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
    <div
      className="h-auto max-w-full whitespace-normal break-words overflow-wrap text-center px-4"
    >
      <span className="text-5xl font-semibold text-white inline-block">
        {displayText}
        <span
          className="inline-block w-2 h-9 bg-white ml-1 animate-blink"
          style={{
            // Tailwind doesn't have a built-in blink, so add custom animation:
            animation: "blink 1s infinite",
          }}
        ></span>
      </span>
      {/* Custom blink keyframes for Tailwind */}
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