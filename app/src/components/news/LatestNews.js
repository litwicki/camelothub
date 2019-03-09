import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Lorem from "react-lorem-component";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 4,
  },
  wrapper: {
    marginRight: theme.spacing.unit * 2,
  }
});

function LatestNews(props) {
  const { classes } = props;

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3" gutterBottom>
          <Lorem count="1" sentenceUpperBound="1" />
        </Typography>
        <Typography component="p">
        < Lorem count="5" />
        </Typography>
      </Paper>

      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          <Lorem count="1" sentenceUpperBound="1" />
        </Typography>
        <Typography component="p">
          <Lorem count="5" />
        </Typography>
      </Paper>
    </div>
  );
}

LatestNews.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LatestNews);