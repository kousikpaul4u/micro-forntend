import React, { Component } from "react";
import HeaderApp from "containers/index";

import $ from "jquery";
window.jQuery = window.$ = $;

class App extends Component {

  render() {
    return (
      <div className="app-main-container">
        <HeaderApp />
      </div>
    );
  }

}

export default App;
