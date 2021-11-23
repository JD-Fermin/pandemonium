import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root"
import configureStore from "./store/store"
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    }
  }
  const store = configureStore(preloadedState);
  //Uncomment for dev
  ReactDOM.render(<Root store={store}/>, root);
  // ReactDOM.render(<h1>Hello World</h1>,root)

});