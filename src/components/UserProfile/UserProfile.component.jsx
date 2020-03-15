import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import "./UserProfile.style.scss";

import Avatar from "../../assets/avatar.png";

function UserProfile({ match, users }) {
    const userRef = match.params.userref;
    return (
        <div className="profile-page-left-container">
            <img className="profile-page-left-image" src={Avatar} alt="profile-pic" />
            <span className="profile-page-left-user-ref">{users["users"]["users"][userRef].userRef}</span>
            <span className="profile-page-left-description">{users["users"]["users"][userRef].description}</span>
            <div className="profile-page-left-posts-likes-container">
                <span className="profile-page-left-likes">{`Likes: ${users["users"]["users"][userRef].likes.length}`}</span>
                <span className="profile-page-left-posts">{`Posts: ${Object.keys(users["users"]["users"][userRef].posts).length}`}</span>
            </div>
        </div>
    )
}

function mapState (state) {
    return { users: state.users }
}
  
// Connect them:
export default compose(withRouter, connect(mapState))(UserProfile)