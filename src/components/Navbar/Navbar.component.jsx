import React from 'react';
import './Navbar.style.scss';

import Owl from '../../assets/owl.png'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-icons">
                <span><i className="nav-item fa fa-user-circle"></i></span>
                <span><i className="nav-item fa fa-home"></i></span>
                <span><i className="nav-item fa fa-plus-circle"></i></span>
                <span><i className="nav-item fa fa-cog"></i></span>
                <span><i className="nav-item fa fa-sign-out"></i></span>
            </div>
            <img className="nav-owl" src={Owl} alt="owl" />
        </nav>
    )
}

export default Navbar;
