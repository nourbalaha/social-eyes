import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Post from '../Post/Post.component'

function Posts({ users, match }) {
  const userRef = match.params.userref
  const posts = users["users"]["users"][userRef]["posts"]
  const keys = Object.keys(posts);

  return (
      <div className="posts">
        {
          keys.map(
            post=><Post
              key={posts[post]["postId"]} 
              id={posts[post]["postId"]} />
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