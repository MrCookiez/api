import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import styles from './styles';

const CustomButton = ({ className, label, to }) => (
    <NavLink className={className} css={styles} to={to}>
        <Button>
            {label}
        </Button>
    </NavLink>
);

CustomButton.defaultProps = {
    className: '',
};

CustomButton.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

export default CustomButton;