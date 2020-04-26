import { css } from 'styled-components';
import theme from '../../../config/theme.json';

export default css`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    box-shadow: ${theme.shadow.primary};
    min-height: 80px;

    .desktop-menu-container {
        display: flex;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;
        list-style: none;

        li {
            transition: ${theme.animations.default};
            padding: ${theme.spacing.sm}px;

            .active {
                opacity: 1;
            }

            a {
                font-weight: bold;
                color: ${theme.colors.grayScale.dark};
                opacity: 0.7;
            }

            :hover {
                border-radius: 3px;
                transform: scale(1.1);

                a {
                    color: ${theme.colors.primary.red};
                }
            }
        }
    }

`;
