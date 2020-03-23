import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { setPosts } from '../../redux/posts/posts.actions'

import Post from '../Post/Post.component'

function Posts({ match, onSetPosts, posts }) {
  useEffect(()=>{
    onSetPosts();
  },[onSetPosts])

  // const userRef = match.params.userref
  const newPosts = posts;
  const keys = Object.keys(newPosts);

  return (
      <div className="posts">
        {
          keys.map(
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
    onSetPosts() {
      dispatch(setPosts())
    }
  }
}

export default compose(withRouter, connect(mapState,mapDispatch))(Posts)