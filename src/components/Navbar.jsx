import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

    return (
        <nav className="navbar">
            <Link to="/"><h2>Home</h2></Link>
            <Link to="/events"><h2>Events</h2></Link>
        </nav>
    );
}
