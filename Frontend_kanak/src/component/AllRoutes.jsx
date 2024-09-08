import React from "react";
import Home from "./Home";
import DnDFlow from "./DnDFlow";
import { Routes, Route } from "react-router-dom";
import Upload from "./Upload";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>

      <Route path="/upload" element={<Upload />}></Route>
    </Routes>
  );
};

export default AllRoutes;
