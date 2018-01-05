import React from 'react';
import { ThemeProvider } from 'glamorous';
import theme from '@brownbag-js-styles/theme';

export default function glamorousTheme(story) {
    return (
        <ThemeProvider theme={theme}>
            {story()}
        </ThemeProvider>
    );
}
