import React, {useState} from 'react';
import { Link } from 'react-router-dom';

//Icons
import { FaCog } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";




export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        let newBackground = darkMode ? "#FFFFFF" : "#000000";
        let newText = darkMode ? "#000000" : "#FFFFFF";
        console.log(darkMode? "setting to light"  : "setting to dark");
        document.documentElement.style.setProperty('--background', newBackground);
        document.documentElement.style.setProperty('--text-color', newText);
    }

    const ICON_SIZE = 42;

    return (
        <nav className="navbar">
            <FaCog size={ICON_SIZE} className="fade-to-dark" onClick={()=>setOpen(!open)} />
            <span className="fade-to-dark" onClick={()=>toggleDarkMode()}>
                {darkMode ? <MdOutlineDarkMode size={ICON_SIZE}/> : <CiLight size={ICON_SIZE}/>}
            </span>
        </nav>
    );
}
