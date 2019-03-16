import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Callback from './callback'
import Auth from './auth0'
import history from './history';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import JakePage from 'containers/JakePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const AppRoutes = () => {
    return (
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/features" component={FeaturePage} />
            <Route path="/jake" component={JakePage} />
            <Route path="" component={NotFoundPage} />
            <Route path="/callback" render={(props) => {
                handleAuthentication(props);
                return <Callback {...props} /> 
            }}/>
        </Switch>
    </Router>
    )
}

export default AppRoutes;