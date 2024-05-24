import React from "react";

export function HeroHighlight() {
  return (
    <div className="relative">
      <div className="h-[50rem] w-full dark:bg-black bg-white dark:bg-opacity-20 bg-opacity-20 relative">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute inset-0 flex items-center justify-center dark:bg-black bg-white bg-opacity-20" style={{ maskImage: "radial-gradient(ellipse at center, transparent 20%, black)" }}></div>
      </div>
      {/* Your other content goes here */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Your text or other content */}
        <p>This text will be in front of the background</p>
      </div>
    </div>
  );
}
