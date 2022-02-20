import { getRelatedArticles } from "../data";

const handler = (request, response) => {
  const id = request.query.articleId;
  const relatedArticles = getRelatedArticles(id);
  setTimeout(()=>{
    return response.json({
      relatedArticles,
    });
  }, 500)
};
export default handler;
