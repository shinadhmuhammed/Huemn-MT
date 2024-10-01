import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Intro from "./Sections/Intro";
import Product from "./Sections/Product";
import About from "./Sections/About";
import Footer from "./Sections/Footer";
import { setSectionSelected } from "../../Redux/Slices/workflowSlice";

const LeftHomePage = ({ sections }) => {
  const backgroundColor = useSelector((state) => state.web.backgroundColor);
  const dispatch = useDispatch();

  const isAnySectionVisible = Object.values(sections).some(
    (section) => section.show
  );
  useEffect(() => {
    dispatch(setSectionSelected(isAnySectionVisible));
  }, [sections, dispatch, isAnySectionVisible]);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {!isAnySectionVisible && (
        <>
          <h1 className="text-3xl font-bold mb-4">
            Add Sections to Build Your Homepage
          </h1>
          <p className="text-center text-gray-500">
            Your homepage will showcase what your site is about and what you
            offer.
          </p>
        </>
      )}

      <div
        className="overflow-y-auto h-[400px] w-full p-4"
        style={{ backgroundColor }}
      >
        {sections.intro && sections.intro.show && <Intro />}
        {sections.product && sections.product.show && (
          <div className="mt-4 p-4 border border-gray-300 rounded">
            <Product />
          </div>
        )}
        {sections.about && sections.about.show && (
          <div className="mt-4 p-4 border border-gray-300 rounded">
            <About />
          </div>
        )}
        {sections.footer && sections.footer.show && (
          <div className="mt-4 p-4 border border-gray-300 rounded">
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
};

export default LeftHomePage;
