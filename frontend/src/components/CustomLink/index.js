import React from 'react';
import { Link } from 'react-router-dom';
import 'styled-components/macro';
import styles from './styles';

const CustomLink = ({ label, href, to }) => (
    <div css={styles}>
        {
            href
            ? (<a href={href} target='_blank' >
                    {label}
                </a>
            )
            : (<Link to={{ pathname: to }}>
                    {label}
                </Link>
            )}
    </div>
);

export default CustomLink;
