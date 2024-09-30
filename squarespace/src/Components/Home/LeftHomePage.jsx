import React from "react";
import Intro from "./Sections/Intro";
import Product from "./Sections/Product";

const LeftHomePage = ({ sections }) => {
  const isAnySectionVisible = Object.values(sections).some(section => section.show);

  return (
    <div className="w-3/4 p-12 flex flex-col items-center justify-center">
      {!isAnySectionVisible && (
        <>
          <h1 className="text-3xl font-bold  mb-4">
            Add Sections to Build Your Homepage
          </h1>
          <p className="text-center text-gray-500">
            Your homepage will showcase what your site is about and what you offer.
          </p>
        </>
      )}

      <div className="overflow-y-auto h-[400px] w-full">
        {sections.intro && sections.intro.show && <Intro />}

        {sections.product && sections.product.show && (
          <div className="mt-4 p-4 border border-gray-300 rounded">
            <Product/>
            </div>
        )}

        {sections.about && sections.about.show && (
          <div className="mt-4 p-4 border border-gray-300 rounded">
            <h2 className="font-bold">{sections.about.name}</h2>
            <p>This is the content of the About section!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeftHomePage;
