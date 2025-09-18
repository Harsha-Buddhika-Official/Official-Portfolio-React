import React, { useEffect, useState } from 'react';

const CursorTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [backgroundOffset, setBackgroundOffset] = useState({ x: 0, y: 0 });
  const [nearbyDots, setNearbyDots] = useState([]);

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

    const findNearbyDots = (cursorX, cursorY, bgOffsetX, bgOffsetY) => {
      const dotSize = 30;
      const radius = 1000000;
      const minDots = 10;
      const dots = [];
      
      // Calculate the grid bounds to check (expand search area)
      const searchRange = Math.ceil(radius / dotSize) + 2;
      
      // Find the nearest grid point as reference
      const nearestGridX = Math.round((cursorX - bgOffsetX) / dotSize);
      const nearestGridY = Math.round((cursorY - bgOffsetY) / dotSize);
      
      // Check dots in a grid around the cursor
      for (let i = -searchRange; i <= searchRange; i++) {
        for (let j = -searchRange; j <= searchRange; j++) {
          const gridX = nearestGridX + i;
          const gridY = nearestGridY + j;
          
          // Calculate actual dot position
          const dotX = gridX * dotSize + bgOffsetX;
          const dotY = gridY * dotSize + bgOffsetY;
          
          // Calculate distance from cursor to dot
          const distance = Math.sqrt(
            Math.pow(dotX - cursorX, 2) + Math.pow(dotY - cursorY, 2)
          );
          
          // If dot is within radius, add it to nearby dots
          if (distance <= radius) {
            dots.push({ x: dotX, y: dotY, distance });
          }
        }
      }
      
      // Sort dots by distance (closest first)
      dots.sort((a, b) => a.distance - b.distance);
      
      // If we don't have enough dots within radius, expand to get at least minDots
      if (dots.length < minDots) {
        const allDots = [];
        const expandedRange = Math.ceil(Math.sqrt(minDots)) + 2;
        
        for (let i = -expandedRange; i <= expandedRange; i++) {
          for (let j = -expandedRange; j <= expandedRange; j++) {
            const gridX = nearestGridX + i;
            const gridY = nearestGridY + j;
            
            const dotX = gridX * dotSize + bgOffsetX;
            const dotY = gridY * dotSize + bgOffsetY;
            
            const distance = Math.sqrt(
              Math.pow(dotX - cursorX, 2) + Math.pow(dotY - cursorY, 2)
            );
            
            allDots.push({ x: dotX, y: dotY, distance });
          }
        }
        
        // Sort all dots and take the closest minDots
        allDots.sort((a, b) => a.distance - b.distance);
        return allDots.slice(0, minDots);
      }
      
      return dots;
    };

    const updateCursor = (e) => {
      const cursorX = e.clientX;
      const cursorY = e.clientY;
      
      setPosition({ x: cursorX, y: cursorY });
      setIsVisible(true);
      
      // Get fresh background offset
      const body = document.body;
      const computedStyle = window.getComputedStyle(body);
      const backgroundPosition = computedStyle.backgroundPosition;
      const positions = backgroundPosition.split(' ');
      const offsetX = parseFloat(positions[0]) || 0;
      const offsetY = parseFloat(positions[1]) || 0;
      
      setBackgroundOffset({ x: offsetX, y: offsetY });
      
      // Calculate nearby dots with current offset
      const dots = findNearbyDots(cursorX, cursorY, offsetX, offsetY);
      setNearbyDots(dots);
    };

    const hideCursor = () => {
      setIsVisible(false);
      setNearbyDots([]);
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
    <>
      {/* SVG for drawing lines to nearby dots */}
      <svg
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        {nearbyDots.map((dot, index) => {
          const opacity = Math.max(0.2, 1 - (dot.distance / 100));
          const strokeWidth = Math.max(1, 4 - (dot.distance / 25)); // Increased width
          const dotRadius = Math.max(1, 2.5 - (dot.distance / 50));
          
          // Calculate extended line endpoints (50% longer from dots toward cursor)
          const dx = position.x - dot.x;
          const dy = position.y - dot.y;
          const extendedX = position.x + dx * 0.5;
          const extendedY = position.y + dy * 0.5;
          
          return (
            <g key={`${dot.x}-${dot.y}`}>
              {/* Main connection line - thicker and extended from dot to cursor */}
              <line
                x1={dot.x}
                y1={dot.y}
                x2={extendedX}
                y2={extendedY}
                stroke="rgba(100, 255, 218, 0.6)"
                strokeWidth={strokeWidth}
                opacity={opacity}
              />
              
              {/* Additional tracking line 1 - slightly offset and thinner */}
              <line
                x1={dot.x}
                y1={dot.y}
                x2={extendedX}
                y2={extendedY}
                stroke="rgba(100, 255, 218, 0.4)"
                strokeWidth={strokeWidth * 0.6}
                opacity={opacity * 0.7}
                strokeDasharray="5,3"
              />
              
              {/* Additional tracking line 2 - different color and pattern */}
              <line
                x1={dot.x}
                y1={dot.y}
                x2={extendedX}
                y2={extendedY}
                stroke="rgba(150, 200, 255, 0.3)"
                strokeWidth={strokeWidth * 0.4}
                opacity={opacity * 0.5}
                strokeDasharray="2,4"
              />
              
              {/* Additional tracking line 3 - subtle accent line */}
              <line
                x1={dot.x}
                y1={dot.y}
                x2={extendedX}
                y2={extendedY}
                stroke="rgba(200, 150, 255, 0.2)"
                strokeWidth={strokeWidth * 0.3}
                opacity={opacity * 0.4}
                strokeDasharray="1,2"
              />
              
              {/* Highlighted dot */}
              <circle
                cx={dot.x}
                cy={dot.y}
                r={dotRadius}
                fill="rgba(100, 255, 218, 0.8)"
                opacity={opacity}
              />
            </g>
          );
        })}
      </svg>
    </>
  );
};

export default CursorTracker;
