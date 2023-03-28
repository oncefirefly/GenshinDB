import axios from "axios";
import { apiURL } from "../apiURL";

export const getCharNames = async (): Promise<string[]> => {
  try {
    const res = await axios.get<string[]>(
      `${apiURL}/characters?query=names&matchCategories=true`
    );

    return res.data;
  } catch (error) {
    console.log(error);

    return [];
  }
};
