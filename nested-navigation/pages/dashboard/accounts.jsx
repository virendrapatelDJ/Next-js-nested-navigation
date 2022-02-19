import React from "react";
import DashBoard from ".";
import Layout from "../../components/Layout";

export default function Accounts() {
  return (
    <div>
      <h1>Accounts Page</h1>
    </div>
  );
}

Accounts.getLayout = (page) => {
  return (
    <Layout>
      <DashBoard>{page}</DashBoard>
    </Layout>
  );
};
