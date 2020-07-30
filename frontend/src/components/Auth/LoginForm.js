import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = props => (
  <>
    <Typography variant="h3" align="center">
      signup
    </Typography>
    <form>
      <Grid container direction="column">
        {Object.keys(props.authData.userData).map(key => (
          <TextField
            onChange={this.handleInput}
            key={key}
            name={key}
            error={!!props.authData.validationErrors[key]}
            label={key[0].toUpperCase() + key.slice(1)}
            helperText={props.authData.validationErrors[key] || ''}
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
            { this.props.activeMode === 'signup' ? 'Sign up' : 'Sign in' }
          </Button>
        </Box>
        <p>
          Already have an account ?
          <Link to="/sign-in">
            Sign in
          </Link>
        </p>
      </Grid>
    </form>
  </>
);

LoginForm.propTypes = {
  authData: PropTypes.object
};

export default LoginForm;
