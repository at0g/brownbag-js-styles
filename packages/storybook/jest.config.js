module.exports = {
    bail: true,
    transform: {
        '\\.js$': require.resolve('babel-jest'),
    },
};
