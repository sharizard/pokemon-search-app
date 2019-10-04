import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

(window as any).Pokemons = {
    mount: () => {
        ReactDOM.render(<App />, document.getElementById('pokemons'));
    },
    unmount: () => {
        const element = document.getElementById('pokemons');
        if (element) {
            ReactDOM.unmountComponentAtNode(element);
        }
    }
};

// ReactDOM.render(<App />, document.getElementById('pokemons'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
