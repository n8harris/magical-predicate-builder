import React from 'react';
import { bool, func, arrayOf, string, shape } from 'prop-types';
import InputFieldWrapper from '../InputField';
import { Select } from './SelectField.styled';

class SelectField extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.options !== this.props.options) {
      this.props.onChange(nextProps.name, nextProps.options[0].title);
    }
  }

  render() {
    return (
      <InputFieldWrapper>
        <Select
          name={this.props.name}
          onChange={e => this.props.onChange(e.target.name, e.target.value)}
          value={this.props.value || this.props.options[0].title}
          disabled={this.props.disabled}
        >
          {this.props.options.map(item => (
            <option key={item.title} value={item.title}>{item.title}</option>
          ))}
        </Select>
      </InputFieldWrapper>
    );
  }
};

SelectField.propTypes = {
  /**
   * Name of the select field
   */
  name: string,
  /**
   * Function called on onChange event
   */
  onChange: func.isRequired,
  /**
   * Options displayed in the select field
   */
  options: arrayOf(shape({
    title: string,
    type: string,
  }).isRequired).isRequired,
  /**
   * Value of the select field
   */
  value: string,
  /**
   * Passes `disabled` attribute to input element
   */
  disabled: bool,
};

SelectField.defaultProps = {
  name: 'selectfield',
  value: undefined,
  disabled: false,
  onChange: () => null,
};

export default SelectField;
