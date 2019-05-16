import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import FriendList from './components/FriendList';
import LandingPage from './components/LandingPage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/protected" component={FriendList} />
    </div>
  );
}

export default App;
