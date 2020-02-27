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
            margin: ${theme.spacing.sm}px;

            :hover {
                transform: scale(1.1);
            }

            a {
                font-weight: bold;
                color: ${theme.colors.grayScale.dark};
                opacity: 0.7;

                :hover {
                    color: ${theme.colors.primary.red};
                }
            }

            .active {
                opacity: 1;
            }
        }
    }

`;