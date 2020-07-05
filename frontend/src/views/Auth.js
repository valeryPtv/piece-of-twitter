import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import logoImg from 'images/icon.png';
import { signin, signup } from 'services';

export default class Auth extends Component {
  state = {
    signup: {
      authData: {
        email: '',
        password: '',
        confirmPassword: '',
        userHandle: ''
      },
      validationErrors: {
        email: null,
        password: null,
        confirmPassword: null,
        userHandle: null
      }
    },
    signin: {
      authData: {
        email: '',
        password: '',
        confirmPassword: '',
        userHandle: ''
      },
      validationErrors: {
        email: null,
        password: null,
        confirmPassword: null,
        userHandle: null
      }
    },
    activeMode: 'signup'
  }

  validators = {
    // eslint-disable-next-line arrow-parens
    email: str => (str.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? null : 'Invalid email'),
    password: str => (str.length >= 6 ? null : 'Password should have at least 6 characters'),
    confirmPassword: confirmPassword => (confirmPassword === this.state[this.state.activeMode].authData.password ? null : 'Passwords should be equal'),
    userHandle: str => (str.length >= 6 ? null : 'User handle should have at least 6 characters')
  }

  // checkValidity = () => Object.values(this.state[this.state.activeMode].validationErrors)
  //   .every(item => item === null)

  checkValidity = () => {
    // return Object.values(this.state[this.state.activeMode].validationErrors)
    //     .every(item => item === null);
    const authMode = this.state[this.state.activeMode];
    const res = Object.keys(authMode.authData)
      .every(item => authMode.validationErrors[item] === null && authMode.authData[item].length);
    console.log('checkValidity', res);
    return res;
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
    const res = signup(this.state[this.state.activeMode].authData);
    console.log('signin', res);
  }

  render () {
    return (
      <div>
        <Grid container justify="center">
          <Grid item xs={10} sm={8} md={6}>
            <Box mb={3} className="d-flex justify-center">
              <img src={logoImg} alt="Socialape logo" />
            </Box>
            <Typography variant="h3" align="center">
              signup
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
                <Button onClick={this.handleAuth} disabled={!this.checkValidity()}>
                  { this.state.activeMode === 'signup' ? 'Sign up' : 'Sign in' }
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}
