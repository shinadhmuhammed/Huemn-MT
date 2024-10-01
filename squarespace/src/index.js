import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ErrorBoundary } from "react-error-boundary";
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer } from 'react-toastify';
import ErrorFallback from "./Utils/ErrorFallback.js";
import { Provider } from "react-redux";
import store from "./Redux/Store/Store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => console.log("Error Reset")}
    >
      <App />
      <ToastContainer />
    </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);
