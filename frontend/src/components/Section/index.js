import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';
// import Grid from '@material-ui/core';
// import { NavLink } from 'react-router-dom';
import styles from './styles';

const Section = ({ className, heading, children, type }) => (
    <div className={className} css={styles}>
        {type === 'h1' && <h1>{heading}</h1>}
        {type === 'h2' && <h2>{heading}</h2>}
        {type === 'h3' && <h3>{heading}</h3>}

        <div className='section-container'>{children}</div>
    </div>
);

Section.defaultProps = {
    type: 'h2',
    className: '',
    heading: '',
    children: <></>,
};

Section.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    heading: PropTypes.string,
    children: PropTypes.node,
};

export default Section;
