import React, { Fragment } from 'react';
import Landing from './components/pages/Landing';
import './App.css';
import Login from './components/pages/Login';
import Register from './components/pages/Register'

const App = () => {
  return (
    <Fragment>
      <Landing />
      <Login/>
      <Register/>
    </Fragment>
  );
};

export default App;