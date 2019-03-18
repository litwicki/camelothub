/*
 * JakePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Typography } from '@material-ui/core';

export default class JakePage extends React.Component {
  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Jake Page</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <Typography>
          Jake Page!!!
        </Typography>
        
      </div>
    );
  }
}
