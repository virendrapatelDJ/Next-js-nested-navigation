import { useRouter } from "next/router";
import React, { Children, useEffect, useState } from "react";
import { blueColor } from "../../colors";
import { CompanyProfileHeader } from "./CompanyProfileHeader";
import { SubTabs } from "./SubTabs";

function CompanyProfile({ children }) {
  const router = useRouter();
  const code = router.query.code;

  const [company, setCompany] = useState(null);

  useEffect(() => {
    fetch(`/api/company/${code}`)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Not-Found");
      })
      .then((company) => setCompany(company))
      .catch((error) => {
        console.log(error);
        setCompany(null);
      });
  }, [code]);
  return (
    <div>
      <CompanyProfileHeader company={company} />
      <div className="container">{children}</div>
    </div>
  );
}

export { CompanyProfile };
