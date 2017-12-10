import React, { Component } from 'react';
import './App.css';
import { Dashboard}  from "./containers/Dashboard/dashboard";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Dashboard />
      </MuiThemeProvider>
    );
  }
}

export default App;
