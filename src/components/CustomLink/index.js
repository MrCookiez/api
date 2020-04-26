import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'styled-components/macro';
import styles from './styles';

const CustomLink = ({ label, to }) => (
  <div css={styles}>
    <Link href={to}>
      {label}
    </Link>
  </div>
);

CustomLink.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default CustomLink;
