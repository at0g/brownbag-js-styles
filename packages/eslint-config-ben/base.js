module.exports = {
    // parse with babel-eslint for support of:
    // - experimental features (eg. babel-preset-stage-1)
    // - custom resolve rules
    parser: require.resolve('babel-eslint'),
    // expect es6 modules
    parserOptions: {
        sourceType: 'module',
        allowImportExportEverywhere: false,
    },
    extends: [
        'airbnb/base',
    ],
    rules: {
        // don't ship with debugger;
        'no-debugger': 1,
        // always comma dangle on multiline to reduce git diffs
        'comma-dangle': ['error', 'always-multiline'],
        // 4 spaces indent
        indent: ['error', 4, {
            SwitchCase: 1,
        }],
        // 150 char max line length
        'max-len': ['error', 150],
        // error if there are unused vars, unless they are extracted as part of { ...rest }
        'no-unused-vars': ['error', {
            ignoreRestSiblings: true,
        }],
        // always terminate statements with commas
        semi: ['error', 'always'],
        // error on unresolved imports
        'import/no-unresolved': ['error', {
            caseSensitive: true,
        }],
        'import/no-named-as-default': 0,
        // error if there are unused dependencies in package.json
        'import/no-extraneous-dependencies': ['error', {
            devDependencies: true,
            optionalDependencies: true,
            peerDependencies: true,
        }],
    },
};
