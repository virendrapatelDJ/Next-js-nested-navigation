const handler = (request, response) => {
  response.json({
    tabs: "/tabs",
    articles: "/articles",
    article_by_id: "/articles/[uuid]",
    related_article: "/articles/related/[uuid]",
  });
};

export default handler;
