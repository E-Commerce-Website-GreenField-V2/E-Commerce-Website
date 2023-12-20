import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetailsPage from "./components/ProductDetails.jsx";
import Account from "./components/Account.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/account" element={<Account />} />
        <Route path="/ProductDetails" element={<ProductDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
