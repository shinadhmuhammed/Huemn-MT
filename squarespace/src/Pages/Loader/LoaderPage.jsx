import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import LeftHomePage from "../../Components/Home/LeftHomePage";
import SidebarMenu from "../../Layout/SidebarMenu";
import {
  Monitor,
  Smartphone,
  Brush,
  ArrowUpRight,
} from "lucide-react";

const LoaderPage = () => {
  const [showText, setShowText] = useState(true);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const { sections = {} } = useSelector((state) => state.web || {});
  

  const [isMobileView, setIsMobileView] = useState(false); 

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText((prev) => !prev);
    }, 2000);

    const redirectTimeout = setTimeout(() => {
      setLoadingComplete(true);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(redirectTimeout);
    };
  }, []);

 
  const handleMobileView = () => {
    setIsMobileView(true);
  };

  
  const handleDesktopView = () => {
    setIsMobileView(false);
  };

  if (loadingComplete) {
    return (
      <div className="flex h-screen">
        <SidebarMenu />
        <div className="flex flex-col flex-1">
          <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200">
            <div>
              <h2 className="text-lg font-semibold">Home</h2>
            </div>
            <div className="flex items-center">
              <p className="text-sm text-gray-500">Page · Published</p>
            </div>
            <div className="flex space-x-2">
              <button className="p-1 hover:bg-gray-100 rounded" onClick={handleDesktopView}>
                <Monitor size={18} />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded" onClick={handleMobileView}>
                <Smartphone size={18} />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <Brush size={18} />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
          <div className={`flex ${isMobileView ? 'justify-center' : 'flex-col'}`}>
            <div className={`transition-all duration-300 ${isMobileView ? 'w-full max-w-xs' : 'w-full md:w-3/4'} p-4`}>
              <LeftHomePage sections={sections} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center relative">
      <video
        className="w-full h-full object-cover"
        src="/assets/Video/Building.webm"
        autoPlay
        loop
        muted
      />
      <div className="absolute bottom-10 left-10 w-1/4 h-1/3 flex justify-center items-start bg-white">
        <div className="w-2/3 h-2/3 flex flex-col items-center">
          <div className="w-10 h-10 mt-5 bg-black rotate-square animate-spin pulse"></div>
          <div className="text-animation">
            {showText ? (
              <h1 className="text-xl mt-3 animate-fade">
                Just a few more moments...
              </h1>
            ) : (
              <h1 className="text-xl mt-3">Loading the Pages...</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoaderPage;
