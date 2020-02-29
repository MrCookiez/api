import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';
import styles from './styles';

const Hero = ({ town, text }) => (
    <div css={styles}>
        <h1 className='hero-title'>{town}<span>{text}</span></h1>
    </div>
);

Hero.defaultProps = {
    town: 'Φλωρινα',
    text: 'Online Delivery',
};

Hero.propTypes = {
    town: PropTypes.string,
    text: PropTypes.string,
};

export default Hero;
