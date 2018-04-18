import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from "./js/store/indexStore";
import { addArticle } from "./js/actions/indexActions";
import { Provider } from "react-redux";

ReactDOM.render(
    
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
