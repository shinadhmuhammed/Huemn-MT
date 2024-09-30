import React from "react";
import { Route, Routes } from "react-router-dom";
import SitePage from "../Pages/Home/SitePage";
import HomePage from "../Pages/Home/HomePage";
import ColorPage from "../Pages/Home/ColorPage";
import FontPage from "../Pages/Home/FontPage";
import LoaderPage from "../Pages/Loader/LoaderPage";



function PageRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SitePage />}></Route>
        <Route path="/homepage" element={<HomePage />}></Route>
        <Route path="/colors" element={<ColorPage />}></Route>
        <Route path="/fonts" element={<FontPage />}></Route>
        <Route path="/menu" element={<LoaderPage />}></Route>
      </Routes>
    </div>
  );
}

export default PageRouter;
