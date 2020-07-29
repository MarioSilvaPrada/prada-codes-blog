import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Button from '../components/button';

import styled, { ThemeProvider } from 'styled-components';
import theme from '../utils/theme';

class IndexPage extends React.Component {
  render() {
    const siteTitle = 'Gatsby Starter Personal Website';

    const Header = styled.h1`color: ${({ theme }) => theme.dark.header};`;

    return (
      <ThemeProvider theme={theme}>
        <Layout location={this.props.location} title={siteTitle}>
          <SEO title="Home" keywords={[ `blog`, `gatsby`, `javascript`, `react` ]} />
          <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
          <Header>
            Hey, I'm Mário Prada.{' '}
            <span role="img" aria-label="wave emoji">
              👋
            </span>
          </Header>
          <p>
            Welcome to my internet corner where I write about topics related to Javascript. Some of
            them I&apos;m comfortable with, and others not so much but that&apos;s why I want to
            confront them. Feel yourself at home.
          </p>

          <Link to="/blog/">
            <Button marginTop="35px">Go to Blog</Button>
          </Link>
        </Layout>
      </ThemeProvider>
    );
  }
}

export default IndexPage;
