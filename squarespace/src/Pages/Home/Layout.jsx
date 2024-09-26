import React from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-red-100 h-screen w-screen ">
        <div className="w-screen bg-white flex h-3/4 ">
        {children}
        </div>
          <Footer />
      </div>
    </>
  )
}

export default React.memo(Layout);
