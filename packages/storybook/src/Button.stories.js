import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { object, text } from '@storybook/addon-knobs';
import Button from '@brownbag-js-styles/button';

const createCommonProps = () => ({
    onClick: action('onClick'),
    ...object('...props', {}),
});

export default storiesOf('Button', module)
    .add('basic example', () => (
        <Button {...createCommonProps()}>
            {text('children', 'Click me!')}
        </Button>
    ))
    .add('with label as children', () => (
        <Button
            {...createCommonProps()}
            label={text('label', 'Label as children')}
        />
    ))
    .add('label and children', () => (
        <Button
            {...createCommonProps()}
            label={text('label', 'Label as children')}
        >
            {text('children', 'children win!')}
        </Button>
    ));
