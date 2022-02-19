import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DashBoard from "..";
import { Loader } from "../../../components/common/Loader";
import Layout from "../../../components/Layout";
import Articles from "../articles";

export default function Article() {
  const router = useRouter();
  const query = router.query;
  const [headline, setHeadline] = useState(null);
  console.log(router.query.id);

  useEffect(() => {
    const { id } = query;
    setHeadline(null);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((headline) => setHeadline(headline));
  }, [query]);
  return (
    <div>
      <hr />

      {headline ? (
        <div>
          <p className="display-4">{headline.title}</p>
          <p>{headline.body}</p>
          <p>{headline.body}</p>
          <p>{headline.body}</p>
          <p>{headline.body}</p>
        </div>
      ) : (
        <Loader />
      )}
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
