import React from 'react'
import { connect } from 'react-redux'

import Post from '../Post/Post.component'

function Posts({ posts }) {
  const id ="1"
  const newPosts = posts["posts"]["users"][id]["posts"]
  const keys = Object.keys(newPosts);

  return (
      <div className="posts">
        {
          keys.map(
            post=><Post
              key={newPosts[post]["postId"]} 
              id={newPosts[post]["postId"]} 
              author={newPosts[post]["author"]} 
              message={newPosts[post]["message"]} 
              likes={newPosts[post]["likes"]} 
              createdAt={newPosts[post]["createdAt"]} />
            )
        }
      </div>
  )
}

function mapState (state) {
  return { posts: state.posts }
}

// Connect them:
export default connect(mapState)(Posts)