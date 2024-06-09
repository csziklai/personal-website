import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from '@material-ui/icons/Reorder';

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]); 

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 150);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })

    return <div className={sticky ? "navbar sticky" : "navbar"} id={expandNavbar ? "open" : "close"}> 
        <div className="toggleButton"> 
            <button 
                onClick={() => {setExpandNavbar((prev) => !prev);
                }}> 
                <ReorderIcon /> 
            </button>
        </div>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/Work">Work</Link>
            <Link to="/AboutMe">About</Link>

        </div>
    </div>;
}

export default Navbar;