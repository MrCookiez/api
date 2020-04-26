import React, { useState } from 'react';
import 'styled-components/macro';
import { NavLink } from 'react-router-dom';

import Logo from '../../Logo';
import Burger from '../../Burger';
import styles from './styles';

const MobileNav = () => {
  const [inView, setInView] = useState(false);

  const toggle = (e) => {
    e.preventDefault();
    setInView(!inView);
  };

  return (
    <div css={styles} active={inView}>
      <div className="nav-bar">
        <div className="logo"><Logo /></div>
        <Burger className="burger" onClick={(e) => toggle(e)} inView={inView} />
      </div>

      <div className="side-menu-wrapper">
        <div className="side-menu-container">
          <div className="links-container">
            <NavLink to="/" activeClassName="active" exact>αρχικη</NavLink>
            <NavLink to="/" activeClassName="active" exact>προσφορες</NavLink>
            <NavLink to="/" activeClassName="active" exact>καταστηματα</NavLink>
            <NavLink to="/blog" activeClassName="active" exact>blog</NavLink>
            <NavLink to="/" activeClassName="active" exact>contact</NavLink>
            <NavLink to="/" activeClassName="active" exact>jobs</NavLink>
            <span className="line" />
            <NavLink to="/register" activeClassName="active" exact>register</NavLink>
            <NavLink to="/register" activeClassName="active" exact>log in</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
