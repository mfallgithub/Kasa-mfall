//react Framework
import React from "react";
import { Redirect } from 'react-router';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ReactDOM from "react-dom";
//style by Sass Partials
import "./styles/style.css";

//pages by React BrowserRouter
import Home from "./pages/Home";
import About from "./pages/About";
import Singleproduct from "./pages/Accommodation";
import Error from "./pages/Error";

//components Header && Footer
import StyledNavbar from "./components/Header/StyledNavbar";
import Footer from "./components/Footer";
import PageNotFound from "./pages/Error";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StyledNavbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="products/:productId" element={<Singleproduct />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
