/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { felaProvider, felaTheme, glamorousTheme }  from './decorators';

addDecorator(withKnobs);
addDecorator(felaProvider);
addDecorator(felaTheme);
addDecorator(glamorousTheme);

// Make a webpack require context of all files in src (recursive) ending with .stories.js
const req = require.context('../src', true, /\.stories\.js$/);

function loadStories() {
    return req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
