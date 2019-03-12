/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';

export default function App() {
  return (
    <Helmet
      titleTemplate="%s - A Camelot Unchained Portal"
      defaultTitle="Camelot Hub"
    >
      <meta name="description" content="A Camelot Hub Unchained modding website." />
    </Helmet>
  );
}
