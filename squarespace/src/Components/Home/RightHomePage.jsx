import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSection } from "../../Redux/Slices/webSlice";

const RightHomePage = () => {
  const sections = useSelector((state) => state.web.sections); 
  const dispatch = useDispatch();

  const handleCheckboxChange = (key) => {
    dispatch(toggleSection(key)); 
  };

  return (
    <div className="p-12 mt-16 ml-24">
      <div className="max-w-md">
        <h1 className="text-3xl font-bold mb-8">Build Your Homepage</h1>
        <p className="text-sm text-gray-500 mb-4">
          Build your homepage section by section, adding as many or as few sections as you need.
        </p>

        <div className="flex flex-col gap-4">
          {Object.keys(sections).length === 0 && <p>No sections available</p>}

          {Object.keys(sections).map((key) => {
            const section = sections[key];
            return (
              <div
                key={key}
                className="w-full h-16 flex justify-start gap-3 items-center border-b-2 border-gray-400"
              >
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={section.show}
                    onChange={() => handleCheckboxChange(key)}
                    className="hidden"
                  />
                  <span
                    className={`w-6 h-6 flex items-center justify-center rounded-full border-2 border-gray-400 transition duration-200 ease-in-out 
                      ${section.show ? "bg-black" : "bg-white"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  >
                    {section.show && <span className="text-white text-lg">&#10003;</span>}
                  </span>
                </label>

                <span className="text-gray-700">{section.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RightHomePage;
