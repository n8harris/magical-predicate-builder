import React from 'react';
import { bool, func } from 'prop-types';
import { StyledTrashButton, TrashButtonWrapper } from './TrashButton.styled';

const TrashButton = (props) => {
  return (
    <TrashButtonWrapper>
      <StyledTrashButton onClick={() => !props.disabled && props.onClick()} disabled={props.disabled} />
    </TrashButtonWrapper>
  );
};

TrashButton.propTypes = {
  /**
   * Function called on onClick event
   */
  onClick: func.isRequired,
  /**
   * Passes `disabled` attribute to element
   */
  disabled: bool,
};

TrashButton.defaultProps = {
  disabled: false,
};

export default TrashButton;