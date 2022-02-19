import React from "react";
import DashBoard from ".";
import Layout from "../../components/Layout";

export default function Charts() {
  return (
    <div>
      <h1>Users Page</h1>
    </div>
  );
}

Charts.getLayout = (page) => {
  return (
    <Layout>
      <DashBoard>{page}</DashBoard>
    </Layout>
  );
};
