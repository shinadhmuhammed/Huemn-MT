import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center ml-5 mt-2">
      <svg 
        fill="currentColor" 
        height="22" 
        viewBox="0 0 22 22" 
        width="22" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-7 h-7 mr-2" 
      >
        <g clipPath="url(#prefix__clip0_3368_2063)">
          <path 
            clipRule="evenodd" 
            d="M12.824 5.679l1.044 1.073-6.97 6.99a4.036 4.036 0 01-5.714 0 4.053 4.053 0 010-5.724L7.19 2l1.054 1.083L2.273 9.1a2.533 2.533 0 00.019 3.578c.991.983 2.59.974 3.572-.019l6.96-6.981zm-1.282-1.211l-6.96 6.972-1.1-1.082 6.979-6.982a4.043 4.043 0 015.715 0l.54.541-1.08 1.092-.54-.541a2.498 2.498 0 00-3.554 0zm9.259 3.55a4.043 4.043 0 00-5.715 0l-6.97 6.991 1.09 1.092 6.96-6.982a2.515 2.515 0 013.545 0 2.526 2.526 0 010 3.56l-5.971 6 1.09 1.082 6.008-6.018a4.06 4.06 0 00-.037-5.725zm-10.358 9.275l6.96-6.972 1.1 1.082-6.97 6.982a4.043 4.043 0 01-5.715 0l-.54-.541 1.07-1.101.541.55a2.525 2.525 0 003.554 0z" 
            fillRule="evenodd"
          ></path>
        </g>
      </svg>
      <span className="font-bold text-xl">BluePrint UI</span> 
    </div>
  );
};

export default Logo;
