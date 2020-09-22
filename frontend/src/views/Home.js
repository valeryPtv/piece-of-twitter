import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ScreamCard from 'components/screams/ScreamCard';
import { getScreams as getScreamsService } from 'services/screams';
import ScreamPostDialog from 'components/screams/ScreamPostDialog';


class Home extends Component {
  state = {
    screams: []
  }

  componentDidMount () {
    this.getScreams();
  }

  getScreams = async () => {
    try {
      let { data: screams } = await getScreamsService();
      const likesMap = {};
      this.props.likes.forEach(like => {
        likesMap[like.screamId] = like.userHandle;
      });
      screams = screams.map(scream => ({
        ...scream,
        isLiked: scream.screamId in likesMap
      }));
      this.setState(state => ({
        ...state,
        screams
      }));
    } catch (e) {
      console.error(e);
    }
  }

  render () {
    return (
      <div>
        <h2>Home</h2>
        <Grid container direction="column">
          {
            this.state.screams.map(scream => (
              <Box key={scream.screamId} mb={3}>
                <ScreamCard scream={scream} isLiked={scream.isLiked} getScreams={this.getScreams} />
              </Box>
            ))
          }
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  likes: state.user.likes
});

export default connect(mapStateToProps)(Home);
