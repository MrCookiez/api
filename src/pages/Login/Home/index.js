import React from "react";
import useAxios from 'axios-hooks';
import 'styled-components/macro';
import Grid from '@material-ui/core/Grid';

import endpoint from '../../config/endpoint.json';
import Layout from '../../../layout/Basic';
import Banner from '../../../components/Banner';
import Hero from '../../../components/Hero';
import Section from '../../../components/Section';
import CategorySection from "../../../components/CategorySection";
import content from "../../../content/Home";
import * as styles from './styles';

const Home = () => {
    const [{ data, loading, error }, refetch] = useAxios(
        `${endpoint.proxy}`,
    );

    return (
        <Layout css={styles}>
            <Banner />
            <Hero />
            <CategorySection data={content} />
        </Layout>
    );
};

export default Home;
