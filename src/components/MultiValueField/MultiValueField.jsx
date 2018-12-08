import React from 'react';
import { func } from 'prop-types';
import FieldSeparator from '../FieldSeparator';
import TextField from '../TextField';

const MultiValueField = (props) => {
  return (
    <>
      <TextField name='value' onChange={(name, value) => props.multiValueOnChange(name, value, 0)} disabled={props.disabled} />
      <FieldSeparator />
      <TextField name='value' onChange={(name, value) => props.multiValueOnChange(name, value, 1)} disabled={props.disabled} />
    </>
  );
}

MultiValueField.propTypes = {
  /**
   * multi-value on change function
   */
  multiValueOnChange: func.isRequired,
};

export default MultiValueField;
