import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMdCog } from "react-icons/io";


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
        <nav className={`bg-dark-gray z-50 fixed w-screen shadow-md transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="max-w-6xl mx-auto px-4 z-50">
                <div className="flex justify-between">
                    <div className="flex space-x-4 md:space-x-8">
                        {/* Logo and Brand Name */}
                        <div>
                            <a href="/" className="flex items-center py-5 px-2 text-dark-text hover:text-dark-accent">
                                <IoMdCog
                                    style={{ animation: 'spin infinite 10s linear' }}
                                    className='text-flome-maroon m-auto h-8 w-8 m-1'
                                />
                                    <span className="font-bold">FLOME</span>
                            </a>
                        </div>

                        {/* Primary Nav */}
                        <div className="flex items-center space-x-4 md:space-x-8">
                            <Link to="/" className="py-5 px-3 text-dark-text hover:text-dark-accent">Home</Link>
                            <Link to="/events" className="py-5 px-3 text-dark-text hover:text-dark-accent">Events</Link>
                            <Link to="/members" className="py-5 px-3 text-dark-text hover:text-dark-accent">Members</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
