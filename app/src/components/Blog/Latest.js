import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import news from './blog.fixtures';
import Blog from './Blog';

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

function LatestBlog(props) {
  const { classes } = props;
  
  return (
    <div className={classes.wrapper}>
      {news.slice(0, 5).map(blog => (
        <Blog key={blog.props.id} {...blog.props} />
      ))}
    </div>
  );
}

LatestBlog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LatestBlog);