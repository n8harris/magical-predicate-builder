import React from 'react';
import { arrayOf, object, func, string, bool } from 'prop-types';
import {
  StyledFormWrapper,
} from './FormWrapper.styled';
import SelectField from '../SelectField';
import TextField from '../TextField';
import MultiValueField from '../MultiValueField';
import TrashButton from '../TrashButton';

const FormWrapper = (props) => {
  return (
    <StyledFormWrapper>
      <SelectField name='predicate' options={props.predicates} onChange={props.onChange} value={props.predicateValue} disabled={props.disabled} />
      <SelectField name='operator' options={props.operators} onChange={props.onChange} value={props.operatorValue} disabled={props.disabled} />
      {
        props.multiValue ?
        <MultiValueField multiValueOnChange={props.multiValueOnChange} />
        :
        <TextField name='value' onChange={props.onChange} disabled={props.disabled} />
      }
      <TrashButton onClick={props.removeFilter} disabled={props.disabled} />
    </StyledFormWrapper>
  );
}

FormWrapper.propTypes = {
  /**
   * value of predicate field
   */
  predicateValue: string,
  /**
   * value of operator field
   */
  operatorValue: string,
  /**
   * object of predicate values
   */
  predicates: arrayOf(object),
  /**
   * object of operator values
   */
  operators: arrayOf(object),
  /**
   * Function that is called when all form items except for predicate is changed
   */
  onChange: func.isRequired,
  /**
   * Whether or not filter should be multi-value
   */
  multiValue: bool,
  /**
   * onChange function for multi-value filters
   */
  multiValueOnChange: func.isRequired,
  /**
   * disabled state of form
   */
  disabled: bool,
  /**
   * function for removing a filter
   */
  removeFilter: func.isRequired,
};

FormWrapper.defaultProps = {
  onChange: () => {},
  multiValue: false,
  disabled: false,
};

export default FormWrapper;
