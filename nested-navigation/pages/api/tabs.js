import { getCompanies } from "./data/companies";

export default function handler(request, response) {
  const tabs = getCompanies();
  response.json({ tabs });
}
