import React from "react";
import DashBoard from ".";
import Layout from "../../components/Layout";

export default function History() {
  return (
    <div>
      <h1>HIstory Page</h1>
    </div>
  );
}

History.getLayout = (page) => {
  return (
    <Layout>
      <DashBoard>{page}</DashBoard>
    </Layout>
  );
};
