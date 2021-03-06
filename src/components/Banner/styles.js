import { css } from 'styled-components';
import theme from '../../config/theme.json';

export default css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: ${theme.spacing.sm}px 0;
    background-color: ${theme.colors.grayScale.dark};
    box-shadow: ${theme.shadow.primary};
`;
