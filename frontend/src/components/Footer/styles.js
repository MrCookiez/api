import { css } from 'styled-components';
import theme from '../../config/theme.json';

export default css`
    padding: 3.2rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    background-color: ${theme.colors.grayScale.dark};
    text-align: center;
    
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        p {
            color: ${theme.colors.grayScale.light};
        }

        a {
            text-align: center;
            color: ${theme.colors.secondary.darkGreen};
        }

        ul {
            padding: ${theme.spacing.md}px 0;
            list-style: none;
            display: flex;
            justify-content: center;
            text-transform: uppercase;

            li {
                padding: 0 ${theme.spacing.md}px;
            }

            li:not(:last-child) {
                border-right: 2px solid ${theme.colors.primary.red};
            }
        }
    }
`;