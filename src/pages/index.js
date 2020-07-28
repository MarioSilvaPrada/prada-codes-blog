import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Button from '../components/button';

class IndexPage extends React.Component {
  render() {
    const siteTitle = 'Gatsby Starter Personal Website';

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Home" keywords={[ `blog`, `gatsby`, `javascript`, `react` ]} />
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <h1>
          Hey, I'm Mário Prada.{' '}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>
          Welcome to my internet corner where I write about topics related to Javascript. Some of
          them I&apos;m comfortable with, and others not so much but that&apos;s why I want to
          confront them. Feel yourself at home.
        </p>

        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    );
  }
}

export default IndexPage;
