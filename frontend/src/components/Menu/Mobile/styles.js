import { css } from 'styled-components';
import theme from '../../../config/theme.json';

const navBarHeight = 60;

export default css`
    .nav-bar {
        display: flex;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        background-color: ${theme.colors.grayScale.light};
        z-index: 3;
        width: 100%;
        height: ${navBarHeight}px;
        box-shadow: ${theme.shadow.primary};

        .logo {
            width: 100%;
            display: flex;
            justify-content: center;
        }

        .burger {
            justify-self: flex-end;
        }
    }

    .side-menu-wrapper {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: ${theme.colors.primary.darkRed};
        transform: translateX(${({ active }) => active ? '0' : '-100%' });
        z-index: 2;
        transition: .3s ease-in-out;
    }

    .side-menu-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

        .links-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            min-width: 200px;

            .line {
                margin: ${theme.spacing.xs}px auto;
                background-color: ${theme.colors.grayScale.light};
                width: 100%;
                height: 2px;
                box-shadow: ${theme.shadow.primary};
            }
        }

        a {
            cursor: pointer;
            letter-spacing: 5px;
            text-transform: uppercase;
            font-size: 18px;
            margin: ${theme.spacing.sm}px 0;
            color: ${theme.colors.grayScale.light};
            transition: .3s ease-in-out;

            :active, :hover, :focus {
                opacity: .5;
                letter-spacing: 3.5px;
            }
        }
    }
`;
