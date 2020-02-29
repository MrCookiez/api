import React from "react";
import useAxios from 'axios-hooks';
import 'styled-components/macro';
import Grid from '@material-ui/core/Grid';

import endpoint from '../../config/endpoint.json';
import Layout from '../../layout/Basic';
import Banner from '../../components/Banner';
import Hero from '../../components/Hero';
// import Section from '../../components/Section';
import CategoryCard from "../../components/CategoryCard/index.js";
import Card from '../../components/Card';
// import * as styles from './styles';

const Home = () => {
    const [{ data, loading, error }, refetch] = useAxios(
        `${endpoint.proxy}`,
    );

    return (
        <Layout>
            <Banner />
            <Hero />
            {/* <Section type='h1' heading='Φλώρινα | Delivery'> */}
            <Grid container>
                <Grid item xs={12} lg={6} spacing={3}>
                    <CategoryCard categoryName='Pizza' />
                </Grid>
            </Grid>

                {loading && <p>Loading...</p>}
                {error && <p>Error... {console.log('Error => ', error)}</p>}
                <Grid container>
                    {data && data.map(item =>
                        <Card
                            key={item.id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            category={item.category}
                            subCategory={item.sub_category}
                            availability={item.availability}
                            offer={item.offer}
                        />
                    )}
                </Grid>
            {/* </Section> */}
            <button onClick={refetch}>refetch</button>
            <hr />
        </Layout>
    );
};

export default Home;