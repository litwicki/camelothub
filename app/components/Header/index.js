import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  mainMenu: {
    marginLeft: 100,
    position: 'absolute',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  menuItem: {
    marginLeft: 0,
    position: 'relative',
  },
};

class ButtonAppBar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton> */}
            <Typography
              variant="h6"
              color="inherit"
              className={classes.grow}
              component={Link}
              to="/"
            >
              Litwicki
            </Typography>
            <div className={classes.mainMenu}>
              <Button color="inherit" component={Link} to="/features">
                Features
              </Button>
              <Button color="inherit" component={Link} to="/jake">
                Jake
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  login: PropTypes.func,
  logout: PropTypes.func,
  auth: PropTypes.object,
};

export default withStyles(styles)(ButtonAppBar);
