import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import image1 from '../../../Images/sofaimage.jpeg';
import IntroHeader from './IntroHeader';
import IntroBody from './IntroBody';
import { updateIntroTitle, updateIntroPosition } from '../../../Redux/Slices/webSlice';

const Intro = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.site.title);
  const { headingFont } = useSelector((state) => state.web.fonts);
  const introTitle = useSelector((state) => state.web.sections.intro.name);
  const introPosition = useSelector((state) => state.web.sections.intro.position); 
  const [editMode, setEditMode] = useState(false);

  const handleTitleChange = (e) => {
    dispatch(updateIntroTitle(e.target.value));
  };

  const handlePositionChange = (position) => {
    dispatch(updateIntroPosition({ position }));
  };

  return (
    <div className="relative bg-gray-100 h-64 transition duration-500 ease-in-out hover:border-4 hover:border-blue-500">
      <IntroHeader title={title} />

      <main className="relative h-full transition duration-500 ease-in-out">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover transition duration-500 ease-in-out"
            src={image1}
            alt="Background"
          />
          <div className="absolute inset-0 bg-gray-500 bg-opacity-50" aria-hidden="true" />
        </div>

        <IntroBody
          editMode={editMode}
          setEditMode={setEditMode}
          introTitle={introTitle}
          handleTitleChange={handleTitleChange}
          headingFont={headingFont}
          introPosition={introPosition} 
          onPositionChange={handlePositionChange} 
        />
      </main>
    </div>
  );
};

export default Intro;
