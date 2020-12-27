import React, { Fragment,useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/pages/Landing';
import './App.css';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';
import Board from './components/pages/Board';
import Alert from './components/design/Alert';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import Navbar from './components/pages/Navbar'

// Redux
import { Provider } from 'react-redux';
import store from './store';

//localstorage for authtoken
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route exact path='/' component={Landing} />
          <Alert />
          <Navbar />
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/board/:id' component={Board} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;