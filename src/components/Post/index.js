import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';
import { Link } from 'react-router-dom';

import styles from './styles';

const Post = ({ data: {
    id,
    title,
    author,
    data,
    content: {
        text,
        image,
        links: { source },
    },
} }) => (
    <div css={styles}>
        <div className='post__wrapper'>
            {title && <h2 className='post__header'>{title}</h2>}
            {text && <p className='post__text'>{text}</p>}
            {author && <span className='post__author'>{author}</span>}
        </div>
    </div>
);

Post.defaultProps = {
    title: '',
        content: {
        text: '',
            image: '',
            links: {
            source: '',
        },
    },
    author: '',
    date: '',
};

Post.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    content: PropTypes.shape({
        text: PropTypes.string,
        image: PropTypes.string,
        links: PropTypes.shape({
            source: PropTypes.string,
        }),
    }),
    author: PropTypes.string,
    date: PropTypes.string,
};

export default Post;
