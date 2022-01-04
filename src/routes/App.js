import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "../globalStyles/global.css";

// Containers

// Components

// Pages
import { Login } from "../containers/Login";
import { Layout } from "../containers/Layout";
import { RecoveryPassword } from "../containers/RecoveryPassword";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { SendEmail } from "../pages/SendEmail";
import { NewPassword } from "../pages/NewPassword";
import { MyAccount } from "../pages/MyAccount";
import { CreateAccount } from "../pages/CreateAccount";
import { Checkout } from "../pages/Checkout";
import { Orders } from "../pages/Orders";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/send-email" element={<SendEmail />} />
          <Route exact path="/new-password" element={<NewPassword />} />
          <Route exact path="/account" element={<MyAccount />} />
          <Route exact path="/signup" element={<CreateAccount />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route
            exact path="/recovery-password"
            element={<RecoveryPassword />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export { App };
