import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { Loader } from "../common/Loader";
import { shuffle } from "lodash";

function RelatedArticles({ children }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setArticles([]);
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => shuffle(data))
      .then((data) => data.slice(0, 10))
      .then((data) => {
        setArticles(data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [router.query.id]);

  const renderArticlesList = () => {
    return (
      <ul className="list-group">
        {articles.map((article, index) => (
          <li className="list-group-item">
            <Link href={`/dashboard/article/${article.id}`}>
              {`${index + 1} : ${article.title}`}
            </Link>
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div>
      {renderArticlesList()}
      {loading && <Loader />}
    </div>
  );
}

export { RelatedArticles };
