import React from 'react';
import { EVENTS } from '../data/events';

export default function Events() {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h2 className="text-2xl font-bold mb-4">Events</h2>
      <div className="divide-y divide-gray-200">
        {EVENTS.map((event, index) => (
          <div key={index} className="event-card flex flex-col md:flex-row justify-between items-center bg-white py-4 px-6 my-2 rounded shadow-lg">
            <div className="mb-2 md:mb-0">
              <h3 className="font-bold text-xl">{event.name}</h3>
              <p className="text-gray-700">{event.description}</p>
            </div>
            <div className="text-gray-600">
              <p><strong>Date:</strong> {event.dateAndTime.toLocaleDateString()}</p>
              <p><strong>Time:</strong> {event.dateAndTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
