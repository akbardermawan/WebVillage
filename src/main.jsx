import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import router from "./common/router";

import { Provider } from "react-redux";
import store from "./common/store/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
