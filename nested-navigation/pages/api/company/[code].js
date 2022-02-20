import { getCompanyByCode } from "../data/companies";

const handler = (request, response) => {
  return response.status(200).json(getCompanyByCode(request.query.code));
};

export default handler;
