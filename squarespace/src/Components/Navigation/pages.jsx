import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextPage, prevPage } from '../../Redux/Slices/workflowSlice'; 
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentPageIndex, pages } = useSelector((state) => state.pageSlice);
  
  // Initialize local state to manage the current page index
  const [pageIndex, setPageIndex] = useState(currentPageIndex);

  // Use useEffect to update local state whenever currentPageIndex changes
  useEffect(() => {
    setPageIndex(currentPageIndex);
  }, [currentPageIndex]);

  const buildWebsite = () => {
    navigate('/menu'); // Navigate to the menu page when building the website
  };

  const handleNextClick = () => {
    if (pageIndex < pages.length - 1) {
      dispatch(nextPage());
      navigate(`/${pages[pageIndex + 1]}`); // Navigate to the next page
    }
  };

  const handleBackClick = () => {
    if (pageIndex > 0) {
      dispatch(prevPage());
      navigate(`/${pages[pageIndex - 1]}`); // Navigate to the previous page
    }
  };

  // Simulated condition to enable or disable the Next button
  const isAnySectionSelected = true; // Replace with actual condition based on your logic

  return (
    <div className='bg-white h-1/4 w-full py-4 flex flex-col md:flex-row justify-evenly items-center space-y-4 md:space-y-0'>
      {pageIndex !== 0 && (
        <button 
          className='w-1/2 md:w-24 bg-black py-2 rounded text-center text-white font-extrabold cursor-pointer'
          onClick={handleBackClick} 
        >
          Back
        </button>
      )}

      <div className="w-full md:w-3/5 flex flex-col items-center">
        <div className="w-full h-2 bg-gray-300 rounded">
          <div
            className="h-full bg-black rounded"
            style={{ width: `${((pageIndex + 1) / pages.length) * 100}%` }} // Progress bar based on current page
          />
        </div>
        <div className="w-full flex justify-between mt-2 text-xs md:text-sm lg:text-base">
          {pages.map((page, index) => (
            <span key={index} className='text-black font-medium'>{page.toUpperCase()}</span>
          ))}
        </div>
      </div>

      {pageIndex < pages.length - 1 ? (
        <button
          className={`w-1/2 md:w-24 bg-black py-2 rounded ${(!isAnySectionSelected && pageIndex === 1) ? "cursor-not-allowed" :"cursor-pointer"} text-center text-white font-extrabold`}
          onClick={handleNextClick}
          disabled={(!isAnySectionSelected && pageIndex === 1)} // Disable Next if condition met
        >
          Next
        </button>
      ) : (
        <button
          className={`w-1/2 md:w-24 bg-black py-2 rounded text-center text-white font-extrabold cursor-pointer`}
          onClick={buildWebsite}
        >
          Build
        </button>
      )}
    </div>
  );
};

export default Footer;
