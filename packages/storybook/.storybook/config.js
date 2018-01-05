/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import { configure, addDecorator, setAddon } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { felaProvider, felaTheme, glamorousTheme }  from './decorators';
import chaptersAddon, { setDefaults } from 'react-storybook-addon-chapters';

setDefaults({
    sectionOptions: {
        showSource: false,
        allowSourceToggling: true,
        showPropTables: false,
        allowPropTablesToggling: true,
    },
});
setAddon(chaptersAddon);

addDecorator(withKnobs);
// addDecorator(cssDecorator);
addDecorator(felaProvider);
addDecorator(felaTheme);
addDecorator(glamorousTheme);

// Make a webpack require context of all files in src (recursive) ending with .stories.js
const req = require.context('../src', true, /\.stories\.js$/);

function loadStories() {
    return req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
