import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';

import './Post.style.scss';

import Logo from '../../assets/avatar.png';

import moment from "moment";

function Post({ id, author, message, likes, createdAt, onDelete, match }) {
    const date = new Date(createdAt);
    let fromNow = moment([date.getFullYear(), date.getMonth(), date.getDate()]).fromNow();
    const userRef = match.params.userref;

    const handleDelete = () => {
        onDelete(userRef, id)
    }

    return (
        <div className="post">
            <div className="post-title">
                <div className="post-user-container">
                    <img className="post-title-icon" src={Logo} alt="post-title-icon" />
                    <span className="post-title-username">{author}</span>
                </div>
                <div className="post-title-config">
                    <span className="post-title-timestamp">{fromNow}</span>
                    <span className="post-title-edit"><i className="fa fa-pencil"></i></span>
                    <span className="post-title-delete" onClick={handleDelete}><i className="fa fa-trash"></i></span>
                </div>
            </div>
            <div className="post-body">
                <span>{message}</span>
                <div className="post-like-container">
                    <span className="post-like"><i className="fa fa-heart"></i></span>
                    <span className="post-like-count">{likes.length}</span>
                </div>
            </div>
        </div>
    )
}


const mapDispatch = dispatch => {
    return {
      onDelete (userRef, postId) {
        dispatch({ type: 'DELETE_POST', payload: {userRef, postId} })
      }
    }
  }
  
  export default compose(withRouter, connect(null, mapDispatch))(Post);
