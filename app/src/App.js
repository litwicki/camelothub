import React, { Component } from 'react';
import NavBar from './components/layout/NavBar';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

/** CamelotHub Modules */
import LatestMods from './components/mods/LatestMods';
import LatestNews from './components/news/LatestNews';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  main: {
    //flexGrow: 2,
  },
  latestMods: {

  },
  latestNews: {

  },
  section: {
    padding: theme.spacing.unit * 2,
    margin: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
});

class App extends Component {

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <NavBar auth={this.props.auth} />
          </Grid>
            <Grid item xs={3}>
              <LatestMods className={classes.latestMods} />
            </Grid>
            <Grid item xs={9}>
              <LatestNews className={classes.news} />
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.section}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.section}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.section}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.section}>xs=3</Paper>
            </Grid>
        </Grid>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);