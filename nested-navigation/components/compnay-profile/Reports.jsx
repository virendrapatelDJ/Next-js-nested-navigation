import React from "react";
import { useArticles } from "../../hooks/useArticles";
import { Loader } from "../common/Loader";
import Headlines from "../Headlines/Headlines";

function Reports() {
  const { articles = [], error, loading } = useArticles();

  return (
    <div>
      <h1> Reports</h1>
      <hr />

      <Headlines articles={articles} />
      {loading && <Loader />}
    </div>
  );
}

export { Reports };
