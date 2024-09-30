import React from "react";
import { Route, Routes } from "react-router-dom";
import SitePage from "../Pages/Home/SitePage";


function PageRouter() {

  return (
    <div>
       <Routes>
        <Route path="/" element={<SitePage />}></Route>
        <Route path="/homepage" element={<SitePage />}></Route>
      </Routes>
     
    </div>
  );
}

export default PageRouter;
