import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { firestore } from '../../firebase/firebase.config';

import "./UserProfile.style.scss";

import Avatar from "../../assets/avatar.png";

function UserProfile({ currentUser }) {
    const [user, setUser] = useState({userRef:"", description:"", likes:[], posts:{}})

    useEffect(()=>{
        const fetchData = async () => {
            const profileRef = firestore.collection("users").doc(currentUser.displayName);
            const profileSnap = await profileRef.get();
            setUser(profileSnap.data())
        }
        fetchData()
    },[currentUser.displayName])

    return (
        <div className="profile-page-left-container">
            <img className="profile-page-left-image" src={Avatar} alt="profile-pic" />
            <span className="profile-page-left-user-ref">{user.userRef}</span>
            <span className="profile-page-left-description">{user.description}</span>
            <div className="profile-page-left-posts-likes-container">
                <span className="profile-page-left-likes">{`Likes: ${user.likes.length}`}</span>
                <span className="profile-page-left-posts">{`Posts: ${Object.keys(user.posts).length}`}</span>
            </div>
        </div>
    )
}

function mapState (state) {
    return { 
        currentUser: state.auth.currentUser,
    }
}
  
export default compose(withRouter, connect(mapState))(UserProfile)