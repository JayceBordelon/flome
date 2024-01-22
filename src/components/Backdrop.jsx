import React from 'react';
import GEARS from "../images/gears.avif";

export default function Backdrop() {
  return (
    <div 
      style={{ backgroundImage: `url(${GEARS})` }}
      className="h-screen fixed -z-10 w-screen bg-no-repeat bg-cover bg-center"
    >
      <div className="h-full w-full bg-black bg-opacity-50"></div> {/* Overlay div */}
    </div>
  );
}
