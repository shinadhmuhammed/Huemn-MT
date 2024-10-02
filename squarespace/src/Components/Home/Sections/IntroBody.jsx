import React from 'react';
import Draggable from 'react-draggable';

const IntroBody = ({
  introTitle,
  handleTitleChange,
  editMode,
  setEditMode,
  headingFont,
  introPosition,
  onPositionChange 
}) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <Draggable
        position={introPosition} 
        onDrag={(e, data) => {
          if (onPositionChange) {
            onPositionChange({ x: data.x, y: data.y }); 
          }
        }}
        bounds="parent"
        disabled={editMode}
      >
        <div className="cursor-move">
          {editMode ? (
            <input
              type="text"
              value={introTitle}
              onChange={handleTitleChange}
              className={`font-bold tracking-tight text-white text-center sm:text-2xl lg:text-3xl transition duration-500 ease-in-out ${headingFont} p-2 border border-white rounded-md bg-transparent`}
            />
          ) : (
            <h1
              className={`font-bold tracking-tight text-white text-center sm:text-2xl lg:text-3xl transition duration-500 ease-in-out ${headingFont} text-shadow-lg`}
            >
              {introTitle}
            </h1>
          )}
        </div>
      </Draggable>

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
