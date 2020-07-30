import React from 'react';
import Switch from '../Switch';
import * as S from './Header.styled';

const Header = ({ isLightMode, setIsLightMode }) => (
  <S.Header>
    <S.Title>
      Prada Codes
      {' '}
      <span role="img" aria-label="poo">
        ✌️
      </span>
    </S.Title>
    <Switch checked={isLightMode} onChange={() => setIsLightMode(!isLightMode)} />
  </S.Header>
);

export default Header;
