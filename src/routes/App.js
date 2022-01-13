import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "../globalStyles/global.css";

// hooks
import { useInitialState } from "../hooks/useInitialState"

// Context

import { AppContext  } from "../context/AppContext";

// Pages
import { Login } from "../pages/Login";
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
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/react-store/" element={<Home />} />
            <Route exact path="/react-store/login" element={<Login />} />
            <Route
              exact
              path="/react-store/send-email"
              element={<SendEmail />}
            />
            <Route
              exact
              path="/react-store/new-password"
              element={<NewPassword />}
            />
            <Route exact path="/react-store/account" element={<MyAccount />} />
            <Route
              exact
              path="/react-store/signup"
              element={<CreateAccount />}
            />
            <Route exact path="/react-store/checkout" element={<Checkout />} />
            <Route exact path="/react-store/orders" element={<Orders />} />
            <Route
              exact
              path="/react-store/recovery-password"
              element={<RecoveryPassword />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export { App };
