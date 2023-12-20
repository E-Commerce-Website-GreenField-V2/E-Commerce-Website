import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetailsPage from "./components/products/ProductDetails.jsx";
import Account from "./components/user/Account.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
