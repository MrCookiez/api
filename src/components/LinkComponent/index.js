import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';
import styles from './styles';

const LinkComponent = ({ label, href }) => (
  <div css={styles}>
    <a href={href}>{label}</a>
  </div>
);

LinkComponent.defaultProps = {
  href: '/',
};

LinkComponent.propTypes = {
  href: PropTypes.string,
};

export default LinkComponent;
