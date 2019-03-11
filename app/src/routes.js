import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Callback from './utils/auth/Callback';
import Auth from './utils/auth/Auth';
import history from './utils/history';

import BlogView from './views/blog/view';
import Home from './views/Home';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <Switch>
          <Route path="/" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
          <Route path="/blog/:id" render={(props) => <BlogView auth={auth} {...props} />} />
        </Switch>
      </Router>
  );
}