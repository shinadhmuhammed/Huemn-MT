const FontPairingCard = ({ headingFont, bodyFont, headingText, bodyText }) => (
  <div className="w-48 h-48 border border-gray-300 flex flex-col justify-center items-center p-4">
    <div className={`text-2xl mb-2 ${headingFont}`}>{headingText}</div>
    <div className={`text-sm ${bodyFont}`}>{bodyText}</div>
  </div>
);

export default FontPairingCard;
