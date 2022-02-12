import * as React from 'react';
import { Link } from 'gatsby';

import { Container, InnerWrap } from './styled';

interface HeaderProps {
  siteTitle?: string;
}

const Header = ({ siteTitle = '' }: HeaderProps) => (
  <Container>
    <InnerWrap>
      <h1>
        <Link to='/'>{siteTitle}</Link>
      </h1>
    </InnerWrap>
  </Container>
);

export default Header;
