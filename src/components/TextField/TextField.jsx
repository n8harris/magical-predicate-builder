import React from 'react';
import { bool, func, string } from 'prop-types';
import InputFieldWrapper from '../InputField';
import { StyledTextField } from './TextField.styled';

const TextField = (props) => {
  return (
    <InputFieldWrapper>
      <StyledTextField name={props.name} onChange={e => props.onChange(e.target.name, e.target.value)} disabled={props.disabled} />
    </InputFieldWrapper>
  );
};

TextField.propTypes = {
  /**
   * Name of the text field
   */
  name: string,
  /**
   * Function called on onChange event
   */
  onChange: func.isRequired,
  /**
   * Passes `disabled` attribute to input element
   */
  disabled: bool,
};

TextField.defaultProps = {
  name: 'textfield',
  disabled: false,
  onChange: () => null,
};

export default TextField;