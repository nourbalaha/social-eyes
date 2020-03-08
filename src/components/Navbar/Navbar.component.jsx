import React from 'react';
import './Navbar.style.scss';

function Navbar() {
    return (
        <nav className="navbar">
            <span><i className="nav-item fa fa-user-circle"></i></span>
            <span><i class="nav-item fa fa-home"></i></span>
            <span><i className="nav-item fa fa-cog"></i></span>
            <span><i className="nav-item fa fa-sign-out"></i></span>
        </nav>
    )
}

export default Navbar;
