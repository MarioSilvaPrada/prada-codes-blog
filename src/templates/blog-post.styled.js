import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const Home = styled.p`
  display: flex;
  align-items: center;
`;

export const Date = styled.p`font-size: ${({ theme }) => theme.fontSize.small};`;
