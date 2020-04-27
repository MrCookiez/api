import { css } from 'styled-components';
import theme from '../../config/theme.json';

const buttonSize = 20;

export default css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: ${theme.spacing.md}px;

    button {
        width: ${buttonSize}px;
        height: ${buttonSize}px;
        display: flex;
        border: none;
        cursor: pointer;
        background-color: transparent;
        transition: .3s ease-in-out;

        :before, span, :after {
            transition: .3s ease-in-out;
            content: '';
            left: 0;
            right: 0;
            position: absolute;
            background-color: ${theme.colors.primary.darkRed};
            width: 100%;
            height: 3px;
        }

        ${({ toggle }) => (
    toggle ? css`
                /** status: not visible */
                :before, :after {
                    display: flex;
                    justify-self: center;
                    align-self: center;
                    margin-bottom: 0;
                    height: 3px;
                }

                :before {
                    transform: rotate(45deg);
                }

                span {
                    opacity: 0;
                    transform: translateY(100%);
                    align-self: center;
                }

                :after {
                    transform: rotate(-45deg);
                }
            `
      : css`
                /** status: visible */
                :before {
                    top: 0;
                }

                span {
                    opacity: 1;
                    align-self: center;
                }

                :after {
                    bottom: 0;
                }
            `
  )}
    }
`;
