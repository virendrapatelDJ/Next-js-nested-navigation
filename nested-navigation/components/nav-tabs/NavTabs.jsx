import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {
  activeTabColor,
  blueColor,
  darkHeaderColor,
  tabColor,
} from '../../colors';
import { subTabs } from '../../config/constants';

function NavTabs() {
  const [tabs, setTabs] = useState([]);
  const router = useRouter();
  const { activeTab = subTabs.COMPANY_NEWS, code } = router.query;
  useEffect(() => {
    fetch('/api/tabs')
      .then((response) => response.json())
      .then(({ tabs }) => {
        setTabs(tabs);
        console.log(tabs);
      });
  }, []);

  const isActive = (tab) => {
    console.log(tab.code, code);
    return tab.code === code;
  };

  const handleTabChange = (tab) => {
    return () => {
      router.push({
        pathname: `/company/${activeTab}`,
        query: {
          code: tab.code,
        },
      });
    };
  };
  return (
    <div style={{ backgroundColor: darkHeaderColor }}>
      <ul
        class="nav nav-tabs container"
        style={{
          backgroundColor: '#2f3331',
        }}
      >
        {tabs.map((tab, index) => (
          <li
            class="nav-item"
            onClick={handleTabChange(tab)}
            style={{
              borderColor: 'transparent',
            }}
          >
            <a
              class={'nav-link'}
              aria-current="page"
              href="#"
              style={{
                color: 'white',
                backgroundColor: isActive(tab) ? blueColor : tabColor,
                textDecoration: 'none',
              }}
            >
              <span>{tab.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { NavTabs };
