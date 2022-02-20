import React from "react";
import { blueColor } from "../../colors";
import { SubTabs } from "./SubTabs";

function CompanyProfileHeader({ company }) {
  return (
    <div
      style={{
        backgroundColor: blueColor,
      }}
    >
      <div className="container text-white">
        <div style={{ height: 100 }}>
          <h1 className="pt-3">{company?.title || ""}</h1>
        </div>
        <SubTabs />
      </div>
    </div>
  );
}

export { CompanyProfileHeader };
