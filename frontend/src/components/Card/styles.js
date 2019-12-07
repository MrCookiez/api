import { css } from 'styled-components';
import theme from '../../config/theme.json';

export const wrapper = css`
    padding: ${theme.spacing.lg}px;
    border: 2px solid ${theme.colors.red};
    position: relative;
    /* adjust later */
    max-width: 600px;
    height: 150px;
    background: #fff;
    box-shadow: 0 0 15px rgba(0,0,0,.1);
`;

export const offer = css`
    color: ${theme.colors.white};
    width: 150px;
    height: 150px;
    overflow: hidden;
    position: absolute;
    top: -10px;
    left: -10px;
    border-top-color: transparent;
    border-left-color: transparent;

    &::before, &::after {
        position: absolute;
        z-index: -1;
        content: '';
        display: block;
        border: 5px solid ${theme.colors.red};
    }

    &::before {
        top: 0;
        right: 0;
    }

    &::after {
        bottom: 0;
        left: 0;
    }

    span {
        position: absolute;
        display: block;
        width: 225px;
        padding: 15px 0;
        background-color: ${theme.colors.red};
        box-shadow: 0 5px 10px rgba(0,0,0,.1);
        color: #fff;
        font: 700 18px/1 'Lato', sans-serif;
        text-shadow: 0 1px 1px rgba(0,0,0,.2);
        text-transform: uppercase;
        text-align: center;
        right: -25px;
        top: 30px;
        transform: rotate(-45deg);
    }
`;

export const body = css`

`;

