import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';

import { updatePost, deletePost, likePost, setPosts } from '../../redux/posts/posts.actions';

import './Post.style.scss';

import Logo from '../../assets/avatar.png';

import moment from "moment";

function Post({ id, onSetPosts, onDelete, onUpdate, onLike, match, history, posts, currentUser }) {
    const userRef = match.params.userref;
    const author = posts[id]["author"];
    const current = currentUser.displayName;
    const message = posts[id]["message"];
    const likes = posts[id]["likes"];
    const createdAt = posts[id]["createdAt"]; 
    let fromNow = moment(createdAt).fromNow();

    const red = likes.includes(current)?true:false;
    const [trigger, setTrigger] = useState(true);
    const [msg, setMsg] = useState(message);

    const handleEdit = () => {
        setTrigger(!trigger);
    }

    const handleUpdate = (message) => {
        const post = { "postId":id, message, author, likes, createdAt, userRef, current };
        onUpdate(Object.assign({},post));
        setTrigger(!trigger);
    }

    const handleChange = event => {
        setMsg(event.target.value)
    }

    const handleDelete = () => {
        onDelete({id,userRef,current})
    }

    const handleLike = () => {
        onLike({current, userRef, postId:id})
    }

    const handleLink = () => {
        history.push(`/profile/${author}`)
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
                    {(current===author || current===userRef) && <span className="post-title-edit" onClick={handleEdit}><i className="fa fa-pencil"></i></span>}
                    {(current===author || current===userRef) && <span className="post-title-delete" onClick={handleDelete}><i className="fa fa-trash"></i></span>}
                </div>
            </div>
            <div className="post-body">
                <div className="message-container">
                    <input className="post-message" type="text" value={msg} onChange={handleChange} style={{border:!trigger?"inset":"none"}} disabled={trigger}/>
                    <button className="post-message-btn" onClick={()=>handleUpdate(msg)} style={{display:!trigger?"inline-block":"none"}}><i className="fa fa-check-circle"></i></button>
                </div>
                <div className="post-like-container">
                    <span className="post-like" style={{color:red?"red":"black"}} onClick={handleLike}><i className="fa fa-heart"></i></span>
                    <span className="post-like-count" style={{color:red?"red":"black"}}>{posts[id].likes.length}</span>
                </div>
            </div>
        </div>
    )
}


const mapState = state => {
    return {
        currentUser: state.auth.currentUser,
        posts: state.posts,
    }
}

const mapDispatch = dispatch => {
    return {
      onUpdate (post) {
        dispatch(updatePost(post))
      },
      onDelete (post) {
        dispatch(deletePost(post))
      },
      onLike (post) {
        dispatch(likePost(post))
      },
      onSetPosts(userRef) {
        dispatch(setPosts(userRef))
      }
    }
  }
  
  export default compose(withRouter, connect(mapState, mapDispatch))(Post);
