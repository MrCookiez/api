import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';
import styles from './styles';

const Burger = ({ onClick, inView }) => (
  <div css={styles} toggle={inView} onClick={onClick}>
    <button><span /></button>
  </div>
);

Burger.defaultProps = {
  onClick: () => {},
};

Burger.propTypes = {
  onClick: PropTypes.func,
  inView: PropTypes.bool.isRequired,
};

export default Burger;
