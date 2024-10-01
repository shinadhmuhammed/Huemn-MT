import React from "react";
import { Monitor, Smartphone, Brush, ArrowUpRight } from "lucide-react";

const HeaderLayout = ({ handleMobileView, handleDesktopView }) => {
  return (
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
  );
};

export default HeaderLayout;
