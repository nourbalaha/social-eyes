import React from 'react';
import './UserInput.style.scss';
import avatar from '../../assets/avatar.png'

function UserInput() {
    return (
        <div className="user-input">
          <img className="user-input-image" src={avatar} alt="avatar" />
          <input className="user-input-text" type="text" placeholder="What Are You Thinking?"/>
          <button className="user-input-button">Submit</button>
        </div>
    )
}

export default UserInput;
