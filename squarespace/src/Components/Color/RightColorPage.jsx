import React from "react";
import { useDispatch } from "react-redux";
import { setBackgroundColor } from "../../Redux/Slices/webSlice";
import ColorPalette from "./ColorPalette";

const ColorPaletteChooser = () => {
  //   const [selectedPalette, setSelectedPalette] = useState('professional');
  const dispatch = useDispatch();

  const palettes = {
    professional: [
      ["#FFFFFF", "#9370DB", "#000000"],
      ["#F2F2F2", "#00A86B", "#000000"],
      ["#F2F2F2", "#000080", "#0000FF"],
      ["#FFFFFF", "#87CEEB", "#1E90FF"],
    ],
    playful: [
      ["#E6E6FA", "#9370DB", "#8B0000"],
      ["#F0E68C", "#66CDAA", "#4682B4"],
      ["#FFB6C1", "#FF69B4", "#DA70D6"],
      ["#E0FFFF", "#40E0D0", "#00CED1"],
    ],
    sophisticated: [
      ["#F5E6D3", "#D2B48C", "#8B4513"],
      ["#FFF5EE", "#FFDAB9", "#2F4F4F"],
      ["#F0F8FF", "#E6E6FA", "#556B2F"],
      ["#F8F8FF", "#DCDCDC", "#708090"],
    ],
  };

  const handleColorSelect = (color) => {
    dispatch(setBackgroundColor(color));
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md space-y-6  ml-10">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Choose a color palette</h1>
        {/* <button className="text-gray-500">&times;</button> */}
      </div>

      <p className="text-gray-600">
        These custom palettes were curated by our designers. You can always
        change up your colors later.
      </p>

      {Object.entries(palettes).map(([category, colorSets]) => (
        <div key={category} className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-medium capitalize">{category}</span>
            {category === "professional" && (
              <span className="text-blue-500 text-sm">Recommended</span>
            )}
          </div>
          <div className="flex space-x-4">
            {colorSets.map((colors, index) => (
              <ColorPalette
                key={index}
                colors={colors}
                onSelect={handleColorSelect}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorPaletteChooser;
