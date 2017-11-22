import React, { Component } from 'react';
import './App.css';
import { Dashboard}  from "./containers/Dashboard/dashboard";


class App extends Component {
  render() {
    return (
      <div>
        <Dashboard />
      </div>
    );
  }
}

export default App;
