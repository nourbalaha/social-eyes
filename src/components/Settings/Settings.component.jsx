import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getFeed } from '../../redux/feed/feed.actions'

import './Settings.style.scss'

function Settings() {
  return (
      <div className="settings">
        Settings
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

export default compose(withRouter, connect(mapState,mapDispatch))(Settings)