import { httpAxios } from "../helper/httpHelper";

export async function getNews() {
  const result = await httpAxios
    .get("/api/get-news")
    .then((response) => response.data);
  return result;
}
