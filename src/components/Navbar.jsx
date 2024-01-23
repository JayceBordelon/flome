import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import COG from "../images/Flome-Cog.png";

export default function Navbar() {
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible, handleScroll]);

    return (
        <nav className={`z-50 bg-white fixed w-screen shadow-md transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="max-w-6xl mx-auto px-4 z-50">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        {/* Logo and Brand Name */}
                        <div>
                            <a href="/" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                                <img src={COG} alt="Logo" className="h-8 w-8 mr-2" />
                                <span className="font-bold">FLOME</span>
                            </a>
                        </div>

                        {/* Primary Nav */}
                        <div className="flex items-center space-x-1">
                            <Link to="/" className="py-5 px-3 text-gray-700 hover:text-gray-900">Home</Link>
                            <Link to="/events" className="py-5 px-3 text-gray-700 hover:text-gray-900">Events</Link>
                            <Link to="/members" className="py-5 px-3 text-gray-700 hover:text-gray-900">Members</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
