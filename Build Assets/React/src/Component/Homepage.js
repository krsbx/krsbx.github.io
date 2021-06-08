import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import Navbar from './Navbar/Navbar';
import CVPage from './CV Page/CVInfo';
import Profile from './Profile/Profile';

export default function Homepage() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/CV" component={CVPage} />
        <Route path="/Profile" component={Profile} />
      </Switch>
    </Router>
  );
}
