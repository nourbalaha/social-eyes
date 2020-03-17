import React from 'react';

import "./Profile.style.scss";

import UserInput from "../../components/UserInput/UserInput.component";
import Posts from "../../components/Posts/Posts.component";
import UserProfile from "../../components/UserProfile/UserProfile.component";

function Profile() {
    return (
        <div className="profile-page">
            <div className="profile-page-left">
                <UserProfile />
            </div>
            <div className="profile-page-right">
                <UserInput />
                <Posts />
            </div>
        </div>
    )
}

// Connect them:
export default Profile;
