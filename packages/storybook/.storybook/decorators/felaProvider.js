import React from 'react';
import { createRenderer } from 'fela';
import { Provider } from 'react-fela';

const renderer = createRenderer();

export default function felaProvider(story) {
    return (
        <Provider renderer={renderer}>
            {story()}
        </Provider>
    );
}
