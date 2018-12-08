import styled from 'styled-components';

const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  > * {
    width: 100%;
    flex: 1 1 auto;
    margin: 0 0.5rem 2rem;
  }

  > *:first-child {
    margin-left: 0;
  }

  > *:last-child {
    margin-right: 0;
  }
`;

export {
  StyledFormWrapper,
}