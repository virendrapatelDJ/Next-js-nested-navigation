import React from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import Layout from "../../components/Layout";

export default function Dashboard({ children }) {
  console.log("Dashboard", { children });
  return (
    <div className="row">
      <div className="col-2">
        <Sidebar />
      </div>
      <div className="col">{children}</div>
    </div>
  );
}
Dashboard.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
