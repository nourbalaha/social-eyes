import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Person from '../Person/Person.component';

import { getUsers } from '../../redux/users/users.actions';

import "./People.style.scss";

function People({ users, onGetUsers }) {
    useEffect(()=>{
        onGetUsers()
    },[onGetUsers])

    return (
        <div className="people-container">
            <span className="people-text">People Using SocialEyes:</span>
            <div className="persons-container">
                {
                Object.keys(users)
                .map(user=>(
                        <Person key={users[user].id} userRef={user} />
                    ))
                }
            </div>
        </div>
    )
}

function mapState (state) {
    return { 
        users: state.users,
    }
}

function mapDispatch (dispatch) {
    return {
      onGetUsers () {
        dispatch(getUsers())
      },
    }
  }
  
export default compose(withRouter, connect(mapState, mapDispatch))(People)