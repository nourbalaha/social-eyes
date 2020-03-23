import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getUserData } from '../../redux/user/user.actions';

import "./People.style.scss";

function People() {
    return (
        <div className="people-container">
            People
        </div>
    )
}

function mapState (state) {
    return { 
        currentUser: state.auth.currentUser,
        user: state.user,
        posts: state.posts,
    }
}

function mapDispatch (dispatch) {
    return {
      onGetUserData () {
        dispatch(getUserData())
      },
    }
  }
  
export default compose(withRouter, connect(mapState, mapDispatch))(People)