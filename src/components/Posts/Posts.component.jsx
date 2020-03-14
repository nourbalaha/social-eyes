import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Post from '../Post/Post.component'

function Posts({ users, match }) {
  const userRef = match.params.userref
  const newPosts = users["users"]["users"][userRef]["posts"]
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
  return { users: state.users }
}

// Connect them:
export default compose(withRouter, connect(mapState))(Posts)