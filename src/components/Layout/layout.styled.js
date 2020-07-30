import styled from 'styled-components';

const getTheme = (isLight, theme) => `
    background: ${isLight ? theme.light.background : theme.dark.background};
    color: ${isLight ? theme.light.color : theme.dark.color};
  
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    {
      color: ${isLight ? theme.light.header : theme.dark.header};
    }

    a {
        box-shadow: none;
        color: ${isLight ? theme.light.color : theme.dark.color};
        transition: .5s;
      }

   .line {
      border-bottom: 2px solid ${isLight ? theme.light.header : theme.dark.header};
      width: 100%;
    }

    button {
      display: flex;
      align-items: center;
      background: none;
      border: none;
      cursor: pointer;
      color: ${isLight ? theme.light.color : theme.dark.color};
      font-size: ${theme.fontSize.small};
      transition: .5s;
    }
  `;
  

export const Container = styled.div`
  min-height: 100vh;
  ${({ theme, isLightMode }) => getTheme(isLightMode, theme)};
  transition: .5s;
`;
