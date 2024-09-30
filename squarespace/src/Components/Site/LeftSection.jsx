import React from "react";
import { useSelector } from "react-redux";

const LeftSection = () => {
  const { title, fontStyle, personalityStyles } = useSelector(
    (state) => state.site
  );

  return (
    <div className="w-3/5 relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="whitespace-nowrap text-[200px] leading-none animate-marquee"
            style={{
              ...personalityStyles[fontStyle],
              fontWeight: "normal",
              animationDelay: `${i * -10}s`,
            }}
          >
            {[...Array(10)].map((_, j) => (
              <span key={j} className="inline-block mr-4 text-gray-300">
                {title || "Enter your title"}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSection;
