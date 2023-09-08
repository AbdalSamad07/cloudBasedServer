// Navbar.js

import React from 'react';
import '../Navbar.css';

const Navbar = ({ setCurrentPage, onLogout, }) => {
    return (
        <div className="navbar">

            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('Home'); }}>Home</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('FileSharing'); }}>Files</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('Chat'); }}>Chat</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('Games'); }}>Games</a>
            <button className="logout-btn" onClick={onLogout}>Logout</button>
        </div>
    );
};

export default Navbar;
