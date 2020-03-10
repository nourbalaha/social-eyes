import React from 'react'

import Post from '../Post/Post.component'

function Posts({ posts }) {
  const keys = Object.keys(posts);
  
    return (
        <div className="posts">
          {
            keys.map(
              post=><Post 
                id={posts[post]["postId"]} 
                author={posts[post]["author"]} 
                message={posts[post]["message"]} 
                likes={posts[post]["likes"]} 
                createdAt={posts[post]["createdAt"]} />
              )
          }
        </div>
    )
}

export default Posts
