import React from 'react';
import { BsGearWideConnected } from "react-icons/bs";



export default function Loading() {
    const COG_SIZE = 200;
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black bg-opacity-50 z-10">
      <BsGearWideConnected size={COG_SIZE} className="text-6xl text-flome-maroon animate-spin" />
    </div>
  );
}
