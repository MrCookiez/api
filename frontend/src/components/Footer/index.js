import React from 'react';
import 'styled-components/macro';
import content from './content';
import CustomLink from '../CustomLink';
import styles from './styles';

const Footer = () => (
    <div css={styles}>
         <div className='container'>
            <p>{content.text}</p>
            <CustomLink
                label={content.link.label}
                href={content.link.href}
            />
        </div>
    </div>
);

export default Footer;
