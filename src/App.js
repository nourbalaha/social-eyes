import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.component';

import Profile from './pages/Profile/Profile.page'

function App() {
  return (
    <div className="app">
      <main className="main">
        <Switch>
          <Route exact path="/" component={Profile} />
          <Route path="/profile" component={Profile} />
          <Route path="/profile/:id" component={Profile} />
        </Switch>
      </main>
      <Navbar />
    </div>
  );
}

export default App;
