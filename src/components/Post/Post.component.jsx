import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';

import './Post.style.scss';

import Logo from '../../assets/avatar.png';

import moment from "moment";

function Post({ users, id, onDelete, onUpdate, onLike, match, history }) {
    const userRef = match.params.userref;
    const author = users["users"]["users"][userRef]["posts"][id]["author"];
    const message = users["users"]["users"][userRef]["posts"][id]["message"];
    const likes = users["users"]["users"][userRef]["posts"][id]["likes"];
    const createdAt = users["users"]["users"][userRef]["posts"][id]["createdAt"]; 
    let fromNow = moment(createdAt).fromNow();

    const red = likes.includes(userRef)?true:false;
    const [trigger, setTrigger] = useState(true);
    const [msg, setMsg] = useState(message);

    const handleEdit = () => {
        setTrigger(!trigger);
    }

    const handleUpdate = (message) => {
        onUpdate(userRef, id, message)
        setTrigger(!trigger);
    }

    const handleChange = event => {
        setMsg(event.target.value)
    }

    const handleDelete = () => {
        onDelete(userRef, id)
    }

    const handleLike = () => {
        onLike(userRef, id)
    }

    const handleLink = () => {
        history.push(`/profile/${userRef}`)
    }

    return (
        <div className="post">
            <div className="post-title">
                <div className="post-user-container">
                    <img className="post-title-icon" src={Logo} alt="post-title-icon" />
                    <span className="post-title-username" onClick={handleLink}>{author}</span>
                </div>
                <div className="post-title-config">
                    <span className="post-title-timestamp">{fromNow}</span>
                    <span className="post-title-edit" onClick={handleEdit}><i className="fa fa-pencil"></i></span>
                    <span className="post-title-delete" onClick={handleDelete}><i className="fa fa-trash"></i></span>
                </div>
            </div>
            <div className="post-body">
                <div className="message-container">
                    <input className="post-message" type="text" value={msg} onChange={handleChange} style={{border:!trigger?"inset":"none"}} disabled={trigger}/>
                    <button className="post-message-btn" onClick={()=>handleUpdate(msg)} style={{display:!trigger?"inline-block":"none"}}><i className="fa fa-check-circle"></i></button>
                </div>
                <div className="post-like-container">
                    <span className="post-like" style={{color:red?"red":"black"}} onClick={handleLike}><i className="fa fa-heart"></i></span>
                    <span className="post-like-count" style={{color:red?"red":"black"}}>{likes.length}</span>
                </div>
            </div>
        </div>
    )
}


const mapState = state => {
    return {
        users: state.users,
    }
}

const mapDispatch = dispatch => {
    return {
      onUpdate (userRef, postId, message) {
        dispatch({ type: 'UPDATE_POST', payload: {userRef, postId, message} })
      },
      onDelete (userRef, postId) {
        dispatch({ type: 'DELETE_POST', payload: {userRef, postId} })
      },
      onLike (userRef, postId) {
        dispatch({ type: 'LIKE_POST', payload: {userRef, postId} })
      },
    }
  }
  
  export default compose(withRouter, connect(mapState, mapDispatch))(Post);
