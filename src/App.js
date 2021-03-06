import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.component';
import FlashMsg from './components/FlashMsg/FlashMsg.component';

import Profile from './pages/Profile/Profile.page';
import Home from './pages/Home/Home.page';
import AddPost from './pages/AddPost/AddPost.page';
import Settings from './pages/Settings/Settings.page';
import Login from './pages/login/Login.page';
import Register from './pages/Register/Register.page';

import { auth } from './firebase/firebase.config';

function App({ currentUser, onAddUser, messages }) {
  useEffect(() => {
    let unsubscribeFromAuth = null;
    
    unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        onAddUser(user)
      } else {
        onAddUser(null)
      }
    })

    return (() => {
      unsubscribeFromAuth();
    })

  },[onAddUser])

  return (
    <div className="app">
      <header className='app-header'>
        <div className="flash-msg-container">
          {
            messages.length>0 && messages.map(msg=>
              <FlashMsg key={msg.id} id={msg.id} msg={msg.msg} type={msg.type} />
            )
          }
        </div>
      </header>
      <main className="main">
        <Switch>
          <Route exact path="/" component={currentUser?Home:Login} />
          <Route path="/home" component={currentUser?Home:Login} />
          <Route path="/profile/:userref" component={currentUser?Profile:Login} />
          <Route path="/addpost/" component={currentUser?AddPost:Login} />
          <Route path="/settings/" component={currentUser?Settings:Login} />
          <Route path="/login/" component={currentUser?Home:Login} />
          <Route path="/register/" component={currentUser?Home:Register} />
        </Switch>
      </main>
      {currentUser && <Navbar />}
    </div>
  );
}

function mapState(state) {
  return { 
    currentUser: state.auth.currentUser,
    messages: state.flash.messages,
  };
}

function mapDispatch (dispatch) {
  return {
    onAddUser (payload) {
      dispatch({ type: 'ADD_USER', payload })
    },
  }
}

export default connect(mapState, mapDispatch)(App);
