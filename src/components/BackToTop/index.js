import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';
import styles from './styles';

const BackToTop = ({ toTop }) => (
    <button css={styles} onClick={toTop}>
        <svg viewBox="5 5 110 110">
            <path d="M110,60c0,27.6-22.4,50-50,50c-27.6,0-50-22.4-50-50c0-27.6,22.4-50,50-50C87.6,10,110,32.4,110,60z"></path>
        </svg>
    </button>
);

BackToTop.defaultProps = {
    toTop: () => {},
};

BackToTop.propTypes = {
    toTop: PropTypes.func,
};

export default BackToTop;
