import React, { useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import SitePage from "../Pages/Home/SitePage";
import Layout from "../Pages/Home/Layout";

function PageRouter() {
  const routes = useMemo(
    () => (
      <Routes>
        <Route path="/" element={<SitePage />}></Route>
      </Routes>
    ),
    []
  );
  return (
    <div>
      <Layout>{routes}</Layout>
    </div>
  );
}

export default PageRouter;
