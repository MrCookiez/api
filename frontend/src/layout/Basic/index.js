import React from 'react';
import Footer from '../../components/Footer';

const Layout = ({ children }) => (
    <div>
        {children}
        <Footer />
    </div>
);

export default Layout;