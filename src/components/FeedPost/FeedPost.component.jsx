import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';

import { likeFeedPost } from '../../redux/feed/feed.actions';

import './FeedPost.style.scss';

import Logo from '../../assets/avatar.png';

import moment from "moment";

function FeedPost({ id, onLike, match, history, feed, currentUser }) {
    const author = feed[id]["author"];
    const userRef = feed[id]["userRef"];
    const current = currentUser.displayName;
    const message = feed[id]["message"];
    const likes = feed[id]["likes"];
    const createdAt = feed[id]["createdAt"]; 
    let fromNow = moment(createdAt).fromNow();

    const red = likes.includes(current)?true:false;

    const handleLike = () => {
        onLike({current, userRef, postId:id})
    }

    const handleLink = (user) => {
        history.push(`/profile/${user}`)
    }

    return (
        <div className="feed-post">
            <div className="feed-post-title">
                <div className="feed-post-user-container">
                    <img className="feed-post-title-icon" src={Logo} alt="feed-post-title-icon" />
                    <span className="feed-post-title-username" onClick={()=>handleLink(author)}>{author}</span>
                    {
                        author!==userRef && <span className="feed-post-title-seperator">{">"}</span>
                    }
                    {
                        author!==userRef && <span className="feed-post-title-username" onClick={()=>handleLink(userRef)}>{userRef}</span>
                    }
                </div>
                <div className="feed-post-title-config">
                    <span className="feed-post-title-timestamp">{fromNow}</span>
                </div>
            </div>
            <div className="feed-post-body">
                <div className="message-container">
                    <span className="feed-post-message">{message}</span>
                </div>
                <div className="feed-post-like-container">
                    <span className="feed-post-like" style={{color:red?"red":"black"}} onClick={handleLike}><i className="fa fa-heart"></i></span>
                    <span className="feed-post-like-count" style={{color:red?"red":"black"}}>{feed[id].likes.length}</span>
                </div>
            </div>
        </div>
    )
}


const mapState = state => {
    return {
        currentUser: state.auth.currentUser,
        feed: state.feed,
    }
}

const mapDispatch = dispatch => {
    return {
      onLike (post) {
        dispatch(likeFeedPost(post))
      },
    }
  }
  
  export default compose(withRouter, connect(mapState, mapDispatch))(FeedPost);
