import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getUsers } from '../../redux/users/users.actions';

import avatar from '../../assets/avatar.png';

import "./Person.style.scss";

function Person({ users, onGetUsers, userRef, history }) {
    return (
        <div className="person-container" key={users[userRef]["id"]}>
            <img className="person-image" src={avatar} alt="avatar" />
            <span className="person-name" onClick={()=>history.push(`/profile/${userRef}`)}>{userRef}</span>
        </div>
    )
}

function mapState (state) {
    return { 
        currentUser: state.auth.currentUser,
        user: state.user,
        users: state.users,
        posts: state.posts,
    }
}

function mapDispatch (dispatch) {
    return {
      onGetUsers () {
        dispatch(getUsers())
      },
    }
  }
  
export default compose(withRouter, connect(mapState, mapDispatch))(Person)