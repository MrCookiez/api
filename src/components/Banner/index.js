import React from 'react';
import 'styled-components/macro';
import Logo from '../Logo';
import styles from './styles';

const Banner = () => (
  <div css={styles}>
    <Logo isWhite />
  </div>
);

export default Banner;
