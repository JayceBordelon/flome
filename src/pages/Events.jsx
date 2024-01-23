import React from 'react';
import { EVENTS } from '../data/events';

export default function Events() {
  return (
    <div className="bg-white mx-auto rounded-lg w-4/5 p-4 m-4 min-h-screen">
      <h2 className="rounded text-2xl font-bold mb-4">Events</h2>
      <div className="divide-y divide-gray-200">
        {EVENTS.map((event, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 px-6 my-2 rounded shadow-lg bg-flome-maroon text-white">
            <div>
              <h3 className="font-bold text-xl mb-2">{event.name}</h3>
              <p>{event.description}</p>
              {event.location && <p><strong>Location:</strong> {event.location}</p>}
            </div>
            <div className="md:text-right">
              <p><strong>Date:</strong> {event.dateAndTime.toLocaleDateString()}</p>
              <p><strong>Time:</strong> {event.dateAndTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
