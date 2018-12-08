import styled from 'styled-components';
import { water, coal, white, gravel } from '../../themes/colors';
import { regular } from '../../themes/font-sizes';

const StyledTextField = styled.input`
  height: 3.125rem;
  border: solid;
  border-width: 0.125rem;
  border-color: ${water};
  border-radius: 0;
  box-sizing: border-box;
  outline: none;
  width: 100%;
  padding: 0.625rem;
  font-size: ${regular};
  color: ${coal};
  background-color: ${white};
  cursor: text;

  &:disabled {
    cursor: not-allowed;
    border-color: ${gravel};
  }

  &:enabled:focus {
    border-color: ${water};
  }

  &:enabled:hover {
    border-color: ${water};
  }

  &:enabled:active {
    box-shadow: inset 0 0 0.2rem 0 ${water};
  }
`;

export {
  StyledTextField,
}