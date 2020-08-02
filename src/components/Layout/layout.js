import React from 'react';
import Header from '../Header/Header';
import { rhythm } from '../../utils/typography';
import { Container } from './layout.styled';
import Footer from '../Footer';
import { myContext } from '../../utils/provider';

const Layout = ({ children }) => {
  return (
    <myContext.Consumer>
      {(context) => (
        <Container isLightMode={context.isLightMode}>
          <div
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(24),
              padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
            }}
          >
            <Header
              isLightMode={context.isLightMode}
              setIsLightMode={() => context.changeTheme()}
            />
            <main>{children}</main>
            <Footer />
          </div>
        </Container>
      )}
    </myContext.Consumer>
  );
};

export default Layout;
