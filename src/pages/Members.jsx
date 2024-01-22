import React, { useState } from 'react';
import { MEMBERS } from '../data/members';
import { FaLinkedin } from "react-icons/fa";

const EXEC_MEMBERS = MEMBERS.filter(member => member.role !== 'Member');
const REGULAR_MEMBERS = MEMBERS.filter(member => member.role === 'Member');

function MemberCard({ fullName, major1, major2, minor1, minor2, purpose, role, imagePath, linkedIn }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div key={fullName} className="member-card max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 m-4 text-center">
      {imagePath && <img className="rounded w-full h-80 object-cover object-center" src={imagePath} alt={`Picture of ${fullName}`} />}
      <div className="px-6 py-4">
        <div className="info text-black p-2 rounded mb-2">
          <h3 className="font-bold text-2xl">{fullName}</h3>
          {role !== 'Member' && (
          <div className="info text-black p-2 rounded mb-2">
            <h3 className="text-xl font-bold text-flome-maroon text-base">{role}</h3>
          </div>
        )}
        </div>
        <div className="info text-black p-2 rounded mb-2">
          <h4 className="font-bold text-lg">Major(s)</h4>
          <p className="text-base">{major1} {major2 && `& ${major2}`}</p>
        </div>
        {(minor1 || minor2) && (
          <div className="info text-black p-2 rounded mb-2">
            <h4 className="font-bold text-lg">Minor(s)</h4>
            <p className="text-base">{minor1} {minor2 && `& ${minor2}`}</p>
          </div>
        )}
        <div className="info text-black p-2 rounded mb-2">
          <h4 className="font-bold text-lg">Reason for Joining FLOME</h4>
          <p className={`text-base ${!isExpanded && 'truncate'}`}>{purpose}</p>
          <button className="text-blue-500 text-sm mt-1" onClick={toggleExpanded}>
            {isExpanded ? 'See Less' : 'See More'}
          </button>
        </div>
        {linkedIn && (
          <div className="info flex justify-center p-2 rounded mb-2">
            <a href={linkedIn} target="_blank" rel="noopener noreferrer">
              <FaLinkedin color="#0173B2" size={50} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Members() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="bg-white rounded  bg-white rounded p-2 text-2xl font-bold my-4">Executives</h1>
      <div className="flex flex-wrap justify-center gap-3">
        {EXEC_MEMBERS.map(member => (
          <MemberCard key={member.fullName} {...member} />
        ))}
      </div>
      <h1 className="bg-white rounded  p-2 text-2xl font-bold my-4">Members</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {REGULAR_MEMBERS.map(member => (
          <MemberCard key={member.fullName} {...member} />
        ))}
      </div>
    </div>
  );
}
