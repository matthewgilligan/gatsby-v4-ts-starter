import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from './../layouts/MainLayout';
import Seo from './../components/SEO/seo';

const IndexPage = () => (
  <Layout>
    <Seo title='Home' />
    <StaticImage
      src='../assets/gatsby-astronaut.png'
      width={300}
      quality={95}
      formats={['auto', 'webp', 'avif']}
      alt='A Gatsby astronaut'
      style={{ marginBottom: `1.45rem` }}
    />
  </Layout>
);

export default IndexPage;
