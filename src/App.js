import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.component';

import Profile from './pages/Profile/Profile.page'
import Home from './pages/Home/Home.page'

function App() {
  return (
    <div className="app">
      <main className="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile/:userref" component={Profile} />
        </Switch>
      </main>
      <Navbar />
    </div>
  );
}

export default App;
