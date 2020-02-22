import React from 'react';
import Navigation from '../../components/Menu';
import Footer from '../../components/Footer';

const Layout = ({ children }) => (
    <div>
        <Navigation />
        {children}
        <Footer />
    </div>
);

export default Layout;