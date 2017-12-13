module.exports = {
    extends: [
        'airbnb',
        './base.js',
    ],
    env: {
        es6: true,
        jest: true,
        'shared-node-browser': true,
    },
    rules: {
        'no-unused-vars': ['error', {
            ignoreRestSiblings: true,
            varsIgnorePattern: 'React',
        }],
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
