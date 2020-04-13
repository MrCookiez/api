import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';
import { ReactComponent as Pepper } from './pepper.svg';
import styles from './styles';

const Logo = ({ size, isWhite }) => (
    <div css={styles} active={isWhite}>
        <Pepper width={size} />
        <a href="/" >florinafood.gr</a>
    </div>
);

Logo.defaultProps = {
    size: 25,
    isWhite: false,
};

Logo.propTypes = {
    size: PropTypes.number,
    isWhite: PropTypes.bool,
};

export default Logo;
