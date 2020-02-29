import { css } from 'styled-components';
import theme from '../../config/theme.json';
import { minMediaQuery } from '../../config/grid.js';

export default css`
    height: 450px;
    background-image: url('https://i.picsum.photos/id/876/1440/450.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    :before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);

    }

    h1 {
        text-transform: uppercase;
        color: ${theme.colors.grayScale.light};
        z-index: 1;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        span {
            display: flex;
            flex-wrap: wrap;
            color: ${theme.colors.primary.lightRed};

            :before {
                display: none;

                ${minMediaQuery('md')} {
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
