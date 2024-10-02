import React from "react";
import Draggable from "react-draggable";
import chair from "../../../Images/chair.jpg";
import { useSelector } from "react-redux";

const About = () => {
  const { headingFont } = useSelector((state) => state.web.fonts); 

  return (
    <div className="flex flex-col md:flex-row bg-white max-w-6xl mx-auto transition-all duration-300 hover:border-4 hover:border-blue-500 hover:shadow-lg">
    
      <Draggable>
        <div className="w-full md:w-1/2 cursor-move">
          <img
            src={chair}
            alt="Modern chair design"
            className="w-full h-full object-cover"
          />
        </div>
      </Draggable>

      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
        <Draggable>
          <div className="cursor-move">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${headingFont}`}>
              More about our brand
            </h2>
          </div>
        </Draggable>

      <Draggable>
        <p className={`text-gray-600 mb-8 ${headingFont}`}>
          Tell people about who you are, your origin, your process, or your
          inspirations. Tap into your creativity. You've got this. The way you
          tell your story online can make all the difference.
        </p>
        </Draggable>
      <Draggable>
        <button className="bg-black text-white py-3 px-6 rounded-full text-sm font-semibold uppercase tracking-wider inline-block w-max">
          Learn More
        </button>
        </Draggable>
      </div>
     
    </div>
    
  );
};

export default About;
