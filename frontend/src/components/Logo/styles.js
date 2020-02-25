import { css } from 'styled-components';
import theme from '../../config/theme.json';

export default css`
    display: flex;
    align-items: center;

    a {
        font-size: 20px;
        font-weight: bold;
        margin-left: ${theme.spacing.xs}px;
        color: ${theme.colors.primary.red};
    }
`;