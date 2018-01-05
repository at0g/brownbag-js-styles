import React from 'react';
import { ThemeProvider } from 'react-fela';
import theme from '@brownbag-js-styles/theme';

export default function felaTheme(story) {
    return (
        <ThemeProvider theme={theme}>
            {story()}
        </ThemeProvider>
    );
}
