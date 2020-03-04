import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import styles from './styles';

const CustomButton = ({ label, to }) => (
    <NavLink css={styles} to={to}>
        <Button>
            {label}
        </Button>
    </NavLink>
);

CustomButton.propTypes = {
    label: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

export default CustomButton;