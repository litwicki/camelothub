import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import JakePage from 'containers/JakePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import history from './history';
import Callback from './callback';

import Auth from './auth';

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

export const AppRoutes = () => (
  <Router history={history}>
    <Switch>
      <Route
        path="/callback"
        render={props => {
          handleAuthentication(props);
          <Callback auth={auth} {...props} />;
        }}
      />
      <Route path="/" render={props => <HomePage auth={auth} {...props} />} />
      <Route
        path="/features"
        render={props => <FeaturePage auth={auth} {...props} />}
      />
      <Route
        path="/jake"
        render={props => <JakePage auth={auth} {...props} />}
      />
      <Route
        path=""
        render={props => <NotFoundPage auth={auth} {...props} />}
      />
    </Switch>
  </Router>
);

export default AppRoutes;
