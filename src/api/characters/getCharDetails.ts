import axios from "axios";
import { apiURL } from "../apiURL";
import type { CharDetailsInterface } from "./../../ts/interfaces/CharDetailsInterface";

type GetCharDetailsResponse = {
  data: CharDetailsInterface;
};

export const getCharDetails = (name: string) =>
  axios
    .get<GetCharDetailsResponse>(`${apiURL}characters`, {
      params: {
        query: name,
      },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
