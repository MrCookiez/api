import React from 'react';
import useAxios from 'axios-hooks';
import 'styled-components/macro';

import Layout from '../../layout/Basic';
import Post from '../../components/Post';
import PostForm from '../../components/PostForm';

import endpoint from '../../config/endpoint.json';
import styles from './styles';

const Blog = () => {
    const [{data, loading, error}] = useAxios(
        `${endpoint.getPosts}`
    );

    console.log(error);

    return (
        <Layout>
            <div css={styles}>
                <div className='blog__side-menu'>SIDE MENU</div>

                <div className='blog__content'>
                    <h2>Blog page</h2>
                    <div className='posts__wrapper'>
                        {loading && <h2>Loading ...</h2>}
                        <PostForm />
                        {data && data.map(post => <Post key={post.id} data={post} />)}
                    </div>
                </div>

                <div className='blog__ads'>ADS</div>
            </div>
        </Layout>
    );
};

export default Blog;
