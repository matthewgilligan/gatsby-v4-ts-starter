import * as React from 'react';
import { Link } from 'gatsby';

import { Container, InnerWrap } from './styled';

interface FooterProps {
  siteTitle?: string;
}

const Footer = ({ siteTitle = '' }: FooterProps) => (
  <Container>
    <InnerWrap>
      <h1>
        <Link to='/'>{siteTitle}</Link>
      </h1>
    </InnerWrap>
  </Container>
);

export default Footer;
