import React from 'react';
import useAxios from 'axios-hooks';
import 'styled-components/macro';

import Layout from '../../layout/Basic';
import endpoints from '../../config/endpoint.json';
import styles from './styles';

const PostPage = ({ match: { params: { id } } }) => {
    const [{data, loading, error}] = useAxios(`${endpoints.proxy}/${endpoints.getPost}/${id}`);
    console.log(error);

    console.log('BLOG-POST-ID:: ', id);
    if (!loading && data) console.log('Post data: ', data);

    return (
        <Layout css={styles}>
            SINGLE POST PAGE
        </Layout>
    );
};

export default PostPage;
