import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MovieProvider } from "./context/MovieContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MovieProvider>
      <App />
    </MovieProvider>
  </BrowserRouter>
);
