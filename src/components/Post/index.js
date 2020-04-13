import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'styled-components/macro';
import styles from './styles';

const Post = ({ data: { id, title, text, author } }) =>(
    <Link css={styles} key={`key-${id}`} to={`/blog/post/${id}`}>
        <div className='post__wrapper'>
            {title && <h2 className='post__header'>{title}</h2>}
            {text && <p className='post__text'>{text}</p>}
            {author && <span className='post__author'>{author}</span>}
            <div>Read more</div>
        </div>
    </Link>
);

Post.defaultProps = {
    data: {
        title: '',
        text: '',
        author: '',
        date: '',
    }
};

Post.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string,
        text: PropTypes.string,
        author: PropTypes.string,
        date: PropTypes.string,
    }).isRequired,
};

export default Post;
