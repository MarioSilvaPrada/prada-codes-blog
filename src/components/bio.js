/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        return (
          <Container>
            <p>
              Hey, I'm{' '}
              <a href="https://mariosilvaprada.com/" target="blank">
                Mário Prada
              </a>
              . Welcome to my internet corner where I write about topics related to Javascript and
              React. More than writing, I do like to code, so you're going to see a lot of snippets
              to support my examples. If you're a tech enthusiast like me, feel free to reach me out.
              Feel yourself at home.
            </p>
          </Container>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/gatsby-icon.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`;

const Container = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export default Bio;
