import React from 'react';


import { HiCog6Tooth } from "react-icons/hi2";



export default function Events() {
  const DOWNLOAD_PATH = "/events/Info_Session.jpg";
  return (<div>
      <HiCog6Tooth
        size={100}
        style={{ animation: 'spin infinite 2s linear' }}
        className='text-flome-maroon m-auto'
      />
      <h1 className="rounded text-2xl font-bold text-center">Planning in progress...</h1>
      </div>
  );
}
