"use client";

import { useState } from "react";

export default function Filter() {
  const [activeOption, setActiveOption] = useState("all");

  const handleOption = (option) => {
    setActiveOption(option);
  };

  const options = [
    { id: "all", label: "All" },
    { id: "current", label: "Current" },
    { id: "favorites", label: "Favorites" },
  ];

  return (
    <div className="flex gap-4">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => handleOption(option.id)}
          className={`bg-white border-2 ${
            activeOption === option.id ? "border-blue-400" : "border-stone-200"
          } px-4 py-1 rounded-full shadow-sm hover:bg-stone-50`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
