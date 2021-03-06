import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  //Routes,
  Route,
  // eslint-disable-next-line no-unused-vars
  Link
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Auth from './hoc/auth';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={ Auth(LandingPage, null ) } />
          <Route exact path="/login" component={ Auth( LoginPage, false ) } />
          <Route exact path="/register" component={ Auth(RegisterPage, true )} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
