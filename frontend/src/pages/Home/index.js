import React from "react";
import useAxios from 'axios-hooks';
import 'styled-components/macro';
import endpoint from '../../config/endpoint.json';
import Card from '../../components/Card';
import Layout from '../../layout/Basic';
import Navigation from '../../components/Menu';
import Container from '../../components/Container';
// import * as styles from './styles';

const Home = ({ color }) => {
    const [{ data, loading, error }, refetch] = useAxios(
        `${endpoint.proxy}`,
    );

    return (
        <Layout color={color}>
            <Container>
                test
            </Container>
            <button onClick={refetch}>refetch</button>
            <hr />

            {loading && <p>Loading...</p>}
            {error && <p>Error... {console.log('Error => ', error)}</p>}
            {/* <div>
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
             </div> */}
        </Layout>
    );
};

export default Home;