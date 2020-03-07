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
      <nav className="nav"></nav>
    </div>
  );
}

export default App;
