import styled from 'styled-components';
import { white, water } from '../../themes/colors';
import { FaSpinner } from 'react-icons/fa';

const LoadingOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${white};
  font-family: Brandon, sans-serif;
  font-size: 10vw;
`;

const StyledSpinner = styled(FaSpinner)`
  display: flex;
  animation: spin infinite 2s linear;
  color: ${water};

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

export { LoadingOverlay, StyledSpinner };