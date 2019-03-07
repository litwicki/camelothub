import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavBar from './components/layout/NavBar';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Lorem from 'react-lorem-component';

const styles = {
  card: {
    maxWidth: 345,
    margin: 10,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

class App extends Component {

  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  
  render() {

    const { classes } = this.props;

    return (
      <div>
        <NavBar auth={this.props.auth} />
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Lorem Picsum"
              className={classes.media}
              height="200"
              image="https://picsum.photos/200/300/?random"
              title="Lorem Picsum"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography component="p">
                <Lorem count="2" seed={this.state.seed} className="ipsum" />
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);