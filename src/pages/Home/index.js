import Grid from '@material-ui/core/Grid';
import useAxios from 'axios-hooks';
import React from "react";
import 'styled-components/macro';
import Banner from '../../components/Banner';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import CategorySection from "../../components/CategorySection";
import CoffeeSection from "../../components/CoffeeSection";
import content from '../../content/Home';
import Layout from '../../layout/Basic';
import endpoint from '../../config/endpoint.json';

const { categories, coffee } = content;

const Home = () => {
    const [{ data, loading, error }, refetch] = useAxios(
        `${endpoint.proxy}`,
    );

    return (
        <Layout>
            <Banner />
            <Hero />
            <CategorySection data={categories} />
            <CoffeeSection data={coffee} />
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