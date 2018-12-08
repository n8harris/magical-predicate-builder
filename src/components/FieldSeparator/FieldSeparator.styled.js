import styled from 'styled-components';
import { gravel, slate } from '../../themes/colors';

const StyledFieldSeparator = styled.div`
  height: 3.125rem;
  max-width: 5rem;
  text-align: center;
  padding: 1rem;
  background: ${gravel};
  color: ${slate};
`;

const FieldSeparatorWrapper = styled.div`
  max-width: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export {
  StyledFieldSeparator,
  FieldSeparatorWrapper,
};