import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';
import './index.scss';

let root = document.getElementById('root');
if (!root) {
    root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);
}

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        root
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./app', () => { render(App) });
}
