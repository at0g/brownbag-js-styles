/* eslint-env browser */
// This file is just a wrapper for react HMR.
import React from 'react';
import { render as renderToDOM } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';

const render = (Component) => {
    renderToDOM(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app'),
    );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/App', () => render(App));
}
