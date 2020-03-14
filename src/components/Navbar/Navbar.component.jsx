import React from 'react';
import { withRouter } from 'react-router-dom'
import './Navbar.style.scss';

import Owl from '../../assets/owl.png'

function Navbar({ history }) {
    const userRef = "nourbalaha"
    return (
        <nav className="navbar">
            <div className="navbar-icons">
                <span onClick={()=>history.push(`/profile/${userRef}`)}><i className="nav-item fa fa-user-circle"></i></span>
                <span onClick={()=>history.push(`/`)}><i className="nav-item fa fa-home"></i></span>
                <span><i className="nav-item fa fa-plus-circle"></i></span>
                <span><i className="nav-item fa fa-cog"></i></span>
                <span><i className="nav-item fa fa-sign-out"></i></span>
            </div>
            <img className="nav-owl" src={Owl} alt="owl" />
        </nav>
    )
}

export default withRouter(Navbar);
