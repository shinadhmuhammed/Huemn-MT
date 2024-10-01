import React from 'react';
import ResizeHandle from './ResizeHandle';

const IntroBody = ({
  elementRef,
  position,
  setPosition,
  size,
  setSize,
  introTitle,
  handleTitleChange,
  editMode,
  setEditMode,
  headingFont
}) => {
  const handleMouseDown = (e) => {
    if (!editMode) return;

    const startX = e.pageX - position.left;
    const startY = e.pageY - position.top;

    const handleMouseMove = (e) => {
      setPosition({
        left: e.pageX - startX,
        top: e.pageY - startY,
      });
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className="relative max-w-7xl mx-auto h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div
        ref={elementRef}
        style={{
          position: 'absolute',
          top: `${position.top}px`,
          left: `${position.left}px`,
          width: `${size.width}px`,
          height: `${size.height}px`,
          cursor: editMode ? 'move' : 'default',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onMouseDown={handleMouseDown}
      >
        {editMode ? (
          <input
            type="text"
            value={introTitle}
            onChange={handleTitleChange}
            className={`font-bold tracking-tight text-black text-center sm:text-2xl lg:text-3xl transition duration-500 ease-in-out ${headingFont} p-2 border rounded-md w-full h-full`}
          />
        ) : (
          <h1
            className={`font-bold tracking-tight text-white text-center justify-center sm:text-2xl lg:text-3xl transition duration-500 ease-in-out ${headingFont} w-full h-full flex items-center justify-center`}
          >
            {introTitle}
          </h1>
        )}
        {editMode && (
          <>
            <ResizeHandle direction="se" setSize={setSize} size={size} />
            <ResizeHandle direction="s" setSize={setSize} size={size} />
            <ResizeHandle direction="e" setSize={setSize} size={size} />
          </>
        )}
      </div>

      <div className="absolute top-4 right-4">
        <button
          onClick={() => setEditMode(!editMode)}
          className={`p-2 ${editMode ? 'bg-blue-500' : 'bg-gray-300'} text-white rounded`}
        >
          {editMode ? 'Save' : 'Edit'}
        </button>
      </div>
    </div>
  );
};

export default IntroBody;
