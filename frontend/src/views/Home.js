import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ScreamCard from 'components/screams/ScreamCard';
import { getScreams } from 'services/screams';

export default class Home extends Component {
  state = {
    screams: []
  }

  async componentDidMount () {
    const { data: screams } = await getScreams();
    this.setState(state => ({
      ...state,
      screams
    }));
  }

  render () {
    return (
      <div>
        <h2>Home</h2>
        <Grid container direction="column">
          {
            this.state.screams.map(scream => (
              <Box key={scream.screamId} mb={3}>
                <ScreamCard scream={scream} />
              </Box>
            ))
          }
        </Grid>
      </div>
    );
  }
}
