import React, { useEffect, useState } from "react";
import Link from "next/link";
import { blueColor, whiteTextColor } from "../../colors";
import { useRouter } from "next/router";
import { subTabs } from "../../config/constants";
const { COMPANY_NEWS, NEWS_BY_COUNTRY, REPORTS } = subTabs;
const _tabs = [
  {
    label: "Company news",
    url: `/company/${COMPANY_NEWS}`,
    slug: COMPANY_NEWS,
  },
  {
    label: `News By Country`,
    url: `/company/${NEWS_BY_COUNTRY}`,
    slug: NEWS_BY_COUNTRY,
  },
  { label: `Reports`, url: `/company/${REPORTS}`, slug: REPORTS },
];
function SubTabs() {
  const activeStyle = {
    color: blueColor,
    backgroundColor: `white`,
  };
  const style = {
    color: whiteTextColor,
  };

  const [tabs, setTabs] = useState(_tabs);

  const router = useRouter();
  const { activeTab } = router.query;

  useEffect(() => {
    if (activeTab) {
      const _tabs = tabs.map((tab) => {
        return {
          ...tab,
          isActive: tab.slug === activeTab,
        };
      });
      setTabs(_tabs);
    }
  }, [activeTab]);

  const changeTab = (url) => {
    const query = { ...router.query };
    delete query.activeTab;
    router.push({
      pathname: url,
      query,
    });
  };

  return (
    <ul class="nav nav-tabs text-white">
      {tabs.map((tab, index) => (
        <li class="nav-item text-white" onClick={() => changeTab(tab.url)}>
          <a
            class={"nav-link"}
            aria-current="page"
            style={tab.isActive ? activeStyle : style}
          >
            {tab.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export { SubTabs };
