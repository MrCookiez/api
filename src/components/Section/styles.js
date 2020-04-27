import { css } from 'styled-components';
import theme from '../../config/theme.json';

export default css`
    h1, h2, h3 {
        display: flex;
        justify-content: center;
        font-weight: ${theme.font.weight.light};
    }
`;
