import React from 'react';
import 'styled-components/macro';
import styles from './styles';

const Container = ({ className, children }) => (
    <div className={className} css={styles}>
        {children}
    </div>
);

export default Container;
