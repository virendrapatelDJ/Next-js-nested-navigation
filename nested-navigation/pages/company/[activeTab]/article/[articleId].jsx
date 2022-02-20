import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { blueColor, whiteTextColor } from '../../../../colors';
import { ArticleViewer } from '../../../../components/articles/ArticleViewer';
import { RelatedArticles } from '../../../../components/articles/RelatedArticles';
import { Loader } from '../../../../components/common/Loader';
import Layout from '../../../../components/Layout';

export default function ArticleContainer() {
  const router = useRouter();
  const { articleId } = router.query;
  const [article, setArticle] = useState(null);
  const [loadingArticle, setLoadingArticle] = useState(true);

  useEffect(() => {
    setLoadingArticle(true);
    if (articleId)
      fetch(`/api/articles/${articleId}`)
        .then((response) => response.json())
        .then(({ article }) => {
          setArticle(article);
          setLoadingArticle(false);
        })
        .finally(() => {
          setLoadingArticle(false);
        });
  }, [articleId]);

  const handleBack = () => {
    router.back();
  };
  return (
    <div className="container">
      <div>
        <br />
        <button className="btn btn-dark border" onClick={handleBack}>
          Back
        </button>
        <hr />
        <div className="row">
          <div className="col-9">
            {loadingArticle ? <Loader /> : <ArticleViewer article={article} />}
          </div>
          <div className="col border ">
            <div>
              <br />
              <h3>Related Articles</h3>
              <hr />
              <RelatedArticles />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ArticleContainer.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
