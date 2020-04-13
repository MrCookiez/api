import { css } from 'styled-components';

export default css`
    display: flex;
    flex-direction: column;

    .form__wrapper {
        label {
            font-size: 24px;
            margin: 10px;
            padding: 10px;
            box-sizing: border-box;
        }

        input,
        textarea {
            font-size: 20px;
            border: none;
            margin: 10px 20px;
            padding: 10px;
            width: calc(100% - 40px);
            box-shadow: 5px 4px 3px 2px #00000026;
            box-sizing: border-box;
        }
    }

    .form__container {}

    .form__post__header {}

    .form__post__text {}

    .form__post__author {}
`;
