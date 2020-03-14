import React from 'react'
import { withRouter } from 'react-router-dom'

import "./Profile.style.scss"

import { mock_data } from '../../mock_data'

import Avatar from "../../assets/avatar.png"

import UserInput from "../../components/UserInput/UserInput.component"
import Posts from "../../components/Posts/Posts.component"

function Profile({ match }) {
    const userRef = match.params.userref;
    return (
        <div className="profile-page">
            <div className="profile-page-left">
            <div className="profile-page-left-container">
                <img className="profile-page-left-image" src={Avatar} alt="profile-pic" />
                <span className="profile-page-left-user-ref">{mock_data["users"][userRef].userRef}</span>
                <span className="profile-page-left-description">{mock_data["users"][userRef].description}</span>
                <div className="profile-page-left-posts-likes-container">
                    <span className="profile-page-left-likes">{`Likes: ${mock_data["users"][userRef].likes.length}`}</span>
                    <span className="profile-page-left-posts">{`Posts: ${Object.keys(mock_data["users"][userRef].posts).length}`}</span>
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

export default withRouter(Profile)
