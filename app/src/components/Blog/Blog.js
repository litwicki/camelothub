import React, {Component} from 'react';
import './blog.scss'

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Typography from '@material-ui/core/Typography';

// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as blogActions from "../../store/blog/actions";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 4,
  }
});

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.title = {};
        this.body = {};
        this.created = {};
        this.updated = {};
    }
    render() {

      const { classes } = this.props;

      return (
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h5" component="h3" gutterBottom>
            {this.props.title}
          </Typography>
          <Typography component="p">
            {this.props.body}
          </Typography>
        </Paper>
      );
    }
  }

export default withStyles(styles)(Blog);

// export default connect(
//     ({ blog }) => ({ ...blog }),
//     dispatch => bindActionCreators({ ...blogActions }, dispatch)
//   )( blog );