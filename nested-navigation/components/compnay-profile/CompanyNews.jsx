import React from "react";
import { useArticles } from "../../hooks/useArticles";
import { Loader } from "../../components/common/Loader";
import Headlines from "../Headlines/Headlines";

function CompanyNews() {
  const { articles = [], error, loading } = useArticles();

  return (
    <div>
      <h1>Company News</h1>
      <hr />

      <Headlines articles={articles} />
      {loading && <Loader />}
    </div>
  );
}

export { CompanyNews };
