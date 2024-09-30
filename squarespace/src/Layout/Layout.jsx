import React from 'react';
import Logo from '../Components/Icon/Logo';
import Pages from '../Components/Navigation/pages';


const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex  mt-5">
        <Logo />
      </div>
      <div className="flex-grow flex">
        {children}
      </div>
      <Pages/>
    </div>
  );
};

export default Layout;
