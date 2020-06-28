import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { setPosts } from '../../redux/posts/posts.actions'
import { getUsers } from '../../redux/users/users.actions';

import Post from '../Post/Post.component'

function Posts({ match, onSetPosts, onGetUsers, posts }) {
  useEffect(()=>{
      onSetPosts(match.params.userref);
      onGetUsers();
  },[match.params.userref, onSetPosts,onGetUsers])

  const newPosts = posts;
  const keys = Object.keys(newPosts);

  return (
      <div className="posts">
        {
          keys
          .sort((a,b)=>newPosts[b]["createdAt"] - newPosts[a]["createdAt"])
          .map(
            post=><Post
              key={newPosts[post]["postId"]} 
              id={newPosts[post]["postId"]} />
            )
        }
      </div>
  )
}

function mapState (state) {
  return { 
    posts: state.posts,
  }
}

const mapDispatch = dispatch => {
  return {
    onSetPosts(userRef) {
      dispatch(setPosts(userRef))
    },
    onGetUsers() {
      dispatch(getUsers())
    },
  }
}

export default compose(withRouter, connect(mapState,mapDispatch))(Posts)