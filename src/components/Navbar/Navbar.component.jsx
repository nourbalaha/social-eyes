import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import { auth } from '../../firebase/firebase.config';
import './Navbar.style.scss';

import Owl from '../../assets/owl.png';

function Navbar({ history, currentUser }) {
    const userRef = currentUser.displayName;

    const handleSignout = async () => {
        try {
          await auth.signOut();
          console.log({ msg:"You Have Been Logged Out Succefully!", type: "success" })
        } catch(error) {
          console.log({ msg:error.message, type: "error" })
        };
      };

    return (
        <nav className="navbar">
            <div className="navbar-icons">
                <span onClick={()=>history.push(`/profile/${userRef}`)}><i className="nav-item fa fa-user-circle"></i></span>
                <span onClick={()=>history.push(`/`)}><i className="nav-item fa fa-home"></i></span>
                <span onClick={()=>history.push(`/addpost/`)}><i className="nav-item fa fa-plus-circle"></i></span>
                <span onClick={()=>history.push(`/settings/`)}><i className="nav-item fa fa-cog"></i></span>
                <span onClick={handleSignout}><i className="nav-item fa fa-sign-out"></i></span>
            </div>
            <img className="nav-owl" src={Owl} alt="owl" />
        </nav>
    )
}


function mapState (state) {
  return { 
      currentUser: state.auth.currentUser,
  }
}

// Connect them:
export default compose(withRouter, connect(mapState))(Navbar)
