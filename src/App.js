import React from 'react';
import './App.scss';

import UserInput from './components/UserInput/UserInput.component';
import Posts from './components/Posts/Posts.component';
import Navbar from './components/Navbar/Navbar.component';

function App() {
  return (
    <div className="app">
      <main className="main">
        <UserInput />
        <Posts />
      </main>
      <Navbar />
    </div>
  );
}

export default App;
