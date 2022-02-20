import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { Loader } from "../common/Loader";
import { shuffle } from "lodash";
import Headlines from "../Headlines/Headlines";

function RelatedArticles({ children }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { articleId } = router.query;
  console.log({ articleId });

  useEffect(() => {
    setArticles([]);
    setLoading(true);
    fetch(`/api/articles/related/${articleId}`)
      .then((response) => response.json())
      .then(({ relatedArticles }) => {
        setArticles(
          relatedArticles.map((article) => ({
            headline: article.headline,
            id: article.id,
          }))
        );
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [articleId]);

  const renderArticlesList = () => {
    return <Headlines articles={articles} />;
  };
  return (
    <div>
      {renderArticlesList()}
      {loading && <Loader />}
    </div>
  );
}

export { RelatedArticles };
