module.exports = {
    parser: require.resolve('babel-eslint'),
    parserOptions: {
        sourceType: 'module',
        allowImportExportEverywhere: false,
    },
    extends: [
        'airbnb',
    ],
    settings: {
        'import/resolver': 'webpack',
    },
    rules: {
        'no-debugger': 1,
        'comma-dangle': ['error', 'always-multiline'],
        indent: ['error', 4, {
            SwitchCase: 1,
        }],
        'max-len': ['error', 150],
        'no-unused-vars': ['error', {
            ignoreRestSiblings: true,
            varsIgnorePattern: 'React',
        }],
        semi: ['error', 'always'],
        'import/extensions': 0,
        'import/no-unresolved': ['error', {
            caseSensitive: true,
        }],
        'import/no-named-as-default': 0,
        'import/no-extraneous-dependencies': ['error', {
            devDependencies: true,
            optionalDependencies: true,
            peerDependencies: true,
        }],
        'jsx-a11y/no-hash': 0,

        // React rules
        'jsx-a11y/no-noninteractive-element-interactions': [0],
        'jsx-a11y/label-has-for': [2, {
            components: ['Label'],
            required: {
                some: ['nesting', 'id'],
            },
            allowChildren: true,
        }],
        'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
    },
};
