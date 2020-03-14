import React from 'react'

import "./Profile.style.scss"

import { mock_data } from '../../mock_data'

import Avatar from "../../assets/avatar.png"

import UserInput from "../../components/UserInput/UserInput.component"
import Posts from "../../components/Posts/Posts.component"

function Profile() {
    const id = "1";
    return (
        <div className="profile-page">
            <div className="profile-page-left">
            <div className="profile-page-left-container">
                <img className="profile-page-left-image" src={Avatar} alt="profile-pic" />
                <span className="profile-page-left-user-ref">{mock_data["users"][id].userRef}</span>
                <span className="profile-page-left-description">{mock_data["users"][id].description}</span>
                <div className="profile-page-left-posts-likes-container">
                    <span className="profile-page-left-likes">{`Likes: ${mock_data["users"][id].likes.length}`}</span>
                    <span className="profile-page-left-posts">{`Posts: ${Object.keys(mock_data["users"][id].posts).length}`}</span>
                </div>
            </div>
            </div>
            <div className="profile-page-right">
                <UserInput />
                <Posts />
            </div>
        </div>
    )
}

export default Profile
