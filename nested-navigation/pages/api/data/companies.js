import faker from "@faker-js/faker";
import { shuffle } from "lodash";
const {
  datatype: { number },
} = faker;

const companies = [
  { title: "Wal-Mart Stores", code: "blanditiis", type: "company" },
  { title: "Exxon Mobil", code: "distinctio", type: "keyword" },
  { title: "Chevron", code: "asperiores", type: "keyword" },
  { title: "Berkshire Hathaway", code: "volupta0tem", type: "keyword" },
  { title: "Apple", code: "voluptates", type: "keyword" },
  { title: "Phillips 66", code: "blanditiisi", type: "company" },
  { title: "General Motors", code: "voluptatem", type: "industry" },
  { title: "Ford Motor", code: "voluptatsem", type: "industry" },
];
const getCompanies = () => {
  return [...companies];
};
const getCompanyByCode = (_code) => {
  return companies.find(({ code }) => code == _code);
};

export { getCompanies, getCompanyByCode };
