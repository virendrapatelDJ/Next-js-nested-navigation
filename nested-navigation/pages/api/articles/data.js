import faker from "@faker-js/faker";
import { shuffle } from "lodash";

const { datatype, lorem, random } = faker;

const articles = new Array(100).fill().map((article) => ({
  headline: lorem.words(6),
  id: datatype.uuid(),
  summary: lorem.paragraphs(1),
  content: new Array(datatype.number({ min: 6, max: 20 }))
    .fill()
    .map((i) => lorem.paragraphs(2)),
}));

const getArticles = () => {
  return [...articles];
};
const getArticleById = (uuid) => {
  return getArticles().find((article) => article.id === uuid);
};
const getRelatedArticles = (articleId) => {
  const articles = shuffle(getArticles());
  const relatedArticle = articles.filter((article) => article.id !== articleId);

  return relatedArticle.slice(0, 10);
};

export { getArticles, getArticleById, getRelatedArticles };
