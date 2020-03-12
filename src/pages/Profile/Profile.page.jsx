import React from 'react'

import "./Profile.style.scss"

import { mock_data } from '../../mock_data'

import UserInput from "../../components/UserInput/UserInput.component"
import Posts from "../../components/Posts/Posts.component"

function Profile() {
    const id = "1";
    return (
        <div className="profile-page">
            <div className="profile-page-left">
                <span>{mock_data["users"][id].userRef}</span>
                <span>{mock_data["users"][id].email}</span>
                <span>{mock_data["users"][id].description}</span>
            </div>
            <div className="profile-page-right">
                <UserInput />
                <Posts posts={mock_data["users"][id]["posts"]} />
            </div>
        </div>
    )
}

export default Profile
