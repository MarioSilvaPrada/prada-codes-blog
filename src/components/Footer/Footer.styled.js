import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.a`
  font-size: ${({ theme }) => theme.fontSize.big};
  margin-right: .7rem;
  cursor: pointer;

`;

export const Copy = styled.span`font-size: ${({ theme }) => theme.fontSize.small};`;
