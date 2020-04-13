import React from 'react';
import { Route } from 'react-router-dom';
import useAxios from 'axios-hooks';
import 'styled-components/macro';

import Layout from '../../layout/Basic';
import Post from '../../components/Post';
import PostForm from '../../components/PostForm';
import PostPage from '../PostPage';

import endpoints from '../../config/endpoint.json';
import styles from './styles';

const PostsPage = () => {
    const [{data, loading, error}] = useAxios(`${endpoints.proxy}/${endpoints.getPosts}`);
    console.log(error);

    return (
        <Layout>
            <div css={styles}>
                <div className='blog__side-menu'>
                    SIDE MENU
                </div>

                <div className='blog__content'>
                    <h2>Blog page</h2>
                    <div className='posts__wrapper'>
                        <PostForm />
                        {loading && <h2>Posts Loading ...</h2>}
                        {!loading && data && data.map(post => (
                            <Post key={post.id} data={post} />
                        ))}

                        <Route path='/:id' exact component={({ match }) => <PostPage match={match} />}/>
                    </div>
                </div>

                <div className='blog__ads'>ADS</div>
            </div>
        </Layout>
    );
};

export default PostsPage;
