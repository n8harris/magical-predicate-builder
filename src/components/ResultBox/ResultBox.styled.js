import styled from 'styled-components';
import { slate, gravel } from '../../themes/colors';

const ResultBox = styled.div`
  width: 100%;
  padding: 1.5rem;
  margin: 1rem 0 0;
  background: ${gravel};
  border: 1px solid ${slate};
  border-radius: 1rem;
`;

export default ResultBox;