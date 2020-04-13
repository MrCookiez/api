import { css } from 'styled-components';

export default css`
    display: flex;
    flex-direction: row;

    .blog__side-menu {
        width: 25%;
        background-color: #ccc;
    }

    .blog__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        background-color: #ddd;
    }

    .blog__ads {
        width: 25%;
        background-color: #eee;
    }
`;
