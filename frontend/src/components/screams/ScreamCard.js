import React, { Component } from 'react';
import LikeButton from 'components/LikeButton';
import { likeScream } from 'services/screams';

import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline';

class ScreamCard extends Component {
  state = {
    isLiked: false
  }

  handleLikeScream = async () => {
    this.setState(state => ({
      ...state,
      isLiked: !state.isLiked
    }));
    const { data } = await likeScream(this.props.scream.screamId);
    console.log('res like scream', data);
  }

  render () {
    dayjs.extend(relativeTime);
    const {
      userImage,
      userHandle,
      body: screamBody,
      createdAt,
      likeCount,
      commentCount
    } = this.props.scream;
    const { isLiked } = this.state;
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
        {/* <CardMedia */}
        {/*  component="img" */}
        {/*  alt="User image" */}
        {/*  height="140" */}
        {/*  image={scream.userImage} */}
        {/* /> */}
        <div className="px-3 pt-3">
          <Grid container>
            <Box mr={3}>
              <Avatar alt="Remy Sharp" src={userImage} />
            </Box>
            {/* <Grid xs={1}> */}
            {/* </Grid> */}
            <Grid>
              <Typography variant="h6" component="h4" className="line-height-1 mb-2">
                { userHandle }
              </Typography>
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
  scream: PropTypes.shape({
    body: PropTypes.string,
    commentCount: PropTypes.number,
    createdAt: PropTypes.string,
    likeCount: PropTypes.number,
    screamId: PropTypes.string,
    userHandle: PropTypes.string,
    userImage: PropTypes.string
  })
};

ScreamCard.defaultProps = {
  scream: {}
};

export default ScreamCard;
