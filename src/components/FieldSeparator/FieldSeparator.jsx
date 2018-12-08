import React from 'react';
import { string } from 'prop-types';
import {
  StyledFieldSeparator,
  FieldSeparatorWrapper,
} from './FieldSeparator.styled';

const FieldSeparator = (props) => {
  return (
    <FieldSeparatorWrapper>
      <StyledFieldSeparator>{props.separator}</StyledFieldSeparator>
    </FieldSeparatorWrapper>
  );
}

FieldSeparator.propTypes = {
  /**
   * separator text
   */
  separator: string,
};

FieldSeparator.defaultProps = {
  separator: 'AND',
};

export default FieldSeparator;
