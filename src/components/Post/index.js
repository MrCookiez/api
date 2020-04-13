import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';
import styles from './styles';

const Post = ({ data: { id, title, text, author, } }) => id && (
    <div css={styles}>
        <div className='post__wrapper'>
            {title && <h2 className='post__header'>{title}</h2>}
            {text && <p className='post__text'>{text}</p>}
            {author && <span className='post__author'>{author}</span>}
        </div>
    </div>
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
