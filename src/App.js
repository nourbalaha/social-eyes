import React from 'react';
import './App.css';

import UserInput from './components/UserInput/UserInput.component';

function App() {
  return (
    <div className="app">
      <main className="main">
        <UserInput />
        <div className="post">
        </div>
      </main>
      <nav className="nav"></nav>
    </div>
  );
}

export default App;
