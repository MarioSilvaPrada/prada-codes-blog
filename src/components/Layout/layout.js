import React, { useState } from 'react';
import Header from '../Header/Header';
import { rhythm } from '../../utils/typography';
import { Container } from './layout.styled';
import Footer from '../Footer';

const Layout = ({ children }) => {
  const [ isLightMode, setIsLightMode ] = useState(false);
  return (
    <Container isLightMode={isLightMode}>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
        }}
      >
        <Header isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
        <main>{children}</main>
        <Footer />
      </div>
    </Container>
  );
};

export default Layout;
