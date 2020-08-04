import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AuthRoute = ({
  component: Component, isAuthRequired, path, isLoggedIn
}) => {
  if (isAuthRequired && !isLoggedIn) {
    return <Redirect to={{ pathname: '/signin' }} />;
  } if (path.includes('signin') || path.includes('signup')) {
    // if we are going to signin or signup
    return <Redirect to={{ pathname: '/home' }} />;
  }
  return (
    <Route exact path={path}>
      <Component />
    </Route>
  );

  // isLoggedIn ? Component : <Redirect to={{pathname: '/signin'}}/>
};

AuthRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  isLoggedIn: PropTypes.bool
};

AuthRoute.defaultProps = {
  isLoggedIn: false
};

const mapStateToProps = state => ({
  isLoggedIn: !!state.accessToken
});

export default connect(mapStateToProps, null)(AuthRoute);
