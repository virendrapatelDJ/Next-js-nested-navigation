import React from "react";
import DashBoard from ".";
import Layout from "../../components/Layout";

export default function Summary() {
  return (
    <div>
      <h1>Summary Page</h1>
    </div>
  );
}

Summary.getLayout = (page) => {
  return (
    <Layout>
      <DashBoard>{page}</DashBoard>
    </Layout>
  );
};
