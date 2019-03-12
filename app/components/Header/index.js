import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  mainMenu: {
    marginLeft: 2,
    position: 'absolute'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  menuItem: {
    marginLeft: 0,
    position: 'relative'
  }
});

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
class ButtonAppBar extends React.Component {
  
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Litwicki
            </Typography>
            <Tabs
                className={classes.mainMenu}
                value={value}
                onChange={this.handleChange}
                variant="scrollable"
                scrollButtons="on"
                indicatorColor="primary"
                textColor="inherit"
              >
                <Tab label="Home" icon={<PhoneIcon />} component={Link} to="/" />
                <Tab label="Features" icon={<FavoriteIcon />} component={Link} to="/features" />
                <Tab label="Jake" icon={<PersonPinIcon />} component={Link} to="/jake" />
              </Tabs>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);