import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import IconButtonWithTooltip from 'components/util/IconButtonWithTooltip';


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
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';


class Navbar extends Component {
  render () {
    return (
      <AppBar>
        <Toolbar className="nav-container">
          {
            this.props.isLoggedIn
              ? (
                <>
                  <IconButtonWithTooltip tooltipText="Home" to="/" icon={<HomeIcon className="text-white" />} />
                  <IconButtonWithTooltip tooltipText="Post a scream" icon={<AddIcon className="text-white" />} />
                  <IconButtonWithTooltip tooltipText="Show notifications" icon={<NotificationsIcon className="text-white" />} />
                </>
              )
              : (
                <>
                  <Button color="inherit" component={Link} to="/">Home</Button>
                  <Button color="inherit" component={Link} to="/signin">Sign in</Button>
                  <Button color="inherit" component={Link} to="/signup">Signup</Button>
                </>
              )
          }
        </Toolbar>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isLoggedIn: state.user.accessToken !== null
});

export default connect(mapStateToProps)(Navbar);
