import React from 'react';
import { connect } from 'react-redux';

import "./Profile.style.scss";

import UserInput from "../../components/UserInput/UserInput.component";
import Posts from "../../components/Posts/Posts.component";
import UserProfile from "../../components/UserProfile/UserProfile.component";

function Profile({ match, user, users, currentUser }) {
    return (
        <div className="profile-page">
            <div className="profile-page-left">
                <UserProfile />
            </div>
            {
                (users[match.params.userref].openProfile || currentUser.displayName===match.params.userref)
                ?
                <div className="profile-page-right">
                    <UserInput />
                    <Posts />
                </div>
                :
                <div className="profile-page-right">
                    <p>Profile is not open to public</p>
                </div>
                }
        </div>
    )
}


function mapState (state) {
    return { 
      currentUser: state.auth.currentUser,
      user: state.user,
      users: state.users,
    }
  }
  
  export default connect(mapState)(Profile)