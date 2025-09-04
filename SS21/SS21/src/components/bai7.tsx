import React from "react";

export default function App() {
  return (
    <div className="p-8 flex justify-center items-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: 9 }, (_, i) => (
          <div
            key={i}
            className="w-40 h-16 flex justify-center items-center 
                       bg-[rgb(217,70,239)] text-white font-bold rounded-2xl 
                       shadow-lg"
          >
            {String(i + 1).padStart(2, "0")}
          </div>
        ))}
      </div>
    </div>
  );
}