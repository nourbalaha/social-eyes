import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getFeed } from '../../redux/feed/feed.actions'
import { getUsers } from '../../redux/users/users.actions';

import FeedPost from '../FeedPost/FeedPost.component'

import './Feed.style.scss'

function Feed({ match, onGetFeed,onGetUsers, feed }) {
  useEffect(()=>{
      onGetFeed();
      onGetUsers()
  },[onGetFeed,onGetUsers])

  const newPosts = feed;
  const keys = Object.keys(newPosts);

  return (
      <div className="feed">
        {
          keys
          .sort((a,b)=>newPosts[b]["createdAt"] - newPosts[a]["createdAt"])
          .map(
            post=><FeedPost
              key={newPosts[post]["postId"]} 
              id={newPosts[post]["postId"]} />
            )
        }
      </div>
  )
}

function mapState (state) {
  return { 
    feed: state.feed,
  }
}

const mapDispatch = dispatch => {
  return {
    onGetFeed() {
      dispatch(getFeed());
    },
    onGetUsers() {
      dispatch(getUsers())
    },
  }
}

export default compose(withRouter, connect(mapState,mapDispatch))(Feed)