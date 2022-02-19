import React from "react";
import DashBoard from ".";
import Layout from "../../components/Layout";

export default function Users() {
  return (
    <div>
      <h1>Users Page</h1>
    </div>
  );
}

Users.getLayout = (page) => {
  return (
    <Layout>
      <DashBoard>{page}</DashBoard>
    </Layout>
  );
};
