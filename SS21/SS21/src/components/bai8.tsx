import React from "react";

export default function App() {
  return (
    <div className="p-6 flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-[500px] border rounded-xl p-2 overflow-x-auto">
        <div className="flex space-x-4">
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={i}
              className="w-16 h-16 flex justify-center items-center 
                         bg-blue-500 text-white font-bold rounded-lg shrink-0"
            >
              {String(i + 1).padStart(2, "0")}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}