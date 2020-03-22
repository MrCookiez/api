import { css } from 'styled-components';
import theme from '../../config/theme.json';

export default css`
    button {
        background-color: ${theme.colors.primary.lightRed};
        color: ${theme.colors.grayScale.light};

        :hover {
            background-color: ${theme.colors.primary.red};
        }
    }
`;