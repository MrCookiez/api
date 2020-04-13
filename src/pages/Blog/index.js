import React from 'react';
import useAxios from 'axios-hooks';
// import PropTypes from 'prop-types';
import 'styled-components/macro';

import Layout from '../../layout/Basic';
import Post from '../../components/Post';
import PostUpload from '../../components/PostUpload';

import endpoint from '../../config/endpoint.json';
import styles from './styles';

const Blog = () => {
    const [{data, loading, error}] = useAxios(
        `${endpoint.proxy}/${endpoint.getPosts}`
    );

    return (
        <Layout>
            <div css={styles}>
                <div className='blog__side-menu'>SIDE MENU</div>

                <div className='blog__content'>
                    <h2>Blog page</h2>
                    <div className='posts__wrapper'>
                        {loading && <h2>Loading ...</h2>}
                        <PostUpload />
                        {data && data.map(post => <Post key={post.id} data={post} />)}
                    </div>
                </div>

                <div className='blog__ads'>ADS</div>
            </div>
        </Layout>
    );
};

Blog.propTypes = {
    // posts: PropTypes.shape({}).isRequired,
};

export default Blog;
