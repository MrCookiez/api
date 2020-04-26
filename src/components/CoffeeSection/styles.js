import { css, keyframes } from 'styled-components';
import theme from '../../config/theme.json';
import { minMediaQuery } from '../../config/grid';

const animation = keyframes`
    {
        0% { transform: translateY(0); }

        50% { transform: translateY(5px); }

        100% { transform: translateY(10px); }
    }
`;

const mobileStyles = css`
position: relative;
    .mobile-coffee-wrapper {


        .block-container {
            background-color: ${theme.colors.secondary.lightGreen};
            padding: ${theme.spacing.md}px;
            margin: 0 ${theme.spacing.md}px;


            .text-block {
                margin-bottom: ${theme.spacing.lg}px;
            }
        }

        .coffee-cup {
            position: absolute;
            max-width: 80px;
            top:75%;
            right: ${theme.spacing.xl}px;
            animation: ${animation} 1.5s linear infinite alternate;
        }
    }
`;

const desktopStyles = css`
    ${minMediaQuery('md')} {
        margin: ${theme.spacing.md * 2}px 0;
        padding: ${theme.spacing.md * 2}px;

        .desktop-coffee-wrapper {
            .img-wrapper {
                display: flex;
                justify-content: flex-end;
                transform: translate(20px, -40px);

                img {
                    border-radius: 4px;
                    max-width: 480px;
                    box-shadow: ${theme.shadow.primary};
                }
            }

            .block-container {
                display: flex;
                justify-content: center;
                align-items: flex-start;
                flex-direction: column;
                padding: ${theme.spacing.lg * 1.5}px;
                background-color: ${theme.colors.secondary.lightGreen};
                box-shadow: ${theme.shadow.primary};
                border-radius: ${theme.radius.primary}px;
                position: relative;

                .text-block {
                    margin-bottom: ${theme.spacing.lg}px;
                }

                h2 {
                    font-weight: ${theme.font.weight.light};
                }

                button {
                    justify-self: flex-start;
                }

                svg {
                    position: absolute;
                    bottom: 40px;
                    right: 40px;
                    transform: rotate(25deg);
                    animation: ${animation} 1.5s linear infinite alternate;
                }
            }
        }
    }

    ${minMediaQuery('lg')} {
        margin: ${theme.spacing.xl * 2}px 0;
        padding: ${theme.spacing.xl * 2}px;
    }
`;

export default css`
    margin: ${theme.spacing.xs}px auto;
    padding: ${theme.spacing.xs}px;
    /* background-color: ${theme.colors.primary.lightRed}; */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    /* box-shadow: ${theme.shadow.primary}; */
    color: ${theme.colors.grayScale.dark};

    ${mobileStyles}

    ${desktopStyles}
`;
