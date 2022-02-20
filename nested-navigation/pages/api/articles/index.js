import faker from "@faker-js/faker";
import { getArticles } from "./data";

const handler = (request, response) => {
  setTimeout(() => {
    return response.json({ articles: getArticles() });
  }, 500);
};

export default handler;
