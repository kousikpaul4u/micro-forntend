import ReactDOM from 'react-dom';
import React from 'react';
import App from 'components/App';
import env from "env.config";

export default class HeaderApp extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    ReactDOM.render(<App />, this)
  }

}

customElements.define(`${env.APP_NAME}`, HeaderApp);
