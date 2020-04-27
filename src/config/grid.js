/**
 * More information:
 * 1. https://uxplanet.org/responsive-design-best-practices-c6d3f5fd163b
 * 2. https://material.io/design/layout/responsive-layout-grid.html#breakpoints
 */
export const breakpoints = {
  xs: 360,
  sm: 600,
  md: 840,
  lg: 1280,
  xl: 1440,
};

/**
 * @param {String} -> minimum screen size
 * @returns {String} -> css media query
 */
export const minMediaQuery = (str) => {
  let mediaQuery = '';

  switch (str) {
    case 'xs':
      mediaQuery = `@media (min-width: ${breakpoints.xs}px)`;
      break;
    case 'sm':
      mediaQuery = `@media (min-width: ${breakpoints.sm}px)`;
      break;
    case 'md':
      mediaQuery = `@media (min-width: ${breakpoints.md}px)`;
      break;
    case 'lg':
      mediaQuery = `@media (min-width: ${breakpoints.lg}px)`;
      break;
    case 'xl':
      mediaQuery = `@media (min-width: ${breakpoints.xl}px)`;
      break;
    default:
      mediaQuery = '';
      break;
  }

  return mediaQuery;
};
