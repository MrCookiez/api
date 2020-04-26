import React from 'react';
import useAxios from 'axios-hooks';
import 'styled-components/macro';

import Layout from '../../layout/Basic';
import endpoints from '../../config/endpoint.json';
import styles from './styles';

const PostPage = ({ match: { params: { id } } }) => {
  const [{ data, loading, error }] = useAxios(`${endpoints.proxy}/${endpoints.getPost}/${id}`);
  console.log(error);

  if (!loading && data) console.log('Post data: ', data);

  return !loading && data && (
    <Layout css={styles}>
      <h1>{data.title}</h1>
      <h6>{data.author}</h6>
      <p>{data.text}</p>
    </Layout>
  );
};

export default PostPage;
