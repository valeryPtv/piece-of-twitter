import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import like { AppBar, Navbar } requires more compile time
// cause it imports the whole library
// import AppBar from '@material-ui/core/AppbBar' is preferable

/*
  we can do import { AppBar, Toolbar, Button } from @material-ui,
  which means we import the whole framework every time we refresh page
  but the next way allows us to use tree shaking and minimize bundle size
 */

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


export default class Navbar extends Component {
  render () {
    return (
      <AppBar>
        <Toolbar className="nav-container">
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/signin">Sign in</Button>
          <Button color="inherit" component={Link} to="/signup">Signup</Button>
        </Toolbar>
      </AppBar>
    );
  }
}
