import React from 'react';
import 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import House from '../../Icons';
import Container from '../../Container';
import styles from './styles';

const DesktopNav = () => {
    return (
        <Container css={styles}>
            <div className='test'>
               {/* {/* {data.map(item => ( */}
                <NavLink to='/' activeClassName='active' exact><img src={House} alt='house' width={16} />home</NavLink>
                <NavLink to='/register' activeClassName='active' exact>register</NavLink>
               {/* ))}  */}
            </div>
        </Container>
    );
};

export default DesktopNav;
