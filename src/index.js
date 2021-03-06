import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/products/:site" component={Products} />
    <Route exact path="/products/:site/:product" component={ProductPage} />
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
