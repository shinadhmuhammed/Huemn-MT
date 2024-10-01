import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import image1 from '../../../Images/sofaimage.jpeg';
import IntroHeader from './IntroHeader';
import IntroBody from './IntroBody';
import { updateIntroTitle } from '../../../Redux/Slices/webSlice';

const Intro = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.site.title);
  const { headingFont } = useSelector((state) => state.web.fonts);
  const introTitle = useSelector((state) => state.web.sections.intro.name);

  const [editMode, setEditMode] = useState(false);

  const handleTitleChange = (e) => {
    dispatch(updateIntroTitle(e.target.value));
  };

  

  return (
    <div className="bg-gray-100 h-64 transition duration-500 ease-in-out hover:border-4 hover:border-blue-500">
      <IntroHeader title={title} />

      <main className="relative h-64 transition duration-500 ease-in-out">
        <div className="absolute inset-0 h-full w-full">
          <img
            className="w-full h-full object-cover transition duration-500 ease-in-out opacity-100 hover:opacity-0"
            src={image1}
            alt="Background"
          />
          <div className="absolute inset-0 bg-gray-500 mix-blend-multiply" aria-hidden="true" />
        </div>

        <IntroBody
          editMode={editMode}
          setEditMode={setEditMode}
          introTitle={introTitle}
          handleTitleChange={handleTitleChange}
          headingFont={headingFont}
        />
      </main>
    </div>
  );
};

export default Intro;
