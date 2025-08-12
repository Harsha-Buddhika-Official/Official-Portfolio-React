import React, { useEffect, useState } from 'react';

const CursorTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [backgroundOffset, setBackgroundOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Get the background offset from the body element
    const updateBackgroundOffset = () => {
      const body = document.body;
      const computedStyle = window.getComputedStyle(body);
      const backgroundPosition = computedStyle.backgroundPosition;
      
      // Parse background position (e.g., "0px 0px" or "50% 50%")
      const positions = backgroundPosition.split(' ');
      const offsetX = parseFloat(positions[0]) || 0;
      const offsetY = parseFloat(positions[1]) || 0;
      
      setBackgroundOffset({ x: offsetX, y: offsetY });
    };

    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      updateBackgroundOffset();
    };

    const hideCursor = () => {
      setIsVisible(false);
    };

    // Initial background offset calculation
    updateBackgroundOffset();

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseleave', hideCursor);
    window.addEventListener('scroll', updateBackgroundOffset);
    window.addEventListener('resize', updateBackgroundOffset);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseleave', hideCursor);
      window.removeEventListener('scroll', updateBackgroundOffset);
      window.removeEventListener('resize', updateBackgroundOffset);
    };
  }, []);

  if (!isVisible) return null;

  // Calculate the exact alignment with background dots
  const dotSize = 30; // Same as background-size
  const alignedX = Math.round((position.x - backgroundOffset.x) / dotSize) * dotSize + backgroundOffset.x;
  const alignedY = Math.round((position.y - backgroundOffset.y) / dotSize) * dotSize + backgroundOffset.y;
  
  // Calculate background position to align with original dots
  const bgPosX = (alignedX - position.x) % dotSize;
  const bgPosY = (alignedY - position.y) % dotSize;

  return (
    <div
      className="cursor-spotlight"
      style={{
        left: position.x,
        top: position.y,
        position: 'fixed',
        width: '120px',
        height: '120px',
        pointerEvents: 'none',
        zIndex: 2,
        transform: 'translate(-50%, -50%)',
        transition: 'all 0.15s ease-out',
        backgroundImage: `radial-gradient(rgba(100, 255, 218, 0.8) 1px, transparent 1px)`,
        backgroundSize: '30px 30px',
        backgroundPosition: `${bgPosX}px ${bgPosY}px`,
        mixBlendMode: 'screen',
        borderRadius: '50%',
        // Add a subtle mask to create a perfect circle
        mask: 'radial-gradient(circle, black 70%, transparent 100%)',
        WebkitMask: 'radial-gradient(circle, black 70%, transparent 100%)',
      }}
    />
  );
};

export default CursorTracker;
