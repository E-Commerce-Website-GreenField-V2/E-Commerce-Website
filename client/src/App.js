import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./components/authentification/Login.jsx";
import Register from "./components/authentification/Register.jsx";
// import ProductDetailsPage from "./components/products/ProductDetails.jsx";
// import Account from "./components/user/Account.jsx";
import "./App.css";
import Contact from "./components/static/Contact.jsx";
import About from "./components/static/About.jsx";
import NotFound from "./components/static/NotFound.jsx";
import { AuthProvider } from "./Context/authContext.jsx";
import WishItemsProvider from "./Context/WishItemsProvider.js";
import CartItemsProvider from "./Context/CartItemsProvider.js";
import { UserIdProvider } from './Context/userContext.js'
import ManageAccount from "./components/Account/ManageAccount/ManageAccount.js";
import MyAccount from "./components/Account/MyAccount/MyAccount.js";
import Shop from "../src/components/Shop/Shop.js";
import CategoryView from "../src/routes/CategoryView.jsx";
import Header from "./components/Header/Header.js";
import Admin from "../src/components/Admin/Admin.jsx";
import ProductDetails from './components/products/ProductDetails.jsx'

import Footer from "./components/Footer/Footer";
import Home from "./routes/Home.jsx";
import ItemView from "./routes/ItemView.jsx";
import Wishlist from "./components/Wishlist/index.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <AuthProvider>
       <UserIdProvider>
      <CartItemsProvider>
        <WishItemsProvider>
          <Router>
            <Header />
            <Routes>
              <Route index element={<Home />} />
              <Route path="/account">
                <Route index element={<Login />} />
                <Route path="me" element={<MyAccount />} />
                <Route path="manage" element={<ManageAccount />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
              </Route>
              <Route path="/shop" element={<Shop />} />
              <Route path="/category">
                <Route path=":id" element={<CategoryView />} />
              </Route>
              <Route path="/item">
                <Route path="/item/men">
                  <Route path=":id" element={<ItemView />} />
                </Route>
                <Route path="/item/women">
                  <Route path=":id" element={<ItemView />} />
                </Route>
                <Route path="/item/kids">
                  <Route path=":id" element={<ItemView />} />
                </Route>
                <Route path="/item/featured">
                  <Route path=":id" element={<ItemView />} />
                </Route>
              </Route>
              <Route path="/wishlist" element={<Wishlist />} />
              {/* <Route path="/search/*" element={<SearchView />} /> */}

              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>

            <Routes>
              <Route path="/admin" element={<Admin />} />
              <Route path="/ProductDetails" element={<ProductDetails />} />
            </Routes>
            <Footer />
          </Router>
        </WishItemsProvider>
      </CartItemsProvider>
      </UserIdProvider>
    </AuthProvider>
  );
}

export default App;
