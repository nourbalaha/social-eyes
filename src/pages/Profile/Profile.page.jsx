import React from 'react'

import "./Profile.style.scss"

import { mock_data } from '../../mock_data'

import UserInput from "../../components/UserInput/UserInput.component"
import Posts from "../../components/Posts/Posts.component"

function Profile() {
    const id = "1";
    return (
        <div className="profile-page">
            <UserInput />
            <Posts posts={mock_data["users"][id]["posts"]} />
        </div>
    )
}

export default Profile
