const ColorPalette = ({ colors, onSelect }) => (
    <div
      className="h-8 w-24 rounded-full overflow-hidden flex cursor-pointer"
      onClick={() => onSelect(colors[0])}
    >
      {colors.map((color, index) => (
        <div
          key={index}
          className="flex-grow"
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  );

  export default ColorPalette