import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import LeftHomePage from "../../Components/Home/LeftHomePage";


const LoaderPage = () => {
  const [showText, setShowText] = useState(true);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const { sections = {} } = useSelector((state) => state.web || {});

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


  if (loadingComplete) {
    return <LeftHomePage sections={sections} />;
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
