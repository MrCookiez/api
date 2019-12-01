import { css } from 'styled-components';

export const card = css`
    border: 2px solid #336699;
    display: flex;

    .name, .category, .price, .description {
        padding: 5px;
    }
    .name {
        color: ${({ color }) => color && css` color: ${color}`};
    }
    .price {
        background-color: gold;
    }
`;