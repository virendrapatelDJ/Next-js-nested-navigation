import React, { Fragment } from "react";
import Header from "../Header";
import { NavTabs } from "../nav-tabs/NavTabs";

export default function Layout({ children }) {
  console.log({ children });
  return (
    <Fragment>
      <div className="">
        <Header />
        <NavTabs></NavTabs>

        <div className="">{children}</div>
      </div>
    </Fragment>
  );
}
