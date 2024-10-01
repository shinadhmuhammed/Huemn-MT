import React from "react";
import { useSelector } from "react-redux";
import LeftHomePage from "../Home/LeftHomePage";
import FontPairingChooser from "./FontPairingChooser";
import Layout from "../../Layout/Layout";
import RightSideLayout from "../../Layout/RightLayout";

const Font = () => {
  const { sections = {} } = useSelector((state) => state.web || {});

  return (
    <>
      <Layout>
        <LeftHomePage sections={sections} />
        <div className="w-1/3 p-4">
          <FontPairingChooser />
        </div>
      </Layout>
      <RightSideLayout />
    </>
  );
};

export default Font;
