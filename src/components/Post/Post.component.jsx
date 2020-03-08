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
                <div className="post-title-config">
                    <span className="post-title-timestamp">14h ago</span>
                    <span className="post-title-edit"><i className="fa fa-pencil"></i></span>
                    <span className="post-title-delete"><i className="fa fa-trash"></i></span>
                </div>
            </div>
            <div className="post-body">
                <span>Hello there, this is me Nour!</span>
                <div className="post-like-container">
                    <span className="post-like"><i className="fa fa-heart"></i></span>
                    <span className="post-like-count">0</span>
                </div>
            </div>
        </div>
    )
}

export default Post;
