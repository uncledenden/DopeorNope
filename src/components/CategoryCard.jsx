import React from "react";

const CategoryCard = ({ title, selected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col gap-2 p-4 border-2 rounded-md cursor-pointer shadow-md transition-all ${
        selected
          ? "border-[#01204e] shadow-[4px_4px_0px_#01204e] bg-white"
          : "border-gray-300 bg-white"
      }`}
    >
      <div className="flex justify-between items-center">
        <span className="font-gameplay text-[#01204e] text-sm uppercase">{title}</span>
        <span>
          {selected ? (
            <span className="text-[#01204e]">💙</span>
          ) : (
            <span className="text-gray-400">🤍</span>
          )}
        </span>
      </div>
      <div className="text-2xl">🍞 {/* replace with actual visual icon */}</div>
    </div>
  );
};

export default CategoryCard;
