import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'styled-components/macro';
import styles from './styles';

const CustomLink = ({ label, href, to }) => (
    <div css={styles}>
        {
            href
            ? (<a rel="noopener noreferrer" href={href} target="_blank">
                    {label}
                </a>
            )
            : (<Link to={{ pathname: to }}>
                    {label}
                </Link>
            )}
    </div>
);

CustomLink.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

export default CustomLink;
