import { apiURL } from "../apiURL";

export const getCharNames = (): Promise<string[]> =>
  fetch(`${apiURL}/characters?query=names&matchCategories=true`)
    .then((res) => res.json())
    .then((charNames) => charNames)
    .catch((err) => console.log(err));
