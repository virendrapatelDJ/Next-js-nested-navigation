import { articles, getArticleById } from "./data";

const handler = (request, response) => {
  const id = request.query.uuid;
  const article = getArticleById(id);
  if (article) {
    return setTimeout(()=>{
       response.json({ article });
    } , 500)
  }
    return response.status(404).json({
      message: "article not found",
      articleId: id,
      status: 404,
    });
  
};
export default handler;
