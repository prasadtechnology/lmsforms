import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import "./App.css";
import CredTableComponent from "./components/CredTableComponent";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <CredTableComponent />
        </div>
      </Provider>
    );
  }
}

export default App;
