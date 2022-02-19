import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import DashBoard from '..';
import { Loader } from '../../../components/common/Loader';
import { DataContainer } from '../../../components/containers/DataContainer';
import Layout from '../../../components/Layout';
import Articles from '../articles';

function ArticleRendered({ data: headline }) {
  return (
    <div>
      <p className="display-4">{headline?.title}</p>
      <p>{headline?.body}</p>
      <p>{headline?.body}</p>
      <p>{headline?.body}</p>
      <p>{headline?.body}</p>
    </div>
  );
}

export default function Article() {
  const router = useRouter();
  const { id } = router.query;
  const [headline, setHeadline] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const resetState = () => {
    setHeadline(null);
    setLoading(true);
    setError(null);
  };

  useEffect(() => {
    if (id) {
      resetState();
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
          if (response.ok) return response.json();
          throw new Error('Internal Server Error 500');
        })
        .then((headline) => {
          setHeadline(headline);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          setError(error);
        });
    }
  }, [id]);
  return (
    <div>
      <hr />
      <DataContainer
        dataRenderer={{
          isComponent: true,
          Renderer: ArticleRendered,
        }}
        dataSource={{ loading, error, data: headline }}
      />
    </div>
  );
}

Article.getLayout = (page) => {
  return (
    <Layout>
      <DashBoard>
        <Articles>{page}</Articles>
      </DashBoard>
    </Layout>
  );
};
