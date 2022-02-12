import React, { ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { GlobalStyle } from '../../styles/global';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, Content } from './styled';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const data: any = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const siteTitle: string = data.site.siteMetadata?.title || `Title`;

  return (
    <Container>
      <GlobalStyle />
      <Header siteTitle={siteTitle} />
      <Content>
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href='https://www.gatsbyjs.com'>Gatsby</a>
        </footer>
      </Content>
      <Footer siteTitle={siteTitle} />
    </Container>
  );
};

export default Layout;
