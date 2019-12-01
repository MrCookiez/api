import React from "react";
import useAxios from 'axios-hooks';
import endpoint from '../../config/endpoint.json';

const Home = () => {
    const [{ data, loading, error }, refetch] = useAxios(
        endpoint.getProducts,
    );

    return (
        <div>
            <button onClick={refetch}>refetch</button>
            <hr />

            {loading && <p>Loading...</p>}
            {error && <p>Error...{console.log('error', error)}</p>}
            {data && console.log('data ==>', data[0])}

            <pre>{data && data.map(item => <h3>{item.name}</h3>)}</pre>
        </div>
    );
};

export default Home;