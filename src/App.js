import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import TabBar from './components/tab-bar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" align='left' color="inherit">
              Defense Against the Dark Arts Weekly Assignments
            </Typography>
            <Typography variant='title' align='right' color='inherit'>
              Scott Cooper - Summer 2018
            </Typography>
          </Toolbar>
        </AppBar>
        <TabBar />
      </div>
    );
  }
}

export default App;
