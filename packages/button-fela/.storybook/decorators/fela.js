import React from 'react';
import { createRenderer } from 'fela';
import { Provider, ThemeProvider } from 'react-fela'
import theme from '@brownbag-js-styles/theme';

const renderer = createRenderer();

export default story => (
    <Provider renderer={renderer}>
        <ThemeProvider theme={theme}>
            {story()}
        </ThemeProvider>
    </Provider>
);
