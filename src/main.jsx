import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { makeServer } from "./server.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { CookiesProvider } from "react-cookie";

// Call make Server
makeServer();

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CookiesProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </CookiesProvider>
  </BrowserRouter>
);
