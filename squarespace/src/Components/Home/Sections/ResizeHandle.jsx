import React from 'react';

const ResizeHandle = ({ direction, setSize, size }) => {
  const handleMouseDown = (e) => {
    e.stopPropagation();

    const startX = e.pageX;
    const startY = e.pageY;
    const startWidth = size.width;
    const startHeight = size.height;

    const handleMouseMove = (e) => {
      if (direction === 'se') {
        setSize({
          width: startWidth + (e.pageX - startX),
          height: startHeight + (e.pageY - startY),
        });
      } else if (direction === 'e') {
        setSize({
          ...size,
          width: startWidth + (e.pageX - startX),
        });
      } else if (direction === 's') {
        setSize({
          ...size,
          height: startHeight + (e.pageY - startY),
        });
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div
      className={`absolute ${direction === 'se' ? 'bottom-0 right-0' : direction === 's' ? 'bottom-0 left-1/2' : 'top-1/2 right-0'} w-4 h-4 bg-blue-500 cursor-${direction}-resize`}
      onMouseDown={handleMouseDown}
    />
  );
};

export default ResizeHandle;
