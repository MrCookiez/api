import React from "react";
import useAxios from 'axios-hooks';
import 'styled-components/macro';
import endpoint from '../../config/endpoint.json';
import * as styles from './styles';

const Home = ({ color }) => {
    const [{ data, loading, error }, refetch] = useAxios(
        endpoint.getProducts,
    );

    return (
        <div color={color} >
            <button onClick={refetch}>refetch</button>
            <hr />

            {loading && <p>Loading...</p>}
            {error && <p>Error... {console.log('Error => ', error)}</p>}
            {/* <pre>{data && data.map(item => <h3>{item.name}</h3>)}</pre> */}
            <>
            {data && data.map(item =>
                <div css={styles.card}>
                    <div className='name' color='red'>{item.name}</div>
                    <div className='price'>{item.price}</div>
                    <div className='description'>{item.description}</div>
                </div>
             )}
             </>
        </div>
    );
};

export default Home;