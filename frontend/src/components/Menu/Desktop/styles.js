import { css } from 'styled-components';
import theme from '../../../config/theme.json';

export default css`
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    width: 100%;

    .container {
        border: 1px solid ${theme.colors.red};
        justify-content: space-evenly;
    }
`;