import React from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Pages from '../Navigation/pages';

const Site = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white"> 
      <div className="flex-grow flex">
        <LeftSection />
        <RightSection />
      </div>
      <Pages />
    </div>
  );
};

export default Site;
