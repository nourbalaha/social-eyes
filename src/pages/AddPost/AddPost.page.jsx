import React from 'react';

import './AddPost.style.scss';

import UserInput from '../../components/UserInput/UserInput.component';
import UserProfile from '../../components/UserProfile/UserProfile.component';

function AddPost() {
    return (
        <div className="add-post-page">
            <div className="add-post-page-left">
                <UserProfile />
            </div>

            <div className="add-post-page-right">
                <UserInput />
            </div>
        </div>
    )
}

export default AddPost
