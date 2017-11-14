const BREAKPOINT_SM = 639;
const BREAKPOINT_MD = 959;
const BREAKPOINT_LG = 1199;

const breakpoints = {
    xs: '@media screen and (min-width: 0px)',
    xsOnly: `@media screen and (max-width: ${BREAKPOINT_SM - 1}px)`,
    sm: `@media screen and (min-width: ${BREAKPOINT_SM}px)`,
    smOnly: `@media screen and (min-width: ${BREAKPOINT_SM}px) and (max-width: ${BREAKPOINT_MD - 1}px)`,
    md: `@media screen and (min-width: ${BREAKPOINT_MD}px)`,
    mdOnly: `@media screen and (min-width: ${BREAKPOINT_MD}px) and (max-width: ${BREAKPOINT_LG - 1}px)`,
    lg: `@media screen and (min-width: ${BREAKPOINT_LG}px)`,
};

const mediaQueryOrder = [
    breakpoints.xs,
    breakpoints.sm,
    breakpoints.md,
    breakpoints.lg,
    breakpoints.xsOnly,
    breakpoints.smOnly,
    breakpoints.mdOnly,
].map(mq => mq.replace(/^@media /, ''));

export {
    breakpoints as default,
    mediaQueryOrder,
};
