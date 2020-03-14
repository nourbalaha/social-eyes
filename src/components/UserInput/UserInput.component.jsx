import React, { useState } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './UserInput.style.scss';
import avatar from '../../assets/avatar.png'

function UserInput({ onSubmit, match }) {
  const [input, setInput] = useState("");

  const handleChange = event => {
    setInput(event.target.value)
  }

  const handleSubmit = () => {
    onSubmit(match.params.userref, input);
    setInput("")
  }
    return (
        <div className="user-input">
          <img className="user-input-image" src={avatar} alt="avatar" />
          <input className="user-input-text" type="text" placeholder="What Are You Thinking?" value={input} onChange={handleChange} />
          <button className="user-input-button" onClick={handleSubmit}><i className="fa fa-paper-plane"></i> Submit</button>
        </div>
    )
}

const mapDispatch = dispatch => {
  return {
    onSubmit (userref, message) {
      dispatch({ type: 'ADD_POST', payload: {userref, message} })
    }
  }
}

export default compose(withRouter, connect(null, mapDispatch))(UserInput);
