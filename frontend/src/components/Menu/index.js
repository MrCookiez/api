import React from 'react';
import Media from 'react-media';
import DesktopNav from './Desktop';
import MobileNav from './Mobile';
import { breakpoints } from '../../config/grid';

const Navigation = () => (
    <Media query={`(max-width: ${breakpoints.sm}px`}>
        {match => match ? <MobileNav />  : <DesktopNav />}
    </Media>
);

export default Navigation;
