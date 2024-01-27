import React from 'react';
import { EVENTS } from '../data/events';


import { HiCog6Tooth } from "react-icons/hi2";
import { IoOpenOutline } from "react-icons/io5";



export default function Events() {
  const DOWNLOAD_PATH = "/events/Info_Session.jpg";
  return (
    <div className="bg-dark-gray mx-auto rounded-lg w-4/5 p-4 m-6">
      <h2 className="rounded text-2xl font-bold mb-4">Info Sessions - Click <a className="underline" href={DOWNLOAD_PATH} download>here</a> to download the info sessions flyer!</h2>
      <h3>Important note: You must attend one of the two events to be further considered in the rush process!</h3>
      <div className="p-2 rounded-lg">
        {EVENTS.info.map((event, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 px-6 my-2 rounded shadow-lg bg-flome-maroon text-white">
            <div>
              <h3 className="font-bold text-xl mb-2">{event.name}</h3>
              <p>{event.description}</p>
              {event.location && <p><strong>Location:</strong> {event.location}</p>}
            </div>
            <div className="md:text-right">
              <p><strong>Date:</strong> {event.dateAndTime.toLocaleDateString()}</p>
              <p><strong>Time:</strong> {event.dateAndTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
              <a className="underline center text-sky-300" href="https://forms.gle/vGwE9zzVHKmNngx19">{'Register for this event!'}</a>
            </div>
          </div>
        ))}
      </div>
      <HiCog6Tooth
        size={100}
        style={{ animation: 'spin infinite 2s linear' }}
        className='text-flome-maroon m-auto'
      />
      <h1 className="rounded text-2xl font-bold text-center">More coming soon!</h1>
    </div>
  );
}
