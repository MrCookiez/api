/**
 * More information: https://uxplanet.org/responsive-design-best-practices-c6d3f5fd163b
 * Currently the idea is to keep things simple and use 3 breakpoints ( mobile, tablet, desktop )
 */
const breakpoints = {
    min: {
        sm: 320,
        md: 720,
        lg: 1024,
    }
}

/**
 * @param {String} - get a string
 * returns a min media query string
 */
export const minMediaQuery = (str) => {
    let mediaQuery = '';

    switch (str) {
        case 'sm':
            mediaQuery = `@media (min-width: ${breakpoints.min.sm}px)`;
            break;
        case 'md':
            mediaQuery = `@media (min-width: ${breakpoints.min.md}px)`;
            break;
        case 'lg':
            mediaQuery = `@media (min-width: ${breakpoints.min.lg}px)`;
            break;
        default:
            mediaQuery = '';
            break;
    };

    return mediaQuery;
}