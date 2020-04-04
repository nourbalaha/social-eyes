import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getFeed } from '../../redux/feed/feed.actions'

import SwitchUI from '../SwitchUI/SwitchUI.material'

import './SettingsSection.style.scss'

function SettingsSection() {
  return (
      <div className="settings-section">
        <SwitchUI />
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

export default compose(withRouter, connect(mapState,mapDispatch))(SettingsSection)