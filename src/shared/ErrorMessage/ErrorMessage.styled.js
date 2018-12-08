import styled from 'styled-components';
import { FaWindowClose } from 'react-icons/fa';
import { white, errorRed } from '../../themes/colors';

const ErrorMessageContainer = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
`;

const ErrorMessageBox = styled.div`
  position: relative;
  width: 24rem;
  color: ${white};
  background: ${errorRed};
  border-radius: 1rem;
  padding: 1rem 3rem 1rem 1rem;
  margin: 1rem 0 1rem;
`;

const CloseIcon = styled(FaWindowClose)`
  font-size: 1.2rem;
  color: ${white};
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`;

export {
  ErrorMessageBox,
  CloseIcon,
  ErrorMessageContainer,
}