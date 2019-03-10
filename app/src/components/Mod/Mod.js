import React, {Component} from 'react';
import './mod.scss'
//import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import IconButton from '@material-ui/core/IconButton';

// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
//import * as ModActions from "../../store/mod/actions";

const styles = {
  card: {
    maxWidth: 320,
  },
  media: {
    height: 240,
  },
  icon: {
    color: 'black',
  },
};

class Mod extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.title = {};
        this.author = {};
        this.body = {};
        this.featured = {};
        this.created = {};
        this.updated = {};
        this.github_url = {};
        this.img = {};
    }
    render() {

      const { classes } = this.props;

      return(
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={this.props.title}
              className={classes.media}
              height="240"
              image={this.props.img}
              title={this.props.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.title}
              </Typography>
              <Typography component="p">
                {this.props.body}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton className={classes.icon}>
              <StarBorderIcon />
            </IconButton>
            <Button size="small" color="primary">
              Download
            </Button>
            <Button size="small" color="primary">
              Details
            </Button>
          </CardActions>
        </Card>
      );
    }
  }

export default withStyles(styles)(Mod);

// export default connect(
//     ({ Mod }) => ({ ...Mod }),
//     dispatch => bindActionCreators({ ...ModActions }, dispatch)
//   )( Mod );