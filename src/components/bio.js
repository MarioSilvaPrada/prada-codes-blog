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
              <ExternalLink href="https://mariosilvaprada.com/" target="blank">
                Mário Prada
              </ExternalLink>
              . Welcome to my internet corner where I write about topics related to Javascript. Some
              of them I'm comfortable with, and others not so much but tha's why I want
              to confront them. Feel yourself at home.
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

const ExternalLink = styled.a`border-bottom: 1px dotted;`;

export default Bio;
