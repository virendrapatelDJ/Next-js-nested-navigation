import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
export default function Headline({ article }) {
  const router = useRouter();
  const { activeTab, articleId, ...query } = router.query;
  const articleUrl = `/company/${activeTab}/article/${
    article?.id
  }?${new URLSearchParams({
    ...query,
  })}`;
  console.log(router.pathname);
  console.log(router.query);
  console.log({ article });
  return (
    <div>
      <h4>
        <Link href={articleUrl}>{article?.headline}</Link>
      </h4>
      <p>{article?.summary}</p>
    </div>
  );
}
