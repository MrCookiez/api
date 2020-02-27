import { css } from 'styled-components';
import theme from '../../config/theme.json';

const buttonSize = '55px';

export default css`
    position: fixed;
    bottom: ${buttonSize};
    right: ${buttonSize};
    background: transparent;
    border: none;
    box-shadow: none;
    outline: none !important;
    cursor: pointer;
    margin: 0;
    padding: 0;

    :hover {
        :before {
            transition: ${theme.animations.default};
            top: 12px;
        }
    }
    :before {
        display: block;
        content: '';
        width: 12px;
        height: 12px;
        position: absolute;
        transform: translate(50%, 50%) rotate(45deg);
        border-left: 4px solid white;
        border-top: 4px solid white;
        left: 12px;
        top: 16px;
        transition: ${theme.animations.default};
    }

    > * {
        pointer-events: none;
    }

    svg path {
        transition: 0.4s cubic-bezier(.4,2.08,.45,.24);
        fill: ${theme.colors.secondary.darkGreen};
    }

    :active svg path {
        d: path("M96,60c0,27.6-8.4,53-36,53c-27.6,0-36-25.4-36-53c0-27.6,8.4-53,36-53C87.6,7,96,32.4,96,60z");
        transition: 0.1s cubic-bezier(0.17, 0.67, 0.48, 1.28);

    }

    :active svg {
        box-shadow: none;
    }

    svg {
        width: ${buttonSize};
        border-radius: 50%;
        box-shadow: ${theme.shadow.primary};
    }
`;