import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';

export default class MrtApp extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    ReactDOM.render(<App />, this)
  }
}

customElements.define('app', MrtApp);
