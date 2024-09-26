import React from 'react';
import { useStoreHook } from '../../../Hooks/UseStoreHook';

const LeftSideContainer = () => {
  const { home,menu } = useStoreHook();

  return (
    <div className="w-full h-full bg-white flex justify-center items-center relative overflow-hidden">
      <div className="absolute w-full">
        
        <h3 className={`${menu.website.title.font} text-8xl   floatingTextTitle font-extrabold animate-slow-left whitespace-nowrap `}>
          {home.title.text} {home.title.text} {home.title.text}  {home.title.text} {home.title.text} {home.title.text}
        </h3>
        <h3 className={`${menu.website.title.font} text-8xl floatingTextTitle   font-extrabold animate-slow-right whitespace-nowrap`}>
          {home.title.text} {home.title.text} {home.title.text} {home.title.text} {home.title.text} {home.title.text}
        </h3>
        <h3  className={`${menu.website.title.font} text-8xl floatingTextTitle font-extrabold animate-slow-left whitespace-nowrap`}>
          {home.title.text} {home.title.text} {home.title.text} {home.title.text} {home.title.text} {home.title.text}
        </h3>
        <h3 className={`${menu.website.title.font} text-8xl floatingTextTitle font-extrabold animate-slow-right whitespace-nowrap`}>
          {home.title.text} {home.title.text} {home.title.text} {home.title.text} {home.title.text} {home.title.text}
        </h3>
      </div>
    </div>
  );
};

export default LeftSideContainer;
