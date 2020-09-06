import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import PropTypes from 'prop-types';

const LikeButton = ({ isLiked, handleLikeScream }) => (
  <IconButton onClick={handleLikeScream}>
    { isLiked ? <Favorite color="primary" /> : <FavoriteBorder /> }
  </IconButton>
);

LikeButton.propTypes = {
  isLiked: PropTypes.bool,
  handleLikeScream: PropTypes.func
};

LikeButton.defaultProps = {
  isLiked: false,
  handleLikeScream: () => {}
};

export default LikeButton;
