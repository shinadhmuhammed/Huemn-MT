import React from "react";
import { useDispatch } from "react-redux";
import FontPairingCard from "./FontPairingCard";
import { setFonts } from "../../Redux/Slices/webSlice";

const FontPairingChooser = () => {
  const dispatch = useDispatch();

  const fontCategories = [
    {
      name: "Professional",
      recommended: true,
      pairings: [
        {
          headingFont: "font-sans",
          bodyFont: "font-sans",
          headingText: "Roboto",
          bodyText: "Roboto",
        },
        {
          headingFont: "font-serif",
          bodyFont: "font-sans",
          headingText: "Instrument Serif",
          bodyText: "Newsreader",
        },
      ],
    },
    {
      name: "Playful",
      recommended: false,
      pairings: [
        {
          headingFont: "font-shrikhand",
          bodyFont: "font-bitter",
          headingText: "Shrikhand",
          bodyText: "Bitter",
        },
        {
          headingFont: "font-pacifico",
          bodyFont: "font-raleway",
          headingText: "Pacifico",
          bodyText: "Raleway",
        },
      ],
    },
  ];

  const handleFontSelection = (headingFont, bodyFont) => {
    dispatch(setFonts({ headingFont, bodyFont }));
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md space-y-6">
      <h1 className="text-3xl font-bold">Choose a font pairing</h1>
      <p className="text-gray-600">
        These custom pairings were curated by our designers. There are other
        font options you can explore later.
      </p>

      <div className="space-y-4 h-80 overflow-y-auto">
        {fontCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">{category.name}</span>
              {category.recommended && (
                <span className="text-blue-500 text-sm">Recommended</span>
              )}
            </div>
            <div className="flex space-x-4">
              {category.pairings.map((pairing, pairingIndex) => (
                <div
                  key={pairingIndex}
                  onClick={() =>
                    handleFontSelection(pairing.headingFont, pairing.bodyFont)
                  }
                  className="cursor-pointer"
                >
                  <FontPairingCard {...pairing} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FontPairingChooser;
