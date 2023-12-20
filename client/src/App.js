import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/authentification/Login.jsx";
import ProductDetailsPage from "./components/products/ProductDetails.jsx";
import Account from "./components/user/Account.jsx";
import "./App.css";
import Contact from "./components/static/Contact.jsx";
import About from "./components/static/About.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/account" element={<Account />} />
        <Route path="/ProductDetails" element={<ProductDetailsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
