import { useRouter } from "next/router";
import React from "react";
import Company from "..";
import { subTabs } from "../../../config/constants";

import { CompanyNews } from "../../../components/compnay-profile/CompanyNews";
import { NewsByCompany } from "../../../components/compnay-profile/NewsByCountry";
import { Reports } from "../../../components/compnay-profile/Reports";
import Layout from "../../../components/Layout";

export default function ActiveTab() {
  const router = useRouter();

  const getTabComponent = () => {
    const components = {
      [subTabs.NEWS_BY_COUNTRY]: NewsByCompany,
      [subTabs.COMPANY_NEWS]: CompanyNews,
      [subTabs.REPORTS]: Reports,
    };

    const TabComponent = components[router.query.activeTab] || CompanyNews;

    return <TabComponent />;
  };

  return getTabComponent();
}

ActiveTab.getLayout = (page) => {
  return (
    <Layout>
      <Company>
        <div>
          <br />
          {page}
        </div>
      </Company>
    </Layout>
  );
};
