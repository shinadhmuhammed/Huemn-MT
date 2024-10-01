import React from "react";
import { Route, Routes } from "react-router-dom";
import LoaderPage from "../Pages/Loader/LoaderPage";



const MenuRouter=()=> {
  return (
    <div>
      <Routes>
      <Route path="/" element={<LoaderPage/>} />
      </Routes>
    </div>
  )
}

export default MenuRouter


