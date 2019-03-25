/*
 * HomePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Typography } from '@material-ui/core';

export default class HomePage extends React.Component {
  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <Typography>
          Home Page!!!
        </Typography>
        
      </div>
    );
  }
}
