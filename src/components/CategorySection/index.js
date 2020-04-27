import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';
import Grid from '@material-ui/core/Grid';
import CategoryCard from '../CategoryCard';
import styles from './styles';

const CategorySection = ({ className, data: { title, cards } }) => (
  <div className={className} css={styles}>
    <h2>{title}</h2>
    <Grid
      className="category-container"
      container
    >
      {// eslint-disable-next-line react/prop-types
            cards.map(({ name, link, bgImg }) => (
              <CategoryCard
                title={name}
                link={link}
                bgImg={bgImg}
                key={`card-key-${name}`}
              />
            ))
}
    </Grid>
  </div>
);

CategorySection.defaultProps = {
  data: [{}],
  className: '',
};

CategorySection.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default CategorySection;
