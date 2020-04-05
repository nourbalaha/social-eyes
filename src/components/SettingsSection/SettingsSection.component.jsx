import React, { useState } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getFeed } from '../../redux/feed/feed.actions'

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import './SettingsSection.style.scss'

function SettingsSection({ user }) {
  const [checked, setChecked] = useState(user.openProfile);

  const handleSwitch = (event) => {
    setChecked(!checked);
  };

  return (
      <div className="settings-section">
      
        <TextField id="standard-basic" className="settings-section-userref" label="UserRef" />
      
        <TextField
        id="outlined-multiline-static"
        className="settings-section-description" 
        label="Description"
        multiline
        rows="4"
        defaultValue="Default Value"
        variant="outlined"
        />
        
        <FormControlLabel
        className="settings-section-switch" 
        control={<Switch checked={checked} onChange={handleSwitch} name="openProfile" />}
        label="Open Profile"
        />
        
          <Button
          className="settings-section-apply-btn" 
          variant="contained"
          color="default"
          startIcon={<CloudUploadIcon />}
          >        
          Apply Changes
          </Button>
      </div>
  )
}

function mapState (state) {
  return { 
    user: state.user,
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

