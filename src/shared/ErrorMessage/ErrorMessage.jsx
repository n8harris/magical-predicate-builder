import React from 'react';
import { string, func } from 'prop-types';
import {
  ErrorMessageBox,
  CloseIcon,
} from './ErrorMessage.styled';

const ErrorMessage = (props) => {
  return (
    <ErrorMessageBox>
      {props.error}
      <CloseIcon onClick={props.dismissError} />
    </ErrorMessageBox>
  );
}

ErrorMessage.propTypes = {
  /**
   * error message
   */
  error: string.isRequired,
  /**
   * function for dismissing the error
   */
  dismissError: func.isRequired,
};

export default ErrorMessage;
