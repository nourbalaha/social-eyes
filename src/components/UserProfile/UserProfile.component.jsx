import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getUserData } from '../../redux/user/user.actions';

import "./UserProfile.style.scss";

import Avatar from "../../assets/avatar.png";

function UserProfile({ user, onGetUserData }) {
    useEffect(()=>{
        onGetUserData()
    },[onGetUserData])
    
    console.log(user)
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
        user: state.user,
    }
}

function mapDispatch (dispatch) {
    return {
      onGetUserData () {
        dispatch(getUserData())
      },
    }
  }
  
export default compose(withRouter, connect(mapState, mapDispatch))(UserProfile)