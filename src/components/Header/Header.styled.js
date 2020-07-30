import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4.5rem;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.big};
  margin-top: 0;
  margin-bottom: 0;
`;
