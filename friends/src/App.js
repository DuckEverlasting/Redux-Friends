import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import FriendList from './components/FriendList';
import TopBar from './components/TopBar';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/protected" component={FriendList} />
    </div>
  );
}

export default App;
