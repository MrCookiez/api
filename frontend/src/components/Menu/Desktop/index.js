import React from 'react';
import 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import House from '../../Icons';
import styles from './styles';

const DesktopNav = () => {
    return (
        <div css={styles}>
            <div className="container">
               {/* {/* {data.map(item => ( */}
                <NavLink to='/' activeClassName='active' exact><img src={House} alt='house' width={16} />home</NavLink>
                <NavLink to='/register' activeClassName='active' exact>register</NavLink>
               {/* ))}  */}
            </div>
        </div>
    );
};

export default DesktopNav;
