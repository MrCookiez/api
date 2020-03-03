import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';
import styles from './styles';

const Hero = ({ town, text }) => (
    <div css={styles}>
        {/*
            Add mini slider on x amount of second to change the text with:
            1. Florina | online delivery
            2. 5 online delivery shops
            3. 40 total shops
            4. 10 food menus
        */}
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
