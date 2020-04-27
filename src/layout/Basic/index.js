import React from 'react';
import PropTypes from 'prop-types';
import jump from 'jump.js';
import Navigation from '../../components/Menu';
import Footer from '../../components/Footer';
import BackToTop from '../../components/BackToTop';

const jumpToTop = () => (
  jump('.top', {
    duration: 250,
    offset: 0,
    a11y: false,
  })
);

const Layout = ({ className, children }) => (
  <div className={`${className} top`}>
    <Navigation />
    {children}
    <BackToTop toTop={() => jumpToTop()} />
    <Footer />
  </div>
);

Layout.defaultProps = {
  className: '',
};

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Layout;
