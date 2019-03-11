import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';

import mods from './mods.fixtures';
import Mod from './Mod';
import './mod.scss'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    marginLeft: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    //backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    height: "100%",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  }
});

class LatestMods extends Component {

  componentDidMount() {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#insertion-point-jss'),
    );
  }

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <Mod {...mods[0].props} />
      <hr />
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {mods.slice(1, 7).map(tile => (
          <GridListTile key={tile.props.img} cols={tile.props.featured ? 2 : 1} rows={tile.props.featured ? 2 : 1}>
            <img src={tile.props.img} alt={tile.props.title} />
            <GridListTileBar
              title={tile.props.title}
              titlePosition="top"
              actionIcon={
                <IconButton className={classes.icon}>
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
      </div>
    );
  }
}

LatestMods.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LatestMods);