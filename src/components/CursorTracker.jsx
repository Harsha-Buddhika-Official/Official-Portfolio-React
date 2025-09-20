import React, { useEffect, useState } from 'react';

const CursorTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const hideCursor = () => setIsVisible(false);

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', hideCursor);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', hideCursor);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed z-50 transition-transform pointer-events-none duration-25"
        style={{
          left: position.x - 6,
          top: position.y - 6,
          transform: isClicking ? 'scale(0.8)' : 'scale(1)',
        }}
      >
        <div className="w-3 h-3 bg-white rounded-full shadow-lg shadow-white/30" />
      </div>

      {/* Outer ring */}
      <div
        className="fixed z-40 transition-all duration-300 ease-out pointer-events-none"
        style={{
          left: position.x - 16,
          top: position.y - 16,
          transform: isClicking ? 'scale(1.3)' : 'scale(1)',
        }}
      >
        <div className="w-8 h-8 border rounded-full border-white/40 animate-pulse" />
      </div>

      {/* Accent glow effect matching your #ff4c60 theme */}
      <div
        className="fixed z-30 transition-opacity duration-500 pointer-events-none"
        style={{
          left: position.x - 25,
          top: position.y - 25,
        }}
      >
        <div 
          className="w-12 h-12 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,76,96,0.15) 0%, rgba(255,76,96,0.05) 50%, transparent 100%)',
          }}
        />
      </div>
    </>
  );
};

export default CursorTracker;
