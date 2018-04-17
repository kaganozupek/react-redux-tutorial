import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from "./js/store/indexStore";
import { addArticle } from "./js/actions/indexActions";
window.store = store;
window.addArticle = addArticle;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
