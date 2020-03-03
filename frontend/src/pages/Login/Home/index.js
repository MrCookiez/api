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
// import Card from '../../../components/Card';
// import * as styles from './styles';

const Home = () => {
    const [{ data, loading, error }, refetch] = useAxios(
        `${endpoint.proxy}`,
    );

    return (
        <Layout>
            <Banner />
            <Hero />
            <CategorySection data={content} />
            <Section>

                {loading && <p>Loading...</p>}
                {error && <p>Error... {console.log('Error => ', error)}</p>}
                <Grid container>
                    {data && data.map(item =>
                        <span key={item.id}>{item.name}</span>
                        // <Card
                        //     key={item.id}
                        //     name={item.name}
                        //     description={item.description}
                        //     price={item.price}
                        //     category={item.category}
                        //     subCategory={item.sub_category}
                        //     availability={item.availability}
                        //     offer={item.offer}
                        // />
                    )}
                </Grid>
            </Section>
            <button onClick={refetch}>refetch</button>
            <hr />
        </Layout>
    );
};

export default Home;