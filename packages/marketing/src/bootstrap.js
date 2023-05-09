import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Mount function to start up the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// check if we are in development and in isolation
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("._marketing-dev-root");

  if (devRoot) {
    // call mount immediately
    mount(devRoot);
  }
}

// mount is exported to be utilised by the container to run
export { mount };
