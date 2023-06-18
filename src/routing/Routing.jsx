import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// navbar
import Header from "../components/Header";

// pages
import Home from "../pages/Home";
import Account from "../pages/Account";
import Buy from "../pages/Buy";
import Referals from "../pages/Referals";
import Staking from "../pages/Staking";
import Wallet from "../pages/Wallet";

export default function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/referals" element={<Referals />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
