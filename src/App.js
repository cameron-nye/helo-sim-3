import React, { Component } from 'react';
import Nav from './component/Nav/Nav'


import './App.css';
import Routes from './routes'

class App extends Component {
  render() {
    if (this.props.location !== '/') {
      return (
        <div className="App">
          <Nav />
          {Routes}
        </div>
      );
    }
    else{
      return (
        <div className="App">
          {Routes}
        </div>
      )
    }
  }
}

export default App;
