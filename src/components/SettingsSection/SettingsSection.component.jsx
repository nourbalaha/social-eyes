import React, { useState } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { setUserData } from '../../redux/user/user.actions'
import { setImage } from '../../redux/user/user.actions'

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';

import './SettingsSection.style.scss'

function SettingsSection({ user, onSetUser, onSetImage, currentUser }) {
  const [state, setState] = useState(user);

  const handleSwitch = (event) => {
    setState({...state, openProfile: event.target.checked});
  };
  
  const handleChange = (event) => {
    setState({...state, [event.target.name]: event.target.value});
  };

  const handleImage = async (event) => {
    const file = event.target.files[0];
    await onSetImage(file);
  };

  const handleApply = () => {
    onSetUser(state);
  };

  return (
    <div className="settings-section">
      <form className="settings-section-form">
       <fieldset  className="settings-section-fieldset">
        <legend>PROFILE SETTINGS</legend>
        <input accept="image/*" id="icon-button-file" type="file" onChange={handleImage} style={{display:"none"}} />
          <label htmlFor="icon-button-file">
            Profile Image: 
            <IconButton color="primary" aria-label="upload picture" component="span">
              <PhotoCamera />
            </IconButton>
          </label>
          <TextField className="settings-section-userref" label="UserRef" value={state.userRef} name="userRef" onChange={handleChange} />
          <TextField className="settings-section-email" label="Email" value={state.email}  name="email" onChange={handleChange}  />
          <TextField
          className="settings-section-description" 
          label="Description"
          multiline
          rows="4"
          value={state.description} 
          variant="outlined"
          name="description"
          onChange={handleChange} 
          />

          <FormControlLabel
          className="settings-section-switch" 
          control={<Switch checked={state.openProfile} onChange={handleSwitch} name="openProfile" />}
          label="Open Profile"
          />
          
          <Button
          className="settings-section-apply-btn" 
          variant="contained"
          color="default"
          startIcon={<CloudUploadIcon />}
          onClick={handleApply}
          >        
          Apply Changes
          </Button>
        </fieldset>
       </form>
      </div>
  )
}

function mapState (state) {
  return { 
    currentUser: state.auth.currentUser,
    user: state.user,
  }
}

const mapDispatch = dispatch => {
  return {
    onSetUser(user) {
      dispatch(setUserData(user));
    },
    onSetImage(file) {
      dispatch(setImage(file));
    },
  }
}

export default compose(withRouter, connect(mapState,mapDispatch))(SettingsSection)

