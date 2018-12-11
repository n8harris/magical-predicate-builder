import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';
import { errorRed, slate } from '../../themes/colors';
import { lg } from '../../themes/font-sizes';

const StyledTrashButton = styled(FaTrash)`
  color: ${props => props.disabled ? slate : errorRed};
  font-size: ${lg};
  cursor: pointer;
  display: flex;
`;

const TrashButtonWrapper = styled.div`
  max-width: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export {
  StyledTrashButton,
  TrashButtonWrapper
};