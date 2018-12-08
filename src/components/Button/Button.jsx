import React from 'react';
import { bool, func, string } from 'prop-types';
import {
  ButtonWrapper,
  Content,
  Label,
  RightIcon,
  Spinner,
  TextWrapper,
} from './Button.styled';
import InputFieldWrapper from '../InputField';

const ChildrenText = props => (
  <TextWrapper>
    {props.isLoading && props.submitType ? 'Loading' : props.children}
  </TextWrapper>
);

ChildrenText.propTypes = {
  children: string.isRequired,
  isLoading: bool,
};

ChildrenText.defaultProps = {
  isLoading: false,
};

const ButtonIcons = ({ isLoading, submitType }) => (
  <div>
    { isLoading && submitType && <Spinner /> }
  </div>
);

ButtonIcons.propTypes = {
  isLoading: bool,
};

ButtonIcons.defaultProps = {
  isLoading: false,
};

const handleClick = (e) => {
  if (this.props.isLoading || this.props.isDisabled) {
    e.preventDefault();
  } else {
    this.props.onClick(e);
  }
}

const Button = (props) => {
  return (
    <InputFieldWrapper>
      <ButtonWrapper
        type={props.submitType ? 'submit' : 'button'}
        disabled={props.isDisabled}
        isLoading={props.isLoading}
        onClick={handleClick.bind(props)}
        {...props}
      >
        <Content>
          <Label>
            { props.children
              ? <ChildrenText isLoading={props.isLoading} submitType={props.submitType}>{props.children}</ChildrenText>
              : null
            }
          </Label>

          <RightIcon isLoading={props.isLoading} submitType={props.submitType}>
            <ButtonIcons isLoading={props.isLoading} submitType={props.submitType} />
          </RightIcon>
        </Content>

      </ButtonWrapper>
    </InputFieldWrapper>
  );
}

Button.propTypes = {
  /**
   * Button text
   */
  children: string,
  /**
   * Disabled state - disables button
   */
  isDisabled: bool,
  /**
   * Loading state - adds spinner to iconRight and disables button
   */
  isLoading: bool,
  /**
   * Function that is called when button is clicked
   */
  onClick: func.isRequired,
  /**
   * whether or not button is a submit button
   */
  submitType: bool,
};

Button.defaultProps = {
  children: null,
  isDisabled: false,
  isLoading: false,
  onClick: () => {},
  submitType: false,
};

export default Button;
