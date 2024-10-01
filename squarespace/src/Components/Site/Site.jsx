import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Layout from "../../Layout/Layout";
import RightSideLayout from "../../Layout/RightLayout";

const Site = () => {
  return (
    <>
      <Layout>
        <LeftSection />
      
      <RightSection />
      
      </Layout>
      <RightSideLayout/>
    </>
  );
};

export default Site;
