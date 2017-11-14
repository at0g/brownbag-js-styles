/*eslint-env browser */
import React from 'react';
import Button from './Button';

export default () => (
    <main>
        <Button onClick={() => alert('hello')}>Here for the clicking</Button>
    </main>
);
