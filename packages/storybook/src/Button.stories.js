import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, object, select } from '@storybook/addon-knobs';
import CSSButton from '@brownbag-js-styles/button-css';
import FelaButton from '@brownbag-js-styles/button-fela';
import GlamorousButton from '@brownbag-js-styles/button-glamorous';

const createCommonProps = () => ({
    onClick: action('onClick'),
    ...object('...props', {}),
    disabled: boolean('disabled', false),
    size: select('size', ['small', 'medium', 'large'], 'medium'),
    variant: select(
        'variant',
        ['default', 'danger', 'primary', 'secondary', 'warn'],
        'default',
    ),
});

export default storiesOf('Button', module)
    .add('CSS example', () => (
        <CSSButton {...createCommonProps()}>
            A CSS button (inspect className)
        </CSSButton>
    ))
    .add('Fela example', () => (
        <FelaButton {...createCommonProps()}>
            Fela button
        </FelaButton>
    ))
    .add('Glamorous example', () => (
        <GlamorousButton {...createCommonProps()}>
            Glamorous Button
        </GlamorousButton>
    ));
