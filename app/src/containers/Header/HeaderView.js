import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SettingsIcon from '@material-ui/icons/Settings';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import ChartIcon from '@material-ui/icons/BarChart';
import ChatIcon from '@material-ui/icons/Chat';
import BuildIcon from '@material-ui/icons/Build';
import { Link } from "react-router-dom";
import blue from '@material-ui/core/colors/blue';

import * as AuthService from '../../utils/AuthService';

const primary = blue[100];
const hover = blue[500];
const accent = blue[250];

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    marginLeft: -12,
    marginRight: 20,
    paddingRight: theme.spacing.unit * 2,
    color: primary
  },
  buttonIcon: {
    padding: theme.spacing.unit
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  grow: {
    flexGrow: 1,
  },
  avatar: {
    margin: 10,
  },
  menuWrapper: {
    position: 'absolute',
    marginLeft: 200
  }
});

class HeaderView extends React.Component {

  state = {
    anchorEl: null
  };

  handleChange = (event, value) => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    auth: PropTypes.shape({
      isAuthenticated: PropTypes.bool.isRequired,
      profile: PropTypes.object,
      error: PropTypes.object
    }).isRequired,
    loginRequest: PropTypes.func.isRequired,
    logoutSuccess: PropTypes.func.isRequired
  };

  handleLoginClick = () => {
    AuthService.login();
    this.props.loginRequest();
  };

  handleLogoutClick = () => {
    this.props.logoutSuccess();
    AuthService.logout(); // careful, this is a static method
    this.props.history.push({ pathname: '/' });
  };
  
  render() {


    const { auth } = this.props;
    const { classes } = this.props;
    const { anchorEl } = this.state;
    
    //this must be AFTER the anchorEl definition
    const open = Boolean(anchorEl);

    console.log('auth obj',auth);
    
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <Link to="/">Brand</Link>
            </Typography>
            <div className={classes.menuWrapper}>
              <Button variant="text" size="small" className={classes.button} component={Link} to="/about">
                <DeviceHubIcon className={classes.buttonIcon} />
                Mods
              </Button>
              <Button variant="text" size="small" className={classes.button} component={Link} to="/jake">
                <BuildIcon className={classes.buttonIcon} />
                C.U.B.E.
              </Button>
            </div>
            {auth && (
              <div>
                {auth.isAuthenticated === false ? (
                  <Button onClick={this.handleLoginClick}>Login</Button>
                ) : (
                  <div>
                    <IconButton
                      aria-owns={open ? 'menu-appbar' : undefined}
                      aria-haspopup="true"
                      onClick={this.handleMenu}
                      color="inherit"
                    >
                      {auth.profile.picture === false ? (
                        <AccountCircle />
                      ) : (
                        <Avatar alt={auth.profile.nickname} src={auth.profile.picture} className={classes.avatar} />
                      )}
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={open}
                      onClose={this.handleClose}
                    >
                      <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                      <MenuItem onClick={this.handleClose}>My account</MenuItem>
                      <MenuItem onClick={this.handleLogoutClick}>Logout</MenuItem>
                    </Menu>
                    <IconButton><SettingsIcon /></IconButton>
                  </div>
                )}
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

HeaderView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderView);