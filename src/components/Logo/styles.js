import { css } from 'styled-components';
import theme from '../../config/theme.json';

export default css`
    display: flex;
    align-items: center;

    a {
        font-size: 1.5rem;
        font-weight: 500;
        margin-left: ${theme.spacing.xs}px;

        ${({ active }) => (active
    ? `color: ${theme.colors.grayScale.light};`
    : `color: ${theme.colors.primary.red};`)
}
    }
`;
