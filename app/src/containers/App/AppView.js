import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Header from '../Header/Header';
import HomePage from '../../components/HomePage/HomePage';
import AboutPage from '../../components/AboutPage/AboutPage';
import NotFoundPage from '../../components/NotFoundPage/NotFoundPage';
import * as AuthService from '../../utils/AuthService';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import './App.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2
  },
  paper: {
    padding: theme.spacing.unit * 2
  }
});

function PrivateRoute ({component: Component, auth, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => auth === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

class AppView extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    loginError: PropTypes.func.isRequired,
    loginSuccess: PropTypes.func.isRequired
  };

  componentWillMount() {
    const { history, loginError, loginSuccess } = this.props;
    // Add callback for lock's `authenticated` event
    AuthService.lock.on('authenticated', authResult => {
      AuthService.lock.getUserInfo(authResult.accessToken, (error, profile) => {
        if (error) {
          return loginError(error);
        }
        AuthService.setToken(authResult.idToken); // static method
        AuthService.setProfile(profile); // static method
        loginSuccess(profile);
        history.push({ pathname: '/' });
        AuthService.lock.hide();
      });
    });
    // Add callback for lock's `authorization_error` event
    AuthService.lock.on('authorization_error', error => {
      loginError(error);
      history.push({ pathname: '/' });
    });
  }

  render() {
    const {classes} = this.props;
    return (
      <div>
        <Header />
        <Grid container spacing={24} className={classes.root}>
          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper}>3</Paper>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Paper className={classes.paper}>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <PrivateRoute auth={AuthService.loggedIn()} path='/jake' component={AboutPage} />
                <Route component={NotFoundPage} />
              </Switch>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

AppView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppView);
