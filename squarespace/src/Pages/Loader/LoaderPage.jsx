import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import LeftHomePage from "../../Components/Home/LeftHomePage";
import SidebarMenu from "../../Layout/SidebarMenu";
import HeaderLayout from "../../Layout/HeaderLayout";
import LoadingScreen from "./LoadingScreen";


const LoaderPage = () => {
  const { sections = {} } = useSelector((state) => state.web || {});
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false); 

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      setLoadingComplete(true);
    }, 5000);

    return () => clearTimeout(redirectTimeout);
  }, []);

  const handleMobileView = () => setIsMobileView(true);
  const handleDesktopView = () => setIsMobileView(false);

  if (loadingComplete) {
    return (
      <div className="flex h-screen">
        <SidebarMenu />
        <div className="flex flex-col flex-1">
          <HeaderLayout 
            handleMobileView={handleMobileView} 
            handleDesktopView={handleDesktopView} 
          />
          <div className={`flex ${isMobileView ? 'justify-center' : 'flex-col'}`}>
            <div className={`transition-all duration-300 ${isMobileView ? 'w-full max-w-xs' : 'w-full md:w-3/4'} p-4`}>
              <LeftHomePage sections={sections} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <LoadingScreen />;
};

export default LoaderPage;
