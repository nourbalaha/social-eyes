import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getUserData } from '../../redux/user/user.actions';

import "./UserProfile.style.scss";

import Avatar from "../../assets/avatar.png";

function UserProfile({ match, user, currentUser, posts, onGetUserData }) {
    useEffect(()=>{
        if(match.params.userref){
            onGetUserData(match.params.userref)
        } else {
            onGetUserData()
        }
    },[currentUser.userRef, match.params.userref, onGetUserData])

    return (
        <div className="profile-page-left-container">
            <img className="profile-page-left-image" src={user.photoURL?user.photoURL:Avatar} alt="profile-pic" />
            <span className="profile-page-left-user-ref">{user.userRef}</span>
            <span className="profile-page-left-description">{user.description}</span>
            <div className="profile-page-left-posts-likes-container">
                <span className="profile-page-left-likes">{`Likes: ${user.likes.length}`}</span>
                <span className="profile-page-left-posts">{`Posts: ${Object.keys(posts).length}`}</span>
            </div>
        </div>
    )
}

function mapState (state) {
    return { 
        currentUser: state.auth.currentUser,
        user: state.user,
        posts: state.posts,
    }
}

function mapDispatch (dispatch) {
    return {
      onGetUserData (userRef) {
        dispatch(getUserData(userRef))
      },
    }
  }
  
export default compose(withRouter, connect(mapState, mapDispatch))(UserProfile)