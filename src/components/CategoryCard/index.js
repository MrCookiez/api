import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import styles from './styles';

const CategoryCard = ({
  className, title, link, bgImg,
}) => (
  <NavLink
    to={link}
    css={styles}
    bgImg={bgImg}
    className={className}
  >
    <span>{title}</span>
  </NavLink>
);

CategoryCard.defaultProps = {
  link: '/',
  className: '',
  title: '',
  bgImg: 'https://picsum.photos/200/300',
};

CategoryCard.propTypes = {
  link: PropTypes.string,
  className: PropTypes.string,
  bgImg: PropTypes.string,
  title: PropTypes.string,
};

export default CategoryCard;
