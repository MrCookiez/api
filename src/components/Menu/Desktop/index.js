import React from 'react';
import 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import styles from './styles';

const DesktopNav = () => (
  <div css={styles}>
    <ul className="desktop-menu-container">
      <li><NavLink to="/" activeClassName="active" exact>αρχικη</NavLink></li>
      <li><NavLink to="/deals" activeClassName="active" exact>προσφορες</NavLink></li>
      <li><NavLink to="/shops" activeClassName="active" exact>καταστηματα</NavLink></li>
      <li><NavLink to="/blog" activeClassName="active" exact>blog</NavLink></li>
      <li><NavLink to="/register" activeClassName="active" exact>register</NavLink></li>
      <li><NavLink to="/login" activeClassName="active" exact>log in</NavLink></li>
    </ul>
  </div>
);

export default DesktopNav;
