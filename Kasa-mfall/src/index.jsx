//react Framework
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ReactDOM from "react-dom";
//style by Sass Partials
import "./main.css";

//pages by React BrowserRouter
import Home from "./pages/Home";
import About from "./pages/About";
import Singleproduct from "./pages/Accommodation";
import Error from "./pages/Error";

//components Header && Footer
import StyledNavbar from "./components/Header/StyledNavbar";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StyledNavbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/propos" element={<About />} />
        <Route path="products/:productId" element={<Singleproduct />} />
        <Route path="/kaza" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
