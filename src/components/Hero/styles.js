import { css } from 'styled-components';
import theme from '../../config/theme.json';
import { minMediaQuery } from '../../config/grid';
import burgerBg from './img/burger-and-fries.jpg';

export default css`
    height: 450px;
    background-image: url(${burgerBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${minMediaQuery('lg')} {
        background-position: 0 -420px;
    }

    :before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .6);
    }

    h1 {
        text-transform: uppercase;
        color: ${theme.colors.grayScale.light};
        font-size: ${theme.font.size.three};

        ${minMediaQuery('md')} {
            font-size: ${theme.font.size.two};
        }

        ${minMediaQuery('lg')} {
            font-size: ${theme.font.size.one};
        }

        z-index: 1;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        span {
            display: flex;
            flex-wrap: wrap;
            color: ${theme.colors.secondary.lightGreen};

            :before {
                display: none;

                ${minMediaQuery('sm')} {
                    content: '';
                    height: 80%;
                    width: 2px;
                    display: inline-block;
                    margin: auto ${theme.spacing.sm}px;
                    background-color: ${theme.colors.grayScale.light};
                }
            }
        }
    }
`;
