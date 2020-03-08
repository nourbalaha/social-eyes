import React from 'react';
import './App.scss';

import UserInput from './components/UserInput/UserInput.component';
import Post from './components/Post/Post.component';

function App() {
  return (
    <div className="app">
      <main className="main">
        <UserInput />
        <div className="posts">
          <Post />
          <Post />
          <Post />
        </div>
      </main>
      <nav className="nav">
        <span><i className="nav-item fa fa-user-circle"></i></span>
        <span><i className="nav-item fa fa-cog"></i></span>
        <span><i className="nav-item fa fa-sign-out"></i></span>
      </nav>
    </div>
  );
}

export default App;
