import { css } from 'styled-components';
import theme from '../../config/theme.json';
import { minMediaQuery } from '../../config/grid.js';

export default css`
    ${minMediaQuery('lg')} {
        margin: auto ${theme.spacing.lg}px;
    }
`;