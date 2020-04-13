import { css } from 'styled-components';
import theme from '../../config/theme.json';

export default css`
    background-color: ${theme.colors.secondary.lightGreen};

    .post__wrapper {
        display: flex;
        flex-direction: column;
        max-width: 720px;
        padding: 20px;
        margin: 10px auto;
    }

    .post__header {
        font-size: 32px;
        text-transform: uppercase;
        margin: 0;
        color: ${theme.colors.grayScale.dark};
    }

    .post__text {
        font-size: 20px;
    }
`;
