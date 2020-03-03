import { css } from 'styled-components';
import theme from '../../config/theme.json';
import { minMediaQuery } from '../../config/grid.js';

const boxSizeMobile = '120px';
const boxSizeTablet = '200px';
const boxSizeDesktop = '250px';

export default css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${({ bgImg }) => bgImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: ${theme.spacing.md}px;
    position: relative;
    width: ${boxSizeMobile};
    height: ${boxSizeMobile};
    margin: ${theme.spacing.xs}px;
    border-radius: 4px;
    box-shadow: ${theme.shadow.primary};
    z-index: 1;

    span {
        color: white;
        font-size: 20px;
        letter-spacing: 4px;
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        transition: ${theme.animations.default};
    }

    :after {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        z-index: -1;
        background-color: rgba(0,0,0, .5);
        transition: ${theme.animations.default};
    }

    :hover, :focus {
        span {
            letter-spacing: 2px;
            background-color: ${theme.colors.grayScale.dark};
            padding: ${theme.spacing.xs}px;
            box-shadow: ${theme.shadow.primary};
        }

        :after {
            background-color: transparent;
        }
    }

    ${minMediaQuery('md')} {
        width: ${boxSizeTablet};
        height: ${boxSizeTablet};
        margin: ${theme.spacing.sm / 2}px;
    }

    ${minMediaQuery('lg')} {
        width: ${boxSizeDesktop};
        height: ${boxSizeDesktop};
    }
`;