import React from "react";
import useAxios from 'axios-hooks';
import 'styled-components/macro';
import endpoint from '../../config/endpoint.json';
import Card from '../../components/Card';
import io from 'socket.io-client';
// import * as styles from './styles';

// const socket = io(endpoint.proxy);
// console.log('proxy', endpoint.proxy);

const Home = ({ color }) => {
    const [{ data, loading, error }, refetch] = useAxios(
        endpoint.getProducts,
    );

    const socket = io('http://localhost:3001/');
    // if (!loading) { return socket.on('product'), data => {
    //     if (data.action === 'product') {
    //         console.log('=====> ', data.product);
    //     }
    // } }

    return (
        <div color={color} >
            <button onClick={refetch}>refetch</button>
            <hr />

            {loading && <p>Loading...</p>}
            {error && <p>Error... {console.log('Error => ', error)}</p>}
            <>
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
             </>
        </div>
    );
};

export default Home;