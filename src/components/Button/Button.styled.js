import styled from 'styled-components';
import { FaSpinner } from 'react-icons/fa';
import { water, waterHover, white, gravel, slate } from '../../themes/colors';
import { regular } from '../../themes/font-sizes';

const TextWrapper = styled.div`
  margin-left: 0.5em;
  margin-right: 0.5em;
`;

const getRightIconVisibility = (props) => {
  let visibility = 'hidden';
  if (props.isLoading && props.submitType) {
    visibility = 'visible';
  }
  return visibility;
};

const setBgColor = (props, defaultColor) => {
  if (props.disabled || props.isLoading) {
    return gravel;
  }
  return defaultColor;
};

const RightIcon = styled.span`
  visibility: ${props => getRightIconVisibility(props)};
`;

const Label = styled.span`
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  align-items: center;
`;

const Content = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const ButtonWrapper = styled.button`
  font-size: ${regular};
  padding: 0.75em 1em;
  font-weight: 800;
  text-align: center;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  box-shadow: none;
  background-image: 'none';
  outline: none;
  background-color: ${props => setBgColor(props, water)};
  color: ${white};
  border: none;
  cursor: pointer;

  &:focus {
    background-color: ${props => setBgColor(props, water)};
    color: ${white};
  }

  &:hover {
    background-color: ${props => setBgColor(props, waterHover)};
    color: ${white};
    border: none;
  }
`;

const Spinner = styled(FaSpinner)`
  display: flex;
  margin-left: 0.4rem;
  animation: spin infinite 2s linear;
  color: ${slate};

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

export {
  ButtonWrapper,
  Content,
  Label,
  RightIcon,
  Spinner,
  TextWrapper,
};
