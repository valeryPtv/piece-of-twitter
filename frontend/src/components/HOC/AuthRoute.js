import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AuthRoute = ({
  component: Component, isAuthRequired, path, isLoggedIn, ...rest
}) => {
  const renderRoute = props => {
    if (isAuthRequired && !isLoggedIn) {
      return <Redirect to={{ pathname: '/signin' }} />;
    } if (isLoggedIn && (path.includes('signin') || path.includes('signup'))) {
      return <Redirect to={{ pathname: '/home' }} />;
    }
    return <Component {...props} />;
  };

  return (
    <Route exact path={path} render={renderRoute} {...rest} />
  );
};

AuthRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  isLoggedIn: PropTypes.bool,
  path: PropTypes.string,
  isAuthRequired: PropTypes.bool
};

AuthRoute.defaultProps = {
  isLoggedIn: false,
  path: '/',
  isAuthRequired: false
};

const mapStateToProps = state => ({
  isLoggedIn: !!state.user.accessToken
});

export default connect(mapStateToProps)(AuthRoute);
