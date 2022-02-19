import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useState } from 'react';
import DashBoard from '.';
import { RelatedArticles } from '../../components/articles/RelatedArticles';
import { Loader } from '../../components/common/Loader';
import Layout from '../../components/Layout';

export default function Articles({ children }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    setLoading(true);
    setArticles([]);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())

      .then((data) => {
        setArticles(data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const showHeadline = (article, index) => {
    console.log('Changing page..');
    console.log({ article, index });
  };

  const handleBack = () => {
    router.back();
  };

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
      <hr />
      <button className="btn btn-success" onClick={handleBack}>
        Go Back
      </button>
      <hr />

      <div className="row col-11 mx-auto">
        <div className="col-8">
          {children || renderArticlesList()}
          {loading && <Loader />}
        </div>
        {children && (
          <div className="col border rounded">
            <br />
            <h2>Related Articles</h2>
            <hr />
            <RelatedArticles />
          </div>
        )}
      </div>
    </div>
  );
}

Articles.getLayout = (page) => {
  return (
    <Layout>
      <DashBoard>{page}</DashBoard>
    </Layout>
  );
};
