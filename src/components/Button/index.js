import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import styles from './styles';

const CustomButton = ({
  className, label, to, type,
}) => (
  to ? (
    <NavLink className={className} css={styles} to={to}>
      <Button>
        {label}
      </Button>
    </NavLink>
  ) : (
    <button type={type}>{label}</button>
  )
);

CustomButton.defaultProps = {
  className: '',
  type: '',
  to: '',
};

CustomButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  to: PropTypes.string,
  type: PropTypes.string,
};

export default CustomButton;
