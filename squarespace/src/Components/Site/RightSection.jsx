import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTitle, setFontStyle } from "../../Redux/Slices/SiteSlice";

const RightSection = () => {
  const dispatch = useDispatch();
  const { title, fontStyle } = useSelector((state) => state.site);

  return (
    <div className="w-2/5 p-12">
      <div className="max-w-md">
        <h1 className="text-3xl font-bold mb-8">
          Choose a site title and brand personality
        </h1>
        <div className="mb-8">
          <label
            htmlFor="site-title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Site title
          </label>
          <p className="text-sm text-gray-500 mb-2">
            This is the name of your site. You can change it later.
          </p>
          <div className="flex items-center border-b border-gray-300">
            <input
              type="text"
              id="site-title"
              className="w-full py-2 focus:outline-none"
              placeholder="Enter site title"
              value={title}
              onChange={(e) => dispatch(setTitle(e.target.value))}
              maxLength={100}
            />
            <span className="text-gray-400">{100 - (title?.length || 0)}</span>
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Brand personality
          </label>
          <p className="text-sm text-gray-500 mb-4">
            Each personality has a unique set of colors, fonts, and tone for
            creating AI-generated content. Having a clear brand personality can
            help build customer relationships.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              "Professional",
              "Playful",
              "Sophisticated",
              "Friendly",
              "Bold",
              "Quirky",
            ].map((personality) => (
              <button
                key={personality}
                className={`py-2 px-4 border border-gray-200 rounded-md text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  fontStyle === personality.toLowerCase()
                    ? "bg-blue-50 border-blue-500"
                    : ""
                }`}
                onClick={() =>
                  dispatch(setFontStyle(personality.toLowerCase()))
                }
              >
                {personality}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
