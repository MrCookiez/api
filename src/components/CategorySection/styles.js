import { css } from 'styled-components';
import theme from '../../config/theme.json';
import { minMediaQuery } from '../../config/grid';

export default css`
    margin: auto;
    margin: ${theme.spacing.xl * 2}px auto;
    max-width: 960px;

    .category-container {
        display: flex;
        justify-content: center;
    }

    h2 {
        text-align: center;
        font-size: ${theme.font.size.four};
        font-weight: ${theme.font.weight.light};

        ${minMediaQuery('md')} {
            font-size: ${theme.font.size.three};
            font-weight: ${theme.font.weight.light};
        }

        ${minMediaQuery('lg')} {
            font-size: ${theme.font.size.two};
            font-weight: ${theme.font.weight.light};
        }
    }
`;
