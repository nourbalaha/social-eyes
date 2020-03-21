import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.component';

import Profile from './pages/Profile/Profile.page';
import Home from './pages/Home/Home.page';
import AddPost from './pages/AddPost/AddPost.page';
import Settings from './pages/Settings/Settings.page';

import { auth, firestore } from './firebase/firebase.config';

function App({ onAddUser }) {
  useEffect(() => {
    let unsubscribeFromAuth = null;
    
    unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = firestore.collection("users").doc(user.uid)
        const userSnap = await userRef.get()
        // if it is a new user create user data
        if(!userSnap.exists){
          const data = {}
          data.Email = user.email;
          data.Name = user.displayName;
          data.Role = "user"
          await userRef.set(data);  
        }
        // set user
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
      <main className="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile/:userref" component={Profile} />
          <Route path="/addpost/" component={AddPost} />
          <Route path="/settings/" component={Settings} />
        </Switch>
      </main>
      <Navbar />
    </div>
  );
}

function mapState(state) {
  return { 
    currentUser: state.auth.currentUser,
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
