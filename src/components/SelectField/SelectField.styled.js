import styled from 'styled-components';
import {
  coal,
  gravel,
  water,
  white,
} from '../../themes/colors';
import { regular } from '../../themes/font-sizes';

// eslint-disable-next-line max-len
const SelectIcon = 'data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'%3E%3Cpath fill=\'%23333\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/%3E%3C/svg%3E';

const Select = styled.select`
  font-family: Brandon, sans-serif;
  height: 3.125rem;
  background: ${white} url("${SelectIcon}") no-repeat right 0.75rem center;
  background-size: 0.75rem;
  border: solid;
  border-width: 0.125rem;
  border-color: ${water};
  border-radius: 0;
  appearance: none;
  box-sizing: border-box;
  outline: none;
  width: 100%;
  padding: 0.625rem;
  font-size: ${regular};
  color: ${coal};

  &:disabled {
    cursor: not-allowed;
    border-color: ${gravel};
  }

  &:enabled:focus {
    border-color: ${water};
  }

  &:enabled:active {
    box-shadow: inset 0 0 0.2rem 0;
    border-color: ${water};
  }

  &:enabled:hover {
    border-color: ${water};
  }
`;

export {
  Select,
  SelectIcon
};
