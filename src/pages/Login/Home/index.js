import React from 'react';
import 'styled-components/macro';

import Layout from '../../../layout/Basic';
import Banner from '../../../components/Banner';
import Hero from '../../../components/Hero';
import CategorySection from '../../../components/CategorySection';
import content from '../../../content/Home';

const Home = () => (
  <Layout>
    <Banner />
    <Hero />
    <CategorySection data={content} />
  </Layout>
);

export default Home;
