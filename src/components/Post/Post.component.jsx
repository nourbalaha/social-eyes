import React from 'react';
import './Post.style.scss';

import Logo from '../../assets/avatar.png';

function Post() {
    return (
        <div className="post">
            <div className="post-title">
                <div className="post-user-container">
                    <img className="post-title-icon" src={Logo} alt="post-title-icon" />
                    <span className="post-title-username">Nour Balaha</span>
                </div>
                <span className="post-title-timestamp">14h ago</span>
            </div>
            <div className="post-body">
                <p>Hello there, this is me Nour!</p>
            </div>
        </div>
    )
}

export default Post;
