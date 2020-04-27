/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';
import styles from './styles';

const Burger = ({ onClick, inView }) => (
  /* eslint-disable-next-line jsx-a11y/click-events-have-key-events  */
  <div css={styles} toggle={inView} onClick={onClick}>
    <button type="button"><span /></button>
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
