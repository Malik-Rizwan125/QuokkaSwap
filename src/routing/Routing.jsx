import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// navbar
import Header from "../components/Header";

// pages
import Home from "../pages/Home";
import Account from "../pages/Account";

export default function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
