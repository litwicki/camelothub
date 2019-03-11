import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    background: '#efefef',
  },
  main: {
    //flexGrow: 2,
  }
});

class App extends Component {

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>

      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);