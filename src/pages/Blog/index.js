import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';

import Layout from '../../layout/Basic';
import Post from '../../components/Post';
import styles from './styles';

const posts = [
    {
        id: '0',
        title: 'first post \'Title\' - 1',
        content: {
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            image: '#',
            links: {
                source: '#',
            },
        },
        author: 'Theodoros Vragkos',
    },
    {
        id: '1',
        title: 'first post \'Title\' - 2',
        content: {
            text: 'Lorem ipsum dolor amet',
            image: '#',
            links: {
                source: '#',
            },
        },
        author: 'Theodoros Vragkos',
    },
];

const Blog = () => (
    <Layout>
        <div css={styles}>
            <div className='blog__side-menu'>SIDE MENU</div>

            <div className='blog__content'>
                <h2>Blog page</h2>
                <div className='posts__wrapper'>
                    {posts && posts.map(post => <Post data={post} />)}
                </div>
            </div>

            <div className='blog__ads'>ADS</div>
        </div>
    </Layout>
);

Blog.propTypes = {
    posts: PropTypes.shape({}).isRequired,
};

export default Blog;
