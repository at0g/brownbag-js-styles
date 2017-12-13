import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import Button from './Button';

export default storiesOf('Button', module)
    .add('defaults', () => (
        <Button onClick={action('click')}>
            {text('children', 'example children')}
        </Button>
    ));
