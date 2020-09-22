import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import GoogleLogin from 'react-google-login';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import logoImg from 'images/icon.png';
import { signUpAction, signInAction } from 'store/user/userActions';

class Auth extends Component {
  state = {
    signup: {
      authData: {
        email: '',
        password: '',
        confirmPassword: '',
        handle: ''
      },
      validationErrors: {
        email: null,
        password: null,
        confirmPassword: null,
        handle: null
      }
    },
    signin: {
      authData: {
        email: '',
        password: ''
      },
      validationErrors: {
        email: null,
        password: null
      }
    },
    activeMode: this.props.history.location.pathname.slice(1)
  }

  unregisterHistoryListener = null

  validators = {
    // eslint-disable-next-line arrow-parens
    email: str => (str.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? null : 'Invalid email'),
    password: str => (str.length >= 6 ? null : 'Password should have at least 6 characters'),
    confirmPassword: confirmPassword => (confirmPassword === this.state[this.state.activeMode].authData.password ? null : 'Passwords should be equal'),
    handle: str => (str.length >= 6 ? null : 'User handle should have at least 6 characters')
  }

  componentDidMount () {
    this.unregisterHistoryListener = this.props.history.listen(location => {
      this.setState(state => ({
        ...state,
        activeMode: location.pathname.slice(1)
      }));
      // location is an object like window.location
    });
  }

  componentWillUnmount () {
    this.unregisterHistoryListener();
  }

  checkValidity = () => {
    const authMode = this.state[this.state.activeMode];
    return Object.keys(authMode.authData)
      .every(item => authMode.validationErrors[item] === null && authMode.authData[item].length);
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState(state => ({
      ...state,
      [state.activeMode]: {
        validationErrors: {
          ...state[state.activeMode].validationErrors,
          [name]: this.validators[name](value)
        },
        authData: {
          ...state[state.activeMode].authData,
          [name]: value
        }
      }
    }));
  }

  handleAuth = () => {
    if (this.state.activeMode === 'signup') {
      this.props.signUpAction(this.state.signup.authData, this.props.history.push);
    } else if (this.state.activeMode === 'signin') {
      console.log('this.props.history.push', this.props.history.push);
      this.props.signInAction(this.state.signin.authData, this.props.history.push);
    }
  }

  render () {
    const changeAuthMode = this.state.activeMode === 'signup' ? (
      <p>
        Already have an account ?
        {' '}
        <Link to="/signin">Sign in</Link>
      </p>
    ) : (
      <p>
        Don't have an account ? Sign up
        {' '}
        <Link to="/signup">here</Link>
      </p>
    );
    return (
      <div>
        <Grid container justify="center">
          <Grid item xs={10} sm={8} md={6}>
            <Box mb={3} className="d-flex justify-center">
              <img src={logoImg} alt="Socialape logo" />
            </Box>
            <Typography variant="h3" align="center">
              { this.state.activeMode === 'signin' ? 'Sign in' : 'Sign up' }
            </Typography>
            <form>
              <Grid container direction="column">
                {Object.keys(this.state[this.state.activeMode].authData).map(key => (
                  <TextField
                    onChange={this.handleInput}
                    key={key}
                    name={key}
                    error={!!this.state[this.state.activeMode].validationErrors[key]}
                    label={key[0].toUpperCase() + key.slice(1)}
                    helperText={this.state[this.state.activeMode].validationErrors[key] || ''}
                    required
                    margin="dense"
                  />
                ))}
                <Box mt={3} mb={5}>
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={!this.checkValidity()}
                    onClick={this.handleAuth}
                  >
                    { this.state.activeMode === 'signup' ? 'Sign up' : 'Sign in' }
                  </Button>
                </Box>
                <ReactGoogleLogin />
                {/*<Button onClick={this.handleSignOAuth} variant="contained" color="primary" className="mb-3">*/}
                {/*  Sign using oAuth2*/}
                {/*</Button>*/}
                { changeAuthMode }
              </Grid>
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.accessToken
});

const mapDispatchToProps = { signUpAction, signInAction };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Auth));
