import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import { getItem } from './config/local';
import Profile from './components/Profile';

function App() {

  const token = getItem('auth');

  return (
    <Router>
      <Switch>
        <Route 
          exact 
          path='/'
          render={props => <Home {...props} token={token} />}
          >
          {/* <Home /> */}
        </Route>
        <Route
          exact
          path='/profile'
          render={props => <Profile {...props} token={token} />}
        >
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
