import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';
import styles from './styles';

const CategoryCard = ({ categoryName }) => {
    return (
        <div css={styles}>
            {categoryName || 'CATEGORY CARD'}
        </div>
    );
};

CategoryCard.defaultProps = {
    categoryName: '',
};

CategoryCard.propTypes = {
    categoryName: PropTypes.string,
};

export default CategoryCard;
