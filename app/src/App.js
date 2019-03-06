import React, { Component } from 'react';
import NavBar from './components/layout/NavBar';
import './App.css';

class App extends Component {

  render() {

    return (
      <div>
        <NavBar auth={this.props.auth} />
      </div>
    );
  }
}

export default App;