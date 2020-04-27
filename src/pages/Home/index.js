import React from 'react';
import 'styled-components/macro';
import Banner from '../../components/Banner';
import Hero from '../../components/Hero';
import CategorySection from '../../components/CategorySection';
import CoffeeSection from '../../components/CoffeeSection';
import content from '../../content/Home';
import Layout from '../../layout/Basic';

const { categories, coffee } = content;

const Home = () => (
  <Layout>
    <Banner />
    <Hero />
    <CategorySection data={categories} />
    <CoffeeSection data={coffee} />
  </Layout>
);

export default Home;
