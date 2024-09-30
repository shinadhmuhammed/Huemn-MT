import React from 'react';
import LeftHomePage from './LeftHomePage';
import RightHomePage from './RightHomePage';
import { useDispatch, useSelector } from 'react-redux';
import { setSections } from '../../Redux/Slices/webSlice'; 
import Pages from '../Navigation/pages';

const Home = () => {
  const dispatch = useDispatch();
  const { sections = {} } = useSelector((state) => state.web || {});

  const handleCheckboxChange = (sectionKey) => {
    dispatch(setSections({ sectionKey, updatedData: { show: !sections[sectionKey].show } }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-white"> 
      <div className="flex-grow flex">
        <LeftHomePage sections={sections} />
        <RightHomePage sections={sections} onCheckboxChange={handleCheckboxChange} />
      </div>
      <Pages />
    </div>
  );
}

export default Home;
