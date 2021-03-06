import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addPost } from '../../redux/posts/posts.actions';

import './UserInput.style.scss';
import avatar from '../../assets/avatar.png';

function UserInput({ onSubmit, match, currentUser, user }) {
  const [input, setInput] = useState("");

  const userRef = user==="current"?currentUser.displayName:match.params.userref;

  const handleChange = event => {
    setInput(event.target.value)
  }

  const handleSubmit = () => {
    onSubmit({ message:input, author:currentUser.displayName, userRef });
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

const mapState = state => {
  return {
      currentUser: state.auth.currentUser,
  }
}

const mapDispatch = dispatch => {
  return {
    onSubmit (post) {
      dispatch(addPost(post))
    }
  }
}

export default compose(withRouter, connect(mapState, mapDispatch))(UserInput);
