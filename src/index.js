import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './App';
import initializeStore from "store/index";
import * as serviceWorker from './serviceWorker';
import env from "env.config";
import 'bootstrap-daterangepicker';
import 'styles/style.css';
import 'admin-lte/dist/css/AdminLTE.css';
import 'admin-lte/dist/css/skins/_all-skins.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import $ from "jquery";
window.jQuery = window.$ = $;

ReactDOM.render(
    <Provider store={initializeStore()}>
        <App />
    </Provider>
    , document.getElementById(`${env.APP_NAME}`));

serviceWorker.unregister();
