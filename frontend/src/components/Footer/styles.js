import { css } from 'styled-components';
import theme from '../../config/theme.json';

export default css`
    padding: 3.2rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        a {
            text-align: center;
        }
    }
`;