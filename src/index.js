import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
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
    <App />
    , document.getElementById(`${env.APP_NAME}`));

serviceWorker.unregister();
