import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';


const IconButtonWithTooltip = ({
  handleClick, tooltipText, icon, to
}) => (
  <Tooltip title={tooltipText} placement="bottom">
    <IconButton to={to} onClick={handleClick}>
      { icon }
    </IconButton>
  </Tooltip>
);

IconButtonWithTooltip.propTypes = {
  handleClick: PropTypes.func,
  tooltipText: PropTypes.string,
  to: PropTypes.string,
  icon: PropTypes.element.isRequired
};

IconButtonWithTooltip.defaultProps = {
  handleClick: () => {},
  tooltipText: '',
  to: '/'
};

export default IconButtonWithTooltip;
