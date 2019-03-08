import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Lorem from "react-lorem-component";

const LatestModsData = [
  {
    img: 'https://loremflickr.com/320/240?random=1',
    title: <Lorem count="1" sentenceLowerBound="1" sentenceUpperBound="1" />,
    author: <Lorem count="1" sentenceLowerBound="1" sentenceUpperBound="1" />,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://loremflickr.com/320/240?random=2',
    title: <Lorem count="1" sentenceLowerBound="1" sentenceUpperBound="1" />,
    author: <Lorem count="1" sentenceLowerBound="1" sentenceUpperBound="1" />,
  },
  {
    img: 'https://loremflickr.com/320/240?random=3',
    title: <Lorem count="1" sentenceLowerBound="1" sentenceUpperBound="1" />,
    author: <Lorem count="1" sentenceLowerBound="1" sentenceUpperBound="1" />,
  },
  {
    img: 'https://loremflickr.com/320/240?random=4',
    title: <Lorem count="1" sentenceLowerBound="1" sentenceUpperBound="1" />,
    author: <Lorem count="1" sentenceLowerBound="1" sentenceUpperBound="1" />,
    featured: true,
  },
  {
    img: 'https://loremflickr.com/320/240?random=5',
    title: <Lorem count="1" sentenceLowerBound="1" sentenceUpperBound="1" />,
    author: <Lorem count="1" sentenceLowerBound="1" sentenceUpperBound="1" />,
  }
];

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
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
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {LatestModsData.map(tile => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
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