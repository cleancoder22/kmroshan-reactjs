import React from "react";
import ReactDOM from "react-dom/client";

import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Layout from "./layout/Layout";

const queryClient = new QueryClient();

const options = {
  position: positions.TOP_CENTER,
  timeout: 4000,
  offset: "30px",
  transition: transitions.SCALE,
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <AlertProvider template={AlertTemplate} {...options}>
            <App />
          </AlertProvider>
        </Layout>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
