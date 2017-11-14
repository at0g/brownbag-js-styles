/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import withFela from './decorators/fela';

// Make a webpack require context of all files in components (recursive) ending with .stories.js
const req = require.context('../src', true, /\.stories\.js$/);

addDecorator(withKnobs);
addDecorator(withFela);

function loadStories() {
    return req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
