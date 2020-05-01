import React, { useState } from 'react';
import { connect } from 'react-redux';

import './Login.style.scss';

import Logo from '../../assets/owl.png';

import { auth } from '../../firebase/firebase.config';

function Login ({ history, addFlashMsg }) {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const handleChange = event => {
    const { name, value } = event.target

    setUser({
      ...user,
      [name]: value
    })
  }

  const handleSignIn = async () => {
    if (user.email.length > 0 && user.password.length > 0) {
      try {
        await auth.signInWithEmailAndPassword(user.email, user.password)
        addFlashMsg({
          msg: 'You Have Been Logged In Successfully!',
          type: 'success'
        })
      } catch (error) {
        addFlashMsg({ msg: error.message, type: 'error' })
      }
      history.push('/home')
    } else {
      addFlashMsg({ msg: 'please enter required field', type: 'error' })
    }
  }

  return (
    <div className='login'>
      <div className='login-container'>
        <img className='login-image' src={Logo} alt='logo' />
        <span className='login-header-upper'>Welcome to</span>
        <span className='login-header-lower'>Social Eyes</span>
        <input
          className='login-email'
          name='email'
          type='email'
          placeholder='Email'
          value={user.email}
          onChange={handleChange}
        />
        <input
          className='login-password'
          name='password'
          type='password'
          placeholder='Password'
          value={user.password}
          onChange={handleChange}
        />
        <button className='login-button' onClick={handleSignIn}>
          Login
        </button>
        <p className='login-text'>
          Don't have an account.{' '}
          <span className='login-register' onClick={()=>history.push("/register")}>Register</span> here.
        </p>
      </div>
    </div>
  )
}

function mapState(state) {
  return { 
    messages: state.flash.messages,
  };
}

function mapDispatch (dispatch) {
  return {
    addFlashMsg(payload){
      dispatch({type:"ADD_MSG", payload})
    }
  }
}

export default connect(mapState, mapDispatch)(Login)
