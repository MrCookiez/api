import { css } from 'styled-components';
import theme from '../../config/theme.json';
import { minMediaQuery } from '../../config/grid';

export const wrapper = css`
    /* position: relative; */
    /* adjust later */
    background-color: white;
    margin: ${theme.spacing.lg}px  auto;
    box-shadow: ${theme.shadow.box};
    box-sizing: border-box;
    transition: box-shadow .2s ease-in-out;

    :hover {
        box-shadow: none;
    }
`;

export const body = css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacing.lg}px;
    width: 100%;
    position: relative;

    ::before {
        content: '';
        position: absolute;
        top: 0;
        left: -10px;
        width: 25px;
        height: 100%;
        background-color: white;
        transform: skewX(-3deg);
    }

    .product-headline {
        display: inline-flex;
        border: 2px solid ${theme.colors.light};
        border-left: none;
        justify-content: space-between;

        span {
            padding: ${theme.spacing.sm}px;
        }
    }

    .product-name {
        font-weight: bold;
    }

    .product-description {
        margin: ${theme.spacing.sm}px 0;
        padding: 0 ${theme.spacing.sm}px;
    }

    .product-price {
        color: ${theme.colors.green};
        background-color: transparent;
        align-self: center;

        ${minMediaQuery('md')} {
            background-color: ${theme.colors.light};
        }
    }

    .product-offer {
        display: flex;
        align-self: flex-start;
        font-size: 12px;
        margin: 0 ${theme.spacing.sm}px;
        padding: ${theme.spacing.xs / 1.5}px;
        text-transform: uppercase;
        color: ${theme.colors.light};
        background-color: ${theme.colors.red};
        border-radius: 2px;
    }

    .product-footer {
        display: flex;
        justify-content: space-between;
        margin: ${theme.spacing.sm}px 0;
        padding: 0 0 0 ${theme.spacing.sm}px;

        /** Remove the arrows from the input cross browser */
        input[type="number"] {
            -webkit-appearance: textfield;
            -moz-appearance: textfield;
            appearance: textfield;
            padding: ${theme.spacing.sm / 2}px;
            text-align: center;
        }

        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button {
            -webkit-appearance: none;
        }

        .add-product {
            border: none;
            border-radius: 2px;
            color: ${theme.colors.light};
            background-color: ${theme.colors.lightGreen};
            padding: ${theme.spacing.xs}px;
            text-transform: uppercase;
            transition: .2s ease-in-out;

            :hover {
                cursor: pointer;
                box-shadow: ${theme.shadow.box};
                background-color: ${theme.colors.green};
            }
        }
    }
`;

export const container = css`
    display: flex;
`;

export const image = css`
    display: block;
    width: 200px;
    min-height: 200px;
    background-image: ${({ bgImage }) => `url(${bgImage})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    ${minMediaQuery('md')} {
        width: 300px;
    }
`;
