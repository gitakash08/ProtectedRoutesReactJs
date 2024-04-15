import React from "react";
import '../css/navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
                <Link to="/courses" className="nav-link">Courses</Link>
                <Link to="/login" className="nav-link">Logout</Link>
            </nav>
        </>
    )
}

export default Navbar;