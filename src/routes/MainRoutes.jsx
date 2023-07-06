import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import ContactsPage from "../pages/ContactsPage";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayouts />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
