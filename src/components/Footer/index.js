import React from 'react';
import 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import content from './content';
import CustomLink from '../CustomLink';
import styles from './styles';

const { text, link } = content;

const Footer = () => (
  <div css={styles}>
    <div className="container">
      <ul>
        <li><NavLink to="/contact" activeClassName="active" exact>contact</NavLink></li>
        <li><NavLink to="/jobs" activeClassName="active" exact>jobs</NavLink></li>
        <li><NavLink to="/register" activeClassName="active" exact>register</NavLink></li>
      </ul>
      <p>{text}</p>
      <CustomLink
        label={link.label}
        to={link.href}
      />
    </div>
  </div>
);

export default Footer;
