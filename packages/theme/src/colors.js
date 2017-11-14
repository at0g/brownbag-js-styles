import colorPair from 'color-pairs-picker';

const palette = [
    '#011627',
    '#FF3366',
    '#2EC4B6',
    '#F6F7F8',
    '#20A4F3',
];

export default Object.freeze({
    palette,
    ...palette.reduce((memo, color, index) => ({
        ...memo,
        // use a 1 based index rather than 0
        [`color${index + 1}`]: colorPair(color),
    }), {}),
});
