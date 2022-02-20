import React from "react";
import { CompanyProfile } from "../../components/compnay-profile/CompanyProfile";
import Layout from "../../components/Layout";

export default function Company({ children }) {
  return <CompanyProfile>{children}</CompanyProfile>;
}

Company.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
