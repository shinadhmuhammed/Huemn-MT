import React from 'react';
import { useSelector } from 'react-redux';
import image1 from '../.././../Images/sofaimage.jpeg';

const Intro = () => {
  const title = useSelector((state) => state.site.title);

  return (
    <div className="bg-gray-100 h-64 transition duration-500 ease-in-out hover:border-4 hover:border-blue-500">  {/* Added hover border */}
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-700">{title}</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="relative h-64 transition duration-500 ease-in-out">  
        {/* Background image */}
        <div className="absolute inset-0 h-full w-full">
          <img
            className="w-full h-full object-cover transition duration-500 ease-in-out opacity-100 hover:opacity-0" 
            src={image1}
            alt="Background"
          />
          <div className="absolute inset-0 bg-gray-500 mix-blend-multiply" aria-hidden="true" />
        </div>

        {/* Content overlay */}
        <div className="relative max-w-7xl mx-auto h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-bold tracking-tight text-white text-center sm:text-2xl lg:text-3xl transition duration-500 ease-in-out">
            Introduce Your Brand
          </h1>
        </div>
      </main>
    </div>
  );
};

export default Intro;
