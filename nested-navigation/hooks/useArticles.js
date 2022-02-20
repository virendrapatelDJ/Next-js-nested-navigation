import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function useArticles() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    setLoading(true);
    setArticles([]);
    fetch("/api/articles")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong.");
      })
      .then(({ articles }) => articles.slice(0, 10))
      .then((articles) => {
        setArticles(articles);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
        setArticles([]);
      });
  }, [code]);

  return { articles, error, loading };
}

export { useArticles };
