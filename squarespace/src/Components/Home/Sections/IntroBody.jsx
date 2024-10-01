import React from 'react';

const IntroBody = ({
  introTitle,
  handleTitleChange,
  editMode,
  setEditMode,
  headingFont,
}) => {
  return (
    <div className="relative max-w-7xl mx-auto h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {editMode ? (
          <input
            type="text"
            value={introTitle}
            onChange={handleTitleChange}
            className={`font-bold tracking-tight text-black text-center sm:text-2xl lg:text-3xl transition duration-500 ease-in-out ${headingFont} p-2 border rounded-md`}
          />
        ) : (
          <h1
            className={`font-bold tracking-tight text-white text-center justify-center sm:text-2xl lg:text-3xl transition duration-500 ease-in-out ${headingFont} flex items-center justify-center`}
          >
            {introTitle}
          </h1>
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
