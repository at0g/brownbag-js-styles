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
    .addWithChapters('Styles', {
        chapters: [
            {
                title: 'Vanilla CSS',
                sections: [
                    {
                        sectionFn: () => (
                            <CSSButton {...createCommonProps()}>
                                A CSS button (inspect className)
                            </CSSButton>
                        ),
                    },
                ],
            },
            {
                title: 'Fela',
                sections: [
                    {
                        sectionFn: () => (
                            <FelaButton {...createCommonProps()}>
                                Fela button
                            </FelaButton>
                        ),
                    },
                ],
            },
            {
                title: 'Glamorous',
                sections: [
                    {
                        sectionFn: () => (
                            <GlamorousButton {...createCommonProps()}>
                                Glamorous Button
                            </GlamorousButton>
                        ),
                    },
                ],
            },
        ],
    });
