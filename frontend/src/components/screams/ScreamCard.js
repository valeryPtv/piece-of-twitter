import React, { Component } from 'react';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline';
import IconButtonWithTooltip from 'components/util/IconButtonWithTooltip';
import DeleteIcon from '@material-ui/icons/Delete';

import { likeScream, unlikeScream, deleteScream } from 'services/screams';
import LikeButton from 'components/util/LikeButton';

class ScreamCard extends Component {
  state = {
    isLiked: this.props.isLiked,
    likeCount: this.props.scream.likeCount,
    commentCount: this.props.scream.likeCount
  }

  handleLikeScream = async () => {
    this.setState(state => ({
      ...state,
      isLiked: !state.isLiked,
      likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1
    }));
    try {
      const requestScreamLike = !this.props.isLiked ? likeScream : unlikeScream;
      await requestScreamLike(this.props.scream.screamId);
      await this.props.getScreams();
      // console.log('res like scream', data);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }

  handleDeleteScream = async () => {
    try {
      console.log('handleDeleteScream');
      await deleteScream(this.props.scream.screamId);
      this.props.getScreams();
    } catch (e) {
      console.error(e);
    }
  }

  render () {
    dayjs.extend(relativeTime);
    const {
      userImage,
      userHandle,
      body: screamBody,
      createdAt
    } = this.props.scream;
    const { isLiked, likeCount, commentCount } = this.state;
    /*
    body: "hui"
    commentCount: 0
    createdAt: "2020-08-01T08:46:53.323Z"
    likeCount: 1
    screamId: "29qCJorNcE1XR0SBE6Ac"
    userHandle: "test228"
    userImage: "https://firebasestorage.googleapis
     */
    return (
      <Card className="scream-card scream-card--padding">
        <div className="px-3 pt-3">
          <Grid container>
            <Box mr={3}>
              <Avatar alt="Remy Sharp" src={userImage} />
            </Box>
            {/* <Grid xs={1}> */}
            {/* </Grid> */}
            <Grid item sm={11}>
              <Grid container justify="space-between" alignContent="center">
                <Typography variant="h6" component="h4" className="mb-2">
                  { userHandle }
                </Typography>
                <IconButtonWithTooltip
                  handleClick={this.handleDeleteScream}
                  tooltipText="Delete scream"
                  icon={<DeleteIcon className="text-red" />}
                />
              </Grid>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                { dayjs(createdAt).fromNow() }
              </Typography>
              <Typography variant="body2" component="p">
                { screamBody }
              </Typography>
            </Grid>
          </Grid>
        </div>
        <Grid container alignItems="center">
          <LikeButton isLiked={isLiked} handleLikeScream={this.handleLikeScream} />
          <Typography variant="body2" color="textSecondary">
            { likeCount }
          </Typography>
          <IconButton>
            <ChatBubbleOutline className="bg-grey" />
          </IconButton>
          <Typography variant="body2" color="textSecondary">
            { commentCount }
          </Typography>
        </Grid>
        {/* <CardActions> */}
        {/*  <Button size="small" color="primary"> */}
        {/*    Share */}
        {/*  </Button> */}
        {/*  <Button size="small" color="primary"> */}
        {/*    Learn More */}
        {/*  </Button> */}
        {/* </CardActions> */}
      </Card>
    );
  }
}


ScreamCard.propTypes = {
  isLiked: PropTypes.bool.isRequired,
  scream: PropTypes.shape({
    body: PropTypes.string,
    commentCount: PropTypes.number,
    createdAt: PropTypes.string,
    likeCount: PropTypes.number,
    screamId: PropTypes.string,
    userHandle: PropTypes.string,
    userImage: PropTypes.string
  }),
  getScreams: PropTypes.func
};

ScreamCard.defaultProps = {
  scream: {},
  getScreams: () => {}
};

export default ScreamCard;
