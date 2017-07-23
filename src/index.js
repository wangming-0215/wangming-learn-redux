import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store'
import App from './app';
import './index.scss';

let root = document.getElementById('root');
if (!root) {
    root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);
}

const store = configureStore();


const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component store={store} />
        </AppContainer>,
        root
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./app', () => { render(App) });
}
