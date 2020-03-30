import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getFeed } from '../../redux/feed/feed.actions'

import FeedPost from '../FeedPost/FeedPost.component'

import './Feed.style.scss'

function Feed({ match, onGetFeed, feed }) {
  useEffect(()=>{
      onGetFeed();
  },[onGetFeed])

  const newPosts = feed;
  const keys = Object.keys(newPosts);

  return (
      <div className="feed">
        {
          keys.map(
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
    }
  }
}

export default compose(withRouter, connect(mapState,mapDispatch))(Feed)