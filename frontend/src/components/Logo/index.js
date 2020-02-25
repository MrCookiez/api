import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';
import { Link } from 'react-router-dom';
import { ReactComponent as Pepper } from './pepper.svg';

import styles from './styles';

const Logo = ({ size }) => (
    <div css={styles}>
        <Pepper width={size} />
        <Link to="/" >florinafood.gr</Link>
    </div>
);

Logo.defaultProps = {
    size: 25,
};

Logo.propTypes = {
    size: PropTypes.number,
};

export default Logo;
